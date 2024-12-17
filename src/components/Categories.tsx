import React from "react";

type CategoriesTypeProps = {
  value: number;
  onClickCategory: (index: number) => void;
};

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories: React.FC<CategoriesTypeProps> = ({ value, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? "active" : ""}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
