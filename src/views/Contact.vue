<template>
  <div class="contact page">
    <a href="#">
      <img src="@/assets/email.png" alt="An icon of a computer screen with a letter in the center to indicate email functionality.">
    </a>
    <emailForm />
  </div>
</template>

<style>
  .contact {
    margin-top: 4%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .contact a img {
    width: 50vw;
  }


  /** RESPONSIVE STYLING **/

  @media screen and (max-width: 755px) {
    /** Make screen image fit better on Smaller screens **/
      .contact a img {
        width: 75vw;
      }
  }

  @media screen and (max-width: 475px) {
    /** Make Logo Fit on even Smaller screens **/
      .contact a img {
        width: 100vw;
      }
  }
</style>

<script>
import emailForm from '@/components/Form.vue'

export default {
  name: 'contact',
  components: {
    emailForm
  }
}
</script>
