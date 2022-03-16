<template>
  <div class="grew-info-description-wrapper">
    <GrewDescription />
    <div class="letter-form">
      <SendLetters class="letter-submit" />
      <LetterList class="letter-list" />
    </div>
  </div>
</template>
<script>
import GrewDescription from '~/components/molecules/grew/GrewDescription';
import SendLetters from '~/components/molecules/grew/SendLetters.vue';
import LetterList from '~/components/molecules/grew/LetterList.vue';

export default {
  components: {
    GrewDescription,    
    SendLetters,
    LetterList
  },
}
</script>
<style lang="scss" scoped>
.grew-info-description-wrapper {

  .letter-form {
    flex-grow: 1;
    .letter-submit {
      margin-bottom: 25px;
    }
  }
}
</style>