import ContactDescription from "../components/Contact-Components/ContactDescription";
import ContactFrom from "../components/Contact-Components/ContactForm";
import ContactBgPhoto from "../assets/contactbg.png";
import BookCarBanner from "../components/About-Components/AboutHero-Components/BookCarBanner";
import Footer from "../components/Universal-Components/Footer";

export default function Contact() {
  return (
    <section className="flex flex-col items-center gap-16 text-center lg:text-start ">
      <div
        className="flex flex-col px-8 my-32 lg:my-60 lg:flex-row lg:max-w-7xl lg:gap-36 lg:px-12"
        style={{
          backgroundImage: `url(${ContactBgPhoto})`,
          backgroundPosition: "50%",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContactDescription />
        <div className="w-full max-w-2xl">
          <ContactFrom />
        </div>
      </div>
      <BookCarBanner />
      <Footer />
    </section>
  );
}
