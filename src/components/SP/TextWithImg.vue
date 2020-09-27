<template>
  <div>
    <div class="textWithImg">
      <div class="text">
        <h2>{{txtimg.h2Text}}</h2>
        <p>{{txtimg.pText}}</p>
      </div>
      <div class="category">
        <div class="default">
          <img :src="require(`@/assets/img/${category1.img}`)" />
          <p>{{category1.pText}}</p>
        </div>
        <div class="default">
          <img :src="require(`@/assets/img/${category2.img}`)" />
          <p>{{category2.pText}}</p>
        </div>
        <div class="default">
          <img :src="require(`@/assets/img/${category3.img}`)" />
          <p>{{category3.pText}}</p>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextWithImg",
  props: {
    txtimg: {
      h2Text: String,
      pText: String,
    },
    category1: {
      img: String,
      pText: String,
    },
    category2: {
      img: String,
      pText: String,
    },
    category3: {
      img: String,
      pText: String,
    },
  },
};
</script>

<style scoped>
.textWithImg {
  background-color: #f9f9f9;
}

.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

.category {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-evenly;
  max-width: 1200px;
  margin: auto;
}

.category img {
  max-width: 400px;
  width: 100%;
}

.category p {
  font-size: 18px;
}

.default {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-size: 50px;
}

p {
  font-size: 30px;
}

button {
  margin: 5%;
  padding: 10px;
  font-size: 22px;
  color: #0167b1;
  border-radius: 5%;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
</style>