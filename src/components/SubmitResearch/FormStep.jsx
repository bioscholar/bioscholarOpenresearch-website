'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormFields, FormSteps } from '@data/submitResearch';
import { useSubmitResearch, validateField } from '@context/SubmitResearchContext';

const FormStep = ({ stepIndex }) => {
  const router = useRouter();
  const { answers, setAnswer, isStepComplete, submit, reset } = useSubmitResearch();
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const step = FormSteps[stepIndex];
  const isLastStep = stepIndex === FormSteps.length - 1;

  // Answers live in memory, so opening a later step directly sends the visitor back to the first unfinished one
  const firstIncomplete = FormSteps.findIndex((s, i) => i < stepIndex && !isStepComplete(s.fields));
  useEffect(() => {
    if (firstIncomplete !== -1 && !submitting) router.replace(FormSteps[firstIncomplete].path);
  }, [firstIncomplete, submitting, router]);

  if (firstIncomplete !== -1 && !submitting) return null;

  const handleChange = (key, value) => {
    setAnswer(key, value);
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stepErrors = Object.fromEntries(step.fields.map((key) => [key, validateField(key, answers[key])]));
    setErrors(stepErrors);
    if (Object.values(stepErrors).some(Boolean)) return;

    if (!isLastStep) {
      router.push(FormSteps[stepIndex + 1].path);
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      await submit();
      router.push("/submit-research/thank-you");
      reset();
    } catch (error) {
      console.log(error);
      setSubmitError("Something went wrong while submitting. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className='submit-research-card'>
      <ol className='submit-research-steps'>
        {FormSteps.map((s, i) => (
          <li key={s.path} className={i === stepIndex ? 'active' : i < stepIndex ? 'done' : ''}>
            <span>{i < stepIndex ? '✓' : i + 1}</span>
            <p>{s.title}</p>
          </li>
        ))}
      </ol>

      <div className='submit-research-heading'>
        <p className='submit-research-eyebrow'>Step {stepIndex + 1} of {FormSteps.length}</p>
        <h1>{step.title}</h1>
        <p>{step.subtitle}</p>
      </div>

      <form className='submit-research-form' onSubmit={handleSubmit} noValidate>
        {step.fields.map((key) => {
          const field = FormFields[key];
          const props = {
            id: key,
            name: key,
            value: answers[key],
            placeholder: field.placeholder,
            autoComplete: field.autoComplete,
            onChange: (e) => handleChange(key, e.target.value),
            'aria-invalid': Boolean(errors[key]),
          };
          return (
            <div className='submit-research-field' key={key}>
              <label htmlFor={key}>
                {field.label}{field.required ? <span className='required'> *</span> : <span className='optional'> (optional)</span>}
              </label>
              {field.type === 'textarea' ? <textarea rows={6} {...props} /> : <input type={field.type} {...props} />}
              {errors[key] && <p className='error-message'>{errors[key]}</p>}
            </div>
          );
        })}

        {submitError && <p className='error-message'>{submitError}</p>}

        <div className='submit-research-actions'>
          {stepIndex > 0 ? (
            <Link href={FormSteps[stepIndex - 1].path} className='submit-research-btn'>Back</Link>
          ) : <span />}
          <button type='submit' className='submit-research-btn submit-research-btn-primary' disabled={submitting}>
            {isLastStep ? (submitting ? 'Submitting…' : 'Submit') : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep;
