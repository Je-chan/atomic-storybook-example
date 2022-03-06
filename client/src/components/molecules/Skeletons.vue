<template>
  <div class="skeleton-wrapper">
    <SkeletonSingle w="500px" h="750px" mr="70px" class="poster" />
    <div class="specs">
      <SkeletonSingle w="80%" h="70px" />
      <SkeletonSingle w="60%" h="30px" mt="20px" />
      <SkeletonSingle w="100%" h="250px" mt="20px" />
      <SkeletonSingle w="50%" h="50px" mt="20px" />
      <SkeletonSingle w="50%" h="50px" mt="20px" />
      <SkeletonSingle w="50%" h="50px" mt="20px" />
    </div>
  </div>
</template>
<script>
import SkeletonSingle from '~/components/atoms/skeleton/SkeletonSingle';
export default {
  components: {
    SkeletonSingle,
  },
};
</script>

<style scoped lang="scss">
.skeleton-wrapper {
  display: flex;
  .poster {
    flex-shrink: 0;
  }
  .specs {
    flex-grow: 1;
  }
}
</style>
