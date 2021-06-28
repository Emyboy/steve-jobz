import React from 'react'

export default function JobListingList() {
    return (
        <section className="space-ptb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="sidebar">
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Date Posted</h6>
                                    <a className="ml-auto" data-toggle="collapse" href="#dateposted" role="button" aria-expanded="false" aria-controls="dateposted"> <i className="fas fa-chevron-down"></i> </a></div>
                                <div className="collapse show" id="dateposted">
                                    <div className="widget-content">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="dateposted1" />
                                            <label className="custom-control-label" for="dateposted1">Last hour</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="dateposted2" />
                                            <label className="custom-control-label" for="dateposted2">Last 24 hour</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="dateposted3" />
                                            <label className="custom-control-label" for="dateposted3">Last 7 days</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="dateposted4" />
                                            <label className="custom-control-label" for="dateposted4">Last 14 days</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="dateposted5" />
                                            <label className="custom-control-label" for="dateposted5">Last 30 days</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Specialism</h6>
                                    <a className="ml-auto" data-toggle="collapse" href="#specialism" role="button" aria-expanded="false" aria-controls="specialism"> <i className="fas fa-chevron-down"></i> </a> </div>
                                <div className="collapse show" id="specialism">
                                    <div className="widget-content">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="specialism1" />
                                            <label className="custom-control-label" for="specialism1">IT Contractor</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="specialism2" />
                                            <label className="custom-control-label" for="specialism2">Charity &amp; Voluntary</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="specialism3" />
                                            <label className="custom-control-label" for="specialism3">Digital &amp; Creative</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="specialism4" />
                                            <label className="custom-control-label" for="specialism4">Estate Agency</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="specialism5" />
                                            <label className="custom-control-label" for="specialism5">Graduate</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Job Type</h6>
                                    <a className="ml-auto" data-toggle="collapse" href="#jobtype" role="button" aria-expanded="false" aria-controls="jobtype"> <i className="fas fa-chevron-down"></i> </a> </div>
                                <div className="collapse show" id="jobtype">
                                    <div className="widget-content">
                                        <div className="custom-control custom-checkbox fulltime-job">
                                            <input type="checkbox" className="custom-control-input" id="jobtype1" />
                                            <label className="custom-control-label" for="jobtype1">Full Time</label>
                                        </div>
                                        <div className="custom-control custom-checkbox parttime-job">
                                            <input type="checkbox" className="custom-control-input" id="jobtype2" />
                                            <label className="custom-control-label" for="jobtype2">Part-Time</label>
                                        </div>
                                        <div className="custom-control custom-checkbox freelance-job">
                                            <input type="checkbox" className="custom-control-input" id="jobtype3" />
                                            <label className="custom-control-label" for="jobtype3">Freelance</label>
                                        </div>
                                        <div className="custom-control custom-checkbox temporary-job">
                                            <input type="checkbox" className="custom-control-input" id="jobtype4" />
                                            <label className="custom-control-label" for="jobtype4">Temporary</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Experience</h6>
                                    <a className="ml-auto" data-toggle="collapse" href="#experience" role="button" aria-expanded="false" aria-controls="experience"> <i className="fas fa-chevron-down"></i> </a> </div>
                                <div className="collapse show" id="experience">
                                    <div className="widget-content">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="experience1" />
                                            <label className="custom-control-label" for="experience1">Fresher</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="experience2" />
                                            <label className="custom-control-label" for="experience2">Less than 1 year</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="experience3" />
                                            <label className="custom-control-label" for="experience3">2 Year</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="experience4" />
                                            <label className="custom-control-label" for="experience4">3 Year</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="experience5" />
                                            <label className="custom-control-label" for="experience5">4 Year</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Offered Salary</h6>
                                    <a className="ml-auto" data-toggle="collapse" href="#Offeredsalary" role="button" aria-expanded="false" aria-controls="Offeredsalary"> <i className="fas fa-chevron-down"></i> </a> </div>
                                <div className="collapse show" id="Offeredsalary">
                                    <div className="widget-content">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="Offeredsalary1" />
                                            <label className="custom-control-label" for="Offeredsalary1">10k - 20k</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="Offeredsalary2" />
                                            <label className="custom-control-label" for="Offeredsalary2">20k - 30k</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="Offeredsalary3" />
                                            <label className="custom-control-label" for="Offeredsalary3">30k - 40k</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="Offeredsalary4" />
                                            <label className="custom-control-label" for="Offeredsalary4">40k - 50k</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="Offeredsalary5" />
                                            <label className="custom-control-label" for="Offeredsalary5">50k - 60k</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Gender</h6>
                                    <a className="ml-auto" data-toggle="collapse" href="#gender" role="button" aria-expanded="false" aria-controls="gender"><i className="fas fa-chevron-down"></i></a> </div>
                                <div className="collapse show" id="gender">
                                    <div className="widget-content">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="gender1" />
                                            <label className="custom-control-label" for="gender1">Male</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="gender2" />
                                            <label className="custom-control-label" for="gender2">Female</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="widget">
                                <div className="widget-title widget-collapse">
                                    <h6>Qualification</h6>
                                    <a className="ml-auto" data-toggle="collapse" href="#qualification" role="button" aria-expanded="false" aria-controls="qualification"> <i className="fas fa-chevron-down"></i></a> </div>
                                <div className="collapse show" id="qualification">
                                    <div className="widget-content">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="qualification1" />
                                            <label className="custom-control-label" for="qualification1">Matriculation</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="qualification2" />
                                            <label className="custom-control-label" for="qualification2">Intermediate</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="qualification3" />
                                            <label className="custom-control-label" for="qualification3">Graduate</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget">
                                <div className="widget-add"> <img className="img-fluid" src="images/add-banner.png" alt="" /></div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-9">

                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="section-title mb-3 mb-lg-4">
                                    <h6 className="mb-0">Showing 1-5 of <span className="text-primary">28 Jobs</span></h6>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="job-filter-tag">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Freelance <i className="fas fa-times-circle"></i> </a></li>
                                        <li><a className="filter-clear" href="#">Reset Search <i className="fas fa-redo-alt"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="job-filter mb-4 d-sm-flex align-items-center">
                            <div className="job-alert-bt"> <a className="btn btn-md btn-dark" href="#"><i className="fa fa-envelope"></i>Get job alert </a> </div>
                            <div className="job-shortby ml-sm-auto d-flex align-items-center">
                                <form className="form-inline">
                                    <div className="form-group mb-0">
                                        <label className="justify-content-start mr-2">sort by :</label>
                                        <div className="short-by">
                                            <select className="form-control basic-select select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                                <option data-select2-id="3">Newest</option>
                                                <option>Oldest</option>
                                            </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: "114px" }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-i3nu-container"><span className="select2-selection__rendered" id="select2-i3nu-container" role="textbox" aria-readonly="true" title="Newest">Newest</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="job-list ">
                                    <div className="job-list-logo">
                                        <img className="img-fluid" src="images/svg/01.svg" alt="" />
                                    </div>
                                    <div className="job-list-details">
                                        <div className="job-list-info">
                                            <div className="job-list-title">
                                                <h5 className="mb-0"><a href="job-detail.html">Marketing and Communications</a></h5>
                                            </div>
                                            <div className="job-list-option">
                                                <ul className="list-unstyled">
                                                    <li> <span>via</span> <a href="employer-detail.html">Fast Systems Consultants</a> </li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Wellesley Rd, London</li>
                                                    <li><i className="fas fa-filter pr-1"></i>Accountancy</li>
                                                    <li><a className="freelance" href="#"><i className="fas fa-suitcase pr-1"></i>Freelance</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-list-favourite-time"> <a className="job-list-favourite order-2" href="#"><i className="far fa-heart"></i></a> <span className="job-list-time order-1"><i className="far fa-clock pr-1"></i>1M ago</span> </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="job-list">
                                    <div className="job-list-logo">
                                        <img className="img-fluid" src="images/svg/02.svg" alt="" />
                                    </div>
                                    <div className="job-list-details">
                                        <div className="job-list-info">
                                            <div className="job-list-title">
                                                <h5 className="mb-0"><a href="job-detail.html">Web Developer – .net</a></h5>
                                            </div>
                                            <div className="job-list-option">
                                                <ul className="list-unstyled">
                                                    <li> <span>via</span> <a href="employer-detail.html">Pendragon Green Ltd</a> </li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Needham, MA</li>
                                                    <li><i className="fas fa-filter pr-1"></i>IT &amp; Telecoms</li>
                                                    <li><a className="part-time" href="#"><i className="fas fa-suitcase pr-1"></i>Part-Time</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-list-favourite-time"> <a className="job-list-favourite order-2" href="#"><i className="far fa-heart"></i></a> <span className="job-list-time order-1"><i className="far fa-clock pr-1"></i>3D ago</span> </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="job-list">
                                    <div className=" job-list-logo">
                                        <img className="img-fluid" src="images/svg/03.svg" alt="" />
                                    </div>
                                    <div className="job-list-details">
                                        <div className="job-list-info">
                                            <div className="job-list-title">
                                                <h5 className="mb-0"><a href="job-detail.html">Payroll and Office Administrator</a></h5>
                                            </div>
                                            <div className="job-list-option">
                                                <ul className="list-unstyled">
                                                    <li> <span>via</span> <a href="employer-detail.html">Wight Sound Hearing LLC</a> </li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>New Castle, PA</li>
                                                    <li><i className="fas fa-filter pr-1"></i>Banking</li>
                                                    <li><a className="temporary" href="#"><i className="fas fa-suitcase pr-1"></i>Temporary</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-list-favourite-time"> <a className="job-list-favourite order-2" href="#"><i className="far fa-heart"></i></a> <span className="job-list-time order-1"><i className="far fa-clock pr-1"></i>2W ago</span> </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="job-list">
                                    <div className="job-list-logo">
                                        <img className="img-fluid" src="images/svg/04.svg" alt="" />
                                    </div>
                                    <div className="job-list-details">
                                        <div className="job-list-info">
                                            <div className="job-list-title">
                                                <h5 className="mb-0"><a href="job-detail.html">Data Entry Administrator</a></h5>
                                            </div>
                                            <div className="job-list-option">
                                                <ul className="list-unstyled">
                                                    <li> <span>via</span> <a href="employer-detail.html">Tan Electrics Ltd</a> </li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Park Avenue, Mumbai</li>
                                                    <li><i className="fas fa-filter pr-1"></i>Charity &amp; Voluntary</li>
                                                    <li><a className="full-time" href="#"><i className="fas fa-suitcase pr-1"></i>Full-time</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-list-favourite-time"> <a className="job-list-favourite order-2" href="#"><i className="far fa-heart"></i></a> <span className="job-list-time order-1"><i className="far fa-clock pr-1"></i>3M ago</span> </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="job-list">
                                    <div className="job-list-logo">
                                        <img className="img-fluid" src="images/svg/05.svg" alt="" />
                                    </div>
                                    <div className="job-list-details">
                                        <div className="job-list-info">
                                            <div className="job-list-title">
                                                <h5 className="mb-0"><a href="job-detail.html">Operational manager part-time</a></h5>
                                            </div>
                                            <div className="job-list-option">
                                                <ul className="list-unstyled">
                                                    <li> <span>via</span> <a href="employer-detail.html">Fleet Home Improvements Pvt</a> </li>
                                                    <li><i className="fas fa-map-marker-alt pr-1"></i>Green Lanes, London</li>
                                                    <li><i className="fas fa-filter pr-1"></i>Accountancy (Qualified)</li>
                                                    <li><a className="part-time" href="#"><i className="fas fa-suitcase pr-1"></i>Part-Time</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-list-favourite-time"> <a className="job-list-favourite order-2" href="#"><i className="far fa-heart"></i></a> <span className="job-list-time order-1"><i className="far fa-clock pr-1"></i>6D ago</span> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mt-4 mt-md-5">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item disabled"> <span className="page-link b-radius-none">Prev</span> </li>
                                    <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">25</a></li>
                                    <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
