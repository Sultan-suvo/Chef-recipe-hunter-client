import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaHeart, FaPhone, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import './ViewDetails.css'

const ViewDetails = () => {
    const selectedServer = JSON.parse(localStorage.getItem('selectedChef'));
    const [isFavorite, setIsFavorite] = useState([]);

    const handleClick = (recipes) => {
        if (isFavorite.includes(recipes)) {
            return;
        }
        console.log(recipes);
        toast.success("Your card is added to favorites!");
        setIsFavorite((prev) => [...prev, recipes]);
    };
    return (
        <div class="bg-white rounded-lg text-center shadow-md overflow-hidden my-12 container">
            <img className='w-75 mx-auto' src={selectedServer.chef_picture
            } alt="" />
            <div class="p-2">
                <h2 class="text-gray-900 font-bold text-xl mb-2">{selectedServer.chef_name}</h2>
                <p class="text-gray-700 text-base mb-2">{selectedServer.years_of_experience} years of experience</p>
                <p class="text-gray-700 text-base mb-2">{selectedServer.number_of_recipes} recipes</p>
                <p class="text-gray-700 text-base mb-2">{selectedServer.likes} likes</p>
                <p class="text-gray-700 text-base mb-2">Bio: <span className='text-red-700'>{selectedServer.chef_name}</span> is a skilled culinary expert who creates delicious dishes with his expertise and passion for cooking.
                    His dishes are renowned for their exceptional taste and presentation, making him a favorite among food lovers.</p>
            </div>
            <div>
                {selectedServer.recipes.map((recipe, index) => (
                    <div className="card text-center mt-3" key={index}>
                        <h3>
                            {selectedServer.chef_name}s Recipe: {recipe.recipe_name}
                        </h3>
                        <img className='mx-auto'
                            style={{ height: "100px", width: "25%" }}
                            src={recipe.recipes_image}
                            alt={recipe.recipe_name}
                        />
                        <h2>Ingredients:</h2>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h2>Cooking Method:</h2>
                        <p>
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

                            {!isFavorite.includes(recipe.recipe_id) ? (
                                <Link className="ms-5 mb-2 " onClick={() => handleClick(recipe.recipe_id)}>
                                    <FaHeart color="red" size={24} />{" "}
                                </Link>
                            ) : (
                                <button disabled className="ms-5 mb-2 disabled-heart">
                                    <FaHeart color="red" size={24} />{" "}
                                </button>
                            )}
                            <ToastContainer />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ViewDetails;