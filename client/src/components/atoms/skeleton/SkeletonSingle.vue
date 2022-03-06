<template>
  <div class="skeleton"></div>
</template>

<script>
export default {
  props: {
    w: {
      type: String,
      required: true,
    },
    h: {
      type: String,
      required: true,
    },
    m: {
      type: String,
      default: '',
    },
    mt: {
      type: String,
    },
    mb: {
      type: String,
    },
    ml: {
      type: String,
    },
    mr: {
      type: String,
    },
  },

  setup(props, context) {
    const { w, h, m, mt, mb, ml, mr } = props;

    return {
      w,
      h,
      m,
      mt,
      mb,
      ml,
      mr,
    };
  },
};
</script>

<style scoped lang="scss">
.skeleton {
  border-radius: 10px;
  background-color: $gray-200;
  width: v-bind(w);
  height: v-bind(h);
  margin: v-bind(m);
  margin-top: v-bind(mt);
  margin-bottom: v-bind(mb);
  margin-left: v-bind(ml);
  margin-right: v-bind(mr);
}
</style>
