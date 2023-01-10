import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface AboutProps {}

const About: FunctionComponent<AboutProps> = (props) => {
  const navigate = useNavigate();
  const [heading, setHeading] = useState("");
  const { beheading_count } = useParams();

  useEffect(() => {
    if (beheading_count !== undefined) {
      setHeading(`This is beheading number ${beheading_count}`);
    } else {
      setHeading("This is a beheading");
    }
  }, [beheading_count]);

  const goToNextBeheading = useCallback(() => {
    const count = parseInt(beheading_count ?? "Not a number");
    if (isNaN(count)) {
      navigate("/about/1");
    } else {
      navigate(`/about/${count + 1}`);
    }
  }, [beheading_count, navigate]);

  return (
    <>
      <h1>{heading}</h1>
      <p>B</p>
      <button onClick={goToNextBeheading}>
        Next {beheading_count ? "beheading" : "heading"}
      </button>
    </>
  );
};

export default About;
