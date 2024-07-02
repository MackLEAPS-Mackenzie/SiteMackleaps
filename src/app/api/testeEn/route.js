import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import EnNews from "@/models/en-news";

export async function GET() {
  try {
    await dbConnect();
    const news = await EnNews.find({});
    return NextResponse.json(news);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const news = [
      {
        img: "/code.jpeg",
        date: "20 Mai. 2024",
        author: "Administrador",
        author_img: "/author.jpeg",
        title: "Book Release 2024",
        description:
          "This news promotes the release of the latest books launched on May 27, 2024, authored by some professors from FCI.",
        body: {
          __html:
            "<p>This news promotes the release of the latest books authored by some professors from FCI. <b>The launch took place on May 27, 2024, in collaboration with Editora Mackenzie</b> and the <b>Graduate Program in Applied Computing.</b> Below are the respective releases:</p><br><p><b>1 - Introduction to Time Series:</b> A Practical Approach in Python.</p><p><b>Authors:</b> Rogério de Oliveira, Orlando Yesid Esparza Albarracin, and Gustavo Rocha da Silva.</p><p><b>Publisher:</b> Editora Mackenzie</p><br><p><b>2 - Introduction to Data Science and Interactive Systems:</b> An Applied Approach.</p><p><b>Authors:</b> Ana Grasielle Dionísio Corrêa, Arnaldo Rabello de Aguiar Vallim Filho, Maria Amelia Eliseo, Valéria</p><p><b>Publisher:</b> LF Editorial</p><br><p><b>3 - Statistical Analysis and Modeling for Beginners:</b> Applications in R.</p><p><b>Author:</b> Arnaldo Rabello Aguiar Vallim Filho</p><p><b>Publisher:</b> LF Editorial</p><br><img src='/livros.jpg' alt='Livros'>",
        },
      },
      {
        img: "/code.jpeg",
        date: "May 20, 2024",
        author: "Administrator",
        author_img: "/author.jpeg",
        title: "Registrations closed - Scientific Initiation",
        description: "",
        body: {
          __html:
            "<p>Registrations for the Scientific Initiation program are open. Register between 8:00 am on March 6, 2024, and April 30, 2024!</p><br><p><b>Documents and registration:</b></p><br><p>1 - Completion of registration forms in the system</p><br><p>2 - Complete research project without identification of the authors, according to the template provided by the Research Promotion Coordination (CFP);</p><br><p>3 - Link to the student's Lattes Curriculum for consultation by the Research Promotion Coordination (CFP);</p><br><p>4 - Academic transcript for students from the 2nd semester onwards and proof of ongoing courses for students from the 1st semester;</p><br><p>5 - Consent and approval of the supervisor, with the respective link to the Lattes Curriculum and ORCID identification.</p><br><p><b>Register as a student:</b></p><a href='https://forms.office.com/r/cgLgYD0DRQ' target='_blank'>Student registration</a><br><br><p><b>Register as a supervisor:</b></p><a href='https://forms.office.com/r/qmrqZdCNPs' target='_blank'>Supervisor registration</a><br><br><p><b>For more information, read the full notice:</b></p><a href='https://drive.google.com/file/d/1gmVvhOqoHJ3KEeKZsB-cbYxtElOx4LXP/view?usp=drive_link' target='_blank'>Full notice</a><br><br><p><b>Consult the list of areas of activity of the supervisors:</b></p><a href='https://drive.google.com/file/d/1u8e79X2kmc1o2_Hkupa6Uia1wYY352Mn/view?usp=sharing' target='_blank'>Areas of activity</a>",
        },
      },
      {
        img: "/code.jpeg",
        date: "March 13, 2024",
        author: "Administrator",
        author_img: "/author.jpeg",
        title: "Notice - Scientific Initiation",
        description:
          "This notice presents the call for proposals for the selection of projects within the Institutional Scientific Initiation Program.",
        body: {
          __html:
            "<p>The Rectorate of Mackenzie Presbyterian University, through its Research Promotion Coordination, of the Vice-Rector's Office for Research and Postgraduate Studies (CFP/PRPG), hereby makes public this Notice for the call for proposals for the selection of projects within the Institutional Scientific Initiation Program.</p><br><p><b>Requirements for students: </b></p><br><p>1 - Be regularly enrolled in an undergraduate course at UPM between the first and the penultimate semester at the time of registration in the Institutional Scientific Initiation Program. Dedicate themselves fully to academic and research activities;</p><br><p>2 - Present satisfactory academic performance, evidenced in their academic transcript;</p><br><p>3 - Do not combine the Scientific Initiation scholarship with scholarships for teaching assistance, extension, technological initiation, PIBID, and research scholarships classified under other modalities, offered by Mackenzie Presbyterian University, Mackenzie Research Fund - MackPesquisa, CNPq or any national, foreign or international agencies for the promotion of teaching and research or similar entities;</p><br><p>4 - For the purposes of this Notice, simultaneous enjoyment of the Scientific Initiation scholarship and research scholarships from training/teaching projects and/or those that meet assistance, maintenance or permanence objectives, especially when the amounts are directly transferred to students, and whose purposes are different from Scientific Initiation research, will not be considered as accumulation of scholarships;</p><br><p>5 - Not have a direct lineal kinship with the supervisor;</p><br><p>6 - As a scholarship holder, it is not allowed to have an employment relationship under CLT regime, have a relationship with the public service (be a civil servant), participate in the Young Apprentice program, or engage in activities as a freelancer, generating income;</p><br><p>7 - If the student has an employment relationship, participates in the Young Apprentice Program, works as a freelancer, or is receiving any type of research scholarship or teaching assistance, they may register as a volunteer (Institutional Volunteer Scientific Initiation Program - PIVIC). This Program, excluding the scholarship payment, offers students the same benefits as PIBIC;</p><br><p>8 - A scholarship may be granted to a student who is in mandatory internships and non-mandatory internships, provided there is a joint declaration from the Academic Unit, the internship supervisor, and the research supervisor, showing that the internship will not affect their dedication to academic and research activities.</p><br><p><b>Requirements for supervisors: </b></p><br><p>1 - Be a teacher and researcher affiliated with the Academic Units of Mackenzie Presbyterian University;</p><br><p>2 - Have a doctoral or master's degree and work full-time (PPI) or part-time (PPP);</p><br><p>3 - Have scientific, technical, or artistic-cultural production from the last four years, published in indexed scientific journals related to the area of knowledge in which the teacher works. The supervisor's productivity information will be validated from the consultation of the respective curriculum filled out in the Lattes Platform;</p><br><p>4 - Have an updated Lattes Curriculum in the current semester;</p><br><p>5 - Have ORCiD registration;</p><br><p>6 - Be part of an ongoing research project, as a leader or participant, registered and updated in the Academic Unit, in the Lattes Platform, and approved in the PDA by the Research Coordinator of the Academic Unit;</p><br><p>7 - In the case of a new project, it must also have been indicated and approved in the PDA by the Research Coordinator of the Academic Unit and be registered in the Lattes Curriculum;</p><br><p>8 - The supervisor must have research availability in the PDA for the guidance of the Scientific Initiation project in question;</p><br><p>9 - Not have pending issues resulting from previous Scientific Initiation guidance, such as: open reports, performance assessments of their advisees, and other relevant to the process.</p><br><a href='https://drive.google.com/file/d/1gmVvhOqoHJ3KEeKZsB-cbYxtElOx4LXP/view?usp=drive_link' target='_blank'>Full notice</a>",
        },
      },
      {
        img: "/code.jpeg",
        date: "May 20, 2024",
        author: "Administrator",
        author_img: "/author.jpeg",
        title: "Registrations Closed - Technological Initiation",
        description: "",
        body: {
          __html:
            "<p>Registrations for the Technological Initiation program are open. Register between 8:00 am on March 6, 2024, and April 30, 2024!</p><br><p><b>Documents:</b></p><br><p>1 - Complete project without identification of the authors</p><br><p>2 - Link to the supervisor's Lattes Curriculum</p><br><p>3 - Link to the student's Lattes Curriculum</p><br><p>4 - Digital copy of the student's academic transcript</p><br><p><b>Submit student project:</b></p><a href='https://forms.office.com/r/Z161TR9NU0' target='_blank'>Submit student project</a><br><br><p><b>Submit supervisor project:</b></p><a href='https://forms.office.com/r/9jAFDfdgk9' target='_blank'>Submit supervisor project</a><br><br><p><b>For more information, read the full notice:</b></p><a href='https://drive.google.com/file/d/1nC2L9pgD3cxmvk30phDluPfqO5gRqzFw/view?usp=sharing' target='_blank'>Full notice</a><br>",
        },
      },
      {
        img: "/code.jpeg",
        date: "March 13, 2024",
        author: "Administrator",
        author_img: "/author.jpeg",
        title: "Notice - Technological Initiation",
        description:
          "This notice presents the call for proposals for the selection of projects within the Institutional Program for Technological Initiation and Innovation.",
        body: {
          __html:
            "<p>The Rectorate of Mackenzie Presbyterian University, through its Coordination of Innovation and Technologies (CIT), of the Vice-Rector's Office for Research and Postgraduate Studies (PRPG), hereby makes public this notice for the opening of registrations, aiming at the selection of projects for the Institutional Program of Technological Initiation and Innovation Scholarships (PIBITI/PIVITI) Mackenzie and CNPq PIBITI.</p><br><p><b>Requirements for students: </b></p><br><p>1 - Be a student with regular enrollment in an undergraduate course at Mackenzie Presbyterian University and enrolled in disciplines during the validity of the Technological Initiation and Innovation Program;</p><br><p>2 - Be a student with regular enrollment in an undergraduate course at Mackenzie Presbyterian University and enrolled in disciplines during the validity of the Technological Initiation and Innovation Program;</p><br><p>3 - Do not combine the Technological Initiation scholarship with scholarships for teaching assistance, extension, scientific initiation, and research scholarships classified under other modalities, offered by Mackenzie Presbyterian University, Mackenzie Research Fund;</p><br><p>4 - Not have a direct lineal kinship with the supervisor;</p><br><p>5 - As a scholarship holder, it is not allowed to have an employment relationship under CLT regime, have a relationship with the public service (be a civil servant), participate in the Young Apprentice program, or engage in activities as a freelancer, generating income;</p><br><p>6 - If the student has an employment relationship, participates in the Young Apprentice Program, works as a freelancer, or is receiving any type of research scholarship or teaching assistance, they may register as a volunteer (Institutional Volunteer Scientific Initiation Program - PIVIC). This Program, excluding the scholarship payment, offers students the same benefits as PIBIC;</p><br><p>7 - A scholarship may be granted to a student who is in mandatory internships and non-mandatory internships, provided there is a joint declaration from the Academic Unit, the internship supervisor, and the research supervisor, showing that the internship will not affect their dedication to academic and research activities.</p><br><p><b>Requirements for supervisors: </b></p><br><p>1 - Be a teacher and researcher affiliated with the Academic Units of Mackenzie Presbyterian University;</p><br><p>2 - Have a doctoral or master's degree and work full-time (PPI) or part-time (PPP);</p><br><p>3 - Have scientific, technical, or artistic-cultural production from the last four years, published in indexed scientific journals related to the area of knowledge in which the teacher works. The supervisor's productivity information will be validated from the consultation of the respective curriculum filled out in the Lattes Platform;</p><br><p>4 - Have an updated Lattes Curriculum in the current semester;</p><br><p>5 - The supervisor must have research availability in the PDA for the guidance of the Technological Initiation project in question;</p><br><p>6 - Not have pending issues resulting from previous Scientific Initiation guidance, such as: open reports, performance assessments of their advisees, and other relevant to the process.</p><br><a href='https://drive.google.com/file/d/1nC2L9pgD3cxmvk30phDluPfqO5gRqzFw/view?usp=sharing' target='_blank'>Full notice</a>",
        },
      },
      {
        img: "/code.jpeg",
        date: "February 29, 2024",
        author: "Administrator",
        author_img: "/author.jpeg",
        title: "List of Approved Candidates - Software Residency (2024/1)",
        description:
          "Check the approved students to join the Software Residency (2024/1)",
        body: {
          __html:
            "<a href='https://drive.google.com/file/d/125qd-rUlw5Xp7DIkhErfCFHXTdan_d67/view?usp=sharing' target='_blank'>Check the list of approved candidates</a><br><br><p>The second stage (and final stage) of the selection process for the 2024/1 Software Residency took place on February 28, 2024. This announcement aims to present the list of approved students. Please pay attention to the information below which provides guidance on your first day at the Residency:</p><br><p><b>Welcome to the MackLeaps lab!</b></p><br><p>The <b>start of activities</b> at the Software Residency will take place on <b>March 4th (Monday) from 2:00 PM to 3:30 PM</b>.</p><br><p>For <b>students approved from face-to-face courses</b>, we await your presence at <b>building 6 - room 203</b>.<br><br>For <b>students approved from online courses</b>, the meeting will be <b>via Teams</b> and everyone has been added to this event, just <b>access the link on the date/time provided above</b>.</p><br><p>For any questions, please contact <b>ivan.oliveira@mackenzie.br</b>.<br><br></p><p>MackLeaps Professors Team – Software Residency</p><p>Coordination: Prof. Dr. Fábio Silva Lopes and Prof. Dr. Maria Amélia Eliseo. </p>",
        },
      },
      {
        img: "/code.jpeg",
        date: "February 19, 2024",
        author: "Administrator",
        author_img: "/author.jpeg",
        title: "Selection Process - Software Residency (2024/1)",
        description: "Registrations Closed!",
        body: {
          __html:
            "<p>The Software Residency Program PRSw - FCI/MackLeaps aims to foster professional training in Software Engineering and Human-Computer Interaction for work in project activities, considering human factors, implementation, and testing in computational application projects.</p><p>The Software Residency is a process that occurs in a practical approach, through immersion environments, research, and collaboration, guided by professors, in real, business, or extension projects, to promote maturity in the professional practices demanded by the market.</p><p>The PRSw-FCI/MackLeaps consists of participating in a Roadmap of five modules focused on implementing a real graduation project, which includes: theoretical and practical team laboratory classes; construction of software artifacts related to the real project under development; study of technological tools for communication, collaboration, and artifact construction; study and development of Digital Educational Resources for learning the elements of the Program modules; evaluation of the process and learning of the work in each module; among others.</p><p>In addition to participating in real projects, this is also a great opportunity to obtain complementary or extension activity hours. Stay tuned!</p><p>This announcement aims to communicate the opening of the selection process for 2024/1 for those interested in the project. The students selected in this 1st stage will be notified by email and called to participate in the 2nd stage, which will take place between February 27 and 29. Probably, February 28 from 2:00 PM to 5:00 PM (in-person/virtual). Mark it on your calendar!</p><p>The results of the selected students will be announced on the MackLeaps website (https://mackleaps.mackenzie.br/) at the end of the day on March 1st. The scheduled start of activities will be on March 4th (Monday) from 2:00 PM to 4:00 PM. We look forward to welcoming new residents!</p><a href='https://forms.office.com/r/KZewd7xbpz' target='_blank'>Register</a>",
        },
      },
      {
        img: "/code.jpeg",
        date: "February 19, 2024",
        author: "Administrator",
        author_img: "/author.jpeg",
        title: "Notice - Software Residency 2024/1",
        description:
          "This Notice presents and discloses the 5th edition of the Software Residency Program (PRSw - FCI/MackLeaps).",
        body: {
          __html:
            "<p>This Notice presents and discloses the 5th edition of the Software Residency Program (PRSw - FCI/MackLeaps) detailing: inherent aspects, stages of the selection process, number of vacancies, and others.</p><p>The Laboratory of Software Production Environments Studies - MackLeaps/FCI/UPM created in 2021 a Software Residency, aiming to expand the learning potential in Software Engineering and Human-Computer Interaction through practices known in the market with PBL (Problem Based Learning) and CBL (Challenge Based Learning).</p><p>Such teaching practices, already known and adopted in areas like Health and Computing, have the potential to generate student engagement in the development of Soft Skills, such as Leadership, Empathy, Teamwork, Engagement, among others, and Hard Skills of Software Engineering such as Agile Methods, System Development, and Human-Computer Interaction, providing better results in the teaching and learning process in the involved areas.</p><p>The Software Residency Program PRSw - FCI/MackLeaps aims to foster professional training in Software Engineering and Human-Computer Interaction for work in project activities, considering human factors, implementation, and testing in computational application projects.</p><p>The Software Residency is a process that occurs in a practical approach, through immersion environments, research, and collaboration, guided by professors, in real, business, or extension projects, to promote maturity in the professional practices demanded by the market.</p><p>The students entering the 4th edition (2nd semester of 2023) had the opportunity to actively participate in the DEV and DevOps stages (including testing, T&D), illustrated in Figure 1, involving the projects: People Counter, Weather Station, Eastern Evaluation System, and MackLeaps Website. The newcomers in this 5th edition (1st semester of 2024) will have the opportunity to participate in new projects from companies and institutions captured by MackLeaps and to carry out the requirement specification of these projects, the UXD stage (Figure 1), going as far as implementing their front-end. The involvement of students in these projects generates a great chance of internships and jobs in these places.</p><p>The number of vacancies for this edition is limited to 15. The Program's committee of professors will select the candidates through interviews/dynamics or other activities deemed pertinent, having as criteria: Interest, motivation, availability, oral and written communication skills, collaboration and teamwork ability, and some technical knowledge.</p><p><a href='https://drive.google.com/file/d/1NGraA2V6GycaomLfm63mVuwazB8KtQY2/view?usp=drive_link' target='_blank'>Full notice</a></p>",
        },
      },
    ];
    await EnNews.insertMany(news);
    return NextResponse.json(news);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
