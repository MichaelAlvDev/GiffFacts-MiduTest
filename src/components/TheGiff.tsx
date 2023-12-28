
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
  const [giff, setGiff] = useState<giff[]>([]);//state para guardar el giff
  const [factCut,setFactCut] = useState("lobo")

  useEffect(() => { //Effect para obtener el randomFACT
    const fetchRandomFact = async () => {
      const randomCatFact = await fetchRandomCat();
      setRandomFact(randomCatFact);
    }
    fetchRandomFact();
  }, [])

  useEffect(() => {//Effect para obtener el GIFF
    const fetchGiff = async () => {
      const fetchedGif = await fetchGif(factCut);
      setGiff(fetchedGif);
    }
    fetchGiff();
 
  }, [])
   console.log("data giff", giff);

  return (
    <>
      <div className={styles.containter}>
        <img src={giff[0].url}alt="" className={styles.giff} />
        <h1 className={styles.text}>{randomFact.fact}</h1>
      </div>

    </>
  );
};

export default TheGiff;