// Answers are posted to this Google Form, so responses still land in its sheet.
// Entry IDs come from the form's question fields (pre-filled link / FB_PUBLIC_LOAD_DATA_).
export const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf0AuS6BncBB-pXbdlLqCTxfisrDe6F_RSBByRqZshqbXeRIw/formResponse";

export const SUBMIT_RESEARCH_PATH = "/submit-research";

export const FormFields = {
  name: { label: "Name", entry: "entry.364778277", type: "text", required: true, placeholder: "Your full name", autoComplete: "name" },
  email: { label: "Email", entry: "entry.254313983", type: "email", required: true, placeholder: "you@example.com", autoComplete: "email" },
  contact: { label: "Contact Number", entry: "entry.1568953929", type: "tel", required: true, placeholder: "+91 98765 43210", autoComplete: "tel" },
  feedback: { label: "Any Question or feedback", entry: "entry.1968388482", type: "textarea", required: false, placeholder: "Tell us about your research, or ask us anything" },
};

export const FormSteps = [
  { path: "/submit-research", title: "About you", subtitle: "Let us know who is submitting.", fields: ["name"] },
  { path: "/submit-research/contact", title: "Contact details", subtitle: "How can our editorial team reach you?", fields: ["email", "contact"] },
  { path: "/submit-research/feedback", title: "Questions & feedback", subtitle: "Anything you would like us to know before we get in touch.", fields: ["feedback"] },
];
