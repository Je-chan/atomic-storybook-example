<template>
  <input :value="value" @input="updateValue" @keyup.enter="onEnterHandler" />
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
    pd: {
      type: String,
      default: '',
    },
    bc: {
      type: String,
      default: '#fff',
    },
    bd: {
      type: String,
      default: '1px solid #ced4da',
    },
    activeC: {
      type: String,
      default: '#000',
    },
  },
  emits: ['inputHandler', 'enterHandler'],
  setup(props, context) {
    const value = ref('');

    const updateValue = (e) => {
      value.current = e.target.value;
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
  border: v-bind(bd);
  padding: v-bind(pd);
  &:focus {
    outline: none;
    box-shadow: 0 0 6px v-bind(activeC);
  }
}
</style>
