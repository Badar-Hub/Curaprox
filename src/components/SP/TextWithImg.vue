<template>
  <div>
    <div class="textWithImg">
      <div class="text">
        <h2>{{textimg.h2Text}}</h2>
        <p>{{textimg.pText}}</p>
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
.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

.category {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.category img {
  max-width: 400px;
  width: 100%;
}

.category p {
  font-size: 18px;
}
</style>