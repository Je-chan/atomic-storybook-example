<template>
  <div class="cardWrapper">
    <div class="title">{{ mainTitle }} ({{ optionCheck }})</div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainTitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    optionCheck: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
.cardWrapper {
  background-color: rgba($black, 0.3);
  backdrop-filter: blur(10px);
  width: 100%;
  padding: 14px;
  font-size: 14px;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  .title {
    color: #b2d57c;
  }
  .description {
    color: $white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
