import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Slider from '../../Shared/Slider/Slider';
import PopularCourse from '../PopularCourse/PopularCourse';
const Home = () => {
    return (
        <>
            <Slider></Slider>
            <ChooseUs></ChooseUs>
            <PopularCourse></PopularCourse>
        </>
    );
};
export default Home;