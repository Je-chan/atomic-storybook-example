<template>
  <div>
    <Highchart  
      title="Example" 
      type="column" 
      :x-axis-list="data.xAxisList"
      :y-axis-unit="data.yAxisUnit"
      :y-axis-data="data.yAxisData"
      :tooltip="false" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Highchart from '~/components/molecules/common/HighChart'

const data = ref({})
data.value = {
  xAxisList: ['1', '2', '3', '4'],
  yAxisUnit: '숫자',
  yAxisData: [1, 5, 2, 4]
}

</script>

<style scoped lang=" scss">
</style>