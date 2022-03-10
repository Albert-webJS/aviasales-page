import style from "./searchFilter.module.css";

const searchElement = ["самый дешевый", "самый быстрый", "оптимальный"];

const SearchFilter = () => {
  return (
    <div className={style.searchFilter}>
      {searchElement.map((element, index) => (
        <a className={style.searchElement} href="#" key={index}>
          {element}
        </a>
      ))}
    </div>
  );
};

export default SearchFilter;
