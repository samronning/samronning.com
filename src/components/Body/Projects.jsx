import H1 from "../Common/H1";
import Project from "./Project";
import ProjectImages from "../../res/projects/index";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const { aptFinderImg, aptCollectorImg, sonicRemImg, peasyImg, mdpImg } =
  ProjectImages;

let pjects = [
  {
    title: "Apartment Finder",
    git: "https://github.com/samronning/aptfinder",
    desc: `This is a frontend to display apartment listings
    and allow sorting/filtering/infinite scrolling. It uses the
    Apartment Collector API to get listings and to allow the
    search box to autofill with top 5 city names that conform to the search pattern.`,
    img_src: aptFinderImg,
  },
  {
    title: "Apartment Collector",
    git: "https://github.com/samronning/apt-collector",
    desc: `I am creating an apartment scraper which will 
    collect all apartment listings from sites like
    apartments.com/zillow.com/etc and combine them
    into one dataset.`,
    img_src: aptCollectorImg,
  },
  {
    title: "Sonic Remedies",
    git: "https://github.com/samronning/Sonic-Remedies",
    desc: `On a team with one other developer,
    I designed and implemented a survey-building
    application. It allows for the client to add
    questions with varying types (multiple choice,
    free response, color picker, Likert scale, etc.) for
    a web application to serve to the public.`,
    img_src: sonicRemImg,
  },
  {
    title: '"Peasy" React Native Recipe App',
    git: "https://github.com/samronning/Time-TravelingCapybaras",
    desc: `Working with 4 other CS students, I developed the profile page of our "Peasy" recipe application.
    This page allows users to  view their saved recipes, budget for their meals,
    view statistics about meals they've made, and change the settings.
    We used a Trello board with an Agile mindset for project management.
     `,
    img_src: peasyImg,
  },
  {
    title: "MDP: Hammond Organ Project 2020",
    link: "https://www.dc.umich.edu/2021/07/13/mdp-hammond-organ-project/",
    desc: `Over the course of a year, I helped develop a web application
     for interacting with a musical instrument in a fun and creative way. The
     app allows users to draw pictures and have them come to life in the form
     of music.`,
    img_src: mdpImg,
  },
];

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
