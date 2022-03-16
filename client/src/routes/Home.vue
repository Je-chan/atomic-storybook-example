<template>
  <div>
    <HeadLine />
    <Search />
    <GrewList />
  </div>
</template>

<script>
import HeadLine from '~/components/organisms/home/HeadLine';
import Search from '~/components/organisms/home/Search';
import GrewList from '~/components/organisms/home/GrewList';
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
