import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import EnProjects from "@/models/en-projects";

export async function GET() {
  try {
    await dbConnect();
    const projects = await EnProjects.find({});
    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const projects = [
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "In Progress",
        title: "Weather Station",
        body: "The system consists of an application that communicates with a weather station and its sensors, collecting and manipulating real-time weather data. The system stores the collected data in a database, offering functions such as filtering and downloading raw data for analysis purposes. Also included in the application is an API (Application Programming Interface) that provides updated real-time data for use in external computational systems. The graphical interface will be provided through a responsive web page, presenting dashboards and data analysis graphs. Users of the system should access current weather information (temperature, probability of rain, humidity) from a dashboard on a web page. Additionally, it should be possible to download stored data from all station sensors. The system should also offer the possibility to filter the visualization and download of data considering parameters such as period, type of data, and file extension that the user desires. It will also be possible to view interactive graphs in a simple and summarized way for rain, humidity, wind speed, and temperature histories. Data from the weather station should be fetched and loaded into the database every 15 minutes. Finally, the system should have an alert area visible on the homepage informing the user about risk situations such as high temperatures, strong winds, and low air humidity. Alerts should also be sent via push notifications.",
        description:
          "Application that communicates with a weather station and its sensors, collecting and manipulating real-time weather data.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "Mackleaps Website",
        body: "The Mackleaps website aims to disseminate ongoing and completed research and projects related to technology, as well as recruit potential members and partners such as students, companies, academic institutions, and researchers with similar purposes. To achieve this, the system needs to be constantly updated with relevant data selected by the administrators. Furthermore, interested parties should not only be able to familiarize themselves with the conducted works but also have an overview of the laboratory, its team, and means to contact the lab for inquiries, scheduling visits, or meetings. Currently, the website faces some technical and design issues that hinder or discourage its use, such as the lack of a main menu with shortcuts to all website sections for streamlined navigation, static and uninteresting icons, generic and insufficiently informative texts, especially regarding projects and research, which should be the main focus and require a specific and detailed section, unprofessional or unrelated images to the technology field, absence of documentation, and a completely centralized architecture, among other issues to be further addressed in this report and throughout the Residency program. Thus, considering the necessity to stand out among other research laboratories in the technology field and demonstrate the commitment of lab members, this project aims to make the Mackleaps website more appealing, interesting, dynamic, modern, easy to navigate (across all platforms), intuitive, and fast, as well as facilitate its frequent updates.",
        description:
          "Aims to disseminate research and projects related to technology and recruit potential members and partners.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "In Progress",
        title: "People Counter",
        body: "This project aims to develop and implement the People Counter system for monitoring individuals on the Higienópolis campus of Mackenzie University. The system will collect data on people's movements, store them in a cloud-based database, and provide customized reports through a web application, turning data into useful information with customization possibilities. The goal is to provide real-time information to assist professors, coordinators, security teams, and other administrative members of the university in making decisions related to campus security, organization, and management. Through the local server, where videos captured by ESP-32-CAMs will be centralized, the system should be able to process images (videos) using OpenCV to generate information. Additionally, it will consist of the following servers: Image capture server, Image processing server, Database server, and Web application server, which can be either local (Windows Server, Ubuntu Server, CentOS) or cloud-based. The web application and dashboard are crucial components for presenting collected information in an accessible and useful manner. These requirements detail the necessary functionalities for the web interface. In terms of performance, the system should provide real-time responses when accessing the dashboard or generating reports, with a maximum response time of 2 seconds for any user action. Finally, the system should be configured to perform regular backups of stored data in case of failures or data loss.",
        description:
          "Aims to count the number of people entering buildings on the Higienópolis campus of Mackenzie University.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "In Progress",
        title: "Oriente 2.0",
        body: "Oriente is a TCC submission/tracking system where professors can monitor their students' TCC and evaluate projects from other supervisors when their assessment is requested. In an overview, Oriente provides better visualization for professors and students regarding their TCCs. The system will have the following users: coordinating professor, supervising professor, evaluating professor, substitute professor, and student. The coordinating professor can delete projects, reset passwords, remove individuals, and activate the poster session event. The supervising professor can accept projects submitted by students, schedule evaluations, and has access to the project and its supervised students. The evaluating professor accepts when requested as an evaluator for a project, views the projects to be evaluated, and submits grades for the evaluated projects. The substitute professor accepts when requested as a substitute for a project, views the projects to be evaluated, and submits grades for the evaluated projects (substitute evaluation is only required if an evaluator does not submit their grade). Finally, students view their projects and accept if their participation in a project is requested.",
        description:
          "It is a TCC submission/tracking system that provides better visualization for professors and students regarding their projects.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "AR-TWO",
        body: "An application for identifying lung disorders using a blowing mechanism that provides both diagnostics and treatments.",
        description:
          "An application for identifying lung disorders using a blowing mechanism that provides both diagnostics and treatments.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "IDT",
        body: "A process model for screening students with signs of Autism Spectrum Disorder and Intellectual Disability.",
        description:
          "A process model for screening students with signs of Autism Spectrum Disorder and Intellectual Disability.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "ISMF",
        body: "A system for creating the Sustainability Index of the Presbyterian Mackenzie University.",
        description:
          "A system for creating the Sustainability Index of the Presbyterian Mackenzie University.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "Tagarela",
        body: "Digital Validation Tool for Early Identification of Language Deficits in Children.",
        description:
          "Digital Validation Tool for Early Identification of Language Deficits in Children.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "Force Platform",
        body: "Evaluation of human postural balance through a force platform.",
        description:
          "Evaluation of human postural balance through a force platform.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "Mackenzie volunteer",
        body: "A web platform for Mackenzie Voluntário aimed at registering projects and participants of social actions.",
        description:
          "A web platform for Mackenzie Voluntário aimed at registering projects and participants of social actions.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "Latin Project",
        body: "A platform for the free distribution of e-books created by local teachers and authors in Latin America.",
        description:
          "A platform for the free distribution of e-books created by local teachers and authors in Latin America.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "Completed",
        title: "Onboard Computer",
        body: "Application for controlling the Electric Car, an ultra-efficient prototype powered by electricity developed by the Mackenzie School of Engineering.",
        description:
          "Application for controlling the Electric Car, an ultra-efficient prototype powered by electricity developed by the Mackenzie School of Engineering.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "In Progress",
        title: "Atlas",
        body: "The Americas Atlas is a digital initiative aimed at providing a centralized and reliable resource for information related to border laws and regulations across the American continent. This website is specially designed to meet the needs of professionals working in border services, offering easy access to updated and relevant data for border management and immigration processes.",
        description:
          "The Americas Atlas is a digital initiative aimed at providing a centralized and reliable resource for information related to border laws and regulations across the American continent.",
      },
      {
        img: "/code.jpeg",
        date: "January 10, 2023",
        status: "In Progress",
        title: "Dashboard - Eletric Car",
        body: "The electric car is a UPM project involving students from various courses at the School of Engineering. It consists of manufacturing a car that achieves energy efficiency, using techniques and knowledge from the fields of mechanics, electrical engineering, electronics, programming, among others. The objective is participation in the Shell Eco-marathon, a global academic program focused on energy efficiency and one of the world's premier engineering student competitions. In addition to the mechanical and electrical structure, the car uses sensors to monitor current and voltage consumption, temperature, and vehicle speed. These data are displayed on a panel; an application developed for a smartphone is fixed to the car's steering wheel so that the driver can monitor the vehicle's performance according to their actions. All communication between the Arduino and the application is done via USB cable, using the UART (Universal Asynchronous Receiver-Transmitter) serial protocol. Sensor data, after processing, are packaged into a JSON-formatted string and sent to the application, which receives this string and displays the values.",
        description:
          "It consists of manufacturing a car that achieves energy efficiency, using techniques and knowledge from the fields of mechanics, electrical engineering, electronics, programming, among others.",
      },
    ];
    await EnProjects.insertMany(projects);
    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
