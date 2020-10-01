<template>
  <div>
    <Header2 />
    <ImgWithText>
      <template>
        <div class="img">
          <img src="@/assets/img/blog/need-ortho-cover-800x480.jpg" />
        </div>
        <div class="text">
          <a href="#">Teeth</a>,
          <a href="#">Care</a>
          <h2>HOW DO I LOOK AFTER MY BRACES? THE ULTIMATE GUIDE</h2>
        </div>
      </template>
    </ImgWithText>
    <CategoryBlog>
      <template>
        <div class="c1">
          <img src="@/assets/img/blog/need-gumcare-800x480.jpg" />
          <div class="text">
            <a href="#">Gum</a>,
            <a href="#">Care</a>
            <h2>Taking care of your gums: The Ultimate Guide</h2>
          </div>
        </div>
        <div class="c1">
          <img src="@/assets/img/blog/need-replace-toothbrush-thumbnail-new-800x480.jpg" />
          <div class="text">
            <a href="#">Gum</a>,
            <a href="#">Care</a>
            <h2>How often should you replace your toothbrush?</h2>
          </div>
        </div>
        <div class="c1">
          <img src="@/assets/img/blog/need-post-cleen-teeth-lily-1-800x480.jpg" />
          <div class="text">
            <a href="#">Gum</a>,
            <a href="#">Care</a>
            <h2>Clean Teeth: The Ultimate Guide</h2>
          </div>
        </div>
      </template>
    </CategoryBlog>
    <FeaturedPosts />
    <Footer />
  </div>
</template>

<script>
import Header2 from "../components/Layout/Header2";
import ImgWithText from "../components/Pages/blog/ImgWithText";
import CategoryBlog from "../components/Pages/blog/CategoryBlog";
import FeaturedPosts from "../components/Pages/blog/FeaturedPosts";
import Footer from "../components/Layout/Footer";
export default {
  components: {
    Header2,
    ImgWithText,
    CategoryBlog,
    FeaturedPosts,
    Footer,
  },
};
</script>

<style scoped>
</style>