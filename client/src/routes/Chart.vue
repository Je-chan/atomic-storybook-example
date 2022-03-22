<template>
  <div>
    <Highchart  
      title="Example" 
      type="column" 
      :x-axis-list="['1', '2', '3', '4']"
      :y-axis-name="무언가"
      :chart-data="[1, 2, 3, 4]"
      :tooltip="false" />
  </div>
</template>
<script setup>
import Highchart from '~/components/molecules/common/HighChart'

</script>

<style scoped lang=" scss">
</style>