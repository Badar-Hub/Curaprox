<template>
  <div>
    <Header2>
      <li>
        <a class="font-futura-semi-medium" href="#/InterdentalBrushes"
          >INTERDENTAL BRUSHES</a
        >
      </li>
    </Header2>
    <Slider3
      v-bind="SliderContent"
      image="idb-overview-header-prime-colorfull-1200x600.jpg"
    >
      <template v-slot:textOverlay>
        <p>CPS INTERDENTAL BRUSHES</p>
        <h2>
          THE
          <br />INTERDENTAL <br />SECRET
        </h2>
        <p>
          So what’s the secret to exceptional cleanliness
          <br />in those difficult-to-reach narrow spaces <br />between the
          teeth? Super-fine, extra-long, <br />ultra-resilient filaments. Gentle
          and effective <br />cleaning with a single-brush action. Once a day.
        </p>
      </template>
      <template v-slot:smShow>
        <p>CPS INTERDENTAL BRUSHES</p>
        <h2>THE INTERDENTAL SECRET</h2>
        <p>
          So what’s the secret to exceptional cleanliness in those
          difficult-to-reach narrow spaces between the teeth? Super-fine,
          extra-long, ultra-resilient filaments. Gentle and effective cleaning
          with a single-brush action. Once a day.
        </p>
      </template>
    </Slider3>
    <SubPage v-bind="textSlider" />
    <dftc v-bind="dftc" />
    <SubPage row-direction="row-reverse" v-bind="text2Slider" />
    <FloatingText
      h2-text="Dr.Rolf Kufus recommends:  I love Curaprox interdental brushes. I recommend CPS prime for narrow interdental spaces and the CPS perio for larger interdental spaces."
    />
    <BrushingText
      h3Text="INTERDENTAL BRUSHES"
      h2Text="CLEANING IN TIGHT SPACES"
      pText="The front teeth, especially the lower ones, can be particularly close together. Flossing can be the best way to get into these interdental spaces to clean. Dental floss – especially when made of thick, fleecy thread – can also be used to effectively take care of dental implants."
    />
    <TextWithImg v-bind="TxtImg">
      <Modal width="1198px" v-model="toggle">
        <iframe
          width="1198"
          height="674"
          src="https://www.youtube.com/embed/u_mOwkUmbZg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Modal>
      <button @click="toggle = !toggle">How to brush - the video</button>
    </TextWithImg>
    <div class="row">
      <button class="btn">SHOP NOW</button>
    </div>
    <ProFeaturedComponent img="need-gumcare-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:white;">GUM CARE</h2>
        <h3 style="color:white;">
          HOW TO DEAL WITH
          <br />AND PREVENT <br />BLEEDING GUMS
        </h3>
        <p>
          <span style="color:white;">
            <a href="http://curaprox.cf/blog/#/gum-care">Learn More</a>
            >
          </span>
          <span style="color:white;">
            <a href="http://curaprox.cf/#/shop">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <CategoryComponent
      img-right="toothbrush-cs5460-mood-beyou-585x600.jpg"
      img-left="toothbrush-single-1006-585x600.jpg"
    >
      <template v-slot:left>
        <h2 style="color:white">CS SINGLE</h2>
        <h3 style="color:white">TOOTH BY TOOTH</h3>
        <div class="onel">
          <p>
            <a style="color:white" href="http://curaprox.cf/#/Cs1006"
              >Learn More</a
            >
          </p>
          <p>
            <a
              style="color:white"
              href="http://curaprox.cf/#/shop/5fb61d9d782b62d5d5bf0264"
              >Buy</a
            >
          </p>
        </div>
      </template>
      <template v-slot:right>
        <h2 style="color:black">CS 5460</h2>
        <h3 style="color:black">
          WHEN YOUR GUMS
          <br />FALL IN LOVE
        </h3>
        <div class="onel">
          <p>
            <a style="color:#0167b1" href="http://curaprox.cf/#/Cs5460"
              >Learn More</a
            >
          </p>
          <p>
            <a
              style="color:#0167b1"
              href="http://curaprox.cf/#/shop/5f82043e4a427122f3318fb2"
              >Buy</a
            >
          </p>
        </div>
      </template>
    </CategoryComponent>
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import Slider3 from "../components/Layout/Slider3";
import SubPage from "../components/SP/SubPage";
import dftc from "../components/SP/DoubleFloatingTextComponent";
import BrushingText from "../components/SP/BurshingText";
import FloatingText from "../components/SP/FloatingText";
import TextWithImg from "../components/SP/TextWithImg";
import CategoryComponent from "../components/SP/CategoryComponent";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import Footer from "../components/Layout/Footer";
export default {
  name: "Cs5460",
  components: {
    Header2,
    Slider3,
    SubPage,
    FloatingText,
    dftc,
    BrushingText,
    TextWithImg,
    ProFeaturedComponent,
    CategoryComponent,
    Footer,
  },
  data() {
    return {
      toggle: false,
      textSlider: {
        h2text: "THE PERFECT INTERDENTAL BRUSHES FOR YOU – GUARANTEED",
        ptext:
          "The CPS range has the right interdental brushes for everyone. For natural teeth, for implants, for the narrowest spaces, for the larger spaces, for implants, for crowns, for bridges, for after surgery… for everyone.",
        img: "curaprox-idb-overview-prime-perio-range-horizont-585x550.jpg",
      },

      dftc: {
        left: {
          title: "GREAT RESULTS… EVEN WITH BRACES ",
          desc:
            "Let’s be honest. Nasty stuff can build up between your braces and your teeth. Now you can eliminate it with interdental brushes – easily clean those hard-to-reach spots. Another simple way to improve your oral health.",
        },

        right: {
          title: "THE CURAPROX CLICK-SYSTEM: KINDER ON THE PLANET",
          desc:
            "You can buy all our interdental brushes in environmentally friendly refill packs… that work with all our interdental brush holders. Click the old brush away. Click the new brush on. Away you go. Super convenient. Less waste.",
        },
      },

      text2Slider: {
        h2text: "THE PERSONAL CHOICE: INTERDENTAL BRUSH HOLDERS",
        ptext:
          "Which do you prefer? Plastic or aluminium? Straight or bent? Short handle or long handle? Click or rotate? All our interdental brushes fit all our holders. Oral health done your way.",
        img: "curaprox-idb-overview-halter-585x550.jpg",
      },

      SliderContent: {
        content1: {
          img: "Curaprox_Badge_Interdental.png",
          pText: "A selection of sizes – the right brush for every space",
        },
        content2: {
          img: "Curaprox_Badge_Zwischen-Zahnen.png",
          pText: "All-round oral hygiene starts between the teeth",
        },
        content3: {
          img: "Curaprox_Badge_Click.png",
          pText:
            "Good for the environment: Our interdental brush refill system helps to reduce plastic waste",
        },
        content4: {
          img: "Curaprox_Badge_SwissMade.png",
          pText: "Beautiful, functional Swiss design: Once in and out. Done",
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
          h2Text: "ONCE IN AND OUT. DONE.",
          pText:
            "So easy. And yet so effective in combating dental caries, gingivitis, periodontitis and halitosis. Just clean your interdental spaces once a day. And don’t worry about learning all those fancy words.",
        },
        category1: {
          img: "idb-rein.png",
          pText:
            "Position the CPS interdental brush at a slight angle in front of the interdental gap – the space between the teeth.",
        },
        category2: {
          img: "idb-raus.png",
          pText:
            "Push it in: Just a little at first, then straighten it and push it right through.",
        },
        category3: {
          img: "idb-fertig.png",
          pText: "Pull it out: Very gently. Done. Move on to the next one.",
        },
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3% 0;
}
.btn {
  padding: 15px;
  border-radius: 10%;
  font-size: 1.5rem;
  color: white;
  background-color: #0167b1;
}
</style>
