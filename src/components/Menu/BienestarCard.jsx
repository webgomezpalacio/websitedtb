import React from "react";

const BienestarCard = (props) => {
  const { imgUrl, title  } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>
          <p className="enroll d-flex align-items-center gap-1">
          </p>
        </div>
      </div>
   
  );
};

export default BienestarCard;