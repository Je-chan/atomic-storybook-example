// main.js 에서 sass-loader 가 필요하다는 거 추가
import CustomizedButton from '~/components/atoms/button/CustomizedButton.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/CustomizedButton',
  component: CustomizedButton,
  argTypes: {
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
      ],
    },

    xAxisTitle: {
      control: { type: 'select' },
      options: [
        'blue',
        'lightBlue',
        'red',
        'lightRed',
        'green',
        'gray',
        'black',
      ],
    },

    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl'],
    },
  },
};

const Template = (args) => ({
  components: { CustomizedButton },
  setup() {
    return { args };
  },
  template: `<CustomizedButton v-bind="args">
    <template v-slot>${
      args.default && Object.keys(args.default)[0]
        ? Object.values(args.default)[0]
        : 'Button'
    }</template>
  </CustomizedButton>`,
});

export const Basic = Template.bind({});

export const Blue = Template.bind({});
Blue.args = {
  palette: 'blue',
};

export const ColoredBlue = Template.bind({});
ColoredBlue.args = {
  colored: true,
  palette: 'blue',
};
