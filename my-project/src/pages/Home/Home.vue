<template>
  <div>
    <!--nav导航-->
    <!--<headers></headers>-->
    <!--tab导航-->

    <headerNav></headerNav>
    <main-content></main-content>

  </div>
</template>

<script>
  // import headers from '../../components/header/header'
import headerNav from '../../components/commen/headerNav'
  import MainContent from '../../pages/Home/Main/Main'
export default {
  data () {
    return {
    }
  },
  components:{
    // headers,
    headerNav,
    MainContent
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
