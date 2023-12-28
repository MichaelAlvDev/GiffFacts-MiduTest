//"https://catfact.ninja/fact"
export async function fetchRandomCat() {
    const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error("Failed Fetch random");
        } 
        const mainRes = await response.json();
        const randomCatFact = {
            fact: mainRes.fact,
            length: mainRes.length,
        }
        return randomCatFact;
    }

