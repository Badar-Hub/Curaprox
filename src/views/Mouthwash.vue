<template>
  <div>
    <Header2>
      <li>
        <a class="font-futura-semi-medium" href="#/MouthwashPerio">MOUTHWASH PERIO</a>
      </li>
    </Header2>
    <ProFeaturedComponent img="curaprox-others-perioplus-range-full-1200x600.jpg">
      <template v-slot:text>
        <h2 style="color:black;">PERIO PLUS+</h2>
        <h3 style="color:black;">
          NATURALLY EFFECTIVE
          <br />MOUTHWASHES
        </h3>
        <p>
          <span style="color:#0167b8;">
            <a href="link1.href">Learn More</a>
            >
          </span>
          <span style="color:#0167b8;">
            <a href="link2.href">Buy</a>
            >
          </span>
        </p>
      </template>
    </ProFeaturedComponent>
    <img style="max-width:1200px; margin:auto" src="@/assets/pdf/01.jpg" />
    <img style="max-width:1200px; margin:auto" src="@/assets/pdf/02.jpg" />
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
import Footer from "../components/Layout/Footer";
export default {
  name: "Toothbrush",
  components: {
    Header2,
    ProFeaturedComponent,

    Footer,
  },

  data() {
    return {};
  },
  mounted(){
    window.scrollTo(0,0);
  }
};
</script>

<style scoped>
img {
  max-width: 1200px;
  margin: auto;
  width: 100%;
}
</style>