import { useEffect, useState } from "react";
import { fetchRandomCat } from "../apis/fetchRandomCat";
import { facts, giff } from "../types/types";
//import gifTest from "../assets/gif.gif"
import styles from "./theGiff.module.css"
import { fetchGif } from "../apis/fetchGiff";
const TheGiff = () => {
  const [randomFact, setRandomFact] = useState<facts>({//state para guardar el string del FACT
    fact: "",
    length: 0,
  });
  const [giff, setGiff] = useState<giff[]>([{
    url: "",
  }]);//state para guardar el giff

  useEffect(() => {
    const fetchRandomFact = async () => {// para obtener el randomFACT
      const randomCatFact = await fetchRandomCat();
      setRandomFact(randomCatFact); //string completo

      const cutted = randomCatFact.fact.split(" ");
      const shortFact = `${cutted[0]} ${cutted[1]} ${cutted[2]}`
      const fetchedGif = await fetchGif(shortFact);
      //test Random Luego
      setGiff(fetchedGif);
      }
    fetchRandomFact();
  }, [])

  return (
    <>
      <div className={styles.containter}>
        <img src={giff[0]?.url} alt="" className={styles.giff} />
        <h1 className={styles.text}>{randomFact.fact}</h1>
      </div>

    </>
  );
};

export default TheGiff;