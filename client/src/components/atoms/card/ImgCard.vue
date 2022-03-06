<template>
  <div :style="{ backgroundImage: `url(${imgSrc})` }" class="img-warpper">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    w: {
      type: String,
      default: '200px',
    },
    h: {
      type: String,
    },
    size: {
      type: String,
    },
    bg: {
      type: String,
    },
    borderOut: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    hoverBorder(props) {
      return props.borderOut ? null : '6px solid #b2d57c';
    },
    w(props) {
      return props.w;
    },
  },
};
</script>
<style scoped lang="scss">
.img-warpper {
  $width: v-bind(w);
  width: $width;
  height: calc($width * 3 / 2);
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: v-bind(hoverBorder);
  }
}
</style>
