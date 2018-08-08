<template>
  <div class="services page">

    <ul>
      <li>IT consulting</li>
      <li>network solutions and security</li>
      <li>virus removal</li>
      <li>computer diagnostics and repair</li>
      <li>data recovery</li>
      <li>HIPAA compliance</li>
      <li>10+ years experience in IT</li>
      <li>phishing training available</li>
      <li>free first consultation!</li>
    </ul>

    <div class="logo-container">
      <img src="@/assets/logo-edit.png" alt="The company logo of 3 8-bit hearts">
      <img src="@/assets/logo-edit.png" alt="The company logo of 3 8-bit hearts">
      <img src="@/assets/logo-edit.png" alt="The company logo of 3 8-bit hearts">
    </div>
  </div>
</template>

<style>
  .services {
    width: 100%;
    margin-top: 8%;
    z-index: 2;
    display: flex;
    justify-content: space-around;
  }

  .services ul {
    width: 60%;
    padding: 2px 25px;
    padding-left: 50px;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.7);
  }

  .services ul li{
    font-family: glacial, sans-serif;
    font-size: 2.5em;
    list-style: inside;
  }

  .services .logo-container {
    position: absolute;
    display: inline-block;
    z-index: -10;
    top: -50px;
  }


  /** RESPONSIVE STYLING **/

  @media screen and (max-width: 755px) {

    /** Prevent Services Section from colliding with Nav **/
    .services {
      margin-top: 80px;
    }

    /** Make Services Page Lettering Fit on Tablets and Large phones **/
      .services ul li {
        font-size: 1.5em;
      }

      .services .logo-container img {
        width: 15vw;
      }
  }

  @media screen and (max-width: 475px) {
    /** Make Services Lettering Fit on large and medium phones **/
      .services ul {
        width: 95%;
        padding: 25px 15px 25px 55px;
      }

      .services ul li {
        font-size: 1.3em;
      }
  }
</style>
