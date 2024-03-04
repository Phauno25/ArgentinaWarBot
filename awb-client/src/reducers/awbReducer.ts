import { createSlice } from "@reduxjs/toolkit";

export const awbSlice = createSlice({
  name: "awb",
  initialState: {
    provinces: [],
    owners: [],
    lastConquered: {},
    lastTurnIndependence: false,
  },
  reducers: {
    setProvinces: (state, actions) => {
      state.provinces = actions.payload;
    },
    setConquest: (state, actions) => {
      const indexSieged = state.provinces.indexOf(
        state.provinces.find(
          (e) => e.name === actions.payload.siegedProvince.name
        )
      );
      state.provinces[indexSieged].owner =
        actions.payload.conquerorProvince.owner;

      state.lastConquered = state.provinces[indexSieged];
      state.lastTurnIndependence = false;
    },
    setIndependence: (state, actions) => {
      console.log("Set independence");
      const indexSieged = state.provinces.indexOf(
        state.provinces.find(
          (e) => e.name === actions.payload.siegedProvince.name
        )
      );
      state.provinces[indexSieged].owner =
        state.provinces[indexSieged].originalOwner;
      state.lastTurnIndependence = true;
    },
    setDefense: (state, actions) => {
      state.provinces = state.provinces;
    },
    setLastConquered: (state, actions) => {
      state.lastConquered = actions.payload.siegedProvince;
    },
  },
});

export const {
  setProvinces,
  setConquest,
  setIndependence,
  setDefense,
  setLastConquered,
} = awbSlice.actions;

export default awbSlice.reducer;
