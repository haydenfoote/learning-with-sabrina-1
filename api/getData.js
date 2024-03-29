import axios from "axios"; // Promis based HTTP client for the browser and node.js
export const getData = async () => {
  return new Promise((resolve) => {
    axios
      .get(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      )
      .then((res) => {
        resolve(
          res.data.splice(0, 15).map((eachItem) => ({
            header: eachItem.Name,
            body: eachItem.About,
            id: eachItem.Number,
          }))
        );
      });
  });
};
