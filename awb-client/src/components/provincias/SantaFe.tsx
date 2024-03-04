import React from "react";
import Provincia from "./Provincia";

const SantaFe: React.FC<{ province: object }> = ({ province }) => {
  return (
    <Provincia
      owner={province.owner}
      id={province.name}
      d="M362.23 66.844l51.057.14 37.363-46.686c2.982-3.654 7.303-1.698 11.036-.422 2.583 1.656 4.987 2.374 6.515-1.552l6.914-9.59 3.856-5.502-9.307-8.04-7.047-8.462-3.99-10.72-.398-7.898s-1.063-2.398-.93-2.963c.133-.565.133-10.297.133-10.297s0-3.95.797-5.078c.8-1.128 2.394-8.463 2.662-9.451.264-.987-1.197-7.757-1.197-7.757l.797-7.475 11.836-11.85 10.77-5.782 6.65-9.026 10.635-22.427 10.238-19.183-.264-7.758-1.597-11.706 2.259-11.85.266-6.205-2.793-5.22 2.525-9.451 1.598-14.526s2.925-6.488 3.322-7.195c.398-.706 8.51-4.795 8.51-4.795l6.648-7.476s2.394-5.923 2.394-8.462c0-2.54.797-8.604.93-9.874.133-1.27 2.26-5.078 2.26-5.078l.267-13.26 1.876-8.505 2.91-5.879 3.324-3.245 1.596-1.55v-.848l-132.697-.846-1.729 17.35-2.527 19.183-2.792 17.488-6.116 41.61-6.886 33.43 16.46 22.85-1.195 4.09-14.096 44.148c-1.058 3.575-1.106 7.146.666 10.721 2 3.438-.244 5.527-1.596 7.898-1.928 2.528-2.416 5.275-1.863 8.182l14.096 22.285.265 3.385.398 3.667 1.463 4.655s.93 3.103 1.063 3.95c.132.847 1.861 5.923 1.861 5.923l-.131 4.513-1.33 4.232-.93 2.821-10.107 9.874-5.053 7.193-4.519 8.604-8.643 13.542-18.484 32.156z"
    />
  );
};

export default SantaFe;