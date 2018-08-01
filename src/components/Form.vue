<template>
  <div class="emailForm page">

    <div class="form">
      <form action="https://formspree.io/healthyitservices@gmail.com" method="POST" target="_blank">
        <input type="text" name="name" placeholder="Name" id="nameInput" /><br />
        <input type="email" name="_replyto" placeholder="Email Address" id="emailInput" /><br />
        <input type="submit" value="Send">
      </form>
    </div>

  </div>
</template>

<style scoped>
  .form {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    margin-top: 10%;
    outline: none;
    z-index: 5;
    font-family: glacial, sans-serif;
  }

  .form input {
    border-radius: 8px;
    padding: 6px;
    background-color: rgba(255, 255, 255, 0.7);
    border: 2px solid var(--dark-purple);
    transition: all .15s;
    box-shadow: 0;
  }

  .form input:hover {
    border: 2px solid #8669a9;
    transition: all .15s;
  }

  .form input:focus {
    border: 2px solid var(--light-purple);
    transition: border .15s;
    outline: none;
  }

  .form input[type="submit"] {
    width: 100%;;
    padding: 5px;
    background-color: var(--light-purple);
  }

  .form input[type="submit"]:hover {
    border: 2px solid var(--light-purple);
    background-color: var(--dark-purple);
    color: #fff;
  }
</style>

<script>
export default {
  name: 'emailForm',
}

</script>
