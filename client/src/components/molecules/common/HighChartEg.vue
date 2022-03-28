<template>
  <highcharts :options="chartOption" />
</template>

<script>
import { Chart } from 'highcharts-vue';
import {chartOptions} from '~/utilities/chart/options/chartOptions.js';
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
    yAxisUnit: {
      type: String,
      default: '',
    },
    yAxisData1: {
      type: Array,
      default: () => [],
    },
    yAxisData2: {
      type: Array,
      default: () => [],
    },
    yAxisData3: {
      type: Array,
      default: () => [],
    },
    yAxisDataName1: {
      type: String,
      default: 'example'
    },
    yAxisDataName2: {
      type: String,
      default: 'example'
    },
    yAxisDataName3: {
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

    const chartOption = chartOptions(
      props.title, 
      props.type, 
      props.xAxisList, 
      props.yAxisUnit, 
      props.yAxisData1, 
      props.yAxisData2, 
      props.yAxisData3, 
      props.yAxisDataName1, 
      props.yAxisDataName2, 
      props.yAxisDataName3, 
      props.chartColor, 
      props.tooltipClear);
      
    return {
      chartOption,
    };
  }
});
</script>
<style lang="scss" scoped>
</style>
