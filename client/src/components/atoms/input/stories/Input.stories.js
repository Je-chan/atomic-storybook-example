import Input from '../Input.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    palette: {
      control: { type: 'select' },
      options: ['#71a71f', '#000'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Input },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<CustomizedButton v-bind="args">
    <template v-slot>${
      args.default && Object.keys(args.default)[0]
        ? Object.values(args.default)[0]
        : 'Button'
    }</template>

  </CustomizedButton>`,
});

export const Adjust = Template.bind({});

export const Blue = Template.bind({});
Blue.args = {
  palette: 'blue',
};

export const ColoredBlue = Template.bind({});
ColoredBlue.args = {
  colored: true,
  palette: 'blue',
};
