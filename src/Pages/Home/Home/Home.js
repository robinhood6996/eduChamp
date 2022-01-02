import React from 'react';

import ContactForm from '../../Form/ContactForm/ContactForm'
import ChooseUs from '../ChooseUs/ChooseUs';
<<<<<<< HEAD
import Navigation from '../../Shared/Navigation/Navigation';
import Slider from '../../Shared/Slider/Slider';
const Home = () => {
    return (
        <>
            <Slider></Slider>
            <ChooseUs></ChooseUs>

        </>
=======
import Slider from '../Slider/Slider';
const Home = () => {
    return (
        <>
        <Slider>ss</Slider>
        <ChooseUs></ChooseUs>
        <ContactForm></ContactForm>
        </>        
>>>>>>> 0eb560bce38e483d42362a9143687aa424948cff
    );
};

export default Home;