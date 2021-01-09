<template>
  <div>
    <q-dialog @input="$emit('input', $event)" :value="value">
      <q-card>
        <q-toolbar>
          <q-toolbar-title :title="title"></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
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
