"use client";

import Typewriter from "typewriter-effect";

const TypewriterText = () => {
    return (
        <div className="text-2xl font-bold md:flex">
         <div className="flex">
         <span className="relative w-[max-content] font-mono  text-gray-800 dark:text-gray-200 flex">
                <Typewriter
                    options={{
                        strings: ["Full Stack Developer", "Tutor"],
                        autoStart: true,
                        loop: true,

                    }}
                />
            </span>
         </div>
        </div>
    );
};

export default TypewriterText;
