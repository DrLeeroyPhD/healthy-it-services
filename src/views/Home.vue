<template>
  <div class="home page">
    <div class="logo-container">
      <img src="@/assets/logo-edit.png" alt="The company logo of 3 8-bit hearts">
      <img src="@/assets/logo-edit.png" alt="The company logo of 3 8-bit hearts">
      <img src="@/assets/logo-edit.png" alt="The company logo of 3 8-bit hearts">
    </div>
    <h1>HEALTHY IT <br>SERVICES</h1>
    <h2>christopher denny | it consultant</h2>
  </div>
</template>

<style>
  .arrow {
    top: 0;
  }

  .arrow2 {
    right: 0;
  }

  .home {
    margin-left: 6%;
    margin-top: 60px;
  }

  .home h1 {
    font-size: 6em;
    line-height: .9em;
    font-weight: bolder;
    color: var(--dark-purple);
    text-shadow: 3px 3px 0 var(--dark-grey);
    margin-bottom: -10px;
    margin-top: -.05em;
    margin-right: 25px;
    font-family: glacialBold, sans-serif;
    letter-spacing: 10px;
  }

  .home h2 {
    font-size: 2em;
    color: var(--dark-grey);
    letter-spacing: 15px;
    font-family: glacial, sans-serif;
    font-weight: lighter;
    margin-right: 25px;
  }

  /** RESPONSIVE STYLING **/

  @media screen and (max-width: 755px) {
    /** Make Home Page Lettering Fit on Tablets and Large phones **/
    
      .home h1 {
        font-size: 4em;
      }

      .home h2 {
        font-size: 1.4em;
        letter-spacing: 8px;
      }
  }

  @media screen and (max-width: 475px) {
    /** Make Logo Fit on large and medium phones **/
      .logo-container img {
        width: 20vw;
      }
  }

  @media screen and (max-width: 400px) {
    /** Make Logo Fit on medium and small phones **/
      .home h1 {
        font-size: 2.75em;
      }

      .home h2 {
        font-size: 1.2em;
      }
  }
</style>
