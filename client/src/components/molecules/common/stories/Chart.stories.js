// main.js 에서 sass-loader 가 필요하다는 거 추가
import HighChart from '../HighChart.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export

export default {
  title: 'Example/Chart',
  component: HighChart,
  argTypes: {
    title: {
      defaultValue: 'Grew 편지',
    },
    type: {
      control: { type: 'select' },
      defaultValue: 'line',
      options: ['line', 'spline', 'column', 'area'],
    },
    xAxisList: {
      control: { type: 'array' },
      defaultValue: [
        'bene',
        'kaze',
        'elory',
        'arielle',
        'daniel',
        'roya',
        'ethan',
        'joah',
        'liebe',
        'dolma',
        'sean',
        'rick',
        'hazel',
        'joel',
        'liam',
        'trevor',
        'sarah',
      ],
      description: `" :x-axis-list " props 에 배열을 넣으면 
      \n 요소들이 X축 값이 됩니다`,
    },
    yAxisUnit: {
      defaultValue: '(개)',
      description: `Y축 데이터의 단위를 지정합니다`,
    },
    yAxisData: {
      control: { type: 'array' },
      defaultValue: [15, 13, 11, 5, 4, 23, 7, 4, 8, 17, 12, 8, 5, 8, 6, 5, 12],
      description: `Y축 데이터 값을 의미합니다`,
    },
    yAxisDataName: {
      defaultValue: '받은 편지 개수',
      description: 'Y축 데이터가 무엇을 가리키는지 의미합니다',
    },
    chartColor: {
      defaultValue: '#7EB923',
      description: `Chart의 색을 지정합니다`,
    },
    tooltipClear: {
      defaultValue: false,
      description: `값이 true 일 경우, Tooltip 이 나타나지 않습니다.
      \n 차트 타입이 line 일 때만, 사용이 가능합니다.
      `,
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { HighChart },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `<high-chart v-bind="args" />`,
});

export const Basic = Template.bind({});
