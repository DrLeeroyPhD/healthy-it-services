<template>
    <div id="footer">
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
      <router-link to="/services">services</router-link>
      <router-link to="/contact">contact</router-link>
    </div>
</template>

<script>
export default {
  name: 'footing'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
