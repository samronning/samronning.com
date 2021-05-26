import styled from "styled-components";

const StyledLink = styled.a`
  color: white;
  margin: 0.5rem;
`;

const Link = ({ lnk, children, target }) => {
  return (
    <StyledLink href={lnk} target={target}>
      {children}
    </StyledLink>
  );
};

export default Link;
