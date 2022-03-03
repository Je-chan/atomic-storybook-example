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
  },
};
</script>
<style scoped lang="scss">
.img-warpper {
  $width: 200px;
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
    border: 6px solid #b2d57c;
  }
}
</style>
