<template>
  <div>
    <div class="grid-container">
      <div class="navbar">
        <h3>Topics</h3>
        <h4>Gum</h4>
        <h4>Sensitivity</h4>
        <h4>Implant</h4>
        <h4>Teeth</h4>
        <h4>Whitening</h4>
        <h4>Care</h4>
        <h4>Baby</h4>
      </div>
      <div class="featured-container">
        <h3>Featured Posts</h3>
        <div class="container">
          <div class="c1">
            <img src="@/assets/img/blog/need-post-whitening-new-800x480-web.jpg" />
            <div class="text">
              <a href="#">Teeth</a>,
              <a href="#">Whitening</a>
              <h5>Teeth Whitening Toothpaste</h5>
            </div>
          </div>
          <div class="c1">
            <img src="@/assets/img/blog/need-soother-800x480.jpg" />
            <div class="text">
              <a href="#">Baby</a>
              <h5>
                Dummies, Soothers,
                <br />Pacifiers: The Ultimate Guide
              </h5>
            </div>
          </div>
          <div class="bgimg">
            <div class="txtbg">
              <p>Sensitivity, Teeth</p>
              <h3>
                Sensitive Teeth: The
                <br />Ultimate Guide
              </h3>
            </div>
          </div>
          <div class="c1">
            <img src="@/assets/img/blog/need-babys-header-800x480.jpg" />
            <div class="text">
              <a href="#">Teeth</a>,
              <a href="#">Care</a>,
              <a href="#">Baby</a>
              <h5>How do I take care of my child's teeth?</h5>
            </div>
          </div>
          <div class="c1">
            <img src="@/assets/img/blog/curaprox-need-fresh-breath-800x480.jpg" />
            <div class="text">
              <a href="#">Teeth</a>,
              <a href="#">Care</a>
              <h5>
                How Do I Get Rid Of Bad
                <br />Breath? The Ultimate Guide
              </h5>
            </div>
          </div>
          <div class="bgimg1">
            <div class="txtbg1">
              <p>Teeth, Care, Baby</p>
              <h3>
                How Do I Look After My
                <br />Oral Health During
                <br />Pregnancy – The Ultimate
                <br />Guide
              </h3>
            </div>
          </div>
          <div class="c1">
            <img src="@/assets/img/blog/need-implant-800x480.jpg" />
            <div class="text">
              <a href="#">Implant</a>,
              <a href="#">Care</a>
              <h5>
                How Do I Look After My
                <br />Dental Implants? The
                <br />Ultimate Guide
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 1200px;
  margin: auto;
  text-align: left;
}

.bgimg {
  margin-bottom: 5%;
  display: flex;
  background-image: url("../../../assets/img/blog/need-post-sensitive-teeth-florian-1-800x480.jpg");
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.bgimg .txtbg {
  margin: auto;
  text-align: center;
}

.bgimg1 {
  margin-bottom: 5%;
  display: flex;
  background-image: url("../../../assets/img/blog/need-pragnancy-800x480.jpg");
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.bgimg1 .txtbg1 {
  margin: auto;
  text-align: center;
}

.navbar {
}

.c1 {
  display: flex;
  padding-bottom: 2.2rem;
}

.c1 .text {
  padding-left: 1.7rem;
}

a {
  color: #ff8484;
  text-decoration: none;
}

a:hover {
  color: #9ea8a8;
}

h3 {
  font-size: 2rem;
}

h4 {
  font-size: 1.1rem;
}

h5 {
  font-size: 2rem;
  margin-top: 20px;
}

p {
  font-size: 1.3rem;
  margin-top: 0;
}

h2 {
  font-size: 2.5rem;
  text-transform: uppercase;
}

.c1 img {
  max-width: 261px;
  width: 100%;
  height: auto;
}

@media (max-width: 629px) {
  .navbar {
    display: none;
  }
  .grid-container {
    grid-template-columns: 1fr;
    width: 85%;
    margin: auto;
    text-align: left;
  }
  .c1 {
    flex-direction: column;
  }

  img {
    max-width: 500px;
    padding-bottom: 30px;
  }
  .text {
    padding-left: 0 !important;
  }
}
</style>