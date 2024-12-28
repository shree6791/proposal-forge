import { FormData } from '@/lib/client-storage';

export function useProposalDownload() {
  const downloadAsWord = async (
    formData: FormData | null,
    part1Content: string,
    part2Content: string
  ) => {
    if (!formData) return;

    try {
      const response = await fetch("/api/generateWord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.companyName,
          clientName: formData.clientName,
          part1Content,
          part2Content,
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        const fileName = `${formData.companyName.replace(/[^a-zA-Z0-9]/g, '_')}_Proposal_for_${formData.clientName.replace(/[^a-zA-Z0-9]/g, '_')}.docx`;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      } else {
        console.error("Error generating Word document");
        alert("Failed to generate Word document. Please try again.");
      }
    } catch (error) {
      console.error("Download Error:", error);
      alert("Failed to download document. Please try again.");
    }
  };

  return { downloadAsWord };
}