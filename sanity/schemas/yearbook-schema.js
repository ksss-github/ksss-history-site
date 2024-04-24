const yearbook = {
  name: "yearBook",
  title: "Year Book",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "number",
      description: "The year of the book.",
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

export default yearbook;
