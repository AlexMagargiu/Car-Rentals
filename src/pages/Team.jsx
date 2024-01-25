import TeamMembers from "../components/Team-Components/TeamMembers";
import laurentiuPhoto from "../assets/TeamPhotos/1.png";
import IuliaPhoto from "../assets/TeamPhotos/2.png";
import LoredanaPhoto from "../assets/TeamPhotos/3.png";
import AdelinaPhoto from "../assets/TeamPhotos/4.png";
import OvidiuPhoto from "../assets/TeamPhotos/5.png";
import VladPhoto from "../assets/TeamPhotos/6.png";
import BookCarBanner from "../components/About-Components/AboutHero-Components/BookCarBanner";
import Footer from "../components/Universal-Components/Footer";

export default function Team() {
  return (
    <section className="flex flex-col mt-36 lg:mt-60">
      <div className="flex flex-col items-center justify-between gap-8 mx-auto mb-36 lg:flex-wrap lg:flex-row lg:max-w-6xl">
        <TeamMembers
          image={VladPhoto}
          name="Vlad Dinu"
          position="Business Owner"
        />
        <TeamMembers
          image={AdelinaPhoto}
          name="Adelina Manea"
          position="Manager"
        />
        <TeamMembers
          image={LoredanaPhoto}
          name="Loredana Cojoc"
          position="Car Detailer"
        />
        <TeamMembers
          image={OvidiuPhoto}
          name="Ovidiu Checiches"
          position="Mechanic"
        />
        <TeamMembers
          image={IuliaPhoto}
          name="Iulia Pârvulescu"
          position="Photographer"
        />
        <TeamMembers
          image={laurentiuPhoto}
          name="Laurentiu Lupei"
          position="Salesman"
        />
      </div>
      <BookCarBanner />
      <Footer />
    </section>
  );
}
