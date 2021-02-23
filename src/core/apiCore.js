
export const getComic = (comicNumber) => {
  console.log("comicNumber", comicNumber);
  return fetch(`https://thingproxy.freeboard.io/fetch/https://xkcd.com/${comicNumber}/info.0.json`, {
    method: 'GET',
    Credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      mode: 'cors', 
      'Access-Control-Allow-Origin': '*'
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log('error', err);
    });
};