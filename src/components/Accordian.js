import React, { useState } from "react";
import "../css/Accordian.css";
import { Collapse } from "antd";

const Accordian = () => {
  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in nisi
  magna. Sed interdum suscipit tempus. Donec posuere tortor sem, nec
  vulputate turpis aliquet et. Vestibulum a justo ligula. Sed non nibh
  quis velit pellentesque scelerisque. Mauris nibh tellus, suscipit
  quis interdum vitae, interdum sit amet est. Quisque tempor dui vel
  dui sodales, vel ultrices felis consequat. Aliquam consectetur velit
  velit, nec porttitor odio pharetra sed. Nulla eu gravida turpis.
  Phasellus fringilla, quam et fermentum aliquet, nisi erat fermentum
  est, id bibendum sapien justo id leo. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Nam ante ligula, ultricies sit amet
  aliquam non, scelerisque et lorem.
`;
  const { Panel } = Collapse;

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="accordian_Details_Wrapper">
      <Collapse onChange={onChange}>
        <Panel header="Non-governmental organizations and not-for-…" key="1">
          <p>{text}</p>
        </Panel>
        <Panel
          header="Community groups and civil society organizations"
          key="2"
        >
          <p>{text}</p>
        </Panel>
        <Panel header="Health workers 'organisations & health care..." key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="Hospital/Clinic" key="4">
          <p>{text}</p>
        </Panel>
        <Panel header="Pharmaceutical industry" key="5">
          <p>{text}</p>
        </Panel>
        <Panel header="Academia" key="6">
          <p>{text}</p>
        </Panel>
        <Panel header="Philanthropy" key="7">
          <p>{text}</p>
        </Panel>
        <Panel header="UN agencies" key="8">
          <p>{text}</p>
        </Panel>
        <Panel header="Business and Private Sector" key="9">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};
export default Accordian;
