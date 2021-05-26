import H1 from "../Common/H1";
import Project from "./Project";
import List from "../../res/projects/index";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const list = List();
let pjects = [
  {
    title: "Sonic Remedies",
    link: "https://sonicremedies.net",
    git: "https://github.com/samronning/Sonic-Remedies",
    desc: `On a team with one other developer,
    I designed and implemented a survey-building
    application. It allows for the client to add
    questions with varying types (multiple choice,
    free response, color picker, Likert scale, etc.) for
    a web application to serve to the public.`,
  },
  {
    title: '"Peasy" React Native Recipe App',
    git: "https://github.com/samronning/Time-TravelingCapybaras",
    desc: `Working with 4 other CS students, I developed the profile page of our "Peasy" recipe application.
    This page allows users to  view their saved recipes, budget for their meals,
    view statistics about meals they've made, and change the settings.
    We used a Trello board with an Agile mindset for project management.
     `,
  },
  {
    title: "MDP: Hammond Organ Project 2020",
    link: "https://mdp.engin.umich.edu/sponsor_teams/artsengine/",
    desc: `Over the course of a year, I helped develop a web application
     for interacting with a musical instrument in a fun and creative way. The
     app allows users to draw pictures and have them come to life in the form
     of music.`,
  },
];
for (let i = 0; i < list.length; i++) {
  pjects[i]["img_src"] = list[i];
}

const Projects = () => {
  return (
    <div>
      <H1
        style={{
          borderBottom: "solid white 2px",
          marginTop: "1rem",
        }}
      >
        Projects
      </H1>
      <ProjectsContainer>
        {pjects.map((pject) => (
          <Project {...pject} />
        ))}
      </ProjectsContainer>
    </div>
  );
};

export default Projects;
