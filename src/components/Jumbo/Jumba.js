import React from 'react'
import image from '../../assets/images/bg/banner-01.jpg';

export default function Jumba() {
    return (
        <section className="banner-bg-slider">
            <div id="bg-slider" className="kenburnsy" style={{ height: "700px" }}>
                <div className="slide" style={{ backgroundImage: `url(${image})`, opacity: 1 }}></div>
                <div className="slide" ></div>
                <div className="slide" ></div>
            </div>
            <div className="banner-bg-slider-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" col-lg-9 col-md-9 d-flex">
                            <div className="content text-center">
                                <h1 className="text-white mb-2">Drop <span className="text-primary"> Resume &amp; Get </span> Your Desired Job</h1>
                                <p className="lead mb-4 font-weight-normal text-white">We've got monthly and daily plans that fit your needs. You can always exchange out jobs, upgrade or scale down when you need to.</p>
                                <div className="job-search-field">
                                    <div className="job-search-item">
                                        <form>
                                            <div className="col-sm-12">
                                                <div className="form-group mb-md-0 justify-content-center">
                                                    <input type="text" className="form-control" name="job_title" placeholder="Job Title, Skill or Company"/>
                                                        <button type="submit" className="btn btn-primary btn-lg m-0"><i className="fas fa-search"></i> Find Jobs</button>
                  </div>
                                                </div>
              </form>
            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</section>
            )
}
