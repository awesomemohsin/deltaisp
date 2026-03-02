import { Navbar } from '@/components/navbar'
import { BannerSlider } from '@/components/banner-slider'
import { HeroSection } from '@/components/hero-section'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import { ServicesOverview } from '@/components/services-overview'
import { PricingTeaser } from '@/components/pricing-teaser'
import { SpeedTestSection } from '@/components/speed-test-section'
import { Testimonials } from '@/components/testimonials'
import { CTABanner } from '@/components/cta-banner'
import { Footer } from '@/components/footer'
import { InteractiveBackground } from '@/components/interactive-background'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Global Interactive Net Background */}
      <InteractiveBackground
        particleCount={80}
        speed={0.4}
        opacity={0.4}
        interactionRadius={200}
        className="fixed inset-0 pointer-events-none z-0"
      />



      {/* Restored & Enhanced Vibrant Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-primary/25 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[5%] w-[700px] h-[700px] bg-secondary/20 rounded-full blur-[140px] animate-pulse animation-delay-2000" />
        <div className="absolute top-[45%] left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] animate-pulse animation-delay-1000" />
        <div className="absolute top-[70%] right-[15%] w-[650px] h-[650px] bg-primary/20 rounded-full blur-[130px] animate-pulse animation-delay-4000" />
        <div className="absolute bottom-[5%] left-[15%] w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <BackgroundBeamsWithCollision className="h-auto md:min-h-[80vh] bg-transparent pb-8">
          <BannerSlider />
        </BackgroundBeamsWithCollision>
        {/* <HeroSection /> */}
        <ServicesOverview />
        <PricingTeaser />
        <SpeedTestSection />
        <Testimonials />
        <CTABanner />
        <Footer />
      </div>
    </main>
  )
}
