<template>
  <div class="emailForm page">
    <div class="error-message-container">
      <p class="error-message" v-if="errors.has('message')">{{ errors.first('message') }}</p>
      <p class="error-message" v-if="errors.has('email')">{{ errors.first('email') }}</p>
    </div>

    <div class="form">
      <form @submit.prevent="validateBeforeSubmit" novalidate>
        <div>
          <input type="email" name="email" v-validate="'required'" placeholder="Email Address" />
        </div>
        <div>
          <input type="text" name="message" v-validate="'required'" placeholder="Message" />
        </div>
        <div>
          <button :disabled="errors.any()">Email!</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .error-message-container{
    width: 100%;
    position: absolute;
    display: inline-block;
    top: 10px;
  }

  .form {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    margin-top: 12%;
    outline: none;
    z-index: 5;
    font-family: glacial, sans-serif;
  }

  .emailForm .error-message {
    color: red;
    text-align: center;
    background-color: rgba(255,255,255,0.7);
    padding: 6px;
    font-family: glacial, sans-serif;
    font-size: 1.05em;
  }

  .form input {
    border-radius: var(--primary-radius);
    padding: 6px;
    background-color: rgba(255, 255, 255, 0.7);
    border: 2px solid var(--dark-purple);
    transition: border .15s;
    box-shadow: 0;
  }

  .form input:hover {
    border: 2px solid #8669a9;
    transition: border .15s;
  }

  .form input:focus {
    border: 2px solid var(--light-purple);
    transition: border .15s;
    outline: none;
  }

  .form button {
    width: 100%;
    border-radius: var(--primary-radius);
    border: 2px solid var(--dark-purple);
    padding: 5px;
    background-color: var(--light-purple);
    transition: all .15s;
  }

  .form button:hover:not([disabled]) {
    border: 2px solid var(--light-purple);
    background-color: var(--dark-purple);
    color: #fff;
    transition: all .15s;
  }
</style>

<script>
export default {
  name: 'emailForm',

  data(){
    return{
      email: '',
      message: ''
    }
  },
  computed: {
  isComplete() {
      return this.email && this.message;
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('From Submitted!');
          return;
        }
      });
    }
  }
}

</script>
