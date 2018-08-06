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
    margin-left: 6%;
    margin-top: 6%;
    z-index: 2;
  }

  .about p {
    font-size: 1.6em;
    font-family: glacial, sans-serif;
  }


  /** RESPONSIVE STYLING **/

  @media screen and (max-width: 755px) {

    /** Make About Lettering Fit on Smaller screens **/
    .about {
      width: 80%;
    }
  }

  @media screen and (max-width: 475px) {
    /** Make Services Lettering Fit on even Smaller screens **/
      .about p {
        font-size: 1.2em;
      }
  }
</style>
