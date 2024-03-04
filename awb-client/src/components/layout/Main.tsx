import { useSelector } from "react-redux";
import useLoadGame from "../../hooks/useLoadGame";
import Argentina from "../Argentina";
import { useEffect } from "react";
import { startConquest } from "../../functions/functions";
import ColorList from "../color-list/ColorList";

const Main = () => {
  const {loading} = useLoadGame();
  const provinces = useSelector((state) => state.awbReducer.provinces);


  return !loading ? (
    <div className="h-screen flex justify-start items-center">
      <Argentina provinces={provinces} />
      <ColorList list={provinces} />
    </div>
  ) : (
    ""
  );
};

export default Main;
