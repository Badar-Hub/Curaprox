<template>
  <div class="modal" @click="$emit('toggle')">
    <div class="modal-container" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
      default: () => {
        return { name: "" };
      },
    },
  },
  components: {
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  &-container {
    background-color: rgb(158, 158, 158);
    width: 1200px;
    height: 500px;
    margin: auto;

    box-shadow: 0px 0px 15px -6px rgb(80, 80, 80);
    -webkit-box-shadow: 0px 0px 15px -6px rgba(80, 80, 80, 1);
    -moz-box-shadow: 0px 0px 15px -6px rgba(80, 80, 80, 1);
  }
  background-color: rgba(0, 0, 0, 0.486);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>