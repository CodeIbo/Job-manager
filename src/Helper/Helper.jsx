import React from "react";
import Background from "../CustomComponents/Background/Background";
import CloserPopup from "../CustomComponents/CloserPopup";
import clasess from "./Helper.module.scss";

const Helper = () => {
  return (
    <Background>
      <div className={clasess["helperPopup"]}>
          <CloserPopup/>
        <h2>Helper</h2>
        <article>
          Welcome in my aplication JobManager. You can now complex and freely
          use this app. This app is used to manage many job application from
          different site. It has some limitations and trick:
        </article>
        <ul className={clasess["helperPopup__ulHelper"]}>
          <span>Form:</span>
          <li>Inside form you can add whatever you want but!</li>
          <li>
            Skills input accept many arguments but every one <b>MUST BE</b>{" "}
            separated by a comma
          </li>
          <li>Comment can be optional</li>
          <li className={clasess["helperPopup__ulHelper--lineHeigh"]}>
            Status effects has colors:{" "}
            <mark className={clasess["sended"]}>you sended job</mark>{" "}
            <mark className={clasess["opened"]}>you pending to answer</mark>{" "}
            <mark className={clasess["offer"]}>you got offer</mark>{" "}
            <mark className={clasess["canceled"]}>you got rejection</mark>
          </li>
          <span>Main App:</span>
          <li>You can delete posted job by clicking bin</li>
          <li>
            You can edit status by clicking on the rectangle and selecting a status. It automatly close and update after 2 seconds.
          </li>
        </ul>
      </div>
    </Background>
  );
};

export default Helper;
