"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="large"
        background="circleGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Work",
          id: "#work",
        },
        {
          name: "Process",
          id: "#process",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="POSTERLAB"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Redesign Your Visual Reality."
      description="We specialize in high-end poster craft, brand identity, and sophisticated design solutions that demand attention."
      imageSrc="http://img.b2bpic.net/free-photo/portrait-man-posing-with-universe-projection-texture_23-2149581276.jpg"
      showBlur={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/astonished-girl-bat_23-2147680509.jpg",
          alt: "Astonished girl and bat",
        },
        {
          src: "http://img.b2bpic.net/free-photo/high-fashion-look-glamour-fashion-beautiful-black-american-woman-black-mask-with-orange-bright-makeup-orange-material_158538-9727.jpg",
          alt: "High fashion look",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-person-with-mental-disorders_23-2148758736.jpg",
          alt: "Portrait of a person",
        },
        {
          src: "http://img.b2bpic.net/free-photo/collage-landscapes-composition_23-2150241030.jpg",
          alt: "Collage of landscapes",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-body-portrait-confident-man-elegant-suit-posing-with-hand-pocket-against-skyscraper-background_613910-4116.jpg",
          alt: "Confident man",
        },
      ]}
      avatarText="Trusted by creative leads worldwide"
    />
  </div>

  <div id="process" data-section="process">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          icon: Zap,
          title: "Rapid Prototyping",
          description: "Quick iterations to find the visual rhythm of your project.",
        },
        {
          icon: Shield,
          title: "Identity Integrity",
          description: "Ensuring consistency across every brand touchpoint.",
        },
        {
          icon: Award,
          title: "Premium Finishes",
          description: "Advanced print and design finishes that stand out.",
        },
      ]}
      title="Our Creative Process"
      description="From concept to canvas, we ensure every detail aligns with your brand vision."
    />
  </div>

  <div id="work" data-section="work">
      <TextAbout
      useInvertedBackground={true}
      title="Crafting Stories in Print"
      buttons={[
        {
          text: "View Full Portfolio",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "A1 Concept Poster",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/blank-photo-frame_1253-293.jpg",
        },
        {
          id: "p2",
          name: "Minimalist Card",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/organic-white-cheese-black-plate_114579-50352.jpg",
        },
        {
          id: "p3",
          name: "Brand Flyer",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-stationery-paper-with-leaves_23-2148838829.jpg",
        },
        {
          id: "p4",
          name: "Art Postcard",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/mockup-with-book-pencils_23-2147730273.jpg",
        },
        {
          id: "p5",
          name: "Brand Folder",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-anonymous-alcoholics-sign-white-board-office-used-group-therapy-program-concept-aa-meeting-symbol-cure-alcohol-addiction-mental-health-problems_482257-29848.jpg",
        },
        {
          id: "p6",
          name: "Art Print",
          price: "Custom",
          imageSrc: "http://img.b2bpic.net/free-photo/pastel-terrazzo-background_23-2151939753.jpg",
        },
      ]}
      title="Design Portfolio"
      description="Selected works ranging from minimalist branding to complex poster illustrations."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "TechCorp",
        "FashionFlow",
        "ArchitectsCo",
        "CoffeeLab",
        "StartupXYZ",
        "MinimalistArt",
        "CreativeStudio",
      ]}
      title="Trusted by Visionary Brands"
      description="Collaborating with leaders across tech, fashion, and lifestyle industries."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarah_tech",
          testimonial: "The team transformed our vision into a stunning poster campaign. Truly professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-office-center_1303-19602.jpg",
        },
        {
          id: "2",
          name: "Marc K.",
          handle: "@marc_design",
          testimonial: "Their attention to detail and creative depth are unmatched in the agency space.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-dressed-elegant-suit-sitting-green-lawn-against-cityscape-background_613910-4128.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          handle: "@emily_growth",
          testimonial: "Exceptional communication and high-impact designs every single time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-man-walking-european-city-street_158595-4722.jpg",
        },
        {
          id: "4",
          name: "David L.",
          handle: "@david_studio",
          testimonial: "The redesigned brand identity has completely refreshed our studio's appeal.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-beige-checkered-suit-posing-street-background_158538-2602.jpg",
        },
        {
          id: "5",
          name: "Anna P.",
          handle: "@anna_brand",
          testimonial: "Fast turnaround, creative ideas, and perfectly aligned with our core values.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-african-american-businessman-black-classic-jacket-isolated-dark-background_613910-17885.jpg",
        },
      ]}
      showRating={true}
      title="Client Perspectives"
      description="What our partners have to say about our design impact."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How long does a design project take?",
          content: "Depending on complexity, design projects usually range from 2 to 6 weeks.",
        },
        {
          id: "q2",
          title: "Do you handle printing?",
          content: "Yes, we work with high-end print partners to ensure color and texture fidelity.",
        },
        {
          id: "q3",
          title: "Can you handle a full rebranding?",
          content: "Absolutely. Rebranding is one of our primary design agency offerings.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Need more clarity? Here are answers to common questions about our design process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Ready to Design?"
      title="Let's bring your vision to life."
      description="Get in touch for a custom quote or project consultation."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Work",
              href: "#work",
            },
            {
              label: "Process",
              href: "#process",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 POSTERLAB"
      bottomRightText="All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
