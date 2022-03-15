<template>
  <input
    :value="value"
    @input="updateValue"
    @keyup.enter="onEnterHandler" />
</template>
<script>
import { ref } from 'vue';
export default {
  props: {
    w: {
      type: String,
      default: '',
    },
    h: {
      type: String,
      default: '',
    },
    palette: {
      type: String,
      default: '#000',
    },
  },
  emits: ['inputHandler', 'enterHandler'],
  setup(props, context) {
    const value = ref('');

    const updateValue = (e) => {
      value.value.current = e.target.value;
      context.emit('inputHandler', e.target.value);
    };

    const onEnterHandler = (e) => {
      context.emit('enterHandler', e.target.value);
    };
    return {
      value,
      updateValue,
      onEnterHandler,
    };
  },
};
</script>
<style scoped lang="scss">
input {
  width: v-bind(w);
  border:1px solid #ced4da;
  padding: 0 1rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 6px v-bind(palette);
  }
}
</style>
