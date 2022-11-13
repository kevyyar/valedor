import ShowcaseImg from "../../assets/valedor2.png";

import ShowcaseStyles from "./Showcase.module.css";

const Showcase = () => {
  return (
    <div
      style={{
        /*backgroundImage:
          `linear-gradient(135deg, rgba(0, 0, 0, 0.8), 0%, rgba(0, 0, 0, 0.4) 50%), url(${ShowcaseImg})`,
          */
        backgroundImage: `url(${ShowcaseImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        maxWidth: "100%",
      }}
      className={ShowcaseStyles.showcaseInfo}
    >
    </div>
  );
};

export default Showcase;
