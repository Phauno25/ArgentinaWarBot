import { collection, getDocs } from "firebase/firestore";
import { FireDB } from "../config/firebase";

const awbService = {
  getColors: async () => {
    const localColors = localStorage.getItem("colors");

    if (localColors) {
      console.log("color got from local");
      return JSON.parse(localColors);
    }
    const colors: any = [];
    const data = await getDocs(collection(FireDB, "awb-color"));
    data.forEach((item) => {
      const color = {
        name: item.data().name,
        color: item.data().color,
      };
      colors.push(color);
    });
    localStorage.setItem("colors", JSON.stringify(colors));

    return colors;
  },

  getProvinces: async () => {
    const localProvinces = localStorage.getItem("provinces");

    if (localProvinces) {
      console.log("provinces got from local");
      return JSON.parse(localProvinces);
    }
    const provinces: any = [];
    const data = await getDocs(collection(FireDB, "awb-provincias"));
    data.forEach((item) => {
      const province = {
        name: item.data().name,
        id: item.data().id,
        borderings: item.data().borderings,
      };
      provinces.push(province);
    });
    localStorage.setItem("provinces", JSON.stringify(provinces));
    return provinces;
  },
};

export default awbService;
