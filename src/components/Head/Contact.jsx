import P from "../Common/P";
import Link from "../Common/Link";
import resume from "../../res/resume.pdf";

const Contact = () => {
  return (
    <div>
      <P bold> Contact</P>
      <P>sronning@umich.edu</P>
      <Link lnk="https://github.com/samronning" target="_blank">
        Github
      </Link>
      <br />
      <Link lnk={resume} target="_blank">
        Resume
      </Link>
    </div>
  );
};

export default Contact;
