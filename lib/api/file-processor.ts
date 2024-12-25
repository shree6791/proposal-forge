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
            Format them as a simple list without numbers or special characters.
            Each objective should:
            - Start directly with the objective text
            - Be clear and actionable
            - Be relevant to IT services and support
            - Not include any numbering or bullet points
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
      // Remove any numbering, bullets, or special characters from the start
      .map(line => line.replace(/^[-•*\d.)\s]+/, '').trim());

    return objectives || [];
  } catch (error) {
    console.error('Error processing file with OpenAI:', error);
    throw new Error('Failed to process file content');
  }
}