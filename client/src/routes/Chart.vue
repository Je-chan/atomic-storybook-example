<template>
  <div>
    <Highchart  
      :title="chartData.title" 
      :type="chartData.type" 
      :x-axis-list="chartData.xAxisList"
      :y-axis-unit="chartData.yAxisUnit"
      :y-axis-data="chartData.yAxisData" 
      :y-axis-data-name="chartData.yAxisDataName" />
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
import Highchart from '~/components/molecules/common/HighChart'
import * as Highcharts from 'highcharts';
import CustomizedButton from '~/components/atoms/button/CustomizedButton.vue';

const getPDF = () => {
  console.log('clicked')
  console.log(Highcharts.charts[0])
  Highcharts.charts[0].exportChart({
    type: 'application/pdf'
  })
}
const chartData = ref({})
chartData.value = {
  title: 'Grew 편지 받은 개수',
  type: 'spline',
  xAxisList: ['bene', 'kaze', 'elory', 'arielle', 'daniel', 'roya', 'ethan', 'joah', 'liebe', 'dolma', 'sean', 'rick', 'hazel', 'joel', 'liam', 'trevor', 'sarah'],
  yAxisUnit: '(개)',
  yAxisData: [15, 13, 11, 5, 4, 23, 7, 4, 8, 17, 12, 8, 5, 8, 6, 5, 12],
  yAxisDataName: '받은 편지'
}


</script>

<style scoped lang="scss">

.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>