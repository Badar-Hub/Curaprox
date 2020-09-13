<template>
  <div>
    <Header2 />
    <ProFeaturedComponent
      img="toothbrush-cs5460-mood-beyou-1200x600.jpg"
      h2-text="HYDROSONIC PRO"
      h3-text="PROFESSIONAL \n DENTAL CLEANING \n EVERY DAY"
      :link1="{
    href: '#',
    text:'Learn More'
    }"
      :link2="{
    href: '#',
    text:'Buy'
    }"
    />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import ProFeaturedComponent from "../components/SP/ProFeaturedComponent";
export default {
  name: "Toothbrush",
  components: {
    Header2,
    ProFeaturedComponent,
  },
};
</script>

<style scoped>
h2 {
  color: black;
}
h3 {
  color: black;
}
</style>