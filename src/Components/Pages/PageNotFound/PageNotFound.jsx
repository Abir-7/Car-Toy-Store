import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const PageNotFound = () => {
  useTitle('Car Toy Store/Error!')
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     
        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl mb-8">Page not found</p>
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1684584491~exp=1684585091~hmac=2d570b6f43231a4221404542346873771d6b5b2a27ff8cec391af50025b98a2e"
          alt="Error 404"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg"
        />
      </div>
    );
};

export default PageNotFound;