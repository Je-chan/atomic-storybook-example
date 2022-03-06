`
<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/templates/common/Header';
import Footer from '~/components/templates/common/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
