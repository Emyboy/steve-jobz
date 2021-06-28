import React from 'react';
import './assets/css/animate/animate.min.css';
import './assets/css/apexcharts/apexcharts.css';
import './assets/css/magnific-popup/magnific-popup.css';
import './assets/css/datetimepicker/datetimepicker.min.css';

import './assets/css/flaticon/flaticon.css';
// import './assets/css/font-awesome/all.min.css';
import './assets/css/map/snazzy-info-window.min.css';
import './assets/css/owl-carousel/owl.carousel.min.css';
import './assets/css/range-slider/ion.rangeSlider.css';
import './assets/css/select2/select2.css';

import './assets/css/bootstrap/bootstrap.min.css';
import './assets/css/subtle-slideshow.css';
import './assets/css/style.css';

import Navbar from './components/Navbar/Navbar';
import Jumbo from './components/Jumbo/Jumba';
import Home from './page/Home/Home';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}
