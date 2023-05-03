import React from 'react';
import { Link } from 'react-router-dom';

const PopularRecipes = () => {
  const recipes = [
    { id: 1, title: 'Chocolate Chip Cookies' },
    { id: 2, title: 'Spaghetti Bolognese' },
    { id: 3, title: 'Chicken Tikka Masala' },
    { id: 4, title: 'Beef Stroganoff' },
    { id: 5, title: 'Pad Thai' },
    { id: 6, title: 'Pizza Margherita' },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map(recipe => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={`/recipes/${recipe.id}`}>
                <h3 className="text-xl font-bold mb-4">{recipe.title}</h3>
                <img
                  src={`https://source.unsplash.com/300x200/?${recipe.title}`}
                  alt={recipe.title}
                  className="w-full rounded-md mb-4"
                />
              </Link>
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={`https://source.unsplash.com/50x50/?${recipe.title}`}
                  alt="Author avatar"
                />
                <div className="text-gray-500 text-sm">{recipe.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
