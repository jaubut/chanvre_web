<template>
  <div id="services">
    <div class="left-side text-side">
      <p>left</p>
    </div>
    <div class="right-side text-side">
      <p>right</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'services'
}
</script>
<style lang="sass" scoped>
@import '../assets/css/_main'
#services
  display: grid
  grid-template: 50% 50% / 50% 50%
  height: 90vh
.text-side
  justify-content: center
  align-items: center
.left-side
  grid-area: 1/1/3/2
  display: flex
  background: $yellow
.right-side
  grid-area: 1/2/3/3
  display: flex
</style>
