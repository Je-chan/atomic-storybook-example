<template>
  <div>
    <Skeletons />
    <SpinnerLoading :size="3" :z-index="9" fixed />
  </div>
</template>
<script>
import SpinnerLoading from '~/components/atoms/Loading/SpinnerLoading';
import Skeletons from '~/components/molecules/Skeletons';
export default {
  components: {
    SpinnerLoading,
    Skeletons,
  },
};
</script>
<style lang="scss"></style>
