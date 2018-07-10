<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" type="text/css" />
    <div id="nav">
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/services">services</router-link>
      <router-link to="/contact">contact</router-link>
    </div>


    <div id="background-container">
      <img src="./assets/bg-laptop.jpg" id="background" />
    </div>

    <footing />

    <router-view/>
  </div>
</template>



<!-- IMPORTS -->
<script>
   import footing from '@/components/Footing.vue'
</script>

<style>
:root{
    --dark-purple: #5F5170;
    --light-purple: #A197A8;
    --dark-grey: #404040;
    --light-grey: #515151;
}

div#background-container{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

img#background{
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 110vw;
    z-index: -1000;
    filter: opacity(.30);
}

div#nav{
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    background-color: rgba(255, 255, 255, 0.4);
    padding: 5px;
    z-index: 50;
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

.logo img{
    width: 150px;
    display: inline-block;
    margin: -20px;
}
</style>
