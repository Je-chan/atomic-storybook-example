<template>
  <div>
    <Highchart  
      :title="chartData.title" 
      :type="chartData.type" 
      :x-axis-list="chartData.xAxisList"
      :y-axis-unit="chartData.yAxisUnit"
      :y-axis-data="chartData.yAxisData" 
      :y-axis-data-name="chartData.yAxisDataName" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Highchart from '~/components/molecules/common/HighChart'

const chartData = ref({})
chartData.value = {
  title: 'Grew 편지 받은 개수',
  type: 'line',
  xAxisList: ['bene', 'kaze', 'elory', 'arielle', 'daniel', 'roya', 'ethan', 'joah', 'liebe', 'dolma', 'sean', 'rick', 'hazel', 'joel', 'liam', 'trevor', 'sarah'],
  yAxisUnit: '(개)',
  yAxisData: [15, 13, 11, 5, 4, 23, 7, 4, 8, 17, 12, 8, 5, 8, 6, 5, 12],
  yAxisDataName: '받은 편지'
}

</script>

<style scoped lang=" scss">
</style>