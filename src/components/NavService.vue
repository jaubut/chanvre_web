<template>
  <div id="nav-service">
    <router-link :to="{ name: 'Contact'}"><p>contact</p></router-link>
  </div>
</template>
<script>
export default {
  name: 'nav-service'
}
</script>
<style lang="sass" scoped>
#nav-service
  z-index: 1
  grid-area: 1/2/2/3
  display: flex
  height: 10vh
  align-items: center
  justify-content: flex-end
p
  text-align: right
  color: white
  font-family: 'Varela Round', sans-serif
  font-weight: 100
  font-size: 0.85rem
  padding: 0 15px
a
  text-decoration: none
  opacity: 0.7
  &:hover
    opacity: 1
    cursor: pointer
    transform: translateY(-1px)
    transition: transform 0.8s ease
    transition: opacity 0.3s ease
</style>
