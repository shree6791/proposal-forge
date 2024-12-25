import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define types for the request body
interface GeneratePart2Request {
  companyName: string; // Input for "Your Company Name"
  clientName: string;  // Input for "Client Name"
  model: "gpt-3.5-turbo" | "gpt-4o-mini";
}

// Define type for model configuration
interface ModelConfig {
  maxTokens: number;
  temperature: number;
}

// Model configurations
const MODEL_CONFIGS: Record<string, ModelConfig> = {
  "gpt-3.5-turbo": { maxTokens: 2000, temperature: 0.7 },
  "gpt-4o-mini": { maxTokens: 2000, temperature: 0.7 },
};

export async function POST(request: Request) {
  try {
    // Validate OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is missing. Please check your environment variables." },
        { status: 500 }
      );
    }

    // Parse and validate request body
    const body: GeneratePart2Request = await request.json();
    const { companyName, clientName, model } = body;

    // Validate required fields
    if (!companyName || !clientName || !model) {
      return NextResponse.json(
        { error: "Missing required fields: companyName, clientName, or model." },
        { status: 400 }
      );
    }

    // Validate model selection
    if (!MODEL_CONFIGS[model]) {
      return NextResponse.json(
        { error: "Invalid model selected. Please choose gpt-3.5-turbo or gpt-4o-mini." },
        { status: 400 }
      );
    }

    // Load template for Part 2
    const sampleProposalPath = path.join(process.cwd(), "public/templates/SampleProposalPart2.txt");
    let proposalTemplate = "";
    try {
      proposalTemplate = fs.readFileSync(sampleProposalPath, "utf-8");
    } catch (error) {
      console.error("Error reading template file for Part 2:", error);
      return NextResponse.json(
        { error: "Failed to read proposal template for Part 2." },
        { status: 500 }
      );
    }

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Create OpenAI completion with custom system message for Part 2
    const response = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content: `
            You are a highly skilled professional proposal writer with expertise in crafting tailored and persuasive business proposals. 
            The earlier sections of this proposal (from the Thank You Note to the Engagement Roadmap) have already been written.
            Your task is to complete the remaining sections, ensuring they align with the proposal’s tone, structure, and focus on client value.
    
            **Formatting Guidelines:**
            - Use numbered sections (6., 7., 8., etc.) for main sections.
            - Use alphabetical bullets (a), b), c), etc.) for subpoints or lists.
            - Avoid using special formatting like bold or italics; instead, rely on clarity and logical structure.
    
            **Sections to Generate:**
            6. **Transition – Land Safe**: Outline how the transition to your proposed solution will be managed smoothly. Include risk mitigation strategies and steps to ensure a seamless handover.
            7. **Run Better – Driving Continuous Service Improvements**: Describe strategies for ongoing optimization of the client’s operations, focusing on efficiency, cost savings, and measurable benefits.
            8. **Run Different – Bringing Enhancements**: Highlight innovative solutions or enhancements that differentiate your approach and provide long-term strategic advantages to the client.
            9. **Success Stories**: Share brief and impactful examples of previous successful projects. Ensure the stories align with the client’s objectives and showcase measurable results.
            10. **Why Us as Your Partner**: Summarize your unique strengths, experience, and the specific reasons why your partnership is the ideal choice for achieving the client’s goals.
    
            **Additional Instructions:**
            - Ensure the tone is professional, persuasive, and client-centric.
            - Use concise, impactful language that resonates with the client’s priorities and goals.
            - Tailor the content to integrate seamlessly with the existing proposal sections.
            - Avoid generic content; ensure each section provides clear, actionable value for the client.
    
            Your goal is to deliver content that not only complements the earlier sections but also strengthens the overall proposal by reinforcing trust and showcasing value.
          `,
        },
        {
          role: "user",
          content: `
            Use this template as the basis for your output:
            ${proposalTemplate}
          `,
        },
      ],
      temperature: MODEL_CONFIGS[model].temperature,
      max_tokens: MODEL_CONFIGS[model].maxTokens,
    });

    // Return the response to the client
    return NextResponse.json({ result: response.choices[0].message?.content });
  } catch (error) {
    console.error("Error in generatePart2Proposal API:", error);

    return NextResponse.json(
      { error: "Failed to generate Part 2 of the proposal." },
      { status: 500 }
    );
  }
}
