import es from "../assets/lexuses.png";
import m5 from "../assets/bmwm5.png";
import xc90 from "../assets/volvoxc90.png";
import cls from "../assets/mercedescls.png";
import camaro from "../assets/chevycamaro.png";
import etron from "../assets/audietron.png";
import { useState } from "react";
import CarStats from "./CarModels-Components/CarStats";

export default function CarModels() {
  const [buttonClicked, setButtonClicked] = useState({
    es: true,
    m5: false,
    xc90: false,
    cls: false,
    camaro: false,
    etron: false,
  });

  const onClickHandler = (order) => {
    const resetCar = {
      es: false,
      m5: false,
      xc90: false,
      cls: false,
      camaro: false,
      etron: false,
    };
    setButtonClicked({
      ...resetCar,
      [order]: true,
    });
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem 0.75rem 1.5rem",
    textAlign: "start",
    backgroundColor: "#70809030",
    fontWeight: "700",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    minWidth: "252px",
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-28 max-w-screen-xl mx-auto px-6">
      <h2 className="text-xl font-bold">Vehicle Models</h2>
      <h4 className="text-5xl font-bold text-center">Our rental fleet</h4>
      <p className="text-center opacity-50 max-w-xl">
        Select from our array of exceptional vehicles available for rental,
        perfect for your upcoming adventure or business journey
      </p>
      <div className="flex flex-col items-center justify-center mt-8 w-full gap-0 lg:flex-row lg:justify-between lg:gap-4">
        <div className="flex flex-col w-full gap-2 pb-12 md:w-80 lg:pb-0 lg:h-full">
          <button onClick={() => onClickHandler("es")} style={buttonStyle}>
            Lexus ES
          </button>
          <button onClick={() => onClickHandler("m5")} style={buttonStyle}>
            BMW M5
          </button>
          <button onClick={() => onClickHandler("xc90")} style={buttonStyle}>
            Volvo XC90
          </button>
          <button onClick={() => onClickHandler("cls")} style={buttonStyle}>
            Mercedes-Benz CLS
          </button>
          <button onClick={() => onClickHandler("camaro")} style={buttonStyle}>
            Chevrolet Camaro
          </button>
          <button onClick={() => onClickHandler("etron")} style={buttonStyle}>
            Audi E-Tron GT
          </button>
        </div>
        <div className="flex justify-center md:max-w-2xl lg:max-w-xl">
          {buttonClicked.es && <img src={es} alt="Lexus ES photo" />}
          {buttonClicked.m5 && <img src={m5} alt="BMW M5 photo" />}
          {buttonClicked.xc90 && <img src={xc90} alt="Volvo XC90 photo" />}
          {buttonClicked.cls && <img src={cls} alt="Mercedes-Benz CLS photo" />}
          {buttonClicked.camaro && (
            <img src={camaro} alt="Chevrolet Camaro photo" />
          )}
          {buttonClicked.etron && (
            <img src={etron} alt="Audi E-Tron GT photo" />
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          {buttonClicked.es && (
            <CarStats
              price="$160"
              brand="Lexus"
              model="ES350"
              year="2024"
              engine="V-6 3.5L"
              hp="302"
              transmission="Automatic"
              fuel="Diesel"
            />
          )}
          {buttonClicked.m5 && (
            <CarStats
              price="$140"
              brand="BMW"
              model="M5"
              year="2020"
              engine="V8 Turbo 4.4L"
              hp="600"
              transmission="Automatic"
              fuel="Diesel"
            />
          )}
          {buttonClicked.xc90 && (
            <CarStats
              price="$100"
              brand="Volvo"
              model="XC90"
              year="2022"
              engine="4-Cyl Turbo 2.0L"
              hp="250"
              transmission="Automatic"
              fuel="Diesel"
            />
          )}
          {buttonClicked.cls && (
            <CarStats
              price="$120"
              brand="Mercedes-Benz"
              model="CLS"
              year="2019"
              engine="6-Cyl Turbo 3.0L"
              hp="362"
              transmission="Automatic"
              fuel="Diesel"
            />
          )}
          {buttonClicked.camaro && (
            <CarStats
              price="$170"
              brand="Chevrolet"
              model="Camaro"
              year="2021"
              engine="4-Cyl Turbo 2.0L"
              hp="275"
              transmission="Manual"
              fuel="Diesel"
            />
          )}
          {buttonClicked.etron && (
            <CarStats
              price="$220"
              brand="Audi"
              model="E-Tron GT"
              year="2023"
              engine="Dual Electric"
              hp="522"
              transmission="Automatic"
              fuel="Electric"
            />
          )}
        </div>
      </div>
    </section>
  );
}
