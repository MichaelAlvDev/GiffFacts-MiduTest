const API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
export async function fetchGif(factCut:string) {
    
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${factCut}&api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Failed fetch GIF");
    }
    const mainRes = await response.json();
  
    const gifsRes = mainRes.data.map((gif: any) => ({
        url:gif.images.downsized_large.url,
    }));
    return gifsRes;

}
