import React from 'react'
import JobListingList from '../../components/JobListing/JobListingList'
import Jumbo from '../../components/Jumbo/Jumba'

export default function Home() {
    return (
        <div>
            <Jumbo />
            <section className="bg-primary py-4 py-lg-5 ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 mb-4 mb-sm-4 mb-lg-0">
                            <div className="d-sm-flex">
                                <h4 className="text-white">Create free account to find thousands Jobs, Employment &amp; Career Opportunities around you!</h4>
                            </div>
                        </div>
                        <div className="col-md-3 text-lg-right">
                            <a className="btn btn-dark" href="#">Singup</a>
                        </div>
                    </div>
                </div>
            </section>
            <JobListingList />
        </div>
    )
}
