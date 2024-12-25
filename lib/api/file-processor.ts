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
          content: `Extract the key business objectives from the provided text. 
            Format them as a concise list of clear, actionable objectives.
            Each objective should be relevant to IT services and support.
            Ignore any irrelevant information.`
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
      .map(line => line.replace(/^[-•*]\d*\.\s*/, '').trim());

    return objectives || [];
  } catch (error) {
    console.error('Error processing file with OpenAI:', error);
    throw new Error('Failed to process file content');
  }
}