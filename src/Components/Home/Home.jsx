/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import RecipeCategories from '../RecipeCategories/RecipeCategories';
import FeedbackSection from '../FeedbackSection/FeedbackSection';
import PopularRecipes from '../PopularRecipes/PopularRecipes';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <PopularRecipes></PopularRecipes>
            <RecipeCategories></RecipeCategories>
            <FeedbackSection></FeedbackSection>
        </div>
    );
};

export default Home;