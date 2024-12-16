import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import { selectFilter, setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizzaData } from "../redux/slices/pizzaSlice";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);
  const dispatch = useDispatch();

  const onClickCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      //@ts-ignore
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage,
      })
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((obj: any) => (
    // <Link key={obj.id} to={`/pizza/${obj.id}`}>
    <PizzaBlock {...obj} />
    // </Link>
  ));
  const skeletons = [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(id) => onClickCategory(id)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка!!</h2>
          <p>Ошибка</p>
        </div>
      ) : (
        <div className="content__items">{status === "loading" ? skeletons : pizzas}</div>
      )}

      <Pagination currentPage={currentPage} onPageChange={onChangePage} />
    </div>
  );
};

export default Home;
