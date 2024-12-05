import React, { useState } from 'react';
import arcade from "../assets/images/arcade.jpg";



const Home = () => {
    

    return (
        <div className=" flex flex-col items-center justify-center max-w-[100rem] sm:max-w-full space-y-8 ">
        {/* Title and itch.io link */}
        <div className="text-center">
            <h1 className="text-6xl sm:text-4xl font-bold mt-8 mb-2">RICE!!</h1>
            <img src={arcade} alt="Arcade" className="max-w-[20rem] sm:max-w-[50rem] h-auto" />

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
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Team Members</h2>
            Sangyu Chen - Game/Unity Development<br></br>
            Isabel Wu - Art, Game Design<br></br>
            Steve Sun - Electronics, Fabrication<br></br>
            Max Sun - Fabrication<br></br>
        </div>

        {/* Description */}
        <div className="text-center max-w-[17rem] sm:max-w-[100rem]">
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="sm:max-w-[100rem] sm:mt-5 sm:mx-80">
            RICE!!, an alt-control arcade game about eating dinner, with a fun twist! Relive childhood meals by tilting your bowl and cranking your chopsticks to finish ASAP so you can go outside and play! Keep your parents happy by receiving offered veggies but don't get caught feeding your canine best friend!
            </p>
        </div>

        {/* Promotional video */}
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Promotional Video</h2>
            <a
            href="https://www.youtube.com/your-video-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
            >
            Watch on YouTube
            </a>
        </div>

        {/* More photos */}
        <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">More Photos</h2>
            <a
            href="https://link-to-photo-folder.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
            >
            View Photos
            </a>
        </div>
        </div>

    );
};

export default Home;
