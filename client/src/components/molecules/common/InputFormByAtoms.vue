<template>
  <Input
    class="submit-form-input"
    type="text" />
  <Button
    class="submit-form-button"
    @click.stop="emitsOnClickHandler"
    :name="grewId">
    작성
  </Button>
</template>
<script>
import Input from '~/components/atoms/input/Input.vue'
import Button from '~/components/atoms/button/CustomizedButton.vue'
export default {
  props: {
    grewId: {
      type: Number,
      required: true,
    },
  },

  components: {
    Input,
    Button,
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
