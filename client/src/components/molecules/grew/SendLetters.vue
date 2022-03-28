<template>
  <div 
    class="description">
    <H3 :style="{ marginBottom: '16px' }">
      익명 편지쓰기
    </H3>
    <InputForm
      :grew-id="searchedGrew.id"
      @onClickHandler="sendLetter" />
    <!-- <InputFormByAtomsCommon
      @onClickHandler="sendLetter"
      :id="searchedGrew.id"
      input-palette="green"
      input-size="l"
      button-palette="green"
      button-size="s"
      colored /> -->
  </div>
</template>
<script>
import {mapState} from 'vuex'
import axios from 'axios';

import H3 from '~/components/atoms/h/H3'
import InputForm from '~/components/molecules/grew/InputForm';
// import InputFormByAtomsCommon from '~/components/molecules/common/InputFormByAtomsCommon'


export default {
  components: {
    H3,
    InputForm,
    // InputFormByAtomsCommon
  },

  computed: {
    ...mapState('grew', ['searchedGrew', 'loading']),
  },

  methods: {
    sendLetter: async (userId) => {
      const letter = document.getElementById('letter');
      if (!letter.value) return;
      // network 요청
      try {
        await axios.post(`${process.env.VUE_APP_API}/letter-service/letters`, {
          userId,
          content: letter.value,
        });
      } catch {
        alert('통신이 원활하지 않습니다.');
        return;
      }
    },
  },

  mounted() {

  }

}
</script>
<style lang="scss" scoped>
  
</style>