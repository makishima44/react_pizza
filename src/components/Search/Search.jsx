import find from "../../assets/img/find.svg";
import close from "../../assets/img/close.svg";
import { useContext } from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={find} alt="" />

      <input
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />

      {searchValue && <img onClick={() => setSearchValue("")} className={styles.clearIcon} src={close} alt="" />}
    </div>
  );
};

export default Search;
