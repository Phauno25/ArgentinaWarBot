import React, { useEffect } from "react";
import { Cordoba } from "./provincias";
import Catamarca from "./provincias/Catamarca";
import BuenosAires from "./provincias/BuenosAires";
import EntreRios from "./provincias/EntreRios";
import Chaco from "./provincias/Chaco";
import Chubut from "./provincias/Chubut";
import Corrientes from "./provincias/Corrientes";
import Formosa from "./provincias/Formosa";
import Jujuy from "./provincias/Jujuy";
import LaPampa from "./provincias/LaPampa";
import LaRioja from "./provincias/LaRioja";
import Mendoza from "./provincias/Mendoza";
import Misiones from "./provincias/Misiones";
import Neuquen from "./provincias/Neuquen";
import RioNegro from "./provincias/RioNegro";
import SanJuan from "./provincias/SanJuan";
import SanLuis from "./provincias/SanLuis";
import SantaCruz from "./provincias/SantaCruz";
import SantaFe from "./provincias/SantaFe";
import SantiagoEstero from "./provincias/SantiagoEstero";
import TierraDelFuego from "./provincias/TierraDelFuego";
import Tucuman from "./provincias/Tucuman";
import Salta from "./provincias/Salta";
import { startConquest } from "../functions/functions";
import { useDispatch, useSelector } from "react-redux";
import {
  setConquest,
  setIndependence,
  setLastConquered,
} from "../reducers/awbReducer";

const Argentina: React.FC<{ provinces: any }> = () => {
  const dispatch = useDispatch();
  const provinces = useSelector((state) => state.awbReducer.provinces);
  const lastConquered = useSelector((state) => state.awbReducer.lastConquered);
  const lastTurnIndependence = useSelector((state) => state.awbReducer.lastTurnIndependence);

  useEffect(() => {
    if (
      lastConquered &&
      provinces.filter((e) => e.owner.name === lastConquered?.owner?.name)
        .length === 23
    ) {
      console.log("HA GANADO", lastConquered.owner.name);
    } else {
      console.log(
        provinces.filter((e) => e.owner.name === lastConquered?.owner?.name)
          .length
      );
      const interval = setInterval(() => {
        const data = startConquest(provinces, lastConquered,lastTurnIndependence);
        switch (data.action) {
          case "independence":
            dispatch(setIndependence(data));
            break;
          case "conquest":
            dispatch(setConquest(data));
            break;
          default:
            break;
        }
      }, [8000]);

      return () => clearInterval(interval);
    }
  }, [provinces]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg2"
      viewBox="0 -500 600 1200"
      width="50vw"
      height="100vh"
      overflow="visible"
      version="1"
      xmlSpace="preserve"
    >
      <g transform="scale(0.5)">
        <BuenosAires province={provinces.find((e) => e.id === "buenosaires")} />
        <Catamarca province={provinces.find((e) => e.id === "catamarca")} />
        <Chaco province={provinces.find((e) => e.id === "chaco")} />
        <Chubut province={provinces.find((e) => e.id === "chubut")} />
        <Cordoba province={provinces.find((e) => e.id === "cordoba")} />
        <Corrientes province={provinces.find((e) => e.id === "corrientes")} />
        <EntreRios province={provinces.find((e) => e.id === "entrerios")} />
        <Formosa province={provinces.find((e) => e.id === "formosa")} />
        <Jujuy province={provinces.find((e) => e.id === "jujuy")} />
        <LaPampa province={provinces.find((e) => e.id === "lapampa")} />
        <LaRioja province={provinces.find((e) => e.id === "larioja")} />
        <Mendoza province={provinces.find((e) => e.id === "mendoza")} />
        <Misiones province={provinces.find((e) => e.id === "misiones")} />
        <Neuquen province={provinces.find((e) => e.id === "neuquen")} />
        <RioNegro province={provinces.find((e) => e.id === "rionegro")} />
        <Salta province={provinces.find((e) => e.id === "salta")} />
        <SanJuan province={provinces.find((e) => e.id === "sanjuan")} />
        <SanLuis province={provinces.find((e) => e.id === "sanluis")} />
        <SantaCruz province={provinces.find((e) => e.id === "santacruz")} />
        <SantaFe province={provinces.find((e) => e.id === "santafe")} />
        <SantiagoEstero
          province={provinces.find((e) => e.id === "santiagoestero")}
        />
        <TierraDelFuego
          province={provinces.find((e) => e.id === "tierradelfuego")}
        />
        <Tucuman province={provinces.find((e) => e.id === "tucuman")} />
      </g>
    </svg>
  );
};

export default Argentina;
