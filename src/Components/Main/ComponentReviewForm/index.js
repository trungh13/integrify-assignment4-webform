import React from "react";
import styles from "./index.css";

import ComponentFormHeader from "../ComponentFormHeader";
import Button from "../ComponentButton";

const ComponentReviewForm = props => {
  const handlePrint = e => {
    e.preventDefault();
    window.print();
  };
  const displayList = [
    { title: "Fullname :", value: props.data.fullName },
    { title: "Email :", value: props.data.email },
    { title: "Phone :", value: props.data.phone },
    {
      title: "Address :",
      value:(props.data.address) 
            ?
            <React.Fragment>
                {props.data.address}<br/>
                {props.data.city}{props.data.postalCode ? `-${props.data.postalCode}` : ""}<br/>
                {props.data.state ? `${props.data.state},` : ""} {props.data.country}<br/>
            </React.Fragment>
            :""
    },
    { title: "How did you hear about us?", value: props.data.hearAboutUs },
    { title: "Your primary design discipline :", value: props.data.skillsDesign},
    { title: "Experience with any other disciplines :", value: [...props.data.experiencedSkills]},
    { title: "Interested in working location(s) :", value: [...props.data.workingLocation] },
    { title: "Portfolio link :", value: props.data.portfolioLink },
    { title: "Additional information :", value: props.data.additionalInformation },
  ];
  const renderList=
      displayList.map(el=>{
          return el.value.length!==0
            ?   <React.Fragment key={el.value}>
                    <p className={styles.displayTitle}>{el.title}</p>
                    <p className={styles.displayContent}>{el.value}</p>
                </React.Fragment>
            :""
      })
  return (
    <div className={styles.ComponentReviewForm}>
      <ComponentFormHeader heading="4. Review form" />
        {renderList}
      <Button btnName="Print" onClick={e => handlePrint(e)} />
    </div>
  );
};

export default ComponentReviewForm;
