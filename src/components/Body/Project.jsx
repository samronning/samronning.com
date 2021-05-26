import H2 from "../Common/H2";
import P from "../Common/P";
import Link from "../Common/Link";
import styled from "styled-components";
import ImageZoom from "react-medium-image-zoom";
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem;
`;

const Project = ({ title, link, git, desc, img_src }) => {
  return (
    <ProjectContainer>
      <div>
        <H2>{title}</H2>
        <P>{desc}</P>
        {link ? <Link lnk={link}>{link}</Link> : ""}
        {git ? <Link lnk={git}>Github</Link> : ""}
      </div>
      <ImageZoom
        image={{ src: img_src, alt: title, style: { height: "20rem" } }}
        defaultStyles={{ overlay: { backgroundColor: "black" } }}
      ></ImageZoom>
    </ProjectContainer>
  );
};

export default Project;
