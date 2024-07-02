import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import EnSystems from "@/models/en-systems";

export async function GET() {
  try {
    await dbConnect();
    const systems = await EnSystems.find({});
    return NextResponse.json(systems);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const systems = [
      {
        title: "Oriente 1.0",
        description:
          "Oriente is a system for monitoring the process of TCC (Course Conclusion Work) at FCI/Mackenzie, where students and professors interact digitally and manage activities involved in this context. The system allows for the registration of TCC projects, establishes links between students and advisors, manages the scheduling of panels and poster sessions, and allows for the recording of evaluations and comments. Oriente 1.0 enables better visualization and management of the TCC project registration process for coordinators, faculty, and students regarding TCC production at FCI.",
        situation: "Situation: Completed",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Maria Amélia Eliseo - Coordinator / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz / Jose Eduardo Bernardino Jorge / Lucas Ellery Viana",
        link: "",
      },
      {
        title: "Oriente 2.0",
        description:
          "Oriente is a system for monitoring the process of TCC (Course Conclusion Work) at FCI/Mackenzie, where students and professors interact digitally throughout the process. In version 2.0, the MackLeaps Laboratory proposed a redesign of the interface, improving usability, responsiveness, and user experience. Additionally, improvements were made to the application architecture, such as refactoring, respecting design patterns and microservices orientation. New features were introduced such as scheduling panels, article evaluations, and documents for participation in evaluations.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Dirceu Matheus Junior / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Maria Amélia Eliseo - Coordinator / Ivan Carlos Alcantara de Oliveira / Luiz Carlos Machi Lozano / Thiago Graziani Traue.",
        link: "https://mackleaps.mackenzie.br/oriente",
      },
      {
        title: "GitBook",
        description:
          "Students of the Software Residency Program - MackLeaps are encouraged to develop content during project execution, in the PBL modality. The content made available is used by new residents to help them tackle challenges throughout the program.",
        situation: "Situation: Completed",
        natureza: "Nature: Development",
        members: "",
        link: "https://lab-mackleaps.gitbook.io/residencia-de-software-macklaeps-upm-fci/",
      },
      {
        title: "Redmine",
        description:
          "Redmine is a web-based project management system and bug tracking tool. It features a calendar and Gantt charts to aid in the visual representation of projects and their deadlines.",
        situation: "Situation: Completed",
        natureza: "Nature: Development",
        members: "",
        link: "https://mackleaps.mackenzie.br/redmine",
      },
      {
        title: "FCI Information Carousel",
        description:
          "Project certified by coordinator Daniela Vieira Cunha on 08/05/2024. It aims to develop a digital communication platform for the dissemination of Events and Activities at the FCI Faculty of Computing and Informatics, comprising both the viewing and management modules. The information is presented through a carousel application displayed on a Smart TV located at the entrance of the FCI Building. The contents are viewed daily by more than 1300 people, including students, professors, and other academics who pass through the area. Among the information presented on this media are calls for lectures, training sessions, internal and external events, recruitment actions, dissemination of notices and research projects, as well as a dashboard with live data from the Mackenzie Weather Station project. The Carousel management module is provided by a web application hosted on MackCloud (on-premise cloud environment), allowing for the management of content with ease and agility.",
        situation: "Situation: Completed",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Daniela Vieira Cunha - Coordinator / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Maria Amélia Eliseo / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz.",
        link: "https://mackleaps.mackenzie.br/back-carrossel/",
      },
      {
        title: "Mackleaps Website",
        description:
          "The MackLeaps Laboratory (Laboratório de Estudos em Ambiente de Produção de Software) is the headquarters of the MackLeaps research group. Associated researchers develop software projects, of an applied nature, integrating knowledge from the areas of Software Engineering, Artificial Intelligence, and Human-Computer Interaction. Therefore, there is a need to record and disseminate information about the activities carried out by the group, such as completed or ongoing projects, research group activities, and its legacy. The aim of this project was the design and development of a bilingual website for the Laboratory, allowing to establish a visual identity for the group, as well as to present and manage the content related to MackLeaps.",
        situation: "Situation: Completed",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Maria Amélia Eliseo - Coordinator / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Marcilyanne Moreira Gois / Ivan Carlos Alcantara de Oliveira / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz / Jose Eduardo Bernardino Jorge / Lucas Ellery Viana / João Pedro Rodrigues Vieira / Pedro Henrique Araujo Farias.",
        link: "https://mackleaps.mackenzie.br/",
      },
      {
        title: "People Counter",
        description:
          "Security is a point of interest for everyone living in social clusters. Understanding flows and behaviors of people moving in outdoor and indoor spaces can contribute to more assertive decisions in this context. This project aims to develop an automated tool that, employing computer vision and artificial intelligence techniques, is capable of detecting and identifying people in spaces typical to urban environments. This ability to differentiate individuals from other elements in the environment is essential for tasks such as counting people circulating in buildings, analyzing flow between corridors and exhibition aisles, circulation preferences, as well as identifying circulation at unconventional hours, anomalous movement, and visitors' mood, among others. The platform implements all stages of the data pipeline, and the produced information is made available in a Dashboard suitable for this application context. All issues involving LGPD (General Data Protection Law) are considered by the project.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes / Maria Amélia Eliseo / Daniela Vieira Cunha / Leandro Carlos Fernandes - Coordinator / Ivan Carlos Alcantara de Oliveira / Elieder Damasceno Sousa / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz / João Ricardo de Lima Bonifácio / Jose Eduardo Bernardino Jorge / Bruno Seki Schenberg / Gabriel da Silva Morishita Garbi / Leonardo Santos Rocha.",
        link: "",
      },
      {
        title: "Weather Station",
        description:
          "In the context of resilient cities, situational information is essential to support decision-making, especially in events where weather is a determining factor to avoid harmful consequences to the population living in clusters susceptible to environmental impacts. Climate data is crucial to contribute to more assertive decision-making, in order to prevent or minimize negative impacts. This project aims to propose and develop a computational architecture capable of orchestrating actions for collecting, analyzing, disseminating, and sharing weather data from meteorological stations deployed within and outside the campus of Universidade Presbiteriana Mackenzie, forming a network of meteorological sensors.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes - Coordinator / Maria Amélia Eliseo / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Elieder Damasceno Sousa / Alvaro Hibide Claver / Erika Borges Piaui / Gustavo Garabetti Munhoz / João Ricardo de Lima Bonifácio / Alan Gleizer / Marcelo Gonzatto Birkan",
        link: "https://mackleaps.mackenzie.br/dashboard-estacao/",
      },
      {
        title: "API - Weather Station",
        description:
          "API for collecting and distributing meteorological data from the meteorological stations of Universidade Presbiteriana Mackenzie, Higienópolis campus.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Development",
        members: "",
        link: "https://mackleaps.mackenzie.br/meteorologiaapi-docs/#",
      },
      {
        title: "Street Retail Poles in São Paulo",
        description:
          "The research aims to understand the locations of concentration of street retail, their dynamics, and the relationship they establish with the city. Through the mapping of retail sectors, it identifies poles and classifies them into 3 levels linked by sector of activity. The mapping converges to the database, conducts analyses, and presents indicators. The research intends to metricize Urbanity indices in Retail Poles through attributes of connectivity, diversity, and comfort.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes / Maria Amélia Eliseo / Cassia Regina Mariano / Larissa G. Campagner / Cecilia Pisetta / Felipe Cavalheiro dos Anjos / Valter Luis Caldana Junior - Coordinator.",
        link: "https://mackleaps.mackenzie.br/acsp",
      },
      {
        title: "Mack-RAG - SAGUI",
        description:
          "SAGUI - Intelligent University Management Assistance System. The University has a compendium of documents that govern, regulate, and standardize the diverse academic activities involving its community in the areas of teaching, research, and extension. For students to understand or even search for specific information among the various documents and their updates can be a time-consuming and difficult task. The proposal of this project is to build a Retrieval-Augmented Generation (RAG) system to assist in academic communication, capable of providing information about rules, determinations, deadlines, responsibilities, and activities within the university, through a more user-friendly interface and communication in natural language.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Dirceu Matheus Junior / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes - Coordinator / Elisangela Botelho Gracias / Maria Amélia Eliseo / Luiz Carlos Machi Lozano / Thiago Graziani Traue.",
        link: "",
      },
      {
        title: "Smart Auditorium",
        description:
          "Project certified by coordinator Daniela Vieira Cunha on 08/05/2024. There are several situations that we can observe when attending an event. Starting with the event promotion, registration for a spot, pre-event recommendations such as arrival time, whether we can consume food, etc. There are apps that can serve as references such as Meetup and Sympla. We also have physical and virtual auditoriums. How can we improve the user experience in the moments leading up to an event? The aim of this project is to study ways to improve the user experience in the context of events using computational resources for this purpose.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha - Coordinator / Elisangela Botelho Gracias / Maria Amélia Eliseo / Thiago Graziani Traue.",
        link: "",
      },
      {
        title: "Virtual Gardening at Um Entreposto",
        description:
          "Project certified by coordinator Ivan Carlos Alcântara de Oliveira on 26/04/2024. This project is a collaboration initiative with the startup Um Entreposto, in which the partnership with the Laboratory involves the development of new functionalities for the gardening items e-commerce of this company. Among the operational characteristics are plant identification through Artificial Intelligence techniques and the maintenance of a repository of options containing alternatives for researched specimens.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Leandro Carlos Fernandes / Maria Amélia Eliseo / Ivan Carlos Alcantara de Oliveira - Coordinator / Luiz Carlos Machi Lozano",
        link: "",
      },
      {
        title: "APO-PPGCA Project",
        description:
          "Among the demands of a stricto-sensu graduate program, the Mandatory Programmed Activities (APO) are among the requirements necessary for obtaining the titles of Master or Doctor. The objective of this project is to develop an application capable of managing the evaluation process of APOs within the scope of PPGCA/FCI/UPM, which will serve as a test-bed for the study of event-driven architectural patterns that collaborate in defining pillars of development for the products generated in the Software Residency.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Maria Amélia Eliseo - Coordinator / Alvaro Hibide Claver / Marcelo Hideki Ogushi Carrera",
        link: "",
      },
      {
        title: "Cockpit - Energy-Efficient Car for Competition",
        description:
          "Project certified by coordinator Fábio Raia on 26/04/2024. The Student League of the Electric Car, linked to the Mechanical Engineering course of Escola de Engenharia Mackenzie, has an electric traction vehicle and its own electronic control, built on an aluminum tubular chassis and with carbon fiber fairing. The activities of the League explore the theoretical and practical capabilities of students in issues involving both the conception of solutions and the execution and testing of conditioning. In this context, the objective of this project is to collaborate with the Student League of the Electric Car in the development of an embedded system that serves as a cockpit to monitor the vehicle's state and support its drivability.",
        situation: "Situation: Completed",
        natureza: "Nature: Development",
        members:
          "Members: Fábio Silva Lopes / Fabio Raia - Coordinator / Leandro Carlos Fernandes / Elieder Damasceno Sousa.",
        link: "",
      },
      {
        title: "Health Surveillance Information System",
        description:
          "Information system aimed at registering the establishments targeted by health surveillance in the state of São Paulo, as well as the sanitary inspections carried out in them.",
        situation: "Situation: Completed",
        natureza: "Nature: Development",
        members: "Members: Fábio Silva Lopes - Coordinator",
        link: "",
      },
      {
        title: "Digital Twin Mackenzie Campus Higienópolis",
        description:
          "The term Living Lab refers to a research approach that involves collaboration among end-users, researchers, and other stakeholders in the creation, development, and testing of innovative solutions for real-world problems. The idea is that the real environment is used as a laboratory to test ideas and solutions, rather than a controlled laboratory environment. However, experiments can collect real-world data to input into a digital model that allows for reproducing simulations of events that are difficult to replicate in the real environment. Digital Twins are digital representations of physical entities. There are various applications and advantages of using this technology, which can function as a geographical dashboard to monitor, simulate, evaluate, explore, or predict events in cities. From this perspective, the project aims to develop a Digital Twin of the Higienópolis campus as a foundational support platform for Living Labs experiments, as an interoperable platform capable of integrating data from various applications focused on the campus, as well as enabling the implementation of new experiments dependent on geographic variables.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes - Coordinator / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Maria Amélia Eliseo / Ivan Carlos Alcantara de Oliveira",
        link: "",
      },
      {
        title: "Living Lab Mackenzie",
        description:
          "Implementation of a computational platform for collecting, storing, and analyzing sensor data for monitoring activities in physical environments.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes - Coordinator / Maria Amélia Eliseo / Dirceu Matheus Junior / Kassya Christina Rigolon de Andrade / Daniela Vieira Cunha / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Marcilyanne Moreira Gois / Bruno da Silva Rodrigues.",
        link: "",
      },
      {
        title: "Smart Campus",
        description:
          "This is a study and implementation of sensors for measurement, analysis, and generation of indicators for decision-making on a university campus. The Higienópolis campus of UPM is being used as a testbed. Currently, environmental data such as temperature, humidity, CO2 levels, wind speed, among others, are being collected through sensors, generating a dataset exported to a repository, which will be used as a source for exploratory and predictive analyses. Currently, the quality of the generated data is being analyzed, and the modeling of the indicators based on the collected data is being defined.",
        situation: "Situation: Completed",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes - Coordinator / Maria Amélia Eliseo / Ana Claudia Rossi / Daniela Vieira Cunha.",
        link: "",
      },
      {
        title:
          "Learning Objects to Support Software Residency Practices at MackLeaps",
        description:
          "This project aims to structure and implement a learning platform to develop levels of maturity in students' skills in the areas of Software Engineering and Human-Computer Interaction, considering immersion in real projects stemming from partnerships with organizations, in order to promote the study, validation, and evaluation of practices and skills, as well as research focused on improving software processes and products.",
        situation: "Situation: Completed",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes - Coordinator / Maria Amélia Eliseo / Dirceu Matheus Junior / Kassya Christina Rigolon de Andrade / Regiane Moreno / Ivan Carlos Alcantara de Oliveira / Leandro Carlos Fernandes / Elisangela Botelho Gracias / Marcilyanne Moreira Gois / Renata Maria Nogueira de Oliveira.",
        link: "",
      },
      {
        title: "Creation of Mackenzie-FIESP Sustainability Index",
        description:
          "The proposed research problem is the Creation of the Mackenzie-FIESP Sustainability Index, in a partnership between Mackenzie Presbyterian University and the Federation of Industries of the State of São Paulo - FIESP. The research objective is the creation of a sustainability index that allows identifying the results of corporate actions aimed at mitigating the social and environmental impacts of their activities. The sustainability index will be composed of economic, environmental, social, and governance indicators (Economic + Environmental, Social, and Governance / ESG) and will serve as a measurement instrument for companies to identify, project, evaluate, and make decisions regarding their sustainable practices. With support from theoretical foundations and based on the guidelines of the Global Reporting Initiative (GRI), the Mackenzie-FIESP Index may gain international recognition, thus serving as a basis for government policies oriented towards sustainability best practices. In terms of specific objectives, the following phases are ongoing (some already completed): 1. Development of a theoretical/practical foundation for project implementation; 2. Construction of a database of economic, environmental, social, and governance data from Brazilian companies in partnership with FIESP (data collection and transfer). These data must be collected, processed, and prepared for storage in a repository, where they will be available for exploratory analysis; 3. Quantification of economic, environmental, social, and governance indicators, based on the database generated in step 2; 4. Operationalization of a sustainability indicators system so that it can be available for consultation by participating companies; 5. Development of panels that allow the simulation of scenarios, so that participating companies can test alternative changes in their indicators, in order to support their decisions in the search for new levels for their own sustainability indices. This is an interdisciplinary project in partnership with the Center for Social and Applied Sciences.",
        situation: "Situation: Completed",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes / Arnaldo Rabello de Aguiar Vallim Filho - Coordinator / Leandro Augusto da Silva / Luis Carlos Jacob Perera.",
        link: "",
      },
      {
        title:
          "Predictive Analysis Based on Intelligence for Supervisory Systems of Hydroelectric Power Plants",
        description:
          "The General Objective of this R&D project is the planning and development of a research experiment aimed at building a mathematical modeling that enables the establishment of new parameters and metrics for operation and maintenance for hydroelectric plants with reservoir lakes, seeking the optimal operational point, considering the volume of water in the reservoirs for human consumption, environmental sustainability, generation, and availability of energy, through advanced predictive mathematical-computational models. The final product of the research will be a prototype of a predictive incident computational tool, aimed at optimizing the turbine maintenance scheduling process. Predictive modeling will be supported by advanced Artificial Intelligence techniques and will be computationally implemented, so that at the end of the project, it will be evaluated in a test environment, having demonstrated adequate performance evolution of the developed modeling.",
        situation: "Situation: Completed",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes / Arnaldo Rabello de Aguiar Vallim Filho - Coordinator / Leandro Augusto da Silva / Dirceu Matheus Junior / Orlando Bisacchi Coelho / Jamilson Bispo dos Santos / Eduardo Mayer Fagundes.",
        link: "",
      },
      {
        title: "Human Postural Balance Evaluation",
        description:
          "This project promotes the assessment of human body balance through a low-cost force platform. Maintaining body balance during the upright posture is considered a complex task from the perspective of motor control and is one of the most important motor skills for humans to perform daily activities. Controlling balance in activities such as walking, climbing stairs, running, or simply standing requires constant adjustments in movement patterns that vary between genders. This study aims to create a force platform for balance assessment using low-cost materials available in the national market. After developing the equipment, initial tests will be conducted to verify its proper functioning through the assessment of postural balance in young individuals.",
        situation: "Situation: Completed",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes, Ana Claudia Rossi, Silvana Maria Blascovi de Assis, Fabio Raia (Coordinator), Denise Loureiro Viana, Fernanda Simeão Costa, Julia Camargo Marcondes dos Santos, Rosangela Gumaraes Romano, Janina Mazieri Prado Rico, Bianca de Mello Pires, Raquel Cymrot, Gabriel Melo Francisco Correia",
        link: "",
      },
      {
        title:
          "Optimization of Driveability and Monitoring of an Electric Vehicle Prototype",
        description:
          "This is a project in partnership with the School of Engineering that develops a prototype of an electric vehicle, which has already been involved in competitions around the world. The involvement of the computing area, including a faculty member from this master's program, concerns the study for the implementation of sensors in the vehicle aimed at obtaining data to optimize the vehicle's driveability. Additionally, data is being collected for the generation and analysis of electrical indicators for continuous monitoring of the electric vehicle.",
        situation: "Situation: Completed",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes, Ana Claudia Rossi, Fabio Raia (Coordinator)",
        link: "",
      },
      {
        title: "Study on Student Dropout Rates in Higher Education Courses",
        description:
          "This project aims to study the various aspects that impact the academic life of undergraduate students, including the factors that lead to dropout rates.",
        situation: "Situation: Completed",
        natureza: "Nature: Research",
        members: "Members: Fábio Silva Lopes (Coordinator), Argemiro Severiano",
        link: "",
      },
      {
        title: "Digital Documentation of Heritage",
        description:
          "Digital documentation of heritage: A three-dimensional and temporal model for the Mack-Itambé campus. This research aims to develop and implement a three-dimensional model associated with a database with space-time characteristics for the Mackenzie Itambé campus, delimited to buildings 1-Mackenzie Building and 2-George Alexander Library, enabling navigation through spaces, as well as access to information related to the transformation of these buildings over time.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes, Maria Amélia Eliseo, Ismar Frango da Silveira (Coordinator), Beatriz de Almeida Pacheco",
        link: "",
      },
      {
        title: "IntegraEPI",
        description:
          "The aim of this research project is to contribute to the modernization of the epidemiological surveillance system, with an emphasis on improving information quality by comparing results of detailed simulations with the experimental standard observed for the spread of an epidemic, both temporally and geographically. This involves the development of algorithms and interactive software that utilize predictive models of spatiotemporal epidemiological behavior in a computational grid environment.",
        situation: "Situation: Ongoing",
        natureza: "Nature: Research",
        members:
          "Members: Fábio Silva Lopes, Denise Stringhini, Hermes Senger, Fabricio Alves Barbosa da Silva (Coordinator)",
        link: "",
      },
    ];
    await EnSystems.insertMany(systems);
    return NextResponse.json(systems);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
