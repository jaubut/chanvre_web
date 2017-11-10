<template>
  <div id="index">
    <section id="index1">
      <div class="section-1">
        <h1>Discover our services</h1>
        <div class="text-area">
          <h3><span>rebrand.</span> is a big part of our mission here at <span>Chanvre Quebec</span>. It is our services division where we offer everything essentiel around branding your hemp business.</h3>
        </div>
      </div>
    </section>
    <section>
      <div class="section-2">
        <div class="text-zone">
          <h2>Web development</h2>
          <p>Our web development services are high end hand crafted web apps.</p>
          <button class="apply-now">talk with our team</button>
        </div>
        <img class="image-zone" height="100%" width="auto" src="../assets/webdev-1.png" alt="macbook jechanvre.io web">
      </div>
    </section>
    <section>
      <div class="section-3">
        <img height="100%" width="auto" src="../assets/facebook-page.png" alt="facebook chanvre quebec">
        <div class="text-zone">
          <h2>Social Media</h2>
          <p>In today's world, to get people attention and conversions. Your online presence need a great strategy. Socials medias play a center role in that journey. From Instagram, to twitter and beyond. Let us help you find the perfect strategy that suit your business profile.</p>
          <button class="apply-now">talk with our team</button>
        </div>
      </div>
    </section>
    <section>
      <div class="section-2">
        <div class="text-zone">
          <h2>Photos & Videos</h2>
          <p>Get your teams, services and products a nice look with services from professionals photographers and videographers.</p>
          <button class="apply-now">talk with our team</button>
        </div>
        <div class="fb-video" data-href="https://www.facebook.com/jechanvre/videos/1929800854006031/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/jechanvre/videos/1929800854006031/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/jechanvre/videos/1929800854006031/">jechanvre</a><p>Darko raconte l&#039;histoire derrière les casquettes « jechanvre » 🌱
 https://jechanvre.io</p>Publié par <a href="https://www.facebook.com/jechanvre/">Chanvre Québec</a> sur dimanche 5 novembre 2017</blockquote></div>
      </div>
    </section>
    <section>
      <div class="section-3">
        <img height="100%" width="auto" src="../assets/branding.jpg" alt="chanvre quebec graine de chanvre">
        <div class="text-zone">
          <h2>Brandisng</h2>
          <p>Finally, we love developing great experiences around hemp. From food, to construction, we can help create your next brand identity.</p>
          <button class="apply-now">talk with our team</button>
        </div>
      </div>
    </section>
    <footer>
      <div class="footer-social">
        <img src="../assets/twitter-black.svg" alt="twitter logo">
        <img src="../assets/instagram-black.svg" alt="instagram logo">
      </div>
      <div class="footer-text">
        <h3>Start your image <span class="yellow-here">here</span></h3>
      </div>
      <div class="footer-right">
        <div class="footer-line"></div>
        <p>© 2017 Chanvre Quebec <br>All rights reserved.</p>
        <p>Crafted with love <br />at Chanvre Quebec</p>
      </div>
    </footer>
  </div>
</template>
<script>

export default {
  name: 'index'
}
</script>
<style lang="sass" scoped>
@import '../assets/css/_main'

section
  height: 85vh
  display: grid
  grid-template: 5% 45% 45% 5% / 2% 48% 48% 2%
.section-1
  grid-area: 2/2/4/4
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  background: white
  padding: 10px 25px
  border-radius: 5px
.section-2
  grid-area: 2/2/4/4
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  background: $light-grey
  padding: 25px 45px
  border-radius: 5px
.section-3
  grid-area: 2/2/4/4
  display: flex
  flex-direction: row
  justify-content: space-around
  padding: 25px 45px
  align-items: right
.text-zone
  display: flex
  flex-flow: column wrap
  text-align: left
  max-width: 35%
.image-zone
  align-self: right
.text-area
  padding: 0 30%
.allo
  display: flex
  flex-flow: column wrap
  height: 100vh
  justify-content: flex-end
  align-items: center
h1
  font-family: 'Abril Fatface', cursive
  color: $grey
  font-weight: 300
  font-size: 3.5rem
  letter-spacing: 2px
h2
  font-family: 'Abril Fatface', cursive
  font-size: 3rem
  font-weight: 300
  margin-bottom: 0
h3
  font-family: 'Varela Round', sans-serif
  line-height: 1.7rem
  color: black
p
  font-family: 'Varela Round', sans-serif
  line-height: 1.5rem
  color: $grey
button
  border: none
  align-self: center
  cursor: pointer
.apply-now
  width: 250px
  height: 50px
  background: $yellow
  color: white
  border-radius: 5px
  margin: auto
  opacity: 0.7
  &:hover
    opacity: 1
    transform: translateY(-1px)
footer
  display: grid
  grid-template: 20% 60% 20% / 4% 10% 72% 10% 4%
  margin: 30px
  padding: 35px
  height: 30vh
  background: $light-grey
  border-radius: 5px
.footer-logo
  grid-area: 1/2/2/3
  img
    height: 20px
.footer-social
  display: flex
  flex-flow: row wrap
  align-self: flex-start
  justify-content: center
  grid-area: 1/4/2/5
  img
    height: 15px
    padding: 10px 10px
.footer-text
  grid-area: 2/3/3/4
  font-family: 'Roboto-Bold', sans-serif
  font-size: 1.1rem
  color: $grey
  letter-spacing: 0
  text-align: center
  .yellow-here
    color: $yellow
    font-weight: 500
    cursor: pointer
    opacity: 0.7
    &:hover
      opacity: 1
  h3
    color: $grey
  a
    color: $grey
    text-decoration: none
    &:hover
      cursor: pointer
      color: black
.footer-right
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  grid-area: 3/3/4/4
  margin-bottom: 15px
  p
    font-family: 'Roboto', sans-serif
    align-self: center
    font-size: 0.6rem
    color: $grey
.footer-line
  grid-area: 3/3/4/4
  width: 100%
  align-self: top
  margin-top: 15px
  border: 1px solid $grey
</style>
