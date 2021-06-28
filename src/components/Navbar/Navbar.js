import React from 'react';
import Logo from '../../assets/images/logo.svg'

export default function Navbar() {
    return (
        <header className="header header-transparent">
            <nav className="navbar navbar-static-top navbar-expand-lg navbar-light header-sticky is-sticky">
                <div className="container-fluid">
                    <button id="nav-icon4" type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a className="navbar-brand" href="index.html">
                        <img className="img-fluid" src={Logo} alt="logo" />
                    </a>
                    <div className="navbar-collapse collapse justify-content-start">
                        <ul className="nav navbar-nav">
                            <li className="nav-item dropdown active">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home<i className="fas fa-chevron-down fa-xs"></i></a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="active"><a className="dropdown-item" href="index.html">index Default </a></li>
                                    <li><a className="dropdown-item" href="index-02.html">index 02</a></li>
                                    <li><a className="dropdown-item" href="index-03.html">index 03</a></li>
                                    <li><a className="dropdown-item" href="index-map.html">index map</a></li>
                                    <li><a className="dropdown-item" href="index-slider.html">index Slider</a></li>
                                    <li><a className="dropdown-item" href="index-bg-video.html">index bg video</a></li>
                                    <li><a className="dropdown-item" href="index-splash.html">index splash</a></li>
                                </ul>
                            </li>
                            <li className="dropdown nav-item">
                                <a href="properties.html" className="nav-link" data-toggle="dropdown">Pages<i className="fas fa-chevron-down fa-xs"></i></a>
                                <ul className="dropdown-menu megamenu dropdown-menu-lg">
                                    <li>
                                        <div className="row">
                                            <div className="col-sm-4 mb-2 mb-sm-0">
                                                <h6 className="mb-3 nav-title">Pages</h6>
                                                <ul className="list-unstyled mt-lg-3">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="services.html">Services</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li><a href="career.html">Career</a></li>
                                                    <li><a href="advertising.html">Advertising</a></li>
                                                    <li><a href="contact-us.html">Contact Us</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-4 mb-2 mb-sm-0">
                                                <h6 className="mb-3 nav-title">Pages</h6>
                                                <ul className="list-unstyled mt-lg-3">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-detail.html">Blog Detail</a></li>
                                                    <li><a href="post-a-job.html">Post a Job</a></li>
                                                    <li><a href="faqs.html">Faq</a></li>
                                                    <li><a href="browse-categories.html">Browse Categories</a></li>
                                                    <li><a href="browse-locations.html">Browse Locations</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-4">
                                                <h6 className="mb-3 nav-title">Pages</h6>
                                                <ul className="list-unstyled mt-lg-3">
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="register.html">Register</a></li>
                                                    <li><a href="coming-soon.html">Coming soon</a></li>
                                                    <li><a href="404-error.html">404 Error</a></li>
                                                    <li><a href="terms-and-conditions.html">T&amp;C</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="agency-logo pt-4">
                                                    <h6 className="mb-3 nav-title">Top Agency</h6>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <div className="job-list">
                                                                <div className="job-list-logo">
                                                                    <a href="#"> <img className="img-fluid" src="images/svg/07.svg" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="job-list">
                                                                <div className="job-list-logo">
                                                                    <a href="#"> <img className="img-fluid" src="images/svg/06.svg" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="job-list">
                                                                <div className="job-list-logo">
                                                                    <a href="#"> <img className="img-fluid" src="images/svg/05.svg" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="job-list">
                                                                <div className="job-list-logo">
                                                                    <a href="#"> <img className="img-fluid" src="images/svg/04.svg" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="job-list">
                                                                <div className="job-list-logo">
                                                                    <a href="#"> <img className="img-fluid" src="images/svg/03.svg" alt="" /></a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Listing <i className="fas fa-chevron-down fa-xs"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="job-grid.html">Job Grid</a></li>
                                    <li><a className="dropdown-item" href="job-listing.html">Job Listing</a></li>
                                    <li><a className="dropdown-item" href="job-detail.html">Job Detail</a></li>
                                    <li><a className="dropdown-item" href="job-listing-map.html">Job Listing Map</a></li>
                                </ul>
                            </li>
                            <li className="dropdown nav-item mega-menu">
                                <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown">Elements<i className="fas fa-chevron-down fa-xs"></i></a>
                                <ul className="dropdown-menu megamenu">
                                    <li>
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-5 mb-3 mb-lg-0">
                                                <h6 className="mb-3 nav-title">Search Types</h6>
                                                <ul className="list-unstyled mt-lg-3">
                                                    <li><a href="search-style-under-banner.html">Search style under banner</a></li>
                                                    <li><a href="search-style-above-banner.html">Search style above banner</a></li>
                                                    <li><a href="search-style-below-banner.html">Search style below banner</a></li>
                                                    <li><a href="search-style-advanced.html">Advanced Search style</a></li>
                                                    <li><a href="search-style-classic.html">Search style classic</a></li>
                                                    <li><a href="search-style-with-filter.html">Search style with filter</a></li>
                                                    <li><a href="search-style-advanced-02.html">Advanced Search style 02 </a></li>
                                                    <li><a href="search-style-advanced-03.html">Advanced Search style 03 </a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-lg-3 mb-3 mb-sm-0">
                                                <h6 className="mb-3 nav-title">Elements</h6>
                                                <ul className="list-unstyled mt-lg-3">
                                                    <li><a href="element-feature-box.html">Feature box</a></li>
                                                    <li><a href="element-testimonials.html">Testimonials</a></li>
                                                    <li><a href="element-accordion.html">Accordion</a></li>
                                                    <li><a href="element-tabs.html">Tabs</a></li>
                                                    <li><a href="element-typography.html">Typography</a></li>
                                                    <li><a href="element-counter.html">counter</a></li>
                                                    <li><a href="element-countdown.html">Countdown</a></li>
                                                    <li><a href="element-category.html">Category</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6 col-lg-4">
                                                <div className="menu-banner bg-dark p-3 pt-4 text-center border-radius h-100 d-none d-lg-block">
                                                    <h5 className="text-primary mb-3 pt-2">Advertise your job with us</h5>
                                                    <span className="text-light"> Starting from</span>
                                                    <h3 className="text-white my-3">$99 <small>/mo</small></h3>
                                                    <p className="text-primary p-2 small text-white">Save 30% for new customer</p>
                                                    <a className="btn btn-light btn-sm" href="post-a-job.html">Post a job now!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Employer <i className="fas fa-chevron-down fa-xs"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="employer-grid.html">Employer Grid</a></li>
                                    <li><a className="dropdown-item" href="employer-listing.html">Employer list</a></li>
                                    <li><a className="dropdown-item" href="employer-detail.html">Employer detail</a></li>
                                    <li><a className="dropdown-item" href="employer-listing-map.html">Employer Listing Map</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item dropdown-toggle" href="javascript:void(0)">Dashboard <i className="fas fa-chevron-right fa-xs"></i></a>
                                        <ul className="dropdown-menu left-side">
                                            <li><a className="dropdown-item" href="dashboard-employer.html">Dashboard</a></li>
                                            <li><a className="dropdown-item" href="dashboard-employer-my-profile.html">Profile</a></li>
                                            <li><a className="dropdown-item" href="dashboard-employer-change-password.html">Change Password </a></li>
                                            <li><a className="dropdown-item" href="dashboard-employer-manage-candidates.html">Manage Candidates</a></li>
                                            <li><a className="dropdown-item" href="dashboard-employer-manage-jobs.html">Manage Jobs</a></li>
                                            <li><a className="dropdown-item" href="dashboard-employer-post-new-job.html">Post New Job</a></li>
                                            <li><a className="dropdown-item" href="dashboard-employer-pricing.html">Pricing</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Candidates <i className="fas fa-chevron-down fa-xs"></i>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="candidates-grid.html">Candidates Grid</a></li>
                                    <li><a className="dropdown-item" href="candidates-listing.html">Candidates list</a></li>
                                    <li><a className="dropdown-item" href="candidate-detail.html">Candidates detail</a></li>
                                    <li><a className="dropdown-item" href="candidates-listing-map.html">Candidates Listing Map</a></li>
                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item dropdown-toggle" href="javascript:void(0)">Dashboard <i className="fas fa-chevron-right fa-xs"></i></a>
                                        <ul className="dropdown-menu left-side">
                                            <li><a className="dropdown-item" href="dashboard-candidates.html">Dashboard</a></li>
                                            <li><a className="dropdown-item" href="dashboard-candidates-my-profile.html">Profile</a></li>
                                            <li><a className="dropdown-item" href="dashboard-candidates-change-password.html">Change Password </a></li>
                                            <li><a className="dropdown-item" href="dashboard-candidates-my-resume.html">My Resume</a></li>
                                            <li><a className="dropdown-item" href="dashboard-candidates-manage-jobs.html">Manage Jobs</a></li>
                                            <li><a className="dropdown-item" href="dashboard-candidates-saved-jobs.html">Saved Jobs</a></li>
                                            <li><a className="dropdown-item" href="dashboard-candidates-pricing.html">Pricing</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="my-resume.html">My Resume <span className="badge badge-danger ml-2">CV</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="add-listing">
                        <div className="login d-inline-block mr-4">
                            <a href="login.html" data-toggle="modal" data-target="#exampleModalCenter"><i className="far fa-user pr-2"></i>Sign in</a>
                        </div>
                        <a className="btn btn-white btn-md" href="post-a-job.html"> <i className="fas fa-plus-circle"></i>Post a job</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
