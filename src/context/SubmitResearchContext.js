'use client'
import { createContext, useContext, useState } from 'react';
import validator from 'email-validator';
import { FormFields, GOOGLE_FORM_RESPONSE_URL } from '@data/submitResearch';

const SubmitResearchContext = createContext();

const emptyAnswers = Object.fromEntries(Object.keys(FormFields).map((key) => [key, ""]));

export const validateField = (key, value) => {
  const field = FormFields[key];
  const trimmed = value.trim();
  if (field.required && !trimmed) return `${field.label} is required`;
  if (key === "email" && trimmed && !validator.validate(trimmed)) return "Enter a valid email address";
  if (key === "contact" && trimmed && !/^\+?[\d\s()-]{7,20}$/.test(trimmed)) return "Enter a valid contact number";
  return "";
};

export const SubmitResearchProvider = ({ children }) => {
  const [answers, setAnswers] = useState(emptyAnswers);

  const setAnswer = (key, value) => setAnswers((prev) => ({ ...prev, [key]: value }));

  const isStepComplete = (fields) => fields.every((key) => !validateField(key, answers[key]));

  const submit = async () => {
    const body = new URLSearchParams();
    Object.entries(FormFields).forEach(([key, field]) => body.append(field.entry, answers[key].trim()));
    // Google Forms sends no CORS headers, so the response is opaque; a network failure still throws.
    await fetch(GOOGLE_FORM_RESPONSE_URL, { method: "POST", mode: "no-cors", body });
  };

  const reset = () => setAnswers(emptyAnswers);

  return (
    <SubmitResearchContext.Provider value={{ answers, setAnswer, isStepComplete, submit, reset }}>
      {children}
    </SubmitResearchContext.Provider>
  );
};

export const useSubmitResearch = () => useContext(SubmitResearchContext);
