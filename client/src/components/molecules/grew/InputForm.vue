<template>
  <input type="text" />
  <button
    @click.stop="emitsOnClickHandler"
    :name="grewId">
    작성
  </button>
</template>
<script>
export default {
  props: {
    grewId: {
      type: Number,
      required: true,
    },

  },

  emits: ['onClickHandler'],

  setup(props, context) {
    const emitsOnClickHandler = (e) => {
      context.emit('onClickHandler', e.target.name);
    };

    return {
      emitsOnClickHandler,
    };
  },
};
</script>
<style scoped lang="scss"></style>
