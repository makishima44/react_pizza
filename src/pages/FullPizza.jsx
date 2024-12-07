import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get("https://67190fa37fc4c5ff8f4c46f2.mockapi.io/items/" + id);
        setPizza(data);
      } catch (error) {
        alert("Error");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Loading";
  }
  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
