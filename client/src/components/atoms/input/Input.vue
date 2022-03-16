<template>
  <input
    :value="value"
    :style="{width: styledWidth}"
    @input="updateValue"
    @keyup.enter="onEnterHandler" />
</template>
<script>
import { ref } from 'vue';
export default {
  props: {
    size: {
      type: String,
      default: 'm'
    },

    palette: {
      type: String,
      default: 'black',
    },
  },
  emits: ['inputHandler', 'enterHandler'],
  setup(props, context) {
    const value = ref('');

    const stylePackage = {
      styledWidth: '',
      styledPadding: '0.5rem 0.8rem',
      activeColor: ''
    }

    const sizeTheme = {
      xs: '100px',
      s: '150px',
      m: '200px',
      l: '300px',
      xl: '500px',
      max: '100%'
    }

    const colorTheme = {
    blue: '#3386f7',
    lightBlue: '#7dcbf8',
    red: '#fa4b62',
    lightRed: '#f7929f',
    green: '#71a71f',
    gray: '#8d97a1',
    black: '#000',
    none: 'none'
  };

    const styledByProps = (size, palette) => {
      stylePackage.styledWidth = sizeTheme[`${size}`]
      stylePackage.activeColor = colorTheme[`${palette}`]
    }


    styledByProps(props.size, props.palette)


    const updateValue = (e) => {
      value.value.current = e.target.value;
      context.emit('inputHandler', e.target.value);
    };

    const onEnterHandler = (e) => {
      context.emit('enterHandler', e.target.value);
    };


    const {styledWidth, styledPadding, activeColor} = stylePackage

    return {
      value,
      updateValue,
      onEnterHandler,
      styledWidth,
      styledPadding, 
      activeColor,
    };
  },
};
</script>
<style scoped lang="scss">
input {
  border:1px solid #ced4da;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 6px v-bind(activeColor);
  }
}
</style>
