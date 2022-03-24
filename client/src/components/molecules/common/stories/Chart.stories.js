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
    type: {
      control: { type: 'select' },
      defaultValue: 'line',
      options: ['line', 'column'],
    },
    xAxisList: {
      control: { type: 'array' },
      defaultValue: ['1', '2', '3', '4'],
      description: `" :x-axis-list " props 에 배열을 넣으면 
      \n 요소들이 X축 값이 됩니다`,
    },
    yAxisUnit: {
      defaultValue: '어떤 값입니다.',
      description: `Y축 데이터의 단위를 지정합니다`,
    },
    yAxisData: {
      control: { type: 'array' },
      defaultValue: [1, 5, 4, 2],
      description: `Y축 데이터 값을 의미합니다`,
    },
    yAxisDataName: {
      defaultValue: '변동 추이',
      description: 'Y축 데이터가 무엇을 가리키는지 의미합니다',
    },
    chartColor: {
      defaultValue: '#7EB923',
      description: `type 이 line, column 일 때, 
      \n Chart의 색을 지정합니다`,
    },
    tooltipClear: {
      defaultValue: false,
      description: `그래프에 마우스에 갖다 대지 않아도 y축 값을 그래프에 바로 보여줄지 (true 값)
      \n 마우스를 갖다 대야지만 툴팁으로 보여줄지를 설정합니다 (false 값)
      \n line 일 때만 true 값이 가능합니다`,
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
