import find from "../../assets/img/find.svg";
import close from "../../assets/img/close.svg";
import debounce from "lodash.debounce";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchvalue } from "../../redux/slices/filterSlice";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchvalue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchvalue(str));
    }, 300),
    []
  );

  const onChangeInput = (event: any) => {
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
