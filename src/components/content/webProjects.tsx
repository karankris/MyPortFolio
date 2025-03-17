


import Jamoo from 'public/img/jammo.png';
import Ella from 'public/img/ella.png';
import TechBizz from 'public/img/techbiz.png'
import NanLogical from 'public/img/nanlogical.jpg'
import Converta from 'public/img/converta.png';

import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';
export const InternProject = () => {
  const projects = [
    { link: "https://karankris.github.io/CrunchCart_Jamoo/", image: Jamoo, alt: "NanLogical Project 1" },
    { link: "https://karankris.github.io/E-shopify/", image: Ella, alt: "NanLogical Project 2" },
    { link: "https://karankris.github.io/Techbiz_official/", image: TechBizz, alt: "NanLogical Project 3" },
    { link: "https://karankris.github.io/Nanlogical_official/", image: NanLogical, alt: "NanLogical Project 4" },
    { link: "https://karankris.github.io/Converta/", image: Converta, alt: "NanLogical Project 5" },
  ];
  return (
    <>
      <SectionHeader
        id="webProject"
        title="My Web Development Projects Showcase"
        content={`A collection of my web development projects, highlighting my journey, skills, and creativity in crafting functional and visually appealing web applications.`}
      />
      <div className="max-w-2xl w-full px-4">
        <div className="h-auto w-full overflow-x-hidden overflow-y-hidden sm:overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 min-w-max">
            {projects.map((project, index) => (
              <article key={index} className="p-2 rounded-lg shadow-lg transition duration-500 hover:scale-110 transform">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image src={project.image} alt={project.alt} className="w-full h-auto rounded-lg" />
                </a>
              </article>
            ))}

          </div>
        </div>
      </div>


    </>

  )
}