<template>
  <div>
    <Header2>
      <!-- <li>
        <a href="#/be-you">[BE YOU]</a>
      </li>
      <li>
        <a href="#/black-is-white">BLACK IS WHITE</a>
      </li>-->
    </Header2>
    <Slider3
      v-bind="SliderContent"
      style="color:white; background-color:black"
      image="curaprox-toothpaste-overview-biw-header-black-1200x750.jpg"
    >
      <template v-slot:textOverlay>
        <p>TOOTHPASTE BLACK IS WHITE</p>
        <h2>
          WHITER
          <br />TEETH – THE
          <br />GENTLE WAY
        </h2>
        <p>
          Black Is White toothpaste removes stains gently.
          <br />No bleaching agents. No harsh, abrasive
          <br />ingredients. The activated carbon simply
          <br />absorbs unattractive, discoloured particles
          <br />caused by things like smoking, coffee or red
          <br />wine.
        </p>
      </template>
      <template v-slot:smShow>
        <p>TOOTHPASTE BLACK IS WHITE</p>
        <h2>WHITER TEETH – THE GENTLE WAY</h2>
        <p>Black Is White toothpaste removes stains gently. No bleaching agents. No harsh, abrasive ingredients. The activated carbon simply absorbs unattractive, discoloured particles caused by things like smoking, coffee or red wine.</p>
      </template>
    </Slider3>
    <SubPage v-bind="textSlider" />
    <SubPage row-direction="row-reverse" v-bind="text2Slider" />
    <SubPage v-bind="text3Slider" />
    <GifComponent img="curaprox-toothpaste-biw-image-fullwith-1200x400.jpg" />
    <FloatingText
      h2-text="Why Black Is White?  Beautiful, whiter teeth give you new confidence. But normal whitening toothpastes are harmful. Curaprox – the oral health experts – show that you can have the best of both worlds. Gentle, natural, effective whitening with activated carbon."
    />

    <ProFeaturedComponent img="need-post-whitening-new-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:white">WHITENING</h2>
        <h3 style="color:white">
          WHITER, BRIGHTER TEETH –
          <br />THE GENTLE WAY
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
    <!-- <CategoryComponent
      img-right="curaprox-toothpaste-teaser-biw-sonic-toothbrush-585x600.jpg"
      img-left="curaprox-toothpaste-teaser-biw-585x600.jpg"
    >
      <template v-slot:left>
        <h2 style="color:white">CS 5460</h2>
        <h3 style="color:white">
          THE MOST EFFECTIVE
          <br />TOOTHBRUSH IN THE
          <br />WORLD?
        </h3>
        <div class="onel">
          <p>
            <a style="color:white" href="#">Buy</a>
          </p>
        </div>
      </template>
      <template v-slot:right>
        <h2 style="color:white">BLACK IS WHITE HYDROSONIC</h2>
        <h3 style="color:white">
          ORAL HEALTH GETS AN
          <br />ELEGANT MAKEOVER
        </h3>
        <div class="onel">
          <p>
            <a style="color:white" href="#">Learn More</a>
          </p>
          <p>
            <a style="color:white" href="#">Buy</a>
          </p>
        </div>
      </template>
    </CategoryComponent> -->
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import Slider3 from "../components/Layout/Slider3";
import GifComponent from "../components/SP/GifComponent";
import SubPage from "../components/SP/SubPage";
import FloatingText from "../components/SP/FloatingText";
// import CategoryComponent from "../components/SP/CategoryComponent";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import Footer from "../components/Layout/Footer";
export default {
  name: "Cs5460",
  components: {
    Header2,
    Slider3,
    GifComponent,
    SubPage,
    FloatingText,
    ProFeaturedComponent,
    // CategoryComponent,
    Footer,
  },
  data() {
    return {
      textSlider: {
        h2text: "WHEN BLACK BECOMES WHITE",
        ptext:
          "A charcoal toothpaste that’s as black as night. The activated carbon simply absorbs unattractive, discoloured particles caused by things like smoking. Gentle, effective whitening. ",
        img: "curaprox-toothpaste-overview-biw-gray-cool-585x550.jpg",
      },
      text2Slider: {
        h2text: "DISCOLOURED PARTICLES – GENTLY AWAY",
        ptext:
          "Bleach? No. Other harsh, abrasive chemicals? No. Activated charcoal? Naturally. It gently absorbs discoloured particles. Hydroxyapatite – a rare but naturally occurring mineral – also replaces lost minerals and calcium in your tooth enamel… and creates a soothing, protective layer of artificial enamel.",
        img: "curaprox-sonic-toothbrush-overview-biw-carbon-585x550.jpg",
      },
      text3Slider: {
        h2text: "A NATURAL SMILE – OUR GIFT TO",
        ptext:
          "SLS, Triclosan and other nasties… are not what we want for you. We want you to enjoy exceptional oral health and whiter teeth – naturally.",
        img: "curaprox-toothpaste-overview-biw-freesls-585x550.jpg",
      },

      SliderContent: {
        content1: {
          img: "Curaprox_Badge_Smiley-Weiss.png",
          pText:
            "Something to make you smile – white teeth without harsh, painful chemicals",
        },
        content2: {
          img: "Curaprox_Badge_Carbon_negativ.png",
          pText:
            "Activated carbon simply absorbs unattractive stains – naturally",
        },
        content3: {
          img: "Curaprox_Badge_Zahn-Glanz.png",
          pText:
            "A filter in the toothpaste absorbs yellow light on the tooth’s surface. The tooth appears even whiter!",
        },
        content4: {
          img: "Curaprox_Badge_Zahl-100-Prozent_negativ.png",
          pText:
            "Gentle, harmless-but-effective ingredients only. No SLS, no Triclosan, no bleaches, no plastic microbeads",
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