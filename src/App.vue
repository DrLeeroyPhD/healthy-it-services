<template>
  <div id="app">

    <div id="background-container">
      <img src="./assets/bg-laptop.jpg" id="background" alt="Backround image of a laptop." />
    </div>

    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/services">services</router-link>
      <router-link to="/contact">contact</router-link>
    </div>

    <img src="@/assets/left-arrow.svg" alt="" class="arrow arrow1" />
    <img src="@/assets/left-arrow.svg" alt="" class="arrow arrow2" />

<!-- ***** CONTENT ***** -->

    <transition name="router-anim" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
      <router-view/>
    </transition>


    <!-- <footing /> -->

    <!-- TEMP FOOTER -->
        <footer>
            healthy it services 2018
        </footer>
    <!-- END TEMP FOOTER -->

  </div>
</template>

<!-- IMPORTS -->
<script>
   // import Footing from '@/components/Footing.vue'
</script>

<style>

/** GLOBAL VARIABLES **/
:root{
    --dark-purple: #5F5170;
    --light-purple: #A197A8;
    --dark-grey: #404040;
    --light-grey: #515151;
}

/** IMPORTS **/
@font-face {
    font-family: glacial;
    src: url(./assets/GlacialIndifference-Regular.otf);
}

@font-face {
    font-family: glacialBold;
    src: url(./assets/GlacialIndifference-Bold.otf);
}

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

/** BACKGROUND **/
#background-container{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
}

#background{
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 110%;
    min-height: 100%;
    z-index: -1000;
    filter: opacity(.30);
    z-index: -11;
}

/** NAVIGATION **/
#nav{
    width: 100vw;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 5px;
    z-index: 50;
    font-family: glacial, sans-serif;
    letter-spacing: 10px;
}

#nav *{
    color: var(--dark-grey);
    font-size: 1.8em;
    text-decoration: none;
    transition: color ease-out .2s;
}

#nav *:hover{
    color: #bbb;
    transition: color ease-out .2s;
}

/** LOGO **/
.logo-container img{
    width: 125px;
    display: inline-block;
    margin: 5px;
}

/** ARROWS DEFAULT **/
.arrow{
  display: inline-block;
  position: absolute;
  width: 90px;
  z-index: -2;
}

.arrow1{
  transform: rotate(180deg);
  transition: top 1s 1s, left 1s, right 1s, bottom 1s 1s, transform 2s;
}

.arrow2{
  transition: top 1s, left 1s 1s, right 1s 1s, bottom 1s, transform 2s;
}

.page{
  position: fixed;
  width: inherit;
}

/** TEMP FOOTER STYLING **/
footer{
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-weight: lighter;
    color: var(--dark-grey);
    font-size: .75em;
    letter-spacing: 4px;
    font-family: glacial, sans-serif;
}
/** END TEMP FOOTER STYLING **/

/** RESPONSIVE STYLING **/

@media screen and (max-width: 755px) {
  /** Make Navigation Lettering Fit on Smaller screens **/
    #nav * {
      letter-spacing: 8px;
      font-size: 1.2em;
      text-shadow: 0 0 2px var(--light-grey);
    }

  /** Ensure Background Continues to show the laptop **/
    #background {
      right: -25% !important;
      left: auto;
    }
}

@media screen and (max-width: 475px) {
  /** Make Navigation Lettering Fit on even Smaller screens **/
    #nav * {
      letter-spacing: 6px;
      font-size: 1em;
      text-shadow: 0 0 2px var(--light-grey);
    }
}
</style>
