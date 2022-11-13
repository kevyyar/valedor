import ImageSlider from "@/components/SliderShowcase/ImageSlider/ImageSlider";
import SliderInfo from "@/components/SliderShowcase/SliderInfo/SliderInfo";

import SliderShowcaseStyles from "./SliderShowcaseStyles.module.css";

const SliderShowcase = () => {
  return (
    <div className={SliderShowcaseStyles.container}>
      <SliderInfo />
      <ImageSlider />
    </div>
  );
};

export default SliderShowcase;
