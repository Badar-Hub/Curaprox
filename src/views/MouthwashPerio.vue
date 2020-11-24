<template>
  <div>
    <Header2>
      <li>
        <a href="#/Mouthwash">MOUTHWASH</a>
      </li>
    </Header2>
    <Slider3
      v-bind="SliderContent"
      style="color:black; background-color:#f9f9f9"
      image="curaprox-perioplus.jpg"
    >
      <template v-slot:textOverlay>
        <p>PERIO PLUS+</p>
        <h2>
          NATURALLY
          <br />EFFECTIVE
          <br />MOUTHWASHES
        </h2>
        <p>
          Perio Plus+ products contain Chlorhexidine...
          <br />together with CITROX® natural bioflavonoids –
          <br />extracted from bitter oranges – to reinforce the
          <br />antibacterial effect. Recommended for gum
          <br />inflammation. Alcohol free.
        </p>
      </template>
      <template v-slot:smShow>
        <p>PERIO PLUS+</p>
        <h2>NATURALLY, EFFECTIVE, MOUTHWASHES</h2>
        <p>Perio Plus+ products contain Chlorhexidine...together with CITROX® natural bioflavonoids – extracted from bitter oranges – to reinforce the antibacterial effect. Recommended for gum inflammation. Alcohol free.</p>
      </template>
    </Slider3>
    <SubPage v-bind="textSlider" />
    <DFTC v-bind="dftc" />
    <SubPage row-direction="row-reverse" v-bind="text2Slider" />
    <FloatingText
      h2-text="Super Chlorhexidine.  Chlorhexidine has been prescribed by dentists for decades… because it works. Now we’ve reinforced the antibacterial effect of Chlorhexidine with natural CITROX®. They’re quite the power couple."
    />

    <ProFeaturedComponent img="cps-mood-yellow-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:white">INTERDENTAL BRUSHES</h2>
        <h3 style="color:white">
          EFFECTIVE BRUSHING
          <br />IN THE SPACES
          <br />BETWEEN YOUR TEETH
        </h3>
        <p>
          <span>
            <a style="color:white" href="link1.href">Learn More</a>
            >
          </span>
          <span>
            <a style="color:white" href="link2.href">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import Slider3 from "../components/Layout/Slider3";
import DFTC from "../components/SP/DoubleFloatingTextComponent";
import SubPage from "../components/SP/SubPage";
import FloatingText from "../components/SP/FloatingText";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import Footer from "../components/Layout/Footer";
export default {
  name: "Cs5460",
  components: {
    Header2,
    Slider3,
    DFTC,
    SubPage,
    FloatingText,
    ProFeaturedComponent,
    Footer,
  },
  data() {
    return {
      textSlider: {
        h2text: "MOUTHWASHES, GEL AND TOOTHPASTE WITH CHLORHEXIDINE",
        ptext:
          "What do the Forte, Protect, Balance and Regenerate mouthwashes, the Focus gel and the Support toothpaste have in common? They all combine proven Chlorhexidine with CITROX® natural bioflavonoids… to bring the uniquely strong antibacterial effect of Perio Plus + products. ",
        img: "curaprox-perioplus-overview-range-585x550.jpg",
      },
      text2Slider: {
        h2text: "NATURAL PROTECTION AGAINST BACTERIA",
        ptext:
          "Perio Plus+ products feature the proven antibacterial qualities of Chlorhexidine… strengthened by CITROX® natural bioflavonoids – extracted from bitter oranges. CITROX® also brings antioxidant and anti-inflammatory properties.",
        img: "logo-citrox-585x550.png",
      },

      dftc: {
        left: {
          title: "THE MOUTHWASH THAT TASTES GREAT",
          desc:
            "A mouthwash with Chlorhexidine that doesn’t taste bitter? Try Perio Plus+. It tastes amazing… thanks to the expertise of world-renowned Swiss flavour specialists Givaudan. And it won’t irritate the taste buds.",
        },

        right: {
          title: "EFFECTIVE PROTECTION. NO ALCOHOL.",
          desc:
            "In addition to the power of Chlorhexidine and CITROX®, Perio Plus + mouthwashes also contain the copolymer PVP-VA. This creates a strong, protective film on the teeth and gums… and combats bacteria without drying out the mouth. Alcohol? No thanks.",
        },
      },

      SliderContent: {
        content1: {
          img: "Curaprox_Badge_Citrox.png",
          pText:
            "CITROX® and Chlorhexidine: Fighting harmful oral bacteria together",
        },
        content2: {
          img: "Curaprox_Badge_Protection.png",
          pText: "Recommended for gum inflammation and periodontitis",
        },
        content3: {
          img: "Curaprox_Badge_Smiley-Geschmak.png",
          pText:
            "Protects teeth, gums and oral mucosa – the tissue that lines the mouth – from plaque regrowth",
        },
        content4: {
          img: "Curaprox_Badge_Zahn-Biofilm.png",
          pText:
            "A great taste… and it won’t irritate the taste buds. Alcohol free",
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
    };
  },
};
</script>

<style>
</style>