`
<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/organisms/common/Header';
import Footer from '~/components/organisms/common/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
