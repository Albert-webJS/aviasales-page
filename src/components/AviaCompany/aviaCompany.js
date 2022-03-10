import companies from "./data";
import style from "./aviaCompany.module.css";

const textTitle = "Компания";

const AviaCompany = () => {
  return (
    <div className={style.aviacompany}>
      <h2 className={style.title}>{textTitle}</h2>
      {companies.map((company) => {
        return (
          <label className={style.boxRadio} key={company.id}>
            <input className={style.radio} type="radio" />
            <span className={style.radioDescr} />
            {company.label}
          </label>
        );
      })}
    </div>
  );
};

export default AviaCompany;
