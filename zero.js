/*
yarn add tailwind-scrollbar-hide
yarn add react-flip-move
// ----------------------------------------------------------------------------------------------------------- //
npx create-next-app my-project                             next.config.js   ✓  -   styles/globals.css    ✓
npx create-next-app my_project                             next.config.js   ✓  -   styles/globals.css    ✓
npx create-next-app -e with-tailwindcss my_project         next.config.js   x  -   styles/globals.css    x 
npx create-next-app -e with-tailwindcss my-project         next.config.js   x  -   styles/globals.css    x   
// ----------------------------------------------------------------------------------------------------------- //
className="justify-evenly"                              [Header.js]
className="tracking-widest"                             [HeaderItem.js]
className="opacity-0 group-hover:opacity-100"           [HeaderItem.js]
className="group-hover:animate-bounce"                  [HeaderItem.js]
className="whitespace-nowrap"                           [Nav.js]
className="truncate"                                    [Thumbnail.js]

Container:
    None	        width: 100%;
    sm (640px)	    max-width: 640px;
    md (768px)	    max-width: 768px;
    lg (1024px)	    max-width: 1024px;
    xl (1280px)	    max-width: 1280px;
    2xl (1536px)	max-width: 1536px;

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
[NOTE:Notice to how to customize for bigger screen - Add tailwind-scrollbar-hide]

To enable just-in-time mode, set the mode option to 'jit' in your tailwind.config.js file: 

Since JIT mode generates your CSS on-demand by scanning your template files, it’s crucial 
that you configure the purge option in your tailwind.config.js file with all of your 
template paths, otherwise your CSS will be empty:   
module.exports = {
  mode:"jit",
  purge: [' ???????????????????????????????????????????? '],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "3xl":"2000px",                                       // NOTE:Customize for bigger screen                             
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")                        // NOTE:Add tailwind-scrollbar-hide     
  ],
}

// ----------------------------------------------------------------------------------------------------------- //
[components/Header.js]

[NOTE:Notice to how validate https://links.papareact.com for getting image in next.config.js]

  <Image                                           <Image
    className="object-contain"                       objectfit="contain"
    src="https://links.papareact.com/ua6"            src="https://links.papareact.com/ua6"
    width={200}                                      width={200}
    height={100}                                     height={100}
  />                                               />

  Validate src="https://links.papareact.com/ua6" in [next.config.js]
  
[next.config.js]
  module.exports = {
    reactStrictMode: true,
    images:{
      domains:["https://links.papareact.com"]
    }
  }
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import Image from "next/image"; 
WebP Pros:
  Faster loading times
  Less media storage
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
[NOTE:Notice to width, height, layout:"fill", objectfit:"contain", className="object-contain"]   

Using:
  className="object-contain" OR objectfit="contain"

<Image
  className="object-contain"              
  src="https://links.papareact.com/ua6"
  width={200}
  height={100}
/>
..............................................................
<Image
  src="https://links.papareact.com/ua6"
  objectfit="contain"
  width={200}
  height={100}
/>
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Instead of width={200} height={100} we can use layout="fill"

<Image
  className="object-contain"
  src="https://links.papareact.com/ua6"
  layout="fill"
/>
..............................................................
<Image
  src="https://links.papareact.com/ua6"
  objectfit="contain"
  layout="fill"
/>
// ----------------------------------------------------------------------------------------------------------- //
[NOTE:Notice to the destructuring]

[components/HeaderItem.js]

function HeaderItem(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
...............................................................
function HeaderItem(props) {
  const { title, Icon } = props;             //Destructuring
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
...............................................................
function HeaderItem({ title, Icon }) {      //Destructuring
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
// ----------------------------------------------------------------------------------------------------------- //
[utils/requests.js]

const API_KEY=process.env.API_KEY;

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    .
    .
    .
} 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
[.env.local]

API_KEY=Enter Your Private Key here
// ----------------------------------------------------------------------------------------------------------- //
[Nav.js]
[NOTE:Notice to {Object.entries(requests).map(()=>())}]

import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>
        {Object.entries(requests).map(([key, value]) => (
          <h2 key={key}>{value.title}</h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
......................................................................
import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>                                 // Destructuring
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 key={key}>{title}</h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
STEP1)
  GOOGLE:tailwind-scrollbar-hide
  https://github.com/reslear/tailwind-scrollbar-hide#readme

STEP2)
  npm install tailwind-scrollbar-hide
  yarn add tailwind-scrollbar-hide

STEP3)
  // tailwind.config.js
  module.exports = {
    mode:"jit",            
    theme: {
      // ...
    },
    plugins: [
      require('tailwind-scrollbar-hide')
      // ...
    ]
  }
STEP4)    
  <div className="overflow-x-scroll scrollbar-hide">

  </div>    
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
[
NOTE:
  Notice to implementation of useRouter();-Make shadow on from the right by
  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
] 

import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
    const router=useRouter();

  return (
    <nav className="relative">
      <div className="flex items-center justify-between px-10 sm:px-20 text-2xl 
        whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide">

        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={()=>(router.push(`/?genre=${key}`))}
            className="cursor-pointer transition duration-100 transform hover:scale-110 
            hover:text-white active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
    </nav>
  );
}

export default Nav;    
// ----------------------------------------------------------------------------------------------------------- // 
[index.js]  

(Reminder)
export async function getStaticProps(context) {

  return{
    props:{

    }
  }
}
.........................................................
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results
    },
  };
}
// ----------------------------------------------------------------------------------------------------------- // 
yarn add react-flip-move



*/