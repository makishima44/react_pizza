import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get("https://67190fa37fc4c5ff8f4c46f2.mockapi.io/items/" + id);
        setPizza(data);
      } catch (error) {
        alert("Error");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Loading";
  }
  return (
    <div className="fullPizza">
      <img src={pizza.imageUrl} alt="" style={{ height: "500px" }} />
      <h2>{pizza.title}</h2>
      <h4>Цена:{pizza.price}</h4>
      <Link to={"/"}>
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
