<template>
  <div class="modal-main">
    <q-dialog @input="$emit('input', $event)" :value="value">
      <q-card>
        <q-toolbar class="custom-modal">
          <q-toolbar-title :title="title"></q-toolbar-title>
          <q-btn
            class="close-btn-modal"
            flat
            round
            dense
            icon="close"
            v-close-popup
          />
        </q-toolbar>
        <q-card-section>
          <slot></slot>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // toolbar: false,
    };
  },
  props: {
    title: String,
    value: Boolean,
  },
};
</script>

<style lang="scss">
.custom-modal {
  position: absolute;
  z-index: 1;
  padding: 0;
}
.close-btn-modal {
  background-color: white;
}
.q-card__section--vert {
  padding: 0 !important;
}
</style>
