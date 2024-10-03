/* eslint-disable */
import React from 'react'
import GTT_logo from '../../assets/images/Opticom_Miovision.png'
import HughesLogo from '../../assets/images/Hughes_Logo.png'
import UMNLogo from '../../assets/images/UMN_logo.png'
import Header from './Header';
import ExperienceItem from './ExperienceItem';
import Description from './Description';
import TaskList from './TaskList';

const Experience = () => {
    const experiences = [
      {
        title: "Software Engineer",
        company: "Hughes Network Systems",
        period: "June 2022 – Current",
        location: "Gaithersburg, MD",
        description: "",
        logo: HughesLogo,
        style: { width: "150px", height: "50px" },
        tasks: [
          "Developed critical Network Management System (NMS) features with Java, J2EE, Spring, JDBC, Angular, and Oracle DB, resolved critical software issues, and boosted system performance by over 20%.",
          "Applied Networking protocols such as HTTP, DNS, TCP, and advanced UNIX/Linux knowledge in distributed RHEL environments, developing and testing Gateway Devices, improving NMS system reliability.",
          "Created automation scripts using Bash, Ansible Playbooks, and Python, reduced manual intervention of software deployment, and improved system resilience.",
          "Implemented OWASP security framework by NIST standards for API and URL checks in NMS and conducted penetration testing with BurpSuite, reducing XSS vulnerabilities by 60% and enhancing security.",
          "Led cloud computing Proof-of-concepts (POCs) initiatives, migrating monolithic J2EE Services to microservices using Docker, Podman, Kubernetes, and AWS, improving service scalability to support additional gateways.",
          "Enhanced software engineering standards and procedures, introduced Kanban storyboards, CI/CD pipelines with Jenkins, improving Software build timelines and quality testing resulting in 30% less issues."
        ]
      },
      {
        title: "Software Engineer Apprentice",
        company: "Optum",
        period: "Sept 2021 – May 2022",
        location: "Minneapolis, MN",
        description: "",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Optum_logo_2021.svg',
        style: { width: "150px", height: "50px" },
        tasks: [
          "Engineered a mock phishing attack using Kali Linux, Social Engineering Toolkit, and JavaScript, successfully identifying security vulnerabilities and enhancing safeguards.",
          "Developed a comprehensive data schema for log file analysis using Logstash, facilitating improved data structuring and extraction, and enhancing security monitoring capabilities.",
          "Implemented Elasticsearch, Logstash, and Kibana (ELK) stack to perform advanced data searches and log data aggregation, significantly boosting the detection rate of security vulnerabilities in URL domains by more than 22%."
        ]
      },
      {
        title: "Software Engineer Intern",
        company: "Miovision",
        period: "May 2021 – Aug 2021",
        location: "Minneapolis, MN",
        description: "",
        logo: GTT_logo,
        style: { width: "150px", height: "100px" },
        tasks: [
          "Designed and implemented a micro-batch data processing architecture using AWS services, improving data processing efficiency and reducing latency by 30%.",
          "Orchestrated a big data batch processing ETL program utilizing AWS EMR, DataPipeline, PySpark, HDFS, and Bash, enhancing data throughput and reliability reducing the cost of radio message processing by over 400%.",
          "Enhanced batch processing algorithms by integrating internal caching and memoization techniques, cutting down processing times by 25% and increasing system responsiveness.",
          "Authored a Cloud-Formation template and developed AWS resource management algorithms with the DevOps team.",
          "Worked in an Agile environment using Scrum methodology and JIRA automation tickets."
        ]
      },
      // Add more experiences as needed
      {
        title: "Teaching Assistant",
        company: "University of Minnesota, Twin Cities",
        period: "Jan 2020 – May 2022",
        location: "Minneapolis, MN",
        description: "",
        logo: UMNLogo,
        style: { width: "100px", height: "100px" },
        tasks: [
          {
            course: "Program Design and Development (Sept 2021 – May 2022)",
            responsibilities: [
              "Conducted office hours and labs to build collaborative software projects using Java, IntelliJ IDE, implementing software design patterns and UML diagrams.",
              "Tutored students on automated testing techniques using Mockito and Jacoco, helping them understand mock test coverage in large-scale software projects.",
              "Engineered shell scripts for grading Gradle and Android Studio labs, reducing grading time by over 50%."
            ]
          },
          {
            course: "Advanced Programming Principles (Jan 2021 – May 2021)",
            responsibilities: [
              "Conducted office hours tutoring functional programming paradigms using OCaml.",
              "Graded homework assignments, quizzes, and exams using UTOP, OPAM, and shell scripts, reducing overall grading time by over 300%."
            ]
          },
          {
            course: "Intro to Programming using Python (Jan 2020 – Aug 2020)",
            responsibilities: [
              "Implemented lab sessions for students, tutoring basic programming skills in Python, and grading homework and exams.",
              "Established automated grading scripts in Python to grade multiple homework assignments at once and output results for instructors as a CSV file.",
              "Engineered the final Data Analysis lab including modules for data mining and data cleansing using Numpy, Pandas, and Matplotlib for students to explore data analysis with Python."
            ]
          }
        ]
      },
    ];
  
    return (
      <section id="second" className="main special">
        <Header />
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} logo={exp.logo} style={exp.style} title={exp.title} company={exp.company} period={exp.period}>
            <Description text={exp.description} />
            <TaskList tasks={exp.tasks} />
          </ExperienceItem>
        ))}
      </section>
    );
  };

export default Experience;