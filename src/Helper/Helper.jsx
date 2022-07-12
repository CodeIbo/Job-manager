import Background from "../Components/BackgroundPopup/Background";
import CloserPopup from "../Components/CloserPopupX/CloserHandler";
const Helper = () => {
  return (
    <Background>
      <div >
        <CloserPopup />
        <h2>Helper</h2>
        <article>
          Welcome in my aplication JobManager. You can now complex and freely
          use this app. This app is used to manage many job application from
          different site. It has some limitations and trick:
        </article>
        <ul >
          <span>Form:</span>
          <li>Inside form you can add whatever you want but!</li>
          <li>
            Skills input accept many arguments but every one <b>MUST BE</b>
            separated by a comma
          </li>
          <li>Comment can be optional</li>
          <li >
            Status effects has colors:
            <mark >you sended job</mark>
            <mark >you pending to answer</mark>
            <mark >you got offer</mark>
            <mark >you got rejection</mark>
          </li>
          <span>Main App:</span>
          <li>You can delete posted job by clicking bin</li>
          <li>
            You can edit status by clicking on the rectangle and selecting a
            status. It automatly close and update after 2 seconds.
          </li>
        </ul>
      </div>
    </Background>
  );
};

export default Helper;
