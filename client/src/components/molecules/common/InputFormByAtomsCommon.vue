<template>
  <Input
    class="submit-form-input"
    type="text"
    :palette="inputPalette" 
    :size="inputSize" />
  <CustomizedButton
    class="submit-form-button"
    @click.stop="emitsOnClickHandler"
    :palette="buttonPalette"
    :size="buttonSize"
    :name="id"
    :colored="colored">
    작성
  </CustomizedButton>
</template>
<script>
import Input from '~/components/atoms/input/Input.vue'
import CustomizedButton from '~/components/atoms/button/CustomizedButton.vue'
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    inputPalette: {
      type: String,
      default: 'black'
    },
    inputSize: {
      type: String,
      default: 'm'
    },
    buttonPalette: {
      type: String,
      default: 'black'
    },
    buttonSize: {
      type: String,
      default: 'm'
    },
    colored: {
      type: Boolean,
      defalt: false
    }
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

    console.log('=====sadasd===', props)
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
