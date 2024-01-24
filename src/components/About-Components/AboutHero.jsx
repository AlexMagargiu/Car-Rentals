import aboutPagePhoto from "../../assets/aboutPagePhoto.jpg";
import AboutHeroDescription from "./AboutHero-Components/AboutHeroDescription";
import AboutHeroIcons from "./AboutHero-Components/AboutHeroIcons";
import aboutHeroCarPhoto from "../../assets/aboutHeroCars.png";
import aboutHeroOutletPhoto from "../../assets/aboutHeroOutlets.png";
import aboutHeroRepairPhoto from "../../assets/aboutHeroRepair.png";

export default function AboutHero() {
  const descriptionText = [
    "Explore with Confidence: Choose from our diverse, well-maintained fleet for every adventure.",
    "Customer-Centric: Experience seamless rentals with personalized service and hassle-free processes.",
    "Your Safety Matters: Our vehicles are equipped with the latest safety features, and we provide 24/7 roadside assistance.",
    "Committed to eco-friendly practices, we strive for a minimal carbon footprint.",
    "Actively involved in local communities, contributing positively to our surroundings.",
    "User-friendly online systems and transparent pricing for a convenient experience.",
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-6 text-center py-36 lg:flex-row lg:pt-60 lg:text-start ">
      <img src={aboutPagePhoto} className="w-96 lg:w-[30rem]"></img>
      <div className="flex flex-col items-center justify-center max-w-lg gap-8 lg:items-start lg:gap-4">
        <h1 className="text-2xl font-bold ">About Us</h1>
        <h2 className="text-5xl font-bold lg:text-4xl">
          You start the engine and your adventure begins
        </h2>
        <div className="flex flex-col max-w-sm gap-1 opacity-60 lg:max-w-lg">
          <AboutHeroDescription emoji="🚗" text={descriptionText[0]} />
          <AboutHeroDescription emoji="🌟" text={descriptionText[1]} />
          <AboutHeroDescription emoji="👥" text={descriptionText[2]} />
          <AboutHeroDescription emoji="🌱" text={descriptionText[3]} />
          <AboutHeroDescription emoji="🌍" text={descriptionText[4]} />
          <AboutHeroDescription emoji="📲" text={descriptionText[5]} />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:w-full">
          <AboutHeroIcons
            image={aboutHeroCarPhoto}
            number="20"
            text="Car Types"
          />
          <AboutHeroIcons
            image={aboutHeroOutletPhoto}
            number="20"
            text="Car Types"
          />
          <AboutHeroIcons
            image={aboutHeroRepairPhoto}
            number="20"
            text="Car Types"
          />
        </div>
      </div>
    </section>
  );
}
