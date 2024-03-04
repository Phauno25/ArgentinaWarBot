import React from "react";
import Provincia from "./Provincia";

const RioNegro: React.FC<{ province: object }> = ({ province }) => {
  return (
    <Provincia
      owner={province.owner}
      id={province.name}
      d="M282.005 500.718c-.519-3.028-.13-7.02-.13-7.02l.52-.414-.65-.552.13-1.1 1.687-1.926-.13-4.404-.519-.688-.39-9.497 1.298-1.378-.26-1.514-1.426-2.065-1.817-3.167-1.297-2.613-.26-3.166-.908-.826.26-3.58-.909-.688.13-.688-.519-.138-.13-4.817-.778-.55.13-3.304-.908.138.389-4.267 1.686-4.954.909-2.89 2.076-2.067.778-2.202 4.283.413-.908-1.65-1.038-1.24 2.336-.276 4.931 1.378c-.174 1.677-1.04 3.006-3.591 2.72-1.728-.193-2.203 3.188 1.388 2.786l.128-.964 4.283-.137.39 1.24c4.356.156 4.29-.607 8.045 1.787l1.815-.135v1.099l2.075.275 2.078 1.652 2.595.826 2.335 2.615 3.114.135.908 1.101 2.076-.412 6.747 3.853 2.465 2.478 18.555-.138c2.336-1.376 12.198-.275 12.198-.275l3.114-1.925c2.823-2.291 4.35-4.62 8.431-6.018l-4.8-5.69-3.857-5.285-4.245-2.218c-4.628-3.718-13.116-4.708-12.918-8.32l-.354-71.054-8.807-3.287-4.073-6.867-10.9-7.293-9.212-3.305-9.992-3.854-12.326-3.301-14.663-.69-11.158 1.516-7.916-1.79-2.724-.825-2.206.963-4.022 1.376h-3.763l-4.54-2.202-15.182-.69-5.84-1.099-2.595-.69-3.114-3.716-1.817-2.613-10.25-6.607-4.021-.137-3.244-1.101-2.206-1.514-.906-3.716-2.078-2.202-5.449-.276-6.876.276-3.503-.826-8.565-2.067-1.815-1.926-3.244-3.992-3.243-5.092 5.45-9.499 2.075-6.33-.39-3.855-1.298-2.477-1.947-2.477-1.946-1.652-2.465.415-2.205 1.1-3.244-.414-3.242-.963-5.191.55 3.243 66.07 2.336 4.127 2.075 4.681.65 4.953 2.335 3.991-.65 1.79-4.931.137-3.763 2.066-4.54 3.166-5.58.55-2.984 2.203-3.375 6.883-6.487 11.837-18.685 16.104-4.152 5.643-5.449 2.478-2.077-.138-2.076 2.755-2.076 2.475-4.932 2.204-1.557 3.028 1.429 11.425-2.984 2.478-.391 4.542-2.597 7.157-4.8 4.68-12.587 3.855-8.304 3.578-2.595 1.24-3.892 4.68-2.206 5.094 1.298 6.194 1.17 5.92-1.688 2.475-3.243 3.03-7.914.138-18.685 2.064-1.168 4.13-.65 6.468 3.243 8.946 1.557 7.157 1.557 11.425 3.763 6.194.26 4.406c123.798-9.951 174.41-19.04 265.214-19.414z"
    />
  );
};

export default RioNegro;
