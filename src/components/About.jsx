import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Vicky, a passionate Django developer with a keen eye for Full stack development.  With a background in Computer Science, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education
        </h1>
        <span>
          [10th], [High School Noneya, East Champaran], [2017-2018] 
          <p>(65.2%)</p>
        </span>
        <br />
        <span>
          [12th(Science)], [L.N.d College Motihari], [2019-2020]
          <p>(82.2%)</p> 
        </span>
        <br />
        <span>
          [B.Tech(Computer Science and engineering)], [Oriental college of technology], [2020-2024] 
          <p>(7.75 CGPA)</p>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in [HTML, CSS, JavaScript, ReactJs, Django Rest Framework, OOPs, Data Structures and Algorithms, SQL, tailwind ] Experienced with [VS code, Git & Github
          ] 
          Excellent problem-solving skills Effective communicator and
          collaborator
        </span>
        <br />
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements
        </h1>
        <span>
          [5 star on Hacker Rank, Newbie on code forces, Solve 500+ Coding questions on different platforms like GFG, codechef and leetcode.]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative IT solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
