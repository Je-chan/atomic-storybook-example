<template>
  <h3 class="custom">
    <slot></slot>
  </h3>
</template>
<script>
export default {
  props: {
    m: {
      type: String,
      default: '0',
    },
    mt: {
      type: String,
      default: '',
    },
    mb: {
      type: String,
      default: '',
    },
    ml: {
      type: String,
      default: '',
    },
    mr: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped lang="scss">
.custom {
  margin: v-bind(m);
  margin-top: v-bind(mt);
  margin-bottom: v-bind(mb);
  margin-left: v-bind(ml);
  margin-right: v-bind(mr);
  color: $primary;
  font-weight: 700;
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
}
</style>
