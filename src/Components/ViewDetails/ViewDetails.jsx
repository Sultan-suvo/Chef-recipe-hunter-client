import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaHeart, FaPhone, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import './ViewDetails.css'

const ViewDetails = () => {
    const selectedServer = JSON.parse(localStorage.getItem('selectedChef'));

   
    return (
        <div class="bg-white rounded-lg text-center shadow-md overflow-hidden my-12 container">
            <img className='w-75 mx-auto' src={selectedServer.chef_picture
            } alt="" />
            <div class="p-2">
                <h2 class="text-gray-900 font-bold text-2xl mb-2">{selectedServer.chef_name}</h2>
                <p class="text-gray-700 text-base mb-2">{selectedServer.years_of_experience} years of experience</p>
                <p class="text-gray-700 text-base mb-2">{selectedServer.number_of_recipes} recipes</p>
                <p class="text-gray-700 text-base mb-2">{selectedServer.likes} likes</p>
                <p class="text-gray-400 text-base mb-2">Bio: <span className='text-red-700'>{selectedServer.chef_name}</span> is a skilled culinary expert who creates delicious dishes with his expertise and passion for cooking.
                    His dishes are renowned for their exceptional taste and presentation, making him a favorite among food lovers.</p>
            </div>
            <div>
                {selectedServer.recipes.map((recipe, index) => (
                    <div className="card text-center m-3 p-4" key={index}>
                        <h3 className='font-bold my-3'>
                            {selectedServer.chef_name}s Recipe: {recipe.recipe_name}
                        </h3>
                        <img className='mx-auto rounded h-20 md:h-28'
                            style={{ width: "25%" }}
                            src={recipe.recipes_image}
                            alt={recipe.recipe_name}
                        />
                        <h2 className='font-bold my-3'>Ingredients:</h2>
                        <ul className='text-slate-500'>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h2 className='font-bold my-3'>Cooking Method:</h2>
                        <p className='text-slate-500'>
                            <small>{recipe.cooking_method}</small>
                        </p>

                        <div className="d-flex align-items-center justify-content-between">
                            <div className="mx-2">
                                <p>
                                    {" "}
                                    <span className="fw-bold align-items-center">Rating:</span>{" "}
                                    {recipe.rating}
                                    <Rating
                                        readonly
                                        placeholderRating={recipe.rating}
                                        emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                                        placeholderSymbol={<FaStar className="text-danger"></FaStar>}
                                        fullSymbol={<FaStar className="text-warning"></FaStar>}
                                        className="ms-2"
                                    ></Rating>
                                </p>
                            </div>

                           
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ViewDetails;