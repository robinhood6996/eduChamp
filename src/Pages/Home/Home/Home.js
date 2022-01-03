import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Slider from '../../Shared/Slider/Slider';
import PopularCourse from '../PopularCourse/PopularCourse';
import Review from '../Review/Review';
const Home = () => {
    return (
        <>
            <Slider></Slider>
            <ChooseUs></ChooseUs>
            <PopularCourse></PopularCourse>
            <Review></Review>
        </>
    );
};
export default Home;