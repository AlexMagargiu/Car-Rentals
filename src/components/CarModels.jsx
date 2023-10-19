import rc from "../assets/lexusrc.png";
import m5 from "../assets/bmwm5.png";
import xc90 from "../assets/volvoxc90.png";
import cls from "../assets/mercedescls.png";
import camaro from "../assets/chevycamaro.png";
import etron from "../assets/audietron.png";
import { useState } from "react";
import CarStats from "./CarModels-Components/CarStats";

export default function CarModels() {
  const [buttonClicked, setButtonClicked] = useState({
    rc: true,
    m5: false,
    xc90: false,
    cls: false,
    camaro: false,
    etron: false,
  });

  const onClickHandler = (order) => {
    const resetCar = {
      rc: false,
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
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">Vehicle Models</h2>
      <h4 className="text-5xl font-bold text-center">Our rental fleet</h4>
      <p className="text-center opacity-70">
        Select from our array of exceptional vehicles available for rental,
        perfect for your upcoming adventure or business journey
      </p>
      <div className="flex flex-col w-full gap-2 pb-12">
        <button onClick={() => onClickHandler("rc")} style={buttonStyle}>
          Lexus RC
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
      <div className="flex justify-center">
        {buttonClicked.rc && <img src={rc} alt="Lexus RC photo" />}
        {buttonClicked.m5 && <img src={m5} alt="BMW M5 photo" />}
        {buttonClicked.xc90 && <img src={xc90} alt="Volvo XC90 photo" />}
        {buttonClicked.cls && <img src={cls} alt="Mercedes-Benz CLS photo" />}
        {buttonClicked.camaro && (
          <img src={camaro} alt="Chevrolet Camaro photo" />
        )}
        {buttonClicked.etron && <img src={etron} alt="Audi E-Tron GT photo" />}
      </div>
      <div className="flex flex-col items-center justify-center">
        {buttonClicked.rc && (
          <CarStats
            price="$30"
            brand="Lexus"
            model="RC"
            year="2020"
            doors="4/5"
            hp="100"
            transmission="manual"
            fuel="gasoline"
          />
        )}
        {buttonClicked.m5 && (
          <CarStats
            price="$30"
            brand="BMW"
            model="M5"
            year="2020"
            doors="4/5"
            hp="100"
            transmission="manual"
            fuel="gasoline"
          />
        )}
        {buttonClicked.xc90 && (
          <CarStats
            price="$30"
            brand="Volvo"
            model="XC90"
            year="2020"
            doors="4/5"
            hp="100"
            transmission="manual"
            fuel="gasoline"
          />
        )}
        {buttonClicked.cls && (
          <CarStats
            price="$30"
            brand="Mercedes-Benz"
            model="CLS"
            year="2020"
            doors="4/5"
            hp="100"
            transmission="manual"
            fuel="gasoline"
          />
        )}
        {buttonClicked.camaro && (
          <CarStats
            price="$30"
            brand="Chevrolet"
            model="Camaro"
            year="2020"
            doors="4/5"
            hp="100"
            transmission="manual"
            fuel="gasoline"
          />
        )}
        {buttonClicked.etron && (
          <CarStats
            price="$30"
            brand="Audi"
            model="E-Tron GT"
            year="2020"
            doors="4/5"
            hp="100"
            transmission="manual"
            fuel="gasoline"
          />
        )}
      </div>
    </section>
  );
}
