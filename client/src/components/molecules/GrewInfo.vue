<template>
  <RouterLink :to="`/grew/${grew.id}`" class="grew">
    <ImgCard :imgSrc="grew.image">
      <SpinnerLoading v-if="imageLoading" :size="1.5" absolute />
      <ScriptCard
        :mainTitle="grew.nicknameEng"
        :optionCheck="grew.lettersCount"
        :description="grew.slogan"
      />
    </ImgCard>
  </RouterLink>
</template>
<script>
import SpinnerLoading from '~/components/atoms/Loading/SpinnerLoading';
import ImgCard from '~/components/atoms/card/ImgCard.vue';
import ScriptCard from '~/components/atoms/card/ScriptCard.vue';
export default {
  props: {
    grew: {
      type: Object,
      default: () => ({}),
    },
  },

  components: {
    SpinnerLoading,
    ImgCard,
    ScriptCard,
  },

  data() {
    return {
      imageLoading: true,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      const image = this.grew.image;
      if (!image || image === 'N/A') {
        this.imageLoading = false;
      } else {
        await this.$loadImage(this.grew.image);
        this.imageLoading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.like {
  text-align: end;
}
.like_icon {
  width: 3rem;
}
.grew {
  position: relative;
  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 6px solid #b2d57c;
  }
}
</style>
