import React, { useEffect, useState } from "react";
import CandidateList from "./CandidateList";
import "../css/CandidateDetailsDisplayed.css";
import "./Data";
import { initialList } from "./Data";

const CandidateDetailsDisplayed = () => {
  const [displayedListResults, setDisplayedListResults] = useState([
    initialList[0],
  ]);
  const listItemHandler = (i) => {
    console.log(i);
    var newarr = [];
    newarr.push(...i);
    console.log(newarr);
    setDisplayedListResults(newarr);
  };

  useEffect(() => {
    console.log(displayedListResults.length, "!!!!!!!!!");
  }, [displayedListResults]);
  return (
    <div className="Main_Container">
      <div className="Main_Container_Displayed_result">
        <div className="Outer_Container_Wrapper">
          <div className="Inner_Con_Wrapper">
            {
              <div>
                {displayedListResults?.map((item) => {
                  const {
                    name,
                    company,
                    Location,
                    designation,
                    image,
                    Heading,
                    JobDescription,
                    timeZone,
                    website,
                    id,
                  } = item;
                  return (
                    <div className="displayed_Results_Wrapper" key={id}>
                      <div className="image_Container">
                        <img src={image} alt="/" />
                      </div>
                      <h3 className="displayed_Name_Heading">{name}</h3>
                      <h3 className="displayed_Person_JobDetails">
                        {designation} <span>at</span> {company}{" "}
                        <span className="point">from</span>{" "}
                        <span className="location"> {Location}</span>
                      </h3>
                      <button>CONNECT</button>
                      <h3 className="professional_Heading">{Heading}</h3>
                      <p className="Professional_Summary">{JobDescription}</p>
                      <div className="Candidate_Detail_Bottom_Wrapper">
                        <div>
                          <h3 className="timeZone_Heading">Time Zone</h3>
                          <h3 className="timeZone_Result">{timeZone}</h3>
                        </div>
                        <div>
                          <h3 className="website_Heading">Website</h3>
                          <h3 className="website_Result">{website}</h3>
                        </div>
                      </div>
                      <h3 className="report_Wrap">Report {name}</h3>
                    </div>
                  );
                })}
              </div>
            }
          </div>
        </div>
      </div>
      <div className="rightSide_Container">
        <CandidateList listItemHandler={listItemHandler} />
      </div>
    </div>
  );
};

export default CandidateDetailsDisplayed;
