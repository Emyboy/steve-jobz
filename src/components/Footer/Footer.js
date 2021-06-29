import React from 'react'

export default function Footer() {
    return (
        <footer className="footer bg-light">
  <div className="position-relative">
    {/* <svg className="footer-shape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="85px">
      <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M-0.000,-0.001 L1923.000,-0.001 L1923.000,84.999 C1608.914,41.669 1279.532,19.653 962.500,19.000 C635.773,18.326 323.692,40.344 -0.000,84.999 C-0.000,-83.334 -0.000,168.332 -0.000,-0.001 Z"></path>
      </svg> */}
    </div>
    <div className="container pt-5">
      <div className="row mt-5">
        <div className="col-lg-3 col-md-6">
          <div className="footer-link">
            <h5 className="text-dark mb-4">Trending Job</h5>
            <ul className="list-unstyled">
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Browse Categories</a></li>
              <li><a href="#">Submit Resume</a></li>
              <li><a href="#">Candidate Dashboard</a></li>
              <li><a href="#">Job Alerts</a></li>
              <li><a href="#">My Bookmarks</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
          <div className="footer-link">
            <h5 className="text-dark mb-4">Trending Companies</h5>
            <ul className="list-unstyled">
              <li><a href="#">Shortcodes</a></li>
              <li><a href="#">Job Page</a></li>
              <li><a href="#">Job Page Alternative</a></li>
              <li><a href="#">Resume Page</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <h5 className="text-dark mb-4">Subscribe Us</h5>
          <div className="footer-subscribe">
            <p>Sign Up to our Newsletter to get the latest news and offers.</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
              </div>
              <button type="submit" className="btn btn-primary btn-md">Get Notified</button>
            </form>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <h5 className="text-dark mb-4">Download App</h5>
          <div className="footer-subscribe">
            <p>Download the latest Slick new job apps now</p>
            <div className="d-inline-block">
              <a className="btn btn-white btn-sm btn-app " href="#">
                <i className="fab fa-apple"></i>
                <div className="btn-text text-left">
                  <small>Download on the </small>
                  <span className="mb-0 d-block">App Store</span>
                </div>
              </a>
              <a className="btn btn-white btn-sm btn-app mt-3" href="#">
                <i className="fab fa-google-play"></i>
                <div className="btn-text text-left">
                  <small>Get it on  </small>
                  <span className="mb-0 d-block">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom bg-dark mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="d-flex justify-content-md-start justify-content-center">
              <ul className="list-unstyled d-flex mb-0">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="contact-us.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-right mt-4 mt-md-0">
            <p className="mb-0"> ©Copyright <span id="copyright"> <script src="https://embed.tawk.to/_s/v4/app/60d19012b18/js/twk-main.js" charset="UTF-8" crossorigin="*"></script><script src="https://embed.tawk.to/_s/v4/app/60d19012b18/js/twk-vendor.js" charset="UTF-8" crossorigin="*"></script><script src="https://embed.tawk.to/_s/v4/app/60d19012b18/js/twk-chunk-vendors.js" charset="UTF-8" crossorigin="*"></script><script src="https://embed.tawk.to/_s/v4/app/60d19012b18/js/twk-chunk-common.js" charset="UTF-8" crossorigin="*"></script><script src="https://embed.tawk.to/_s/v4/app/60d19012b18/js/twk-runtime.js" charset="UTF-8" crossorigin="*"></script><script src="https://embed.tawk.to/_s/v4/app/60d19012b18/js/twk-app.js" charset="UTF-8" crossorigin="*"></script><script async="" src="https://embed.tawk.to/5ef5ebad4a7c6258179b638c/default" charset="UTF-8" crossorigin="*"></script><script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>2021</span> <a href="#"> Jobber </a> All Rights Reserved </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}
