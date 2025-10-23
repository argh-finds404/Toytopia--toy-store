import React, { Suspense } from 'react';
import AllCategories from '../AllCategories';

const Topside = () => {
    return (
      <div className="mt-15">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 font-semibold">Let's Explore</p>
          <h2 className="text-4xl font-bold text-gray-700">
            Shop by <span className="text-[#fca311]">Category...</span>
          </h2>
        </div>

        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <AllCategories></AllCategories>
        </Suspense>
      </div>
    );
};

export default Topside;