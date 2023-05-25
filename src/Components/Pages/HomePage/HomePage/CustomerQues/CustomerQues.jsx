import React from 'react';

const CustomerQues = () => {
    return (
        <div data-aos="fade-down-right" className=" my-5 hero min-h-[40vh]" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=1380&t=st=1684646369~exp=1684646969~hmac=a832b70266d502b75d1b5828908c80a82da770fd9a72a98e5aa5ac1c4540cfcf")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-down-right" className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Any Question in mind???</h1>
            <p className="mb-5">Let us know via massege</p>
            <input className='input  bg-white mx-3' type="text" />
            <button className="btn btn-success mt-2">Send</button>
          </div>
        </div>
  
      </div>
    );
};

export default CustomerQues;