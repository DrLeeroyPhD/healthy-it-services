<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" type="text/css" />

    <div id="background-container">
      <img src="./assets/bg-laptop.jpg" id="background" />
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
    <router-view/>


    <!-- <footing /> -->

    <!-- TEMP FOOTER -->
        <footer>
            healthy it services 2018
        </footer>
    <!-- END TEMP FOOTER -->

  </div>
</template>


f
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

@font-face {
    font-family: glacial;
    src: url(./assets/GlacialIndifference-Regular.otf);
}

@font-face {
    font-family: glacialBold;
    src: url(./assets/GlacialIndifference-Bold.otf);
}


/** BACKGROUND **/
div#background-container{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
}

img#background{
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 110vw;
    z-index: -1000;
    filter: opacity(.30);
    z-index: -11;
}

/** NAVIGATION **/
div#nav{
    width: 100vw;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 5px;
    z-index: 50;
    font-family: glacial, sans-serif;
}

div#nav *{
    color: var(--dark-grey);
    font-size: 1.5em;
    text-decoration: none;
    transition: color ease-out .2s;
}

div#nav *:hover{
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
}
/** END TEMP FOOTER STYLING **/

</style>
