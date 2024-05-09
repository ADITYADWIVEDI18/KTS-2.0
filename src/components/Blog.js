import React from "react";
import men from "../assets/men.png";

const Blog = () => {
  return (
    <div className="overflow-hidden mt-8">
      <div className="flex flex-col md:flex-row justify-start items-center">

        {/* Title */}
        <div className="md:w-1/2">
          <div className="text-4xl md:text-8xl mb-8 md:mb-16 text-white">
            Our <span className="text-red-500">Blog</span>
          </div>
          <div className="md:hidden mb-8">
            <img src={men} alt="men" className="w-full" />
          </div>
        </div>

        {/* Blog Content */}
        <div className="md:w-1/2">
          <div className="h-48 bg-red-200 border-white md:h-[70vh] w-full md:w-[70vw]">Blogs</div>
        </div>

        {/* Image */}
        <div className="hidden md:block absolute right-0 bottom-0 md:static">
          <img src={men} alt="men" className="w-32 md:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
