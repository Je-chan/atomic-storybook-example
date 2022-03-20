<template>
  <Input
    type="text" />
  <CustomizedButton
    class="submit-form-button"
    :name="grewId"
    @click.stop="emitsOnClickHandler">
    작성
  </CustomizedButton>
</template>
<script>
import Input from '~/components/atoms/input/Input.vue'
import CustomizedButton from '~/components/atoms/button/CustomizedButton.vue'
export default {
  props: {
    grewId: {
      type: Number,
      required: true,
    },
  },

  components: {
    Input,
    CustomizedButton,
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
.submit-form-button {
  margin-left: 10px;
}
</style>
