<template>
  <div class="form page">
    <form @submit.prevent="validateBeforeSubmit" novalidate>
      <div>
        <input type="email" name="email" v-validate="'required'" placeholder="Email Address" />
        <p class="error-message" v-if="errors.has('email')">{{ errors.first('email') }}</p>
      </div>
      <div>
        <input type="text" name="message" v-validate="'required'" placeholder="message" />
        <p class="error-message" v-if="errors.has('message')">{{ errors.first('message') }}</p>
      </div>
      <div>
        <button :disabled="errors.any()">Add</button>
      </div>
    </form>
  </div>
</template>

<style>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error-message{
    color: red;
  }
</style>
