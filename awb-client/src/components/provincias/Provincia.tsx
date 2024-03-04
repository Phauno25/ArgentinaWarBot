import React from "react";

type provinciaProp = {
  owner: object;
  d: string;
  id: string;
};

const Provincia: React.FC<provinciaProp> = ({ owner, d, id }) => {
  return (
    <path
      id={id}
      fill={owner.color.color}
      fillOpacity="1"
      stroke="#fff"
      strokeDasharray="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="1.406"
      d={d}
    ></path>
  );
};

export default Provincia;
