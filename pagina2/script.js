document.addEventListener("DOMContentLoaded", function() {
   
  const profilePicture = "./assets/foto perfil.jpg";
  const name = "Adailton Daniel Oliveira Barbieri";
  const objective = `
Sou formado em Administração com ênfase em Sistemas de Informação pela Estácio de Sá e em Ciências Econômicas pelo Instituto Vianna Junior (FGV). Atualmente, estou cursando o 4º período de Engenharia de Software, o 2º período de Análise e Desenvolvimento de Sistemas e o 2º período de Big Data e Ciência Analítica. Além disso, estou no 2º semestre da pós-graduação em Big Data e IA.

Estou em transição de carreira e busco oportunidades na área de TI, com foco em Cloud e Inteligência Artificial. Tenho interesse particular em desenvolver software e implementar estratégias de migração de aplicações para a nuvem, visando à redução de custos e ao aumento de desempenho.

Possuo experiência em análise de Redes (Modelo OSI, TCP/IP, DNS, etc.) e Desenvolvimento Web. Minhas habilidades incluem Microsoft Office e Power BI, além de resiliência, resolução de problemas, liderança, comunicação, trabalho em equipe e pensamento analítico e criativo. Tenho também experiência em metodologias ágeis e no processo Scrum.`;
  
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
    const courses = `
    <p>• <strong>Cobol e Linguagem C para Sistemas Financeiros</strong> – Estácio de Sá (2007).</p>
    <p>• <strong>Java</strong> - Fundação Bradesco (novembro 2022 — dezembro 2022).</p>
    <p>• <strong>Linux</strong> - Udemy (novembro 2023 — dezembro 2023).</p>
    <p>• <strong>IA - Inteligência Artificial </strong> - Mastertech - IBM (Março 2024 — Julho 2024).</p>
    <p>• <strong>Oracle Cloud</strong> - Oracle University (Janeiro 2024 — Julho 2024).</p>
    <p>• <strong>Oracle OCI Generative </strong> - Oracle University (Março 2024 — Julho 2024).</p>
    <p>• <strong>C# Avançado</strong> - Fundação Bradesco (outubro 2022 — novembro 2022).</p>
    <p>• <strong>Python Avançado</strong> - Fundação Bradesco (novembro 2022 — dezembro 2022).</p>
    <p>• <strong>Introdução a Redes</strong> - Fundação Bradesco (janeiro 2023 — fevereiro 2023).</p>
    <p>• <strong>Banco de Dados</strong>, ADA Tech — (fevereiro 2023).</p>
    <p>• <strong>Computação em Nuvem</strong> - Senai/SC (julho 2023 —agosto 2023).</p>
    <p>• <strong>Data Science</strong> - Senai/SC (julho 2023 — agosto 2023).</p>
    <p>• <strong>Fundamentos de AWS Cloud</strong>, Escola da Nuvem — 2023 - 2024.</p>
    <p>• <strong>Aplicativos mobile multiplataforma</strong>, Cosmos-Unopar — Março 2024 (em andamento).</p>
    <p>• <strong>Curso de Programação</strong> (Algoritmos, Lógica, HTML, CSS, JS, PHP, Banco de Dados, API, Frameworks e AWS Cloud Certificação, Proz Educação — agosto 2023 - janeiro 2024.</p>
  `;  
  const languages = `Inglês intermediário para leitura e compreensão — (Cultura Inglesa — 1998 -2001 - Curso Yes - 2024).\nEspanhol intermediário para leitura e compreensão — (Ensino Médio 1997 -1999).`;
  const hobbies = `Jogar xadrez • Assistir séries • Academia • Estudar • Fazer longas caminhadas com meu Cachorro (Iron) • Correr`;

 
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
      degree: "Big Data e Ciência Analítica",
      institution: "Faculdade Anhembi Morumbi, Juiz de Fora",
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
    "Oracle Cloud",
    "Oracle OCI Generetive",
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
    "Metodologia Ágil",
    "Scrum",
    "MongoDB",
    "Bootstrap",
    "Typescript",
    "React",
    "Flutter",
    "Xamarin (.NET)",
    "Springboot"
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