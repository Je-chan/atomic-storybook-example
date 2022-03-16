<template>
  <div id="grew-description">
    <H3 :style="{ marginBottom: '16px' }">
      {{ title }}
    </H3>
    <p>{{ content }}</p>
  </div>
</template>
<script>

import H3 from '~/components/atoms/h/H3';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

  },

  components: {
    H3,
  },
};
</script>
<style lang="scss" scoped>
#grew-description {
  p {
    margin: 10px 0;
  }
}
</style>
