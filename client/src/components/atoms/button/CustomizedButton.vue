<template>
  <button class="atom-button">
    <slot v-if="slots.default"></slot>
    <span v-else>Button</span>
  </button>
</template>
<script setup>
import { useSlots, defineProps } from 'vue';

const props = defineProps({
  palette: {
    type: String,
    default: 'black',
  },
  colored: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'm',
  },

});

console.log('customized', props)

const slots = useSlots();

const stylePackage = {
  w: '120px',
  c: '#000',
  ch: '#fff',
  b: '#000',
  bc: '#fff',
  bch: '#000',
  fs: '18px',
};

const colorTheme = {
  blue: '#3386f7',
  lightBlue: '#7dcbf8',
  red: '#fa4b62',
  lightRed: '#f7929f',
  green: '#71a71f',
  gray: '#8d97a1',
  black: '#000'
};

const sizeTheme = {
  xs: '40px',
  s:  '80px',
  m:  '120px',
  l:  '300px',
  xl:  '500px',
};

const styledByProps = (palette, size) => {
  console.log(palette, size)
  stylePackage.c = colorTheme[`${palette}`];
  stylePackage.b = colorTheme[`${palette}`];
  stylePackage.bch = colorTheme[`${palette}`];
  stylePackage.w = sizeTheme[`${size}`];
}

styledByProps(props.palette, props.size)


if (props.colored) {
  stylePackage.bc = stylePackage.bch;
  stylePackage.ch = stylePackage.bch;
  stylePackage.c = '#fff';
  stylePackage.bch = '#fff';
}

const { w, c, ch, b, bc, bch, } = stylePackage;
</script>

<style scoped lang="scss">
button.atom-button {
  width: v-bind(w);
  background: v-bind(bc);
  border: 2px solid v-bind(b);
  color: v-bind(c);
  padding: 0.4rem 0.8rem;
  transition: all 0.2s;
  overflow: hidden;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: v-bind(bch);
    color: v-bind(ch);
  }
}
</style>
