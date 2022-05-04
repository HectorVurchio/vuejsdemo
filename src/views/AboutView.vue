<template>
  <section id="about-section">
    <h2>The Client Side</h2>
    <p>
      This web application has been developed in its client side or front end
      through Vue JavaScript framework usage over which the single page
      application criteria is considered. Along with the framework, some
      libraries such as N-Progress, Axios and Chartjs were necessary to help
      with the application building. Of course, should be highlighted the fact
      that JavaScript and CSS knowledge was important to carry on some tasks
      related with Vue handling.
    </p>
    <h2>The Server Side</h2>
    <p>
      The server side or backend is an API REST coded in PHP 8.5.1, using PHP
      libraries such as Phpspreadsheet and aws who helped with the Excel files
      opening and uploading respectively, running within an httpd 2.4 Web
      Server. The data provided by the form in the client side is stored in an
      Oracle JSON data base along with the name and extensions of each Excel
      file. The case of the Excel file itself is not stored in the data base,
      whereby the Oracle Object Storage is employed for such purpose.
    </p>
    <h2>The Infrastructure</h2>
    <p>
      The infrastructure schema over which the said backend lays over, is
      depicted in the picture below and is provided by Oracle Cloud
      Infrastructure as a free tear product being this useful to test some
      applications or deploying demos as is the case of this application.
    </p>
    <p>
      Our backend is running in an Oracle-Linux server 8.5 virtual machine
      aarch64 provided by Oracle as well as other services here used such as
      Oracle JSON data base and Oracle Object Storage where the form data and MS
      Excel files are stored respectively. All those services lastly mentioned
      are offered by Oracle as a free sample of its products, this means that
      the whole backend is running by paying $0. Other services as SSL
      certificate and public domain name service run by account of third party
      providers such as <a href="https://www.zerossl.com">ZeroSSL.com</a> and
      <a href="https://www.no-ip.com">No-IP.com</a> as a free trial.
    </p>
    <img id="about-img" />
    <h2>The Repository</h2>
    <p>
      All the code written here was laid out in a public repository for its
      front end in GitHub whose name is
      <a href="https://github.com/HectorVurchio/vuejsdemo">vuejsdemo</a> and
      deployed its distribution folder in
      <a href="https://www.render.com">render.com</a> page. For the backend
      case, the public repository name is
      <a href="https://github.com/HectorVurchio/PHP_Excel_Oracle"
        >PHP_Excel_Oracle</a
      >.
    </p>
  </section>
</template>
<style scoped>
#about-section {
  display: flex;
  flex-direction: column;
  margin: 50px;
  font-family: "Roboto";
  text-align: justify;
  text-justify: inter-word;
  font-size: 20px;
}

#about-section a:link {
  text-decoration: none;
}
#about-section a:visited {
  text-decoration: none;
}

#about-section #about-img {
  content: url("../assets/Architecture.png");
}

@media screen and (min-width: 400px) and (max-width: 800px) {
  #about-section h2 {
    font-size: 20px;
  }
  #about-section {
    font-size: 18px;
  }
}

@media screen and (min-width: 300px) and (max-width: 399px) {
  #about-section h2 {
    font-size: 18px;
  }
  #about-section {
    font-size: 16px;
  }
}

@media screen and (min-width: 200px) and (max-width: 299px) {
  #about-section h2 {
    font-size: 16px;
  }
  #about-section {
    font-size: 14px;
  }
}
</style>
