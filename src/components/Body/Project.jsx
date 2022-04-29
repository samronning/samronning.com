import H2 from "../Common/H2";
import P from "../Common/P";
import Link from "../Common/Link";
import styled from "styled-components";
import ImageZoom from "react-medium-image-zoom";
const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Project = ({ title, link, git, desc, img_src }) => {
  return (
    <ProjectContainer>
      <div style={{ margin: "2rem" }}>
        <H2>{title}</H2>
        <P>{desc}</P>
        {link ? (
          <Link lnk={link} target="_blank">
            {link}
          </Link>
        ) : (
          ""
        )}
        {git ? (
          <Link lnk={git} target="_blank">
            Github
          </Link>
        ) : (
          ""
        )}
      </div>
      <ImageZoom
        image={{
          src: img_src,
          alt: title,
          style: { maxHeight: "20rem", maxWidth: "100%" },
        }}
        defaultStyles={{ overlay: { backgroundColor: "black" } }}
      ></ImageZoom>
    </ProjectContainer>
  );
};

export default Project;
