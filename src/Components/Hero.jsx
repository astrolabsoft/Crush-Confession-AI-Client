import img1 from '../assets/image.png'

import './style2.css'
const Hero = () => {
    return (
      <>
        <div className="hero flex items-center justify-center">
          <div className="hero-content text-center">
            <div className=" max-w-3xl   rounded-lg shadow-sm">
              <h1 className="text-4xl font-bold text-gray-800">Share your crush confessions <br /> and receive personalized poems</h1>
              <p className="py-4 text-gray-600 font-quicksand">
                Discover heartfelt confessions and poems, crafted by both AI and human writers.
                Join our community to share your own experiences, explore a variety of topics, 
                and find inspiration through creative expression.
              </p>

              


              
  
             {/* SVG Icon Row */}
<div className="flex justify-center my-4">
    {/* First SVG (rotating left) */}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-8 w-8 text-red-500 animate-rotate-left" // added animation class
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
    </svg>

    {/* Second SVG (rotating right) */}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-8 w-8 text-blue-500 animate-rotate-right"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
    </svg>

    {/* Third SVG (static) */}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-8 w-8 text-green-500" // static icon
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
    </svg>
</div>

  
              {/* Call to Action Button */}
              <button className="btn btn-primary ">Get Started</button>
            </div>
          </div>
        </div>
  
        
      </>
    );
  };
  
  export default Hero;
  