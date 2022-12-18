import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const cardDataContext = React.createContext();
// Context is designed to share data that can be considered “global” for a tree of React components ...

// const cardData = [
//   {
//     header: "FIrst header",
//     body: "FIrst body",
//     id: 1,
//   },
//   {
//     header: "Second header",
//     body: "Second body",
//     id: 2,
//   },
//   {
//     header: "Third header",
//     body: "Third body",
//     id: 3,
//   },
//   {
//     header: "Fourth header",
//     body: "Fourth body",
//     id: 4,
//   },
// ];

export const CardDataProvider = ({ children }) => {
  const [allCards, setAllCards] = useState([]);
  // value now allows access to all child components the states within ...
  const [checkedCards, setCheckedCards] = useState([]);
  const [readOnly, setReadOnly] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const getData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      )
      .then((res) => {
        res.data.splice(0, 15).map((eachItem) =>
          setAllCards((previousState) => [
            ...previousState,
            {
              header: eachItem.Name,
              body: eachItem.About,
              id: eachItem.Number,
            },
          ])
        );
      })
      .catch((e) => console.log("Something went wrong!: ", e));
  };

  useEffect(() => {
    getData();
  }, []);
  const value = {
    allCards,
    addCard: (newCard) => setAllCards((prev) => [...prev, newCard]),
    removeCard: (cardIds) =>
      setAllCards((prev) =>
        prev.filter((eachCard) => !cardIds.includes(eachCard.id))
      ),
    readOnly,
    setReadOnly: () => setReadOnly(!readOnly),
    isSignedIn,
    setIsSignedIn: (value) => setIsSignedIn(value),
    setCheckedCard: (checkedCard) =>
      setCheckedCards((prev) => [...prev, checkedCard]),
    setUncheckedCard: (uncheckedCard) =>
      setCheckedCards((prev) =>
        prev.filter((eachCard) => uncheckedCard != eachCard)
      ),
    checkedCards,
  };

  return (
    <cardDataContext.Provider value={value}>
      {children}
    </cardDataContext.Provider>
  );
};

export const useCardData = () => useContext(cardDataContext);
