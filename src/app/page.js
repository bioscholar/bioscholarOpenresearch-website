import { LandingHero } from "@components/LandingPage/LandingHero";
import { LandingAccordion } from "@components/LandingPage/LandingAccordion";
import { LandingBenefits } from "@components/LandingPage/LandingBenefits";
import { LandingArticle } from "@components/LandingPage/LandingArticle";
import { LandingNewsletter } from "@components/LandingPage/LandingNewsletter";
import '@styles/globals.css';
import '@styles/LandingPage/LandingPage.css';


export default function page() {
  return (
    <div>
      <LandingHero/>
      <LandingAccordion/>
      <LandingBenefits/>
      <LandingArticle/>
      <LandingNewsletter/>
    </div>
  );
}
