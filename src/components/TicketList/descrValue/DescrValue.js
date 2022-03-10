import style from "./descrValue.module.css";

const DescrValue = ({ description, date }) => {
  return (
    <div className={style.city}>
      <div>
        <span className={style.primaryColor}>{description}</span>
      </div>
      <div>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default DescrValue;
