import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Slider from '../../Shared/Slider/Slider';
import PopularCourse from '../PopularCourse/PopularCourse';
import Review from '../Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Slider></Slider>
            <ChooseUs></ChooseUs>
            <PopularCourse></PopularCourse>
            <Review></Review>
            <Footer></Footer>
        </>
    );
};
export default Home;