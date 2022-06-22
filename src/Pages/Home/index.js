import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { getPokemons } from "../../services";
import { Container } from "./styles";

export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setLoading(true);
   
    for (let i = 1; i < 100; i++) {
      getPokemons(i)
        .then((response) => {
        
          setPokemons((oldArray) => [...oldArray, response]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setLoading(false);
  }, []);

  return (
    <Container>
     
      {loading ? (
        <div className="loader" />
      ) : (
        <>
          {pokemons.length > 0 &&
            pokemons?.map((poke, index, id) => {
              return <Card id={id} key={index} {...poke} />;
            })}
        </>
      )}
    </Container>
  );
};
