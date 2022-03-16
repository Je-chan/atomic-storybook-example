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
      <div class="specs">
        <GrewDescription
          title="본명"
          :content="searchedGrew.name"
          mb="10px" />
        <GrewDescription
          title="닉네임"
          :content="`${searchedGrew.nicknameEng} (${searchedGrew.nickname})`"
          mb="10px" />
        <GrewDescription
          title="슬로건"
          :content="searchedGrew.slogan"
          mb="10px" />
        <div>
          <H3 mb="10px">
            익명 편지쓰기
          </H3>
          <InputForm
            :grew-id="searchedGrew.id"
            @onClickHandler="sendLetter" />
        </div>
        <div>
          <H3 mt="10px">
            편지
          </H3>
          <ul id="letters">
            <li
              v-for="(letter, i) in searchedGrew.letters"
              :key="i">
              {{ letter }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgCard from '~/components/atoms/card/ImgCard';
import H3 from '~/components/atoms/h/H3';

import GrewDescription from '~/components/molecules/GrewDescription';
import InputForm from '~/components/molecules/common/InputForm';

import LoadingInfo from '~/components/organisms/grew/LoadingInfo';

import axios from 'axios';
import { mapState } from 'vuex';

export default {
  components: {
    GrewDescription,
    H3,
    ImgCard,
    InputForm,
    LoadingInfo,
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
      // location.reload();
      const ul = document.getElementById('letters');
      const li = document.createElement('li');
      li.textContent = letter.value;
      ul.appendChild(li);
      letter.value = '';
    },
  },

  mounted() {
    console.log('====', this.$store.state);
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
  .specs {
    flex-grow: 1;
  }
  @include media-breakpoint-down(xl) {
    .poster {
      width: 300px;
      height: 300px * 3 / 2;
      margin-right: 40px;
    }
  }
  @include media-breakpoint-down(lg) {
    display: block;
    .poster {
      margin-bottom: 40px;
    }
  }
}
</style>
