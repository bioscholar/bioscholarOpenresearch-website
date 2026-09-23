import { SubmitResearchProvider } from '@context/SubmitResearchContext';
import '@styles/SubmitResearch/SubmitResearch.css';

export const metadata = {
  title: "Submit your research | Bioscholar",
};

export default function SubmitResearchLayout({ children }) {
  return (
    <SubmitResearchProvider>
      <div className='submit-research'>
        {children}
      </div>
    </SubmitResearchProvider>
  );
}
