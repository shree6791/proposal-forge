import { FormData } from '@/lib/client-storage';

export async function generateProposalParts(formData: FormData) {
  try {
    // Make both API calls simultaneously using Promise.all with identical payloads
    const [part1Response, part2Response] = await Promise.all([
      fetch("/api/generateProposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }),
      fetch("/api/generatePart2Proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Now sending complete formData
      })
    ]);

    if (!part1Response.ok || !part2Response.ok) {
      throw new Error("Failed to generate one or both parts of the proposal");
    }

    const [part1Data, part2Data] = await Promise.all([
      part1Response.json(),
      part2Response.json()
    ]);

    return {
      part1: part1Data.proposal,
      part2: part2Data.result
    };
  } catch (error) {
    console.error("Error generating proposal:", error);
    throw error;
  }
}