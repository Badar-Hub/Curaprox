<template>
  <div>
    <Header2 />
    <Slider2 />
    <SubPage v-bind="textSlider" />
    <SubPage
      row-direction="row-reverse"
      :h2text="text2Slider.h2text"
      :ptext="text2Slider.ptext"
      :img="text2Slider.img"
    />
    <SubPage v-bind="text3Slider" />
    <FloatingText
      h2-text="Experience the difference."
      p-text="Dental professionals have been recommending our toothbrushes for more than 40 years. Once you’ve tried these brushes… you won’t go back. Developed and manufactured in Switzerland."
    />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import Slider2 from "../components/Layout/Slider2";
import SubPage from "../components/SP/SubPage";
import FloatingText from "../components/SP/FloatingText";
export default {
  name: "Cs5460",
  components: {
    Header2,
    Slider2,
    SubPage,
    FloatingText,
  },
  data() {
    return {
      textSlider: {
        h2text: "5,460 GOOD REASONS",
        ptext:
          "You can rely on the CS 5460 to remove plaque, prevent enamel damage… and care for your teeth and gums gently and effectively. Why? Ultra-fine, gentle CUREN® filaments (instead of conventional nylon bristles). 5,460 of them.",
        img: "curaprox-toothbrush-overview-filaments.jpg",
      },
      text2Slider: {
        h2text: "SMALL AND COMPACT BRUSH HEAD",
        ptext:
          "The compact head finds all the hard-to-reach-spots – behind the molars and premolars, for example. And it actually bends. For that beautiful, clean teeth feeling.",
        img: "curaprox-toothbrush-overview-small-head.jpg",
      },
      text3Slider: {
        h2text: "GET THE ANGLE RIGHT…",
        ptext:
          "… for optimal cleaning. Tilt the brush at a 45 degree angle – half on the tooth, half on the gum. Move in small, gentle circles – almost without any pressure. Nice and easy.",
        img: "curaprox-toothbrush-overview-angledhead-hand.jpg",
      },
    };
  },
};
</script>

<style>
</style>