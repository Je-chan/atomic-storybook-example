<template>
  <Input
    type="text"
    size="l"
    palette="green" />
  <CustomizedButton
    class="send-button"
    @click.stop="emitsOnClickHandler"
    size="small"
    palette="green"
    colored
    :name="grewId">
    작성
  </CustomizedButton>
</template>
<script>
import Input from '~/components/atoms/input/Input.vue'
import CustomizedButton from '~/components/atoms/button/CustomizedButton.vue'
export default {

  components: {
    Input,
    CustomizedButton
  },

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
<style scoped lang="scss">
  .send-button {
    margin-left: 10px;
  }
</style>
