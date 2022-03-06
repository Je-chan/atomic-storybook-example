<template>
  <div>
    <HeadLine />
    <Search />
    <GrewList />
  </div>
</template>

<script>
import HeadLine from '~/components/templates/home/HeadLine';
import Search from '~/components/templates/home/Search';
import GrewList from '~/components/templates/home/GrewList';
export default {
  components: {
    HeadLine,
    Search,
    GrewList,
  },
  created() {
    this.$store.commit('grew/resetGrews');
  },
};
</script>
