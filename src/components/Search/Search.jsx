import find from "../../assets/img/find.svg";
import close from "../../assets/img/close.svg";
import debounce from "lodash.debounce";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={find} alt="" />

      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={value}
        onChange={onChangeInput}
      />

      {<img onClick={onClickClear} className={styles.clearIcon} src={close} alt="" />}
    </div>
  );
};

export default Search;
