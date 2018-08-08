<template>
  <div class="about page">
    <p>
      Healthy IT Services was founded with the mission to serve the needs of local medical offices.
    </p>
    <p>
      Dedicated to adherence of HIPAA Compliant standards and providing the necessary training in maintaining patient privacy,
      our services include everything from simple computer diagnostics and virus removal to data recovery and network security.
    </p>
    <p>
      Built with the intent to cater to the needs of facilities that require regular check-ups to their technology and security,
      but not in need of a full-time IT staff, Healthy IT Services is ready to meet the unique needs of your office.
    </p>
  </div>
</template>

<style>
/** Tentative Arrow Placement
  .arrow{
    top: 30% !important;
  }

  .arrow1{
    left: 5% !important;
  }

  .arrow2{
    left: 40% !important;
  }

End Arrow Placement **/

  .about {
    padding: 2px 25px;
    background-color: rgba(255, 255, 255, 0.7);
    width: 60%;
    margin-left: 10%;
    margin-top: 6%;
    z-index: 2;
    box-sizing: border-box;
  }

  .about p {
    font-size: 1.6em;
    font-family: glacial, sans-serif;
  }


  /** RESPONSIVE STYLING **/

  @media screen and (max-width: 755px) {

    /** Make About Lettering Fit on Tablets and Large phones **/
    .about {
      width: 80%;
      margin-left: 3%;
    }

    .about p {
      font-size: 1.4em;
    }
  }

  @media screen and (max-width: 475px) {
    /** Make About Lettering Fit on large and medium phones **/
      .about p {
        font-size: 1.2em;
      }
  }

  @media screen and (max-width: 400px) {
    /** Make About section fit on medium and small phones **/
      .about {
        margin-left: 0;
        width: 100%;
      }

      .about p {
        font-size: 1em;
      }
  }
</style>
