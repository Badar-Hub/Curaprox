<template>
  <div>
    <Header2>
      <li>
        <a href="#/be-you">[BE YOU.]</a>
      </li>
      <li>
        <a href="#/black-is-white">BLACK IS WHITE</a>
      </li>
    </Header2>
    <Slider3
      v-bind="SliderContent"
      image="curaprox-toothpaste-overview-beyou-candy-heart-header-1200x750.jpg"
    >
      <template v-slot:textOverlay>
        <p>TOOTHPASTE [BE YOU.]</p>
        <h2>
          HOW
          <br />GENTLE
          <br />WHITENING
          <br />WORKS
        </h2>
        <p>
          Six zesty flavours. Six vibrant colours. Long-
          <br />lasting freshness. Gentle, natural whitening.
          <br />A new dimension in oral health.
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
    <dftc v-bind="dftc" />
    <GifComponent img="curaprox-toothpaste.gif" />

    <FloatingText
      h2-text="Why [BE YOU.]?  Whitening vs Bleaching…The vibrant colours. The zesty, fresh flavours. Gentle whitening with a natural enzyme that also takes care of your tooth enamel and gums. [BE YOU.] Beautiful inside and out."
    />

    <Slider5>
      <div
        style="display:flex; flex-direction:column; justify-content:center"
        :style="`background-image: url(${require('@/assets/img/curaprox-toothpaste-beyou-face-fullwith-1200x730.jpg')})`"
        class="imgBack-inner"
      >
        <div class="heading">
          <h3>
            SMALL BRUSH…
            <br />BIG DIFFERENCE
          </h3>
          <p>
            Glucose oxidase sounds a bit scary. But it’s
            <br />actually a natural enzyme that whitens your
            <br />teeth gently – without bleaching agents – and
            <br />takes care of your tooth enamel and gums at
            <br />the same time. Magic.
          </p>
        </div>
      </div>
      <hr style="margin:0 auto; max-width:1200px;" />
      <div class="hidden">
        <h3>SMALL BRUSH… BIG DIFFERENCE</h3>
        <p>Bigger is not always better. Small brush head. Huge cleaning power.</p>
      </div>
      <div class="txt">
        <div class="c1">
          <h4>
            <strong>Gentle, natural, whitening – enzymatically</strong>
          </h4>
          <p>
            Beautiful, healthy-looking teeth give you self-confidence
            and joie de vivre. But whitening in the usual way is painful.
            And it can be harmful. Unlike [BE YOU.] whitening toothpaste.
            Why? It whitens enzymatically…
          </p>
        </div>
        <div class="c1">
          <h4>
            <strong>An enzyme, a natural process, whiter teeth</strong>
          </h4>
          <p>
            [BE YOU.] contains glucose oxidase – a natural enzyme. It’s a
            protein that starts a metabolic process. Glucose oxidase in the
            mouth leads to the formation of oxygen… which, in turn, leads
            to gentle whitening.
          </p>
        </div>
        <div class="c1">
          <h4>
            <strong>Two highly-desirable side effects</strong>
          </h4>
          <p>
            Firstly… i) the glucose oxidase transforms into hydrogen peroxide
            in saliva ii) This directly combats bacteria. Secondly… i) It activates the
            lactoperoxidase system of the saliva ii) This also has an antibacterial – as well
            as an antiviral and antifungal – effect.
          </p>
        </div>
        <div class="c1">
          <h4>
            <strong>Tooth enamel… “I love you, honey”</strong>
          </h4>
          <p>
            No harmful bleaching. No grinding down. Not only does the enamel remain intact but
            it becomes brighter and whiter. All thanks to glucose oxidase – an enzyme so natural
            that bees use it to keep germs away from their honey.
          </p>
        </div>
        <div class="c1">
          <h4>
            <strong>When smiling is naturally easy</strong>
          </h4>
          <p>
            Despite rejecting the usual harsh ingredients associated with whitening…
            [BE YOU.] is a supremely effective whitening system. And a completely natural
            whitening system – thanks to our friend glucose oxidase.
          </p>
        </div>
      </div>
    </Slider5>
    <ProFeaturedComponent img="toothbrush-cs5460-mood-beyou-pink-1200x600.jpg">
      <template v-slot:text>
        <h2>CS 5460</h2>
        <h3>
          THE MOST EFFECTIVE
          <br />TOOTHBRUSH IN THE WORLD?
        </h3>
        <p>
          <span style="color:#0167b1;">
            <a href="link1.href">Learn More</a>
            >
          </span>
          <span style="color:#0167b1;">
            <a href="link2.href">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <CategoryComponent
      img-right="curaprox-more-travel-set-pink.jpg"
      img-left="need-post-cleen-teeth.jpg"
    >
      <template v-slot:left>
        <h2>CLEAN TEETH</h2>
        <h3>THE ULTIMATE GUIDE</h3>
        <div class="onel">
          <p>
            <a style="color:#0167b1" href="#">Learn More</a>
          </p>
          <p>
            <a style="color:#0167b1" href="#">Buy</a>
          </p>
        </div>
      </template>
      <template v-slot:right>
        <h2 style="color:white">TRAVEL SET</h2>
        <h3 style="color:white">
          BRUSH YOUR TEETH
          <br />ON THE MOVE
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
    </CategoryComponent>
    <TextBlockWithImg
      img="curaprox-related-product-toothpaste-enzycal-400x250.png"
      h2Text="ENZYCAL TOOTHPASTE"
      h3Text="GENTLE, MILD, EFFECTIVE"
    />
    <TextBlockWithImg
      img="curaprox-related-product-toothpaste-biw-400x250.png"
      h2Text="BLACK IS WHITE"
      h3Text="HELLO GENTLE TOOTH CARE. GOODBYE STAINS"
    />
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import Slider3 from "../components/Layout/Slider3";
import Slider5 from "../components/Layout/Slider5";
import SubPage from "../components/SP/SubPage";
import dftc from "../components/SP/DoubleFloatingTextComponent";
import GifComponent from "../components/SP/GifComponent";
import FloatingText from "../components/SP/FloatingText";
import CategoryComponent from "../components/SP/CategoryComponent";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import TextBlockWithImg from "../components/SP/TextBlockWithImg";
import Footer from "../components/Layout/Footer";
export default {
  name: "Cs5460",
  components: {
    Header2,
    Slider3,
    Slider5,
    SubPage,
    dftc,
    GifComponent,
    FloatingText,
    ProFeaturedComponent,
    CategoryComponent,
    TextBlockWithImg,
    Footer,
  },
  data() {
    return {
      textSlider: {
        h2text: "ONE TOOTHPASTE. SIX ASTONISHING FLAVOURS",
        ptext:
          "Colours beautiful enough to brighten up a Monday morning. Flavour combinations with the wow factor. Choose depending on your mood. Funky fresh, healthy mouth guaranteed.",
        img: "curaprox-toothpaste-overview-beyou-flavours-gray-585x550.jpg",
      },

      dftc: {
        left: {
          title: "STAY FRESH FOR HOURS ",
          desc:
            "Plus power balls with extra menthol for long-lasting fresh breath. Be you.Feel fresh, feel confident… long after brushing your teeth. Power bubbles in the toothpaste give you a refreshing and long-lasting blast of menthol. ",
        },

        right: {
          title: "HERBAL HEALING",
          desc:
            "Beautiful herbs and natural ingredients – including extracts of echinacea, bitter orange, devil’s claw and Indian pennywort – nourish the tissue that lines your mouth... and help to stop inflammation.",
        },
      },

      SliderContent: {
        content1: {
          img: "Curaprox_Badge_Hydrosonic.png",
          pText:
            "Brighten up your oral routine – perfect with manual and sonic toothbrushes",
        },
        content2: {
          img: "Curaprox_Badge_Zahl-100-Prozent.png",
          pText:
            "Natural ingredients only – we hate SLS, Triclosan, bleaches and plastic microbeads",
        },
        content3: {
          img: "Curaprox_Badge_Zahn-Schaum.png",
          pText: "Fresh, vibrant, gentle – a revolution for your oral health",
        },
        content4: {
          img: "Curaprox_Badge_Vegan.png",
          pText: "Vegan vibes – strictly no animal products",
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
    };
  },
};
</script>

<style>
</style>