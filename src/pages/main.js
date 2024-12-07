import React, { useState } from 'react';
import arcade from "../assets/images/arcade.jpg";
import header from "../assets/images/header.png";



const Home = () => {


    return (
 
        <div className=" flex flex-col items-center justify-center max-w-[100rem] sm:max-w-full space-y-8 ">
   

        <div className="text-center">
        <img src={header} alt="Arcade" className="pl-20 max-w-[20rem] sm:max-w-[50rem] h-auto" />
            <h1 className="text-6xl sm:text-4xl font-bold mt-8 mb-2">RICE!!</h1>
            <img src={arcade} alt="Arcade" className="px-20 max-w-[20rem] sm:max-w-[50rem] h-auto mb-2" />

            <a
            href="https://sangyu-chen.itch.io/rice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
            >
            Check our Itch.io page
            </a>
        </div>

        {/* Team members and portfolio links */}
        <hr className="border-gray-400 w-[20rem] mt-4" />
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Team Members</h2>
            <div className="grid grid-cols-2 gap-4 gap-x-10">
                <div className="flex justify-end">Sangyu Chen</div>
                <div className="flex justify-start">Game/Unity Development</div>
                <div className="flex justify-end">Isabel Wu</div>
                <div className="flex justify-start">Art, Game Design</div>

                <div className="flex justify-end">Steve Sun</div>
                <div className="flex justify-start">Electronics, Fabrication</div>
                <div className="flex justify-end">Max Sun</div>
                <div className="flex justify-start">Fabrication</div>
            </div>
        </div>

        <hr className="border-gray-400 w-[20rem] mt-4" />
        {/* Description */}
        <div className="text-center max-w-[17rem] sm:max-w-[100rem]">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="sm:max-w-[40rem] sm:mt-5 sm:mx-80">
            RICE!!, an alt-control arcade game about eating dinner, with a fun twist! Relive childhood meals by tilting your bowl and cranking your chopsticks to finish ASAP so you can go outside and play! Keep your parents happy by receiving offered veggies but don't get caught feeding your canine best friend!
            </p>
        </div>

        <hr className="border-gray-400 w-[20rem] mt-4" />
        {/* Promotional video */}
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Promotional Video</h2>
            <a
            href="https://vimeo.com/1036905556?share=copy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
            >
            Watch on Vimeo
            </a>
        </div>

        <hr className="border-gray-400 w-[20rem] mt-4" />
        {/* More photos */}
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">More Photos</h2>
            <a
            href="https://drive.google.com/drive/folders/1oYbz7KPqhbWhIAU6EvqrP9iY6z7C6QqO?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
            >
            View Photos
            </a>
        </div>
        <br></br>
        <br></br>
        </div>

    );
};

export default Home;
