<template>
  <div>
    <Header />
     <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Layout/Header2.vue";
import Footer from "@/components/Layout/Footer.vue";
export default {
  components: { Header, Footer },
  data() {
    return {
    };
  },
  mounted() {
    window.scrollTo(0,0);
  },
};
</script>

<style scoped>
.custom-link {
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}
.custom-link:hover {
  text-decoration: underline;
}

.custom-link-sub a {
  text-decoration: none;
  color: black;
  font-size: 1rem;
}
.custom-link-sub a:hover {
  text-decoration: underline;
}
.row {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: auto;
}
.categoryBar {
  flex: 3;
}
.prod {
  flex: 9;
  justify-content: center;
  text-align: center;
}
.smrow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
select {
  height: 20px;
  margin: auto 0;
}
.subcategory {
  padding-top: 40px;
}

p {
  margin: 0;
}

@media (max-width: 765px) {
  .categoryBar {
    display: none;
  }
  .prod {
    flex: 12;
  }
}
</style>