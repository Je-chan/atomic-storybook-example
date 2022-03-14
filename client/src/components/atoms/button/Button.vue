<template>
  <button>
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    w: {
      type: String,
      default: '120px',
    },
    h: {
      type: String,
      default: '40px',
    },
    pd: {
      type: String,
      default: '',
    },
    m: {
      type: String,
      default: '',
    },
    bc: {
      type: String,
      default: '',
    },
    border: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.btn {
  width: v-bind(w);
  height: v-bind(h);
  font-weight: 700;
  flex-shrink: 0;
  color: #fff;
}
</style>
