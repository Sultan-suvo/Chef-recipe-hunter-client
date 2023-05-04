import React from 'react';

const ServerSiteDetails = ({ server }) => {
  const { chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = server;

  const handleButtonClick = () => {
    // Add your code to handle button click event here
    console.log('Button clicked');
  };

  return (
    <div className="w-full  container mt-12 p-2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={chef_picture} alt={`${chef_name} Profile Picture`} className="w-full h-32 sm:h-48 md:h-56 lg:h-64 object-cover object-center" />
        <div className="p-2">
          <h2 className="text-gray-900 font-bold text-xl mb-2">{chef_name}</h2>
          <p className="text-gray-700 text-base">{years_of_experience} years of experience</p>
          <p className="text-gray-700 text-base">{number_of_recipes} recipes</p>
          <p className="text-gray-700 text-base">{likes} likes</p>
          <button onClick={handleButtonClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerSiteDetails;
