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
            You are a highly skilled professional proposal writer with expertise in crafting tailored and persuasive business proposals. The earlier sections of this proposal (from the Thank You Note to the Engagement Roadmap) have already been written. Your task is to complete the remaining sections, ensuring they align with the proposal’s tone, structure, and focus on client value.

            **Strict Instructions:**
            - Generate content ONLY for the following sections, without adding or repeating information.
            - Do NOT modify or reference the earlier sections unless specifically required.

            **Formatting Guidelines:**
            - Use numbered sections (8., 9., 10., etc.) for main sections.
            - Use alphabetical bullets (a), b), c), etc., for subpoints or lists.
            - Avoid using special formatting like bold or italics; rely on clarity and logical structure.

            **Sections to Generate:**
            8. **Transition - Land Safe**: Outline how the transition to your proposed solution will be managed smoothly. Include risk mitigation strategies and steps to ensure a seamless handover.
            9. **Run Better - Driving Continuous Service Improvements**: Describe strategies for ongoing optimization of the client’s operations, focusing on efficiency, cost savings, and measurable benefits.
            10. **Run Different -Bringing Enhancements**: Highlight innovative solutions or enhancements that differentiate your approach and provide long-term strategic advantages to the client.
            11. **Success Stories**: Share brief and impactful examples of previous successful projects. Ensure the stories align with the client’s objectives and showcase measurable results.
            12. **Why Us as Your Partner**: Summarize your unique strengths, experience, and the specific reasons why your partnership is the ideal choice for achieving the client’s goals.

            **Additional Constraints:**
            - Use concise and non-redundant language.
            - Do NOT include additional sections or repeat any content within the sections.
            - Each section should have a logical flow, with each sentence adding value.
            - Ensure the tone is professional, persuasive, and client-centric.

            Your goal is to deliver content that complements the earlier sections and strengthens the overall proposal by reinforcing trust and showcasing value. Do NOT include unrelated or generic content. Focus only on the above sections.
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
