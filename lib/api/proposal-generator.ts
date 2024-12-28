import { FormData } from '@/lib/client-storage';

export async function generateProposalParts(formData: FormData) {
  try {
    // Add timeout for requests
    const timeout = 30000; // 30 seconds
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const [part1Response, part2Response] = await Promise.all([
      fetch("/api/generateProposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal
      }),
      fetch("/api/generatePart2Proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal
      })
    ]);

    clearTimeout(timeoutId);

    if (!part1Response.ok || !part2Response.ok) {
      throw new Error(
        `Failed to generate proposal: ${
          !part1Response.ok ? 'Part 1 failed' : 'Part 2 failed'
        }`
      );
    }

    const [part1Data, part2Data] = await Promise.all([
      part1Response.json(),
      part2Response.json()
    ]);

    if (!part1Data.proposal || !part2Data.result) {
      throw new Error('Invalid response format from API');
    }

    return {
      part1: part1Data.proposal,
      part2: part2Data.result
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timed out. Please try again.');
      }
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
}