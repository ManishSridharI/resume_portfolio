import React from "react";
import myData from "@constants/mydata";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
        <p
          className="leading-loose text-xl md:text-xl font-semibold mx-4"
          style={{ lineHeight: "3rem" }}
        >
          I am a passionate {" "}
          <span className="bg-red-500 rounded-md px-2 py-1 text-white">Software Developer</span> 
          {" "} and  {" "}
          <span className="bg-red-500 rounded-md px-2 py-1 text-white">Data Analyst</span>  
          {" "} with a knack for creating robust applications and extracting actionable insights from complex datasets. Skilled in multiple programming languages and analytics tools, I thrive on improving business outcomes through technology and data-driven strategies.
        </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any enquiry and connections, shoot a{" "}
                <a
                  href={`mailto:${myData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail
                </a>.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm actively looking for a job currently, If you see me as a good fit,
                check out my{" "}
                <a
                  href={myData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  resume
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={myData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                  target="__blank"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={myData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                  target="__blank"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={myData.socialLinks.google_scholar}
                  className="flex flex-row items-center space-x-4 group"
                  target="__blank"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Google Scholar
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            {myData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-md text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
          <h1 className="bg-red-500 text-2xl rounded-md px-2 py-1 inline-block font-bold text-gray-50 mb-4">
              Achievements
          </h1>
          <p className="text-md text-gray-700 mb-4 dark:text-gray-300">
              <a
                  href="https://www.sciencedirect.com/science/article/pii/S2090123224003205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                  Publication
              </a>
              {myData.achievements.a1}
          </p>
          <p className="text-md text-gray-700 mb-4 dark:text-gray-300">
              <a
                  href="https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2023.1320652/full"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                  Publication
              </a>
              {myData.achievements.a2}
          </p>
          <p className="text-md text-gray-700 mb-4 dark:text-gray-300">
              <a
                  href="https://onlinelibrary.wiley.com/doi/full/10.1111/tpj.16570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                  Publication
              </a>
              {myData.achievements.a3}
          </p>
          <p className="text-md text-gray-700 mb-4 dark:text-gray-300">
              <a
                  href="https://www.biorxiv.org/content/10.1101/2023.08.15.553447v1.abstract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                  Publication
              </a>
              {myData.achievements.a4}
          </p>
          <p className="text-gray-800 font-bold dark:text-gray-300">
              <span className="border-b-2 border-gray-800 dark:border-gray-300">
                  Applied Intelligence India AIM hackathon
              </span>
          </p>
          <p className="text-md text-gray-700 mb-4 dark:text-gray-300">   
              {myData.achievements.a5}
          </p>
          <p className="text-gray-800 font-bold dark:text-gray-300">
              <span className="border-b-2 border-gray-800 dark:border-gray-300">
              {myData.achievements.a6}
              </span>
          </p>
          <p className="text-md text-gray-700 mb-4 dark:text-gray-300">   
                 
          </p>
            <h1 className="bg-red-500 text-2xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Skills
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flask/flask.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/php/php.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/laravel/laravel.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/django/django.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/08e8077e6cd7375c007c6fd6ac8cced5d7738494/topics/google-cloud/google-cloud.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
