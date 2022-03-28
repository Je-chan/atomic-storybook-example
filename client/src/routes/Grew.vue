<template>
  <div class="container">
    <LoadingInfo v-if="loading" />
    <div
      v-else
      class="grew-details">
      <ImgCard
        :img-src="searchedGrew.image"
        border-out
        w="500px"
        class="poster">
        <SpinnerLoading
          v-if="loading"
          absolute />
      </ImgCard>
      <GrewInfoDescription />
    </div>
  </div>
</template>

<script>
// Modules
import { mapState } from 'vuex';

// Atoms
import ImgCard from '~/components/atoms/card/ImgCard';

// Organisms
import LoadingInfo from '~/components/organisms/grew/LoadingInfo';
import GrewInfoDescription from '../components/organisms/grew/GrewInfoDescription.vue';

export default {
  components: {
    ImgCard,
    LoadingInfo,
    GrewInfoDescription,
  },

  data() {
    return {
      imageLoading: true,
    };
  },

  computed: {
    ...mapState('grew', ['searchedGrew', 'loading']),
  },

  created() {
    this.$store.dispatch('grew/searchGrewId', {
      id: this.$route.params.id,
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 40px;
}
.grew-details {
  display: flex;
  color: $gray-600;
  .poster {
    flex-shrink: 0;
    margin-right: 70px;
  }
}
</style>
