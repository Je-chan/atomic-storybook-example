<template>
  <div id="grew-description">
    <H3 :style="{ marginBottom: '10px' }">{{ title }}</H3>
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

  components: {
    H3,
  },
};
</script>
<style lang="scss">
#grew-description {
  margin: v-bind(m);
  margin-top: v-bind(mt);
  margin-bottom: v-bind(mb);
  margin-left: v-bind(ml);
  margin-right: v-bind(mr);
  p {
    margin: 10px 0;
  }
}
</style>
