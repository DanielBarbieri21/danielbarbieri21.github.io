document.addEventListener("DOMContentLoaded", function() {

  const profilePicture = "./assets/foto perfil.jpg";
  const name = "Adailton Daniel Oliveira Barbieri";
  const objective = `
  I have a degree in Business Administration with an emphasis on Information Systems from Estácio de Sá and in Economics from Instituto Vianna Junior (FGV). Currently, I am in the 4th semester of Software Engineering, the 2nd semester of Systems Analysis and Development, and the 2nd semester of Big Data and Analytical Science. Additionally, I am in the 2nd semester of my postgraduate studies in Big Data and AI.

  I am transitioning careers and looking for opportunities in the IT field, focusing on Cloud and Artificial Intelligence. I have a particular interest in developing software and implementing application migration strategies to the cloud, aiming at cost reduction and performance improvement.

  I have experience in Network Analysis (OSI Model, TCP/IP, DNS, etc.) and Web Development. My skills include Microsoft Office and Power BI, as well as resilience, problem-solving, leadership, communication, teamwork, and analytical and creative thinking. I also have experience with agile methodologies and the Scrum process.`;

  const experience = `Sales Manager and IT Manager
  Rolaveda Rolamentos, Juiz de Fora (September 2009 - Present) -
  • Sales, customer support, and staff training in the auto parts industry, with knowledge in automobile mechanics.
  • Maintenance of web pages, social media, and systems.
  • Responsible for IT area, servers, and desktops.

  Buyer — Department Manager
  Supermercado Bahamas, Juiz de Fora (February 2003 — August 2009) -
  • Purchase management, supply analysis, and control spreadsheets for the maintenance and expansion of new units.

  Waiter
  Shayka Comida Árabe, Juiz de Fora (January 2001 — January 2003) -
  • Customer service and maintenance activities.`;

  const courses = `
  <p>• <strong>Cobol and C Language for Financial Systems</strong> – Estácio de Sá (2007).</p>
  <p>• <strong>Java</strong> - Fundação Bradesco (November 2022 — December 2022).</p>
  <p>• <strong>Linux</strong> - Udemy (November 2023 — December 2023).</p>
  <p>• <strong>AI - Artificial Intelligence</strong> - Mastertech - IBM (March 2024 — July 2024).</p>
  <p>• <strong>Oracle Cloud</strong> - Oracle University (January 2024 — July 2024).</p>
  <p>• <strong>Oracle OCI Generative</strong> - Oracle University (March 2024 — July 2024).</p>
  <p>• <strong>Advanced C#</strong> - Fundação Bradesco (October 2022 — November 2022).</p>
  <p>• <strong>Advanced Python</strong> - Fundação Bradesco (November 2022 — December 2022).</p>
  <p>• <strong>Introduction to Networks</strong> - Fundação Bradesco (January 2023 — February 2023).</p>
  <p>• <strong>Databases</strong>, ADA Tech — (February 2023).</p>
  <p>• <strong>Cloud Computing</strong> - Senai/SC (July 2023 — August 2023).</p>
  <p>• <strong>Data Science</strong> - Senai/SC (July 2023 — August 2023).</p>
  <p>• <strong>AWS Cloud Fundamentals</strong>, Escola da Nuvem — 2023 - 2024.</p>
  <p>• <strong>Cross-Platform Mobile Apps</strong>, Cosmos-Unopar — March 2024 (ongoing).</p>
  <p>• <strong>Programming Course</strong> (Algorithms, Logic, HTML, CSS, JS, PHP, Databases, API, Frameworks, and AWS Cloud Certification, Proz Educação — August 2023 - January 2024.</p>
  `;

  const languages = `Intermediate English for reading and comprehension — (Cultura Inglesa — 1998-2001 - Yes Course - 2024).\nIntermediate Spanish for reading and comprehension — (High School 1997-1999).`;

  const hobbies = `Playing chess • Watching series • Gym • Studying • Taking long walks with my dog (Iron) • Running`;

  document.getElementById("profile-picture").src = profilePicture;
  document.getElementById("name").textContent = name;
  document.getElementById("objective").textContent = objective;
  document.getElementById("courses").innerHTML = courses;
  document.getElementById("languages").innerHTML = languages.replace(/\n/g, "<br>");
  document.getElementById("hobbies").textContent = hobbies;

  const educationData = [
    {
      degree: "Systems Analysis and Development",
      institution: "Faculdade Anhanguera Unopar, Juiz de Fora",
      period: "February 2024 — June 2026"
    },
    {
      degree: "Big Data and Analytical Science",
      institution: "Faculdade Anhembi Morumbi, Juiz de Fora",
      period: "February 2024 — June 2026"
    },
    {
      degree: "Software Engineering",
      institution: "Faculdade Estácio de Sá, Juiz de Fora",
      period: "June 2022 — December 2025"
    },
    {
      degree: "Economics",
      institution: "Instituto Vianna Junior, Juiz de Fora",
      period: "January 2006 — December 2009"
    },
    {
      degree: "Business Administration (emphasis on Information Systems)",
      institution: "Faculdade Estácio de Sá",
      period: "January 2004 — December 2007"
    }
  ];

  const educationSection = document.getElementById("education");

  educationData.forEach(data => {
    const degreeElement = document.createElement("h3");
    degreeElement.textContent = data.degree;
    const institutionElement = document.createElement("p");
    institutionElement.textContent = `${data.institution} - ${data.period}`;

    educationSection.appendChild(degreeElement);
    educationSection.appendChild(institutionElement);
  });

  const skillsData = [
    "Python",
    "Java",
    "Basic Cobol",
    "Power BI",
    "Linux",
    "Visual Studio",
    "AWS Cloud",
    "Oracle Cloud",
    "Oracle OCI Generative",
    "IBM Cloud",
    "Git",
    "Github",
    "C",
    "C++",
    "C#",
    "HTML",
    "CSS3",
    "JavaScript",
    "PHP",
    "Node.js",
    "PostgreSQL",
    "PyCharm",
    "Eclipse",
    "Agile Methodology",
    "Scrum",
    "MongoDB",
    "Bootstrap",
    "Typescript",
    "React"
  ];

  const skillsSection = document.getElementById("skills");

  const skillsList = document.createElement("ul");
  skillsData.forEach(skill => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  });

  skillsSection.appendChild(skillsList);

  const experienceSection = document.getElementById("experience");
  const experiences = experience.split("\n\n");

  experiences.forEach(exp => {
    const expParagraph = document.createElement("p");
    expParagraph.textContent = exp;
    experienceSection.appendChild(expParagraph);
  });
});
