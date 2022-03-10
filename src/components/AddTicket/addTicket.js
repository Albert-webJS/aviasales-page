import style from "./addTicket.module.css";

const btnElement = ["Показать еще 5 билетов!"];

const AddTicket = () => {
  return (
    <div className={style.addTicket}>
      {btnElement.map((element, index) => (
        <button
          onClick={() => console.log("click")}
          className={style.btn}
          key={index}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

export default AddTicket;
