<template>
  <div class="title-description-wrapper">
    <TitleDescription
      class="description"
      title="본명"
      :content="searchedGrew.name"
      mb="10px" />
    <TitleDescription
      class="description"
      title="닉네임"
      :content="`${searchedGrew.nicknameEng} (${searchedGrew.nickname})`"
      mb="10px" />
    <TitleDescription
      class="description"
      title="슬로건"
      :content="searchedGrew.slogan"
      mb="10px" />
  </div>
</template>
<script>
import TitleDescription from '~/components/molecules/common/TitleDescription';
import {mapState} from 'vuex'


export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

  },

  components: {
    TitleDescription,
  },

  computed: {
    ...mapState('grew', ['searchedGrew', 'loading']),
  },

};
</script>
<style lang="scss" scoped>
.description {
  margin-bottom: 30px;
}
</style>
