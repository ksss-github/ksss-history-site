const yearbookpdfurl = {
  name: "yearbookpdfurl",
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
      title: "PDF url",
      type: "string",
      description: "Upload the url-path to the PDF file from google drive",
    },
  ],
};

export default yearbookpdfurl;
