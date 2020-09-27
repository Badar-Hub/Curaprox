<template>
  <div>
    <Header2>
      <li>
        <a href="#/Cs5460">CS 5460</a>
      </li>
      <li>
        <a href="#/Cs1006">CS 1006</a>
      </li>
    </Header2>
    <Slider3
      v-bind="SliderContent"
      image="curaprox-toothbrush-overview-header-single-pink-blue-1200x800.jpg"
    >
      <template v-slot:textOverlay>
        <p>CS SINGLE TOOTHBRUSH</p>
        <h2>
          WHEN LESS
          <br />IS MORE
        </h2>
        <p>
          Plaque on the teeth and in the gumline.
          <br />Discoloured particles. The CS single cleans up –
          <br />even in those hard-to-reach-spots. It’s like
          <br />having a personal dental hygienist in your
          <br />bathroom.
        </p>
      </template>
      <template v-slot:smShow>
        <p>CS SINGLE TOOTHBRUSH</p>
        <h2>
          WHEN LESS
          IS MORE
        </h2>
        <p>
          Plaque on the teeth and in the gumline. Discoloured particles. The CS single cleans up – even in those hard-to-reach-spots. It’s like
          having a personal dental hygienist in your bathroom.
        </p>
      </template>
    </Slider3>
    <DFTC v-bind="dftc" />
    <Slider5>
      <div
        :style="`background-image: url(${require('@/assets/img/curaprox-toothbrush-single-white-1200x550.jpg')})`"
        class="imgBack-inner"
      >
        <div class="heading">
          <h3>
            SMALL BRUSH…
            <br />BIG DIFFERENCE
          </h3>
          <p>
            Bigger is not always better. Small brush head. Huge cleaning
            <br />power.
          </p>
        </div>
      </div>
      <div class="hidden">
        <h3>SMALL BRUSH… BIG DIFFERENCE</h3>
        <p>Bigger is not always better. Small brush head. Huge cleaning power.</p>
      </div>
      <div class="txt">
        <div class="c1">
          <h4>
            <strong>Old ways. New technology.</strong>
          </h4>
          <p>
            Old ways. New technology.In the olden days – before the
            modern toothbrush was invented – people were already brushing
            their teeth. They chewed twigs or roots until the ends frayed…
            and used them as toothbrushes. The CS single is inspired by this
            tradition.
          </p>
        </div>
        <div class="c1">
          <h4>
            <strong>Delicately does it</strong>
          </h4>
          <p>
            The filaments of the CS single are stiffer than the filaments in
            our other toothbrushes. Carefully place the outer bristles of the
            tuft head so they only just enter the gumline. As you carefully
            clean, tooth-by-tooth, the filaments fan up and clean in the gumline.
          </p>
        </div>
        <div class="c1">
          <h4>
            <strong>Always by your side</strong>
          </h4>
          <p>
            There’s no need for toothpaste. So you can clean with the CS single whenever
            you like… while watching a movie, reading a book, waiting for a bus, travelling
            to work on the train…
          </p>
        </div>
      </div>
    </Slider5>
    <FloatingText
      h2-text="CS single and chill. It takes a little practice to master those precise, gentle movements along the gumline. Once perfected, it’s the ultimate way to brush. Happy brushers do it while reading Facebook or watching a movie."
    />
    <SubPage
      background-color="#f9f9f9"
      row-direction="row-reverse"
      :h2text="text4Slider.h2text"
      :ptext="text4Slider.ptext"
      :img="text4Slider.img"
    />
    <TextWithImg v-bind="TxtImg">
      <button>How to brush - the video</button>
    </TextWithImg>
    <ProFeaturedComponent img="curaprox-sonic-toothbrush-teaser-pro-single-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:black;">HYDROSONIC PRO</h2>
        <h3 style="color:black;">
          SONIC TOOTHBRUSH WITH
          <br />SINGLE BRUSHHEAD
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
    <CategoryComponent img-right="cps-colors.jpg" img-left="need-teaser-gum-care-585x600.jpg">
      <template v-slot:left>
        <h2 style="color:white">GUM CARE</h2>
        <h3 style="color:white">
          SHOW THEM YOU
          <br />CARE
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
      <template v-slot:right>
        <h2>INTERDENTAL BRUSHES</h2>
        <h3>
          EFFECTIVE BRUSHING
          <br />IN THE SPACES
          <br />BETWEEN YOUR TEETH
        </h3>
        <div class="onel">
          <p>
            <a style="color:#0167b1" href="#">Learn More</a>
          </p>
          <p>
            <a style="color:#0167b1" href="#">Buy</a>
          </p>
        </div>
      </template>
    </CategoryComponent>
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
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import Slider3 from "../components/Layout/Slider3";
import DFTC from "../components/SP/DoubleFloatingTextComponent";
import Slider5 from "../components/Layout/Slider5";
import SubPage from "../components/SP/SubPage";
import FloatingText from "../components/SP/FloatingText";
import TextWithImg from "../components/SP/TextWithImg";
import CategoryComponent from "../components/SP/CategoryComponent";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import TextBlockWithImg from "../components/SP/TextBlockWithImg";
import Footer from "../components/Layout/Footer";
export default {
  name: "Cs5460",
  components: {
    Header2,
    Slider3,
    DFTC,
    Slider5,
    SubPage,
    FloatingText,
    TextWithImg,
    ProFeaturedComponent,
    CategoryComponent,
    TextBlockWithImg,
    Footer,
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

      SliderContent: {
        content1: {
          img: "Curaprox_Badge_Single-Head.png",
          pText: "A single tuft. Precise, exceptional care",
        },
        content2: {
          img: "Curaprox_Badge_Zahl-6mm.png",
          pText: "6mm-long ultra-fine CUREN® filaments",
        },
        content3: {
          img: "Curaprox_Badge_To-Go.png",
          pText: "No need for toothpaste. Perfect on-the-go",
        },
        content4: {
          img: "Curaprox_Badge_Smiley-Spange.png",
          pText: "Cleans in those hard-to-reach spots… even with braces",
        },
      },

      dftc: {
        left: {
          title: "WE ❤️ CS SINGLE",
          desc:
            "Toothbrush aficionados love making those precise, gentle movements along the gumline – cleaning in places where it hardly seems possible. Even between teeth and braces, brackets or retainers.",
        },

        right: {
          title: "WHY “CS SINGLE”?",
          desc:
            "Because all the hard work is carried out by a single tuft. Which is why it’s perfect for tooth-by-tooth and gumline cleaning. It’s the ultimate way to clean your teeth. It’s time to spend a bit of quality time with yourself.",
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
          h2Text: "CLEAN THE RIGHT WAY",
          pText:
            "Guide the CS single along your gumline with precise, gentle, movements – almost without any pressure. CURAPROX developed the CS single specifically for this brushing method – known as ‘the solo technique’.",
        },
        category1: {
          img: "Curaprox_Icons_Movement_Single_winkel.jpg",
          pText:
            "Hold your brush vertically and apply to one side of the tooth’s surface",
        },
        category2: {
          img: "Curaprox_Icons_Movement_Single_saum.jpg",
          pText:
            "Carefully move the filaments of the brush head so they’re just touching the gumline",
        },
        category3: {
          img: "Curaprox_Icons_Movement_Single_bewegung.jpg",
          pText:
            "Now move the CS single with precise, gentle, “shaking” movements along the gumline – from one side of the tooth to the other",
        },
      },
    };
  },
};
</script>

<style>
</style>