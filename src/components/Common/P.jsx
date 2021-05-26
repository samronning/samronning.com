import { SIZES } from "../../commonStyles";
import styled from "styled-components";

const P = styled.p`
  font-size: ${SIZES.primary};
  text-align: left;
  margin: 0;
  padding-left: 0.5rem;
  min-width: 12rem;
  max-width: 25rem;
  font-weight: ${(props) => (props.bold ? "bold" : "auto")};
  text-decoration: ${(props) => (props.uline ? "underline" : "auto")};
`;

export default P;
