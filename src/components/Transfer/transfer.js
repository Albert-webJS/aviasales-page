import { useState } from "react";
import transfers from "./data.js";
import style from "./transfer.module.css";

const contextTitle = "Количество пересадок";

const Transfer = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={style.transfer}>
      <h2 className={style.title}>{contextTitle}</h2>
      {transfers.map((transfer) => {
        return (
          <label className={style.boxContainer} key={transfer.id}>
            <input
              className={style.checkbox}
              id={transfer.id}
              type="checkbox"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <span
              className={`${style.customCheckbox} ${
                isChecked ? style.customCheckboxActive : ""
              }`}
            />
            {transfer.label}
          </label>
        );
      })}
    </div>
  );
};

export default Transfer;
