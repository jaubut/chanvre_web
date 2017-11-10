<template>
  <div id="head-service">
    <router-link :to="{ name: 'Index'}">
      <div class="title-service">
        <h1>{{ hUn1 }}<br />{{ hUn2 }}</h1>
        <p>{{ pUn1 }}</p>
        <img class="logo" src="../assets/logo.svg" alt="logo chanvre quebec Services">
      </div>
    </router-link>
    <a href="#index1" v-smooth-scroll="{ duration: 1200, offset: -20 }">
      <div class="img-cursor-div">
        <img class="cursor" src="../assets/cursor.svg" alt="cursor">
        <img class="arrow" src="../assets/arrow-down.svg" alt="arrow down">
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'head-service',
  props: ['hUn1', 'hUn2', 'pUn1']
}
</script>
<style lang="sass" scoped>
@import '../assets/css/_main.sass'
#head-service
  grid-area: 2/2/3/3
  display: flex
  flex-flow: column wrap
  justify-content: space-around
  align-items: center
  text-align: center
  height: 90vh
.title-service
  display: flex
  flex-flow: column wrap
  align-content: center
  align-items: center
  color: white
  img.logo
    width: 58px
    padding-top: 45px
.img-cursor-div
  display: flex
  flex-flow: column wrap
  justify-content: center
  align-items: center
  &:hover
    cursor: pointer
    transform: translateY(5px)
    transition: transform 0.5s ease
  .cursor
    width: 13px
  .arrow
    width: 10px
    padding-top: 5px
h1
  font-family: 'Abril Fatface', cursive
  font-size: 55px
  margin-bottom: 0
  line-height: 3.8rem
  letter-spacing: 0.1rem
  font-weight: 300
p
  font-family: 'Varela Round', sans-serif
  letter-spacing: 0.5rem
</style>
