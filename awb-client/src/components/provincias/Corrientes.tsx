import React from "react";

const Corrientes: React.FC<{ province: object }> = ({ province }) => {
  return (
    <g
      id="g3269"
      fill="#d3d3d3"
      fillOpacity="1"
      stroke="#fff"
      strokeDasharray="none"
      strokeMiterlimit="4"
      strokeOpacity="1"
      strokeWidth="0.799"
      transform="matrix(1.70715 0 0 1.81096 -173.757 -511.272)"
    >
      <path
        id={province.name}
        fill={province.owner.color.color}
        fillOpacity="1"
        stroke="#fff"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="0.816"
        d="M332.813 176.906c-5.324.827-9.673 2.517-13.407 4.75-.199.422-1.094 2.438-1.094 2.438l.313 5.906s.494 3.567.594 4.094c.099.528-.906 5.48-.906 6.219 0 .738-1.97 2.968-1.97 2.968l-2.593 3.25-2 6.656-.094 5.375-.594 3.688-.5 1.469-.5 4.531-.875 6.219L304 239.53c-2.132 1.134-5.205 1.977-5.75 4.75 0 0-.605 5.773-.406 6.406.199.633-1.691 6.95-2.188 7.688-.496.737-.193 3.286-.094 3.813.1.526 1.282 4.098 1.282 4.625 0 .526-.875 3.812-.875 3.812l-.906 6.219 1-.344 2.875-1.563 3.78.844 4.657-.125 3.281-1.156 2.906-1.25 4.157.531 4.375-2.125 4.781-.719 4.563 1.25 1.968 1.375 1.594 2.094 3.688 2.219v4.219l3.062 5.594s.619-3.149.719-3.782c.099-.632 1.594-2.531 1.594-2.531l2.062-3.594 1.219-3.781 1.187-2.219 2.063-1.062 2.406-1.156s2.478-2.228 2.875-2.438c.397-.21.406-2.313.406-2.313s.083-1.984.281-2.406c.2-.42 1.688-.75 1.688-.75l.594-1.375c.733-1.138 1.804-2.016 3.594-2.312l3.062-2.438 2.188-1.781c.079-1.47-.035-3.258 1.312-2.844l2.156-.531s1.416-1.68 1.813-2.313c.396-.633 2.562-2.968 2.562-2.968l.719-3.25 1.781-2.438 1.375-1.875 3-1.187s2.278-2.617 2.875-3.25c.596-.632 1.875-3.469 1.875-3.469l2.875-4.031 1.813-2.094s1.983-.953 2.281-1.375c.297-.42 1.375-2.531 1.375-2.531l2.094-.938s1.208-1.578 1.406-2c2.383-2.451 2.4-1.326 3.969-4.656l2.187-2.625-.594-2.625-1.593-2.313-2.688-3.187-.312-2.094-1.688-1.469-2.375-3.687-.687-2.531s.094-3.055.094-3.688c0-.632-.313-2.219-.313-2.219l1.688-2.843-4.657-2.125-5.375 2.437-2.781 4.313-1.969 1.062-1.594-3.687c-1.69-1.164-3.032-.89-4.062.75-.489 1.174-2.113 1.436-1.406 3.562l-2.969-.406-6.656-2.844-4.469-2.344-8.656-1.78-8.844-3.782-10.438-.969zm37.468 7.719l-1.406.938-1.094-.313.313 1.063a11.478 11.478 0 004.875 1.78l.875-.75-.594-1.78-1.5-.532-1.469-.406z"
        transform="matrix(1.00866 0 0 .95084 101.782 -67.819)"
      ></path>
    </g>
  );
};

export default Corrientes;