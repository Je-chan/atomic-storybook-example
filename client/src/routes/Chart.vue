<template>
  <div>
    <Highchart
      :title="chartData.title"
      :type="chartData.type"
      :x-axis-list="chartData.xAxisList"
      :y-axis-unit="chartData.yAxisUnit"
      :y-axis-data="chartData.yAxisData"
      :y-axis-data-name="chartData.yAxisDataName" />
    <!-- <HighchartEg
      :title="chartTwoData.title"
      :type="chartTwoData.type"
      :x-axis-list="chartTwoData.xAxisList"
      :y-axis-unit="chartTwoData.yAxisUnit"
      :y-axis-data1="chartTwoData.yAxisList1"
      :y-axis-data2="chartTwoData.yAxisList2"
      :y-axis-data3="chartTwoData.yAxisList3"
      :y-axis-data-name1="chartTwoData.yAxisList1Name" 
      :y-axis-data-name2="chartTwoData.yAxisList2Name" 
      :y-axis-data-name3="chartTwoData.yAxisList3Name" /> -->
    <div class="btn-wrapper">
      <CustomizedButton
        palette="green"
        size="xl"
        @click="getPDF">
        PDF 다운
      </CustomizedButton>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Highchart from '~/components/molecules/common/HighChart';
// import HighchartEg from '~/components/molecules/common/HighChartEg';
import * as Highcharts from 'highcharts';
import CustomizedButton from '~/components/atoms/button/CustomizedButton.vue';

const getPDF = () => {
  console.log('clicked');
  console.log(Highcharts.charts[0]);
  Highcharts.charts[0].exportChart({
    type: 'application/pdf',
  });
};
const chartData = ref({});
chartData.value = {
  title: 'Grew 편지 받은 개수',
  type: 'spline',
  xAxisList: [
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
  yAxisUnit: '(개)',
  yAxisData: [15, 13, 11, 5, 4, 23, 7, 4, 8, 17, 12, 8, 5, 8, 6, 5, 12],
  yAxisDataName: '받은 편지',
};

const chartTwoData = ref({});

chartTwoData.value={
  title: '계량값',
  type: 'spline',
  xAxisList: [
    '01시',
    '02시',
    '03시',
    '04시',
    '05시',
    '06시',
    '07시',
    '08시',
    '09시',
    '10시',
    '11시',
    '12시',
    '13시',
    '14시',
    '15시',
    '16시',
    '17시',
    '18시',
    '19시',
    '20시',
    '21시',
    '22시',
    '23시',
    '24시',
  ],
  yAxisList1: [
    0,
    0,
    0,
    0,
    0,
    0,
    18,
    471,
    2157,
    5583,
    9468,
    5334,
    3894,
    4674,
    5790,
    8232,
    8172,
    3492, 	
    729, 	
    0, 	
    0, 	
    0, 	
    0, 	
    0 
  ],
  yAxisList1Name: '2022-03-23',
    yAxisList2: [
    0,
    0,
    0,
    0,
    0,
    0,
    36,
    1884,
    6417,
    10794,
    16614,
    19506,
    20775,
    20232,
    18114,
    13884,
    8040,
    3345,
    369,
    0, 	
    0, 	
    0, 	
    0, 	
    0 
  ],
  yAxisList2Name: '2022-03-16',

  yAxisList3: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  408,
  3609,
  8295,
  12909,
  16344,
  17991,
  17808,
  15696,
  12030,
  7146,
  2256,
  120,
    0, 	
    0, 	
    0, 	
    0, 	
    0 
  ],
  yAxisList3Name: '2022-02-23',
  yAxisUnit: 'kW',
}
</script>

<style scoped lang="scss">
.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
