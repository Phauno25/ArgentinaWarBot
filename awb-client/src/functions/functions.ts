import { setConquest } from "../reducers/awbReducer";
import awbService from "../services/awbService";

// Seleccionamos un número random como index para elegir la provincia atacante
export const pickRandomNumber = (maxValue: number) => {
  const randomIndex = Math.floor(Math.random() * maxValue);
  return randomIndex;
};

// Funcion que mezcla el orden de un array aleatoriamente
const arrayShuffle = (array) => {
  const shuffledarray = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return shuffledarray;
};

// Función que trae todos los posibles bordes conquistables de la provincia pasada como param
const getAllPosibleBorders = (conquerorProvince, provinces) => {
  const possibleBorders = [];

  const alreadyConqueredProvinces = arrayShuffle(
    provinces.filter((e) => e.owner.name === conquerorProvince.name)
  );
  alreadyConqueredProvinces.forEach((prov) => {
    prov.borderings.forEach((border) => {
      const province = provinces.find((e) => e.name === border);
      if (
        !possibleBorders.find((e) => e.name === province.name) &&
        province.owner.name !== conquerorProvince.name
      ) {
        possibleBorders.push(province);
      }
    });
  });
  return arrayShuffle(possibleBorders);
};

// Intenta la independencia de una provincia seleccionada
const isIndependenceSuccessful = () => {
  const independenceProbability = 2 / 12;
  const randomValue = Math.random();
  return randomValue < independenceProbability;
};

// Intenta la defensa de una provincia atacada
const isDefenseSuccessful = () => {
  const defenseProbability = 2 / 12;
  const randomValue = Math.random();
  return randomValue < defenseProbability;
};

const pickSiegedProvince = (conquerorProvince, provinces, lastConquered) => {
  const possibleBorders = getAllPosibleBorders(conquerorProvince, provinces);
  const siegedProvince =
    possibleBorders[pickRandomNumber(possibleBorders.length)];

  if (lastConquered && siegedProvince.name === lastConquered?.name && conquerorProvince.borderings.length > 1) {
    console.log("Choosing another province");
    return pickSiegedProvince(conquerorProvince, provinces, lastConquered);
  } else {
    return siegedProvince;
  }
};

const pickBorderAttackerProvince = (
  conquerorProvince,
  siegedProvince,
  provinces
) => {
  let borderAttacker = null;
  siegedProvince.borderings.forEach((border) => {
    const province = provinces.find((e) => e.name === border);
    if (borderAttacker === null) {
      if (province.owner.name === conquerorProvince.name) {
        borderAttacker = province;
      }
    }
  });
  return borderAttacker;
};

const pickProvinces = (arrayOfProvinces, lastConqueredProvince) => {
  const provinces = [...arrayOfProvinces];
  // Tomamos una provincia inicial
  const randomIndex = pickRandomNumber(23);
  const province = provinces[randomIndex];

  const independenceProvince =
    province.owner.name !== province.name ? province : null;
  console.warn(independenceProvince?.name);

  const conquerorProvince =
    province.owner.name !== province.name
      ? provinces.find((e) => e.name === province.owner.name)
      : province;
  console.warn(conquerorProvince?.name);

  // Si la independencia falla se elige una frontera de esa mina provincia
  // O cualquier provincia conquistada por el dueño inicial

  const siegedProvince = pickSiegedProvince(
    conquerorProvince,
    provinces,
    lastConqueredProvince
  );
  console.warn(siegedProvince);

  const borderAttackerProvince = pickBorderAttackerProvince(
    conquerorProvince,
    siegedProvince,
    provinces
  );

  console.warn(borderAttackerProvince?.name);

  return {
    independenceProvince,
    conquerorProvince,
    siegedProvince,
    borderAttackerProvince,
  };
};

export const startConquest = (
  arrayProvinces: any,
  lastConqueredProvince,
  lastTurnIndependence
) => {
  const provinces = [...arrayProvinces];
  const {
    independenceProvince,
    conquerorProvince,
    siegedProvince,
    borderAttackerProvince,
  } = pickProvinces(provinces, lastConqueredProvince);
  let mustDefend = true;
  // Si la provincia elegida se encontraba conquistada, se intenta su independencia
  // Si la independencia es exitosa el turno termina con esa accion.
  if (independenceProvince && !lastTurnIndependence) {
    if (isIndependenceSuccessful()) {
      console.log(
        `El ejército de ${independenceProvince.name} se independisado exitosamente de ${conquerorProvince.name}`
      );
      return {
        action: "independence",
        siegedProvince: independenceProvince,
        conquerorProvince: conquerorProvince,
      };
    } else {
      mustDefend = false;
    }
  }

  if (mustDefend && isDefenseSuccessful()) {
    console.log(
      `El ejército de ${siegedProvince.name} se ha defendido exitosamente de ${conquerorProvince.name} 
      que atacó desde ${borderAttackerProvince.name} en la provincia de ${siegedProvince.name} `
    );
    return {
      action: "defense",
      siegedProvince: siegedProvince,
      conquerorProvince: conquerorProvince,
    };
  } else {
    console.log(
      `El ejército de ${conquerorProvince.owner.name} ha conquistado a ${siegedProvince.name} desde ${borderAttackerProvince.name}`
    );
    return {
      action: "conquest",
      siegedProvince: siegedProvince,
      conquerorProvince: conquerorProvince,
    };
  }
};

export const loadGame = async () => {
  const fetchedProvinces = await awbService.getProvinces();
  const fetchedColors = await awbService.getColors();
  const provinces = [];

  fetchedProvinces.forEach((item) => {
    const randomIndex = pickRandomNumber(fetchedColors.length);
    const selectedColor = fetchedColors[randomIndex];
    fetchedColors.splice(randomIndex, 1);

    const owner = { name: item.name, color: selectedColor };

    const province = {
      id: item.id,
      name: item.name,
      owner: owner,
      originalOwner: owner,
      borderings: item.borderings,
    };

    provinces.push(province);
  });
  provinces.sort((a, b) => {
    return a.id.localeCompare(b.id);
  });
  return provinces;
};
