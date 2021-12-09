<template>
<div>
  <Header></Header>
  
  <router-view></router-view>
  
  <Footer></Footer>

</div>
</template>

<script>
import Header from '../components/Common/Header.vue'
import Footer from '../components/Common/Footer.vue'

export default {
   components: {
      Header,
      Footer
  },
  name: "Master",
 
};
</script>
