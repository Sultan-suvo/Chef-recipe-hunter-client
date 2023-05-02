import React from 'react';

const Category = ({ category }) => {
    const { image, name, id } = category
    return (
        <div>
            <div className="card text-center mb-4 gap-2">
                <img src={image} className="card-img-top mt-4 w-50 mx-auto rounded-circle" alt={name} />
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Category;