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
  const [factCut, setFactCut] = useState<string>("")
  const [giff, setGiff] = useState<giff[]>([{
    url: "",
  }]);//state para guardar el giff

  useEffect(() => {
    const fetchRandomFact = async () => {// para obtener el randomFACT
      const randomCatFact = await fetchRandomCat();
      setRandomFact(randomCatFact);
      //aqui
      const cutted = randomCatFact.fact.split(" ");
      const shortFact = `${cutted[0]} ${cutted[1]} ${cutted[2]}`
      // console.log(shortFact) aqui estoy asignando el string cortado a shortFact y shortFactse va a factCut que es el parametro de string que recibe el fetch gif para poder mostrar el gif en pantalla, el error creo que esta en que son 2 funciones asincronas separadas dentro del effect y por eso no tengo el string al momento de buscar el  gif creo.... 
      setFactCut(shortFact)
    }
    fetchRandomFact();
  }, [])
  useEffect(() => {
    const fetchGiff = async () => {//para obtener el GIFF
      const fetchedGif = await fetchGif(factCut);
      setGiff(fetchedGif);
    }
    fetchGiff();
  }, [factCut])



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