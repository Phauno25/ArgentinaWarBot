import { useDispatch } from "react-redux";
import { setProvinces } from "../reducers/awbReducer";
import { useEffect, useState } from "react";
import { loadGame } from "../functions";

const useLoadGame = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataAndDispatch = async () => {
      const provinces = await loadGame();
      dispatch(setProvinces(provinces));
      setLoading(false);
      console.log("game loaded");
    };
    getDataAndDispatch();
  }, []);

  return {loading}
};

export default useLoadGame;
