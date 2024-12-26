import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  convertMillimetersToTwip,
  TableOfContents,
  Header,
  Footer,
  PageNumber,
  BorderStyle,
  Tab,
  TabStopType,
  TabStopPosition,
  ExternalHyperlink,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
  Packer,
} from "docx";
import { NextResponse } from "next/server";

const STYLES = {
  heading1: {
    size: 32,
    bold: true,
    color: "2563EB", // blue-600
  },
  heading2: {
    size: 28,
    bold: true,
    color: "1E40AF", // blue-800
  },
  normal: {
    size: 24,
    color: "374151", // gray-700
  },
  emphasis: {
    size: 24,
    color: "1E40AF", // blue-800
    italics: true,
  },
};

function createHeader(companyName: string) {
  return new Header({
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          new TextRun({
            text: companyName,
            size: 20,
            color: "6B7280", // gray-500
          }),
        ],
      }),
    ],
  });
}

function createFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: "Page ",
            size: 20,
            color: "6B7280", // gray-500
          }),
          new TextRun({
            children: ["PAGE"],
            size: 20,
            color: "6B7280", // gray-500
          }),
          new TextRun({
            text: " of ",
            size: 20,
            color: "6B7280", // gray-500
          }),
          new TextRun({
            children: ["NUMPAGES"],
            size: 20,
            color: "6B7280", // gray-500
          }),
        ],
      }),
    ],
  });
}

function processContent(content: string) {
  const sections = content.split(/(?=\d+\.\s+)/);
  const processedSections: Paragraph[] = [];

  sections.forEach((section) => {
    if (!section.trim()) return;

    const [title, ...contentParts] = section.split('\n');
    const sectionContent = contentParts.join('\n');

    // Add section title
    processedSections.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 },
        children: [
          new TextRun({
            text: title.trim(),
            ...STYLES.heading1,
          }),
        ],
      })
    );

    // Process section content
    sectionContent.split('\n').forEach((line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return;

      // Handle bullet points
      if (trimmedLine.match(/^[a-z]\)/)) {
        processedSections.push(
          new Paragraph({
            indent: { left: convertMillimetersToTwip(12.5) },
            bullet: {
              level: 0,
            },
            children: [
              new TextRun({
                text: trimmedLine.replace(/^[a-z]\)/, '').trim(),
                ...STYLES.normal,
              }),
            ],
          })
        );
        return;
      }

      // Handle key points
      if (trimmedLine.startsWith('*')) {
        processedSections.push(
          new Paragraph({
            spacing: { before: 200, after: 200 },
            border: {
              top: { style: BorderStyle.SINGLE, size: 1, color: "E5E7EB" },
              bottom: { style: BorderStyle.SINGLE, size: 1, color: "E5E7EB" },
              left: { style: BorderStyle.SINGLE, size: 1, color: "E5E7EB" },
              right: { style: BorderStyle.SINGLE, size: 1, color: "E5E7EB" },
            },
            shading: {
              fill: "F3F4F6", // gray-100
            },
            children: [
              new TextRun({
                text: "→ " + trimmedLine.replace(/^\*/, '').trim(),
                ...STYLES.emphasis,
              }),
            ],
          })
        );
        return;
      }

      // Regular paragraphs
      processedSections.push(
        new Paragraph({
          spacing: { before: 120, after: 120 },
          children: [
            new TextRun({
              text: trimmedLine,
              ...STYLES.normal,
            }),
          ],
        })
      );
    });
  });

  return processedSections;
}

export async function POST(req: Request) {
  try {
    const { part1, part2 } = await req.json();
    
    if (!part1 || !part2) {
      return new NextResponse(
        JSON.stringify({ error: 'Both parts of the proposal are required' }),
        { status: 400 }
      );
    }

    // Create the Word document
    const doc = new Document({
      styles: {
        default: {
          document: {
            run: {
              font: "Calibri",
              size: 24,
              color: "374151", // gray-700
            },
          },
        },
      },
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: convertMillimetersToTwip(25.4),
                right: convertMillimetersToTwip(25.4),
                bottom: convertMillimetersToTwip(25.4),
                left: convertMillimetersToTwip(25.4),
              },
            },
          },
          children: [
            // Cover Page
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 240, after: 240 },
              children: [
                new TextRun({
                  text: `Business Proposal`,
                  bold: true,
                  size: 44,
                  color: "2563EB", // blue-600
                }),
              ],
            }),
            new Paragraph({
              children: [new PageBreak()],
            }),

            // Table of Contents
            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 240, after: 120 },
              children: [
                new TextRun({
                  text: "Table of Contents",
                  ...STYLES.heading1,
                }),
              ],
            }),
            new TableOfContents("Table of Contents", {
              hyperlink: true,
              headingStyleRange: "1-5",
            }),
            new Paragraph({
              children: [new PageBreak()],
            }),

            // Part 1 Content
            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 240, after: 120 },
              children: [
                new TextRun({
                  text: "Part 1: Core Proposal",
                  ...STYLES.heading1,
                }),
              ],
            }),
            ...processContent(part1),
            new Paragraph({
              children: [new PageBreak()],
            }),

            // Part 2 Content
            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 240, after: 120 },
              children: [
                new TextRun({
                  text: "Part 2: Detailed Implementation",
                  ...STYLES.heading1,
                }),
              ],
            }),
            ...processContent(part2),
          ],
        },
      ],
    });

    // Generate the document buffer
    const buffer = await Packer.toBuffer(doc);

    // Return the document as a downloadable file
    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="business-proposal.docx"`,
      },
    });
  } catch (error) {
    console.error('Error generating Word document:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to generate Word document' }),
      { status: 500 }
    );
  }
}