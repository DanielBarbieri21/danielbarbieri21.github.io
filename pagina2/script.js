document.addEventListener("DOMContentLoaded", function() {
   
  const profilePicture = "./assets/foto perfil.jpg";
  const name = "Adailton Daniel Oliveira Barbieri";
  const objective = `Sou formado em Administração com ênfase em Sistemas de Informação pela Estácio de Sá e em 
  Ciências Econômicas pelo Instituto Vianna Junior (FGV). Atualmente, estou cursando o 4º período 
  de Engenharia de Software, o 1º período de Análise e Desenvolvimento de Sistemas, o 1º período 
  de Big Data e Ciência Analítica, e estou me especializando em Big Data e Inteligência Artificial, 
  cursando o 1º semestre de pós-graduação na área. Tenho interesse em trabalhar com 
  desenvolvimento de software.
  Estou em transição de carreira, buscando conhecer e aprender a implementar estratégias de 
  migração de aplicações para a nuvem, com o objetivo de reduzir custos e aumentar o 
  desempenho. Almejo uma oportunidade para atuar na área de TI, com foco em Cloud.
  Possuo experiência em análise de redes (Modelo OSI, TCP/IP, DNS, etc.) e desenvolvimento web. 
  Tenho habilidades em Microsoft Office e Power BI, além de ser resiliente, determinado, com boa 
  liderança, excelente comunicação, capacidade de trabalho em equipe, pensamento analítico e 
  criativo. Tenho experiência em metodologia ágil e processo Scrum.
  `;
  const experience = `Gerente Vendas e Gerente TI
    Rolaveda Rolamentos, Juiz de Fora (setembro 2009 - Presente) -
    • Vendas, suporte ao cliente e treinamento de pessoal no ramo de autopeças, com conhecimento em mecânica de automóveis.
    • Manutenção de páginas web, redes sociais e sistemas.
    • Responsável pela área de TI, servidores e Desktops.

    Comprador — Gerente de Departamento
    Supermercado Bahamas, Juiz de Fora (fevereiro 2003 — agosto 2009) -
    • Gerência de compras, análise de insumos e planilhas de controle para manutenção e expansão de novas unidades.

    Garçom
    Shayka Comida Árabe, Juiz de Fora (janeiro 2001 — janeiro 2003) -
    • Atendimento ao cliente e atividades de manutenção.`;
  const courses = `• <strong>Cobol e Linguagem C para Sistemas Financeiros</strong> – Estácio de Sá (2007).
    • <strong>Java</strong> - Fundação Bradesco (novembro 2022 — dezembro 2022).
    • <strong>C# Avançado</strong> - Fundação Bradesco (outubro 2022 — novembro 2022).
    • <strong>Python Avançado</strong> - Fundação Bradesco (novembro 2022 — dezembro 2022).
    • <strong>Introdução a Redes</strong> - Fundação Bradesco (janeiro 2023 — fevereiro 2023).
    • <strong>Banco de Dados</strong>, ADA Tech — (fevereiro 2023).
    • <strong>Computação em Nuvem</strong> - Senai/SC (julho 2023 —agosto 2023).
    • <strong>Data Science</strong> - Senai/SC (julho 2023 — agosto 2023).
    • <strong>Fundamentos de AWS Cloud</strong>, Escola da Nuvem — 2023 (andamento).
    • <strong>Curso de Programação</strong> (Algoritmos, Lógica, HTML, CSS, JS, PHP, Banco de Dados, API, Frameworks e AWS Cloud Certificação, Proz Educação — agosto 2023 - janeiro 2024.`;
  const languages = `Inglês intermediário para leitura e compreensão — (Cultura Inglesa — 1998 -2001).\nEspanhol intermediário para leitura e compreensão — (Ensino Médio 1997 -1999).`;
  const hobbies = `Jogar xadrez • Assistir séries • Academia • Estudar • Caminhar • Correr`;

 
  document.getElementById("profile-picture").src = profilePicture;
  document.getElementById("name").textContent = name;
  document.getElementById("objective").textContent = objective;
  document.getElementById("courses").innerHTML = courses;
  document.getElementById("languages").innerHTML = languages.replace(/\n/g, "<br>");
  document.getElementById("hobbies").textContent = hobbies;

 
  const educationData = [
    {
      degree: "Analise e Desenvolvimento de Sistemas",
      institution: "Faculdade Anhanguera Unopar, Juiz de Fora",
      period: "Fevereiro 2024 — Junho 2026"
    },
    {
      degree: "Engenharia de Software",
      institution: "Faculdade Estácio de Sá, Juiz de Fora",
      period: "Junho 2022 — Dezembro 2025"
    },
    {
      degree: "Ciências Econômicas",
      institution: "Instituto Vianna Junior, Juiz de Fora",
      period: "Janeiro 2006 — Dezembro 2009"
    },
    {
      degree: "Administração de Empresas (ênfase em Sistemas de Informação)",
      institution: "Faculdade Estácio de Sá",
      period: "Janeiro 2004 — Dezembro 2007"
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
    "Cobol Básico",
    "Power BI",
    "Linux",
    "Visual Studio",
    "AWS Cloud",
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
    "Metodologia Ágil",
    "Scrum",
    "MongoDB"
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
