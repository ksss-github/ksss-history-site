const pdfyearbook = {
  name: "pdfyearBook",
  title: "PDF Year Book",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      description:
        "Title of the post just for Sanity not for site. Naming convention: PDF year",
    },
    {
      name: "pdfyear",
      title: "PDF Year",
      type: "number",
      description: "The year of the pdf-book.",
    },
    {
      name: "pdf",
      title: "PDF",
      type: "file",
      description: "Upload the PDF file of the book.",
      options: {
        accept: ".pdf", // Specify accepted file types
      },
    },
  ],
};

export default pdfyearbook;
