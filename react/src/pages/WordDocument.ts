// import {
//     AlignmentType,
//     BorderStyle,
//     Document,
//     HeadingLevel,
//     ImageRun,
//     Paragraph,
//     SectionType,
//     Table,
//     TableCell,
//     TableRow,
//     TextRun,
// } from "docx";

export const generateDocx = () => {
    // const doc = new Document({
    //     sections: [
    //         {
    //             properties: {},
    //             children: [
    //                 new Paragraph({
    //                     children: [
    //                         new ImageRun({
    //                             type: "gif",
    //                             data: fs.readFileSync(
    //                                 "./demo/images/pizza.gif"
    //                             ),
    //                             transformation: {
    //                                 width: 200,
    //                                 height: 200,
    //                             },
    //                             floating: {
    //                                 horizontalPosition: {
    //                                     offset: 1014400,
    //                                 },
    //                                 verticalPosition: {
    //                                     offset: 1014400,
    //                                 },
    //                             },
    //                         }),
    //                         new TextRun({
    //                             text: "GM Chemicals",
    //                             bold: true,
    //                             size: 32,
    //                             color: "87CEEB",
    //                         }),
    //                     ],
    //                 }),
    //                 new Paragraph({
    //                     children: [
    //                         new TextRun({
    //                             text: "WALL CHART",
    //                             bold: true,
    //                             size: 28,
    //                         }),
    //                     ],
    //                     alignment: "center",
    //                 }),
    //                 new Paragraph({
    //                     children: [
    //                         new TextRun({
    //                             text: "Carefully read product label before use. Refer to Safety Data Sheet (SDS) for information on first aid, storage and handling and other safety precautions.",
    //                             size: 20,
    //                         }),
    //                     ],
    //                     spacing: {
    //                         before: 400,
    //                         after: 400,
    //                     },
    //                 }),
    //                 new Paragraph({
    //                     children: [
    //                         new TextRun({
    //                             text: "Hazard ratings: ",
    //                             bold: true,
    //                             size: 20,
    //                         }),
    //                         new TextRun({
    //                             text: "Low = Non-hazardous | Moderate = Signal word = WARNING | High = Signal word = DANGER",
    //                             size: 20,
    //                         }),
    //                     ],
    //                     spacing: {
    //                         before: 200,
    //                         after: 200,
    //                     },
    //                 }),
    //                 new Table({
    //                     rows: [
    //                         new TableRow({
    //                             children: [
    //                                 new TableCell({
    //                                     children: [
    //                                         new Paragraph({
    //                                             text: "PRODUCT NAME, APPLICATION AND AREA OF USE",
    //                                             alignment: "center",
    //                                         }),
    //                                     ],
    //                                     shading: {
    //                                         fill: "003366",
    //                                         color: "FFFFFF",
    //                                     },
    //                                 }),
    //                                 new TableCell({
    //                                     children: [
    //                                         new Paragraph({
    //                                             text: "HAZARD",
    //                                             alignment: "center",
    //                                         }),
    //                                     ],
    //                                     shading: {
    //                                         fill: "003366",
    //                                         color: "FFFFFF",
    //                                     },
    //                                 }),
    //                                 new TableCell({
    //                                     children: [
    //                                         new Paragraph({
    //                                             text: "PPE REQUIRED",
    //                                             alignment: "center",
    //                                         }),
    //                                     ],
    //                                     shading: {
    //                                         fill: "003366",
    //                                         color: "FFFFFF",
    //                                     },
    //                                 }),
    //                             ],
    //                         }),
    //                         // ...selectedProducts.map(product => new TableRow({
    //                         //   children: [
    //                         //     new TableCell({
    //                         //       children: [
    //                         //         new Paragraph({
    //                         //           children: [
    //                         //             new TextRun({
    //                         //               text: product.name,
    //                         //               bold: true,
    //                         //             }),
    //                         //           ],
    //                         //         }),
    //                         //         new Paragraph({
    //                         //           children: [
    //                         //             new TextRun({
    //                         //               text: product.category,
    //                         //               italics: true,
    //                         //             }),
    //                         //           ],
    //                         //         }),
    //                         //         ...product.applications.map(app => new Paragraph({ text: app })),
    //                         //       ],
    //                         //     }),
    //                         //     new TableCell({
    //                         //       children: [new Paragraph({ text: product.hazardLevel, alignment: 'center' })],
    //                         //     }),
    //                         //     new TableCell({
    //                         //       children: product.ppe.map(ppe => new Paragraph({ text: ppe })),
    //                         //     }),
    //                         //   ],
    //                         // })),
    //                     ],
    //                     width: {
    //                         size: 100,
    //                         type: "pct",
    //                     },
    //                     borders: {
    //                         top: { style: BorderStyle.SINGLE, size: 1 },
    //                         bottom: { style: BorderStyle.SINGLE, size: 1 },
    //                         left: { style: BorderStyle.SINGLE, size: 1 },
    //                         right: { style: BorderStyle.SINGLE, size: 1 },
    //                         insideHorizontal: {
    //                             style: BorderStyle.SINGLE,
    //                             size: 1,
    //                         },
    //                         insideVertical: {
    //                             style: BorderStyle.SINGLE,
    //                             size: 1,
    //                         },
    //                     },
    //                 }),
    //             ],
    //         },
    //     ],
    // });
    // return doc;
};
