import CarModel from "../components/Models-Components/CarModel";
import lexusEsPhoto from "../assets/lexusesModel.jpg";
import bmwM5Photo from "../assets/bmwm5Model.webp";
import volvoXC90Photo from "../assets/volvoxc90Model.jpg";
import mercedesCLSPhoto from "../assets/mercedesclsModel.webp";
import chevyCamaroPhoto from "../assets/chevycamaroModel.jpg";
import audiETronPhoto from "../assets/audietronModel.jpeg";
import BookCarBanner from "../components/About-Components/AboutHero-Components/BookCarBanner";
import Footer from "../components/Universal-Components/Footer";

export default function Models() {
  return (
    <section className="flex flex-col items-center pt-36 lg:pt-60">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:gap-16 md:max-w-6xl">
        <CarModel
          image={lexusEsPhoto}
          name="Lexus"
          model="ES"
          price="160"
          hp="302"
          transmission="Automatic"
          fuel="Diesel"
        />
        <CarModel
          image={bmwM5Photo}
          name="BMW"
          model="M5"
          price="140"
          hp="600"
          transmission="Automatic"
          fuel="Diesel"
        />
        <CarModel
          image={volvoXC90Photo}
          name="Volvo"
          model="XC90"
          price="100"
          hp="250"
          transmission="Automatic"
          fuel="Diesel"
        />
        <CarModel
          image={mercedesCLSPhoto}
          name="Mercedes-Benz"
          model="CLS"
          price="120"
          hp="362"
          transmission="Automatic"
          fuel="Diesel"
        />
        <CarModel
          image={chevyCamaroPhoto}
          name="Chevrolet"
          model="Camaro"
          price="170"
          hp="275"
          transmission="Manual"
          fuel="Diesel"
        />
        <CarModel
          image={audiETronPhoto}
          name="Audi"
          model="E-Tron"
          price="220"
          hp="522"
          transmission="Automatic"
          fuel="Electric"
        />
      </div>
      <BookCarBanner />
      <Footer />
    </section>
  );
}
