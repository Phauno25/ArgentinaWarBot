import { createSlice } from "@reduxjs/toolkit";

export const awbSlice = createSlice({
  name: "awb",
  initialState: {
    provinces: [],
    owners: [],
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
      const provinceSieged = state.provinces[indexSieged];
      state.provinces[indexSieged].owner =
        actions.payload.conquerorProvince.owner;
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
    },
    setDefence: (state, actions) => {
      state.provinces = state.provinces;
    },
  },
});

export const { setProvinces, setConquest, setIndependence, setDefence } =
  awbSlice.actions;

export default awbSlice.reducer;
