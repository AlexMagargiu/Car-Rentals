import arteon from "../assets/vwarteon.png";
import m5 from "../assets/bmwm5.png";
import xc90 from "../assets/volvoxc90.png";
import cls from "../assets/mercedescls.png";
import camaro from "../assets/chevycamaro.png";
import etron from "../assets/audietron.png";
import { useState } from "react";
import CarStats from "./CarModels-Components/CarStats";

export default function CarModels() {
  const [buttonClicked, setButtonClicked] = useState({
    arteon: true,
    m5: false,
    xc90: false,
    cls: false,
    camaro: false,
    etron: false,
  });

  const onClickHandler = (order) => {
    const resetCar = {
      arteon: false,
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

  return (
    <section>
      <h2>Vehicle Models</h2>
      <h4>Our rental fleet</h4>
      <p>
        Select from our array of exceptional vehicles available for rental,
        perfect for your upcoming adventure or business journey
      </p>
      <div>
        <button onClick={() => onClickHandler("arteon")}>
          Volkswagen Arteon
        </button>
        <button onClick={() => onClickHandler("m5")}>BMW M5</button>
        <button onClick={() => onClickHandler("xc90")}>Volvo XC90</button>
        <button onClick={() => onClickHandler("cls")}>Mercedes-Benz CLS</button>
        <button onClick={() => onClickHandler("camaro")}>
          Chevrolet Camaro
        </button>
        <button onClick={() => onClickHandler("etron")}>Audi E-Tron GT</button>
      </div>
      <div>
        {buttonClicked.arteon && (
          <img src={arteon} alt="Volkswagen Arteon photo" />
        )}
        {buttonClicked.m5 && <img src={m5} alt="BMW M5 photo" />}
        {buttonClicked.xc90 && <img src={xc90} alt="Volvo XC90 photo" />}
        {buttonClicked.cls && <img src={cls} alt="Mercedes-Benz CLS photo" />}
        {buttonClicked.camaro && (
          <img src={camaro} alt="Chevrolet Camaro photo" />
        )}
        {buttonClicked.etron && <img src={etron} alt="Audi E-Tron GT photo" />}
      </div>
      <div>
        {buttonClicked.arteon && (
          <CarStats
            price="$30"
            brand="Volkswagen"
            model="Arteon"
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
