import React from 'react';
import { Link } from 'react-router-dom';

const ServerSiteDetails = ({ server }) => {
  console.log(server);
  const { id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = server;
  
  // const handleButtonClick = () => {
  //   // Save server data to local storage
  //   localStorage.setItem('selectedServer', JSON.stringify(server));
  // }
  return (
    <div className="w-full  container mt-12 p-2">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={chef_picture} alt={`${chef_name} Profile Picture`} className="w-full h-32 sm:h-48 md:h-56 lg:h-64 object-cover object-center" />
        <div className="p-2">
          <h2 className="text-gray-900 font-bold text-xl mb-2">{chef_name}</h2>
          <p className="text-gray-700 text-base">{years_of_experience} years of experience</p>
          <p className="text-gray-700 text-base">{number_of_recipes} recipes</p>
          <p className="text-gray-700 text-base">{likes} likes</p>
          <Link to='viewdetails' onClick={() =>
                  localStorage.setItem("selectedChef", JSON.stringify(server))
                } className="bg-blue-500 hover:bg-blue-700 text-white text-decoration-none font-bold py-2 px-4 rounded">
            View Recipes Button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerSiteDetails;
