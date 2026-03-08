import Header from "./sections/Header"
import HeroSection from "./sections/HeroSection"
import SocialProofBar from "./sections/SocialProofBar"
import FiveLensesCards from "./sections/FiveLensesCards"
import CaseStudyCarousel from "./sections/CaseStudyCarousel"
import RoiCalculator from "./sections/RoiCalculator"
import ComparisonTable from "./sections/ComparisonTable"
import AiAgentsSection from "./sections/AiAgentsSection"
import IntegrationsGrid from "./sections/IntegrationsGrid"
import SecuritySection from "./sections/SecuritySection"
import FinalCta from "./sections/FinalCta"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SocialProofBar />
        <FiveLensesCards />
        <CaseStudyCarousel />
        <RoiCalculator />
        <ComparisonTable />
        <AiAgentsSection />
        <IntegrationsGrid />
        <SecuritySection />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
