// main.js 에서 sass-loader 가 필요하다는 거 추가
import HighChart from '../HighChart.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
// TODO 차트의 유형이 바뀔 때 props 를 어떻게 넘겨줄 것인가.
// > 차트의 유형이 바뀔 때, options 가 달라지기 때문에 그것을 어떻게 수정할 것인가에 대한 고민이 필요
// > 일단 pie 유형은 제거
export default {
  title: 'Example/Chart',
  component: HighChart,
  argTypes: {
    title: {
      defaultValue: '',
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

// // main.js 에서 sass-loader 가 필요하다는 거 추가
// import HighChart from '../HighChart.vue';
// import {
//   withKnobs,
//   text,
//   select,
//   boolean,
//   array,
// } from '@storybook/addon-knobs';

// // More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
// export default {
//   title: 'Example/Chart',
//   decorators: [withKnobs],
// };

// export const exampleHighChart = () => ({
//   components: { HighChart },
//   props: {
//     title: {
//       default: text('Ttile', '예시입니다'),
//     },
//     type: {
//       default: select(
//         'Type',
//         {
//           column: 'column',
//           line: 'line',
//           pie: 'pie',
//         },
//         'column'
//       ),
//     },
//     xAxisList: {
//       default: array('xAxis', ['1', '2', '3', '4']),
//     },
//     yAxisName: {
//       default: text('yAxis', '예시'),
//     },
//     chartData: {
//       default: array('data', [1, 5, 3, 4]),
//     },
//     chartDataName: {
//       default: text('ChartName', '아무 데이터'),
//     },
//     chartColor: {
//       default: text('ChartDataColor', '#7EB923'),
//     },
//     tooltipClear: {
//       default: boolean('usingTooltip', true),
//     },
//   },

//   template: `<HighChart
//     :title="title"
//     :type="type"
//     :x-axis-list="xAxisList"
//     :y-axis-name="yAxisName"
//     :chartData="chartData"
//     :chartDataName="chartDataName"
//     :tooltip-clear="tooltipClear"/>`,
// });

// * 차트 타입에 따라 props disabled 되는 거 보여주려다가 망함 * //

// const Template = (args, { argTypes }) => ({
//   components: { HighChart },
//   props: Object.keys(argTypes),
//   setup(props) {
//     console.log(props);
//     let propsData = ref([]);

//     const getProps = (argTypes) => {
//       let propsList = [];
//       for (let key of Object.keys(argTypes)) {
//         propsList[key] = argTypes[key].defaultValue;
//       }
//       return propsList;
//     };

//     propsData = getProps(argTypes);

//     const setPropsByChartType = (propsData) => {
//       if (propsData.type === 'line') {
//         console.log('line');
//       } else if (propsData.type === 'column') {
//         console.log('column');

//         delete propsData.tooltipClear;
//       } else if (propsData.type === 'pie') {
//         console.log('pie');

//         delete propsData.charColor;
//         delete propsData.tooltipClear;
//       }
//       return propsData;
//     };

//     console.log('before', propsData);

//     const copiedProps = { ...propsData };
//     const newProps = setPropsByChartType(copiedProps);

//     console.log('after', newProps);

//     return { args, newProps };
//   },
//   template: `<high-chart v-bind="newProps"/>`,
// });

// export const Basic = Template.bind({})
