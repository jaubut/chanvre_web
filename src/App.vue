<template>
  <div id="app">
    <header>
      <NavService></NavService>
      <HeadService
        v-if="this.$route.name === 'Index'"
        hUn1="chanvre"
        hUn2="québec"
        pUn1="rebrand"
      ></HeadService>
    </header>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import NavService from './components/NavService'
import HeadService from './components/HeadService'

export default {
  name: 'app',
  components: {
    NavService,
    HeadService
  },
  watch: {
    '$route': 'fetchData'
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Varela+Round')
@import './assets/css/_main'

html,
body
  margin: 0
  padding: 0
a
  text-decoration: none
header
  display: grid
  grid-template: 10% 90% / 15% 70% 15%
  background: $yellow
.fade-enter-active,
.fade-leave-active
  transition: opacity .5s

.fade-enter,
.fade-leave-to
  opacity: 0
</style>
