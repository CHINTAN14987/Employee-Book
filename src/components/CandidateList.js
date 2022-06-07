import React, { useState } from "react";
import { initialList } from "./Data";
import "../css/CandidateList.css";
import { additionalData } from "./Data";
import Accordian from "./Accordian";
const CandidateList = ({ listItemHandler }) => {
  const [listView, setListView] = useState(false);
  const [displayedItem, setDisplayedItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [totalData, setTotalData] = useState([
    ...initialList,
    ...additionalData,
  ]);
  const clickHandler = () => {
    setListView(true);
  };
  const FinalFilteredData = totalData.filter((item) => {
    return Object.values(item.name)
      .join("")
      .toLowerCase()
      .includes(inputValue.toLowerCase());
  });

  return (
    <div>
      {console.log(FinalFilteredData.length)}
      {console.log(inputValue.length, "InputVlaue")}

      <div className="filteredContainer_Heading">
        <h3 className="discovery">Discovery</h3>
        <h3 className="connections">My Connections</h3>
      </div>
      <div className="input_Flex">
        <input
          className="input"
          value={inputValue}
          placeholder="search"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>
      <h3 className="filter">Filter</h3>
      <div className="list_TopContainer">
        <h3 className="heading">Government and Policymakers</h3>
        {inputValue.length >= 1 ? (
          FinalFilteredData?.map((item) => {
            const { name, company, Location, designation, image, id } = item;
            return (
              <div
                key={id}
                className="card_Wrapper"
                onClick={() => {
                  let arr = displayedItem;
                  arr.push(item);
                  setDisplayedItem(item);
                  console.log(displayedItem, "2'");
                  listItemHandler([...displayedItem]);
                  setDisplayedItem([]);
                }}
              >
                <div className="image_wrapper">
                  <img src={image} alt="/" />
                </div>
                <div className="inner_Card_Details">
                  <h3 className="name_heading">{name}</h3>
                  <h3 className="designation_heading">
                    {designation} {""}
                    <span>at</span>
                    {""} {company}
                  </h3>
                  <h3 className="location_Heading">
                    <span>from</span>
                    {""} {Location}
                  </h3>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
        {inputValue.length === 0 ? (
          initialList?.map((item) => {
            const { name, company, Location, designation, image, id } = item;
            return (
              <div
                key={id}
                className="card_Wrapper"
                onClick={() => {
                  let arr = displayedItem;
                  arr.push(item);
                  setDisplayedItem(item);
                  console.log(displayedItem, "2'");
                  listItemHandler([...displayedItem]);
                  setDisplayedItem([]);
                }}
              >
                <div className="image_wrapper">
                  <img src={image} alt="/" />
                </div>
                <div>
                  <h3 className="name_heading">{name}</h3>
                  <h3 className="designation_heading">
                    {designation} {""}
                    <span>at</span>
                    {""} {company}
                  </h3>
                  <h3 className="location_Heading">
                    <span>from</span>
                    {""} {Location}
                  </h3>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
        {listView ? (
          <></>
        ) : (
          <div className="button_Wrapper">
            <button className="list_Button" onClick={clickHandler}>
              +23 More
            </button>
          </div>
        )}
        {listView &&
          inputValue.length === 0 &&
          additionalData?.map((item) => {
            const { name, designation, Location, image, company, id } = item;
            return (
              <div
                className="card_Wrapper"
                key={id}
                onClick={() => {
                  let arr = displayedItem;
                  arr.push(item);
                  setDisplayedItem(...arr);
                  listItemHandler(displayedItem);
                  setDisplayedItem([]);
                }}
              >
                <div className="image_wrapper">
                  <img src={image} alt="/" />
                </div>
                <div>
                  <h3 className="name_heading">{name}</h3>
                  <h3 className="designation_heading">
                    {designation} {""}
                    <span>at</span>
                    {""} {company}
                  </h3>
                  <h3 className="location_Heading">
                    <span>from</span>
                    {""} {Location}
                  </h3>
                </div>
              </div>
            );
          })}
      </div>

      <Accordian />
    </div>
  );
};

export default CandidateList;
