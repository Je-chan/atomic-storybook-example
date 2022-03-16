<template>
  <div class="specs">
    <div>
      <H3 :style="{ marginBottom: '16px' }">
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
</template>
<script>
import {mapState} from 'vuex'

import H3 from '~/components/atoms/h/H3';

export default {
  components: {
    H3
  },
  
  computed: {
    ...mapState('grew', ['searchedGrew', 'loading']),
  },
}
</script>
<style lang="scss" scoped>
  
</style>