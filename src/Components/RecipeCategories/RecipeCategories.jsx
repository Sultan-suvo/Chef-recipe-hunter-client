/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const RecipeCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(categories => setCategories(categories))
    }, [])

    return (
        <div className='mt-24  px-12 md:px-40 '>
            <div className='text-center'>
                <h1 className=' text-5xl font-bold mb-4'>Latest Recipes</h1>
                
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-8'>
                {
                    categories.map(category => <Category
                    key={category.id}
                    category={category}
                    >                       
                    </Category>)
                }
            </div>
            
        </div>
    );
};

export default RecipeCategories;