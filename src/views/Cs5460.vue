<template>
  <div>
    <Header2 />
    <Slider2 v-bind="Slider2text1" />
    <Slider3>
      <template v-slot:textOverlay>
        <p>TOOTHBRUSH CS 5460</p>
        <h2>
          GENTAL ON
          <br />TEETH AND
          <br />GUMS
        </h2>
        <p>
          Each and every one of the 5,460 CUREN®
          <br />filaments works together to combat plaque.
          <br />Hard on plaque. Gentle on teeth and gums.
        </p>
      </template>
      <template v-slot:smShow>
        <p>TOOTHBRUSH CS 5460</p>
        <h2>
          GENTAL ON
          TEETH AND
          GUMS
        </h2>
        <p>
          Each and every one of the 5,460 CUREN®
          Hard on plaque. Gentle on teeth and gums.
        </p>
      </template>
    </Slider3>
    <SubPage v-bind="textSlider" />
    <SubPage
      row-direction="row-reverse"
      :h2text="text2Slider.h2text"
      :ptext="text2Slider.ptext"
      :img="text2Slider.img"
    />
    <SubPage v-bind="text3Slider" />
    <FloatingText
      h2-text="Experience the difference. Dental professionals have been recommending our toothbrushes for more than 40 years. Once you’ve tried these brushes… you won’t go back. Developed and manufactured in Switzerland."
    />
    <SubPage
      background-color="#f9f9f9"
      row-direction="row-reverse"
      :h2text="text4Slider.h2text"
      :ptext="text4Slider.ptext"
      :img="text4Slider.img"
    />
    <Slider2 v-bind="Slider2text2" />
    <TextWithImg v-bind="TxtImg" />
    <ProFeaturedComponent
      style="color:white"
      img="need-teaser-sensitive-teeth.jpg"
      h2Text="EXPOSED TOOTH ROOTS"
      h3Text="WHAT CAN YOU DO ABOUT THEM?"
      :link1="{
      href: '#',
      text:'Learn More'
      }"
      :link2="{
      href: '#',
      text:'Buy'
      }"
    />
    <FeaturedCategoryComponent :left="leftProFeat" :right="rightProFeat" />
    <TextBlockWithImg
      img="curaprox-related-product-toothbrush-single-green-pink.jpg"
      h2Text="CS SINGLE"
      h3Text="TOOTH BY TOOTH"
    />
    <TextBlockWithImg
      img="curaprox-related-product-toothbrush-baby-blue-pink.jpg"
      h2Text="Baby toothbrush"
      h3Text="Fun, gentle, effective – from the first tooth"
    />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import Slider2 from "../components/Layout/Slider2";
import Slider3 from "../components/Layout/Slider3";
import SubPage from "../components/SP/SubPage";
import FloatingText from "../components/SP/FloatingText";
import TextWithImg from "../components/SP/TextWithImg";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import FeaturedCategoryComponent from "../components/SP/FeaturedCategoryComponent";
import TextBlockWithImg from "../components/SP/TextBlockWithImg";
export default {
  name: "Cs5460",
  components: {
    Header2,
    Slider2,
    Slider3,
    SubPage,
    FloatingText,
    TextWithImg,
    ProFeaturedComponent,
    FeaturedCategoryComponent,
    TextBlockWithImg,
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
      text4Slider: {
        h2text: "BABY YOU’RE A FIREWORK",
        ptext:
          "After years of the same old boring choices… an explosion of beautiful, joyful colour. This toothbrush is now available in 36 colour combinations and further, limited and special editions.",
        img: "curaprox-image-text-toothbrush-colors-cs5460.jpg",
      },

      Slider2text1: {
        img: "01.jpg",
        text1: {
          img: "5460.png",
          pText:
            "5,460 filaments densely packed on the brush head to give exceptional cleaning power",
        },
        text2: {
          img: "Curaprox_Badge_Small-Head.png",
          pText: "Compact brush head. Slight angle. Optimal cleaning",
        },
        text3: {
          img: "Curaprox_Badge_Feder.png",
          pText:
            "CUREN® filaments. Incredibly gentle, incredibly thin – just 0.1mm in diameter",
        },
        text4: {
          img: "Curaprox_Badge_Zahl-45.png",
          pText:
            "Octagonal handle. It’s almost impossible NOT to clean at the correct angle",
        },
      },
      Slider2text2: {
        img: "02.jpg",
        text1: {
          img: "5460.png",
          pText:
            "Brush tooth by tooth in small, gentle circles – almost without any pressure. A multitude of ultra-fine filaments – tightly packed together – remove plaque effectively without causing damage. Hold the toothbrush loosely in your hand… like a violin bow.",
        },
        text2: {
          img: "5460.png",
          pText:
            "5,460 filaments – up to ten times the number of bristles used in conventional brushes – tightly packed together on the brush head. This extra dense cleaning surface is designed to prevent tooth decay and gum disease. The CS 5460 is plaque’s worst nightmare.",
        },
        text3: {
          img: "5460.png",
          pText:
            "But it needs gentle care. Now you can rely on gentle filaments – to remove plaque without grinding down the enamel… and to brush the gumline without hurting.",
        },
        text4: {
          img: "5460.png",
          pText: "",
        },
      },

      TxtImg: {
        txtimg: {
          h2Text: "WHAT’S THE BEST WAY TO BRUSH MY TEETH?",
          pText:
            "There are many different techniques. And every mouth, tooth and interdental space is different. But there’s a proven method that works for everyone.",
        },
        category1: {
          img: "angle.png",
          pText:
            "Start with the best angle – half on the teeth, half on the gums",
        },
        category2: {
          img: "downarrow.png",
          pText: "Clean gently… almost without any pressure",
        },
        category3: {
          img: "circle.png",
          pText: "Small, gentle circles – let your toothbrush guide you",
        },
      },

      leftProFeat: {
        img: "curaprox-more-travel-set-pink.jpg",
        h2Text: "TRAVEL SET",
        h3Text: "BRUSH YOUR TEETH ON THE MOVE",
        a1Text: "Learn More",
        a2Text: "Buy",
      },
      rightProFeat: {
        img: "need-post-cleen-teeth.jpg",
        h2Text: "GUM CARE",
        h3Text: "CLEANING INSTEAD OF SCRUBBING",
        a1Text: "Learn More",
        a2Text: "Buy",
      },
    };
  },
};
</script>

<style>
</style>