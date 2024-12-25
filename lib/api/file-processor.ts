import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function processFileContent(content: string): Promise<string[]> {
  try {
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Extract clear and actionable business objectives from the provided text. 
            - Each objective should be concise and standalone.
            - Focus on key goals or actions that are important to achieving business outcomes.
            - Exclude irrelevant details or unrelated information.
            - Avoid using numbers, bullet points, or special formatting characters.`
        },
        {
          role: "user",
          content: content
        }
      ],
      temperature: 0.3,
      max_tokens: 500
    });
    
    const objectives = response.choices[0].message.content
      ?.split('\n')
      .filter(line => line.trim().length > 0)
      // Remove any numbering, bullets, or special characters from the start
      .map(line => line.replace(/^[-•*\d.)\s]+/, '').trim());

    return objectives || [];
  } catch (error) {
    console.error('Error processing file with OpenAI:', error);
    throw new Error('Failed to process file content');
  }
}