import Input from '../Input.vue';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl', 'max'],
    },
    palette: {
      control: { type: 'select' },
      options: [
        'blue',
        'lightBlue',
        'red',
        'lightRed',
        'green',
        'gray',
        'black',
        'none',
      ],
    },
  },
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: `<Input v-bind="args" value="예시입니다" />`,
});

export const Adjust = Template.bind({});
