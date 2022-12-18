import axios from "axios";

export const getData = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      )
      .then((result) => {
        resolve(
          result.data.splice(0, 15).map((eachItem) => ({
            header: eachItem.Name,
            body: eachItem.About,
            id: eachItem.Number,
          }))
        );
      })
      .catch((error) => {
        reject("Something went wrong!");
      });
  });
  //   const result = await axios
  //     .get(
  //       "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
  //     )
  //     .then((result) => result.data);
};
