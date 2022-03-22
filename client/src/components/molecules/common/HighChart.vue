<template>
  <highcharts :options="chartOptions" />
</template>

<script>
import { Chart } from 'highcharts-vue';
import {testChartOptions} from '~/utilities/chart/options/testChartOptions.js';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    highcharts: Chart,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type : {
      type: String,
      default: 'line'
    },
    xAxisList: {
      type: Array,
      default: () => []
    },
    yAxisName: {
      type: String,
      default: '',
    },
    chartData: {
      type: Array,
      default: () => [],
    },
    chartDataName: {
      type: String,
      default: 'example'
    },
    chartColor: {
      type: String,
      default: '#7EB923'
    },
    tooltipClear: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {

    const chartOptions = testChartOptions(props.title, props.type, props.xAxisList, props.yAxisName, props.chartData, props.chartDataName, props.chartColor, props.tooltipClear);

    return {
      chartOptions,
    };
  }
});
</script>
<style lang="scss" scoped></style>s