<template>
  <div>
    <div>
      <div class="main-shop">
        <div class="row justify-centerq-pa-sm">
          <div style="margin-left:100px" class="col q-my-auto text-left">
            <h3 class="q-my-none">CS 5460</h3>
            <h6 class="q-mt-lg q-pl-xs">Rs 500</h6>
            <div class="row q-mb-xl">
              <h5 class="q-pr-md" style="margin:auto 0">Quantity</h5>
              <div class="input">
                <q-btn flat color="primary" size="1rem" label="-" />
                <input
                  style="width: 70px; border:none; text-align:center"
                  type="text"
                  v-model="quantity"
                />
                <q-btn flat color="primary" size="1rem" label="+" />
              </div>
            </div>
            <q-btn
              size="22px"
              class="q-px-xl q-py-xs"
              color="blue"
              label="Add To Cart"
            />
          </div>
          <div class="col text-center">
            <img class="prod-img" :src="img" />
            <div class="row justify-center">
              <img
                @click="img = require('@/assets/cs-5460.jpg')"
                class="sub-image"
                src="@/assets/cs-5460.jpg"
              />
              <img
                @click="img = require('@/assets/1.jpg')"
                class="sub-image"
                src="@/assets/1.jpg"
              />
              <img
                @click="img = require('@/assets/2.jpg')"
                class="sub-image"
                src="@/assets/2.jpg"
              />
              <img
                @click="img = require('@/assets/3.jpg')"
                class="sub-image"
                src="@/assets/3.jpg"
              />
            </div>
          </div>
        </div>
        <div
          @click="show"
          style="margin-top:30px"
          class="row desc justify-between"
        >
          <h4 class="q-my-lg">DESCRIPTION</h4>
          <h4 class="q-my-lg">+</h4>
        </div>
        <div
          :style="`display:${display ? 'block' : 'none'}`"
          class="row desc text-left"
          :class="[!display ? 'hide' : '']"
        >
          <hr class="q-mb-lg" style="width:100%" />
          <div>
            <p><strong>When your gums fall in love</strong></p>
            <p>
              Why do dental professionals recommend the CS 5460? Two words.
              Gentle. And efficient. The ultra-fine, CUREN® filaments are
              densely packed on the brush head to give exceptional cleaning
              power. And it looks beautiful.
            </p>
            <p>
              Plaque’s toughest enemy is the gentleness of CUREN®-bristles: CS
              toothbrushes really are incredibly gentle. The 5460
              CUREN®-filaments of the CS 5460 ultra soft form an uncommonly
              dense and efficient cleaning surface. While they are gentle on
              gums and teeth, CUREN®-filaments are extremely hard on plaque.
              Anyone who tries a CS toothbrush will never want to do without
              this<br />brushing experience again.<br /><br />CURAPROX
              toothbrushes not only prevent brushing damage, but also break up
              and remove plaque perfectly. CUREN ®-filaments are stiffer than
              nylon and remain just as stable in the mouth as when they are dry.
              These properties make it possible to produce toothbrushes with a
              large number of&nbsp;ultrafine bristles.
            </p>
            <ul>
              <li>Gentle action thanks to CUREN®-filaments</li>
              <li>
                Efficient cleaning surface thanks to&nbsp;a dense array of
                CUREN®-filaments
              </li>
              <li>There’s no escape: compact head, slightly angled</li>
              <li>
                Octagonal handle helps users to brush at the correct angle
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="recommended">
        <div>
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            padding
            arrows
            height="210px"
            class="bg-grey-1 shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
                <q-img
                  class="rounded-borders col-3 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
      img: require(`@/assets/cs-5460.jpg`),
      display: true,
      slide: 1
    };
  },
  methods: {
    show() {
      this.display = !this.display;
    }
  }
};
</script>

<style scoped>
.main-shop {
  max-width: 1200px;
  margin: auto;
}

.input {
  border: 1px solid rgba(187, 182, 182, 0.678);
}

.prod-img {
  max-width: 483px;
}

.sub-image {
  max-width: 90px;
  max-height: 70px;
  padding-right: 15px;
}

.desc {
  max-width: 800px;
  margin: auto;
}

.recommended {
  max-width: 1200px;
  margin: auto;
}

.hide {
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
