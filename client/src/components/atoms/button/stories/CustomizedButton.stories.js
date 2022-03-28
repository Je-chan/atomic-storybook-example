import CustomizedButton from '~/components/atoms/button/CustomizedButton.vue';

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
      description: '총 7개의 색상으로 버튼 색을 변경할 수 있습니다',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: `총 5개의 사이즈로 크기를 변경할 수 있습니다`,
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
