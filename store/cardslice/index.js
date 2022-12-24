import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cardsCollection: [],
  checkedCards: [],
  isReadOnly: false,
  status: null,
};
export const fetchData = createAsyncThunk("cardsInfo/fetchData", async () => {
  return new Promise((resolve, reject) => {
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
});

export const CardsSlice = createSlice({
  name: "cardsInfo",
  initialState,
  reducers: {
    setIsReadOnly: (state) => {
      state.isReadOnly = !state.isReadOnly;
    },
    addCard: (state, action) => {
      state.cardsCollection = [...state.cardsCollection, action.payload];
    },
    removeCard: (state, action) => {
      state.cardsCollection = state.cardsCollection.filter(
        (card) => !state.checkedCards.includes(card.id)
      );
      state.checkedCards = [];
    },
    editCard: (state, action) => {
      const { id, header, body } = action.payload;
      const cardIndex = state.cardsCollection.findIndex(
        (card) => card.id === id
      );
      state.cardsCollection[cardIndex] = { id, header, body };
    },
    checkCard: (state, action) => {
      state.checkedCards = [...state.checkedCards, action.payload];
    },
    uncheckCard: (state, action) => {
      state.checkedCards = state.checkedCards.filter(
        (cardId) => cardId !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // Add user to the state array
      state.cardsCollection = action.payload;
    }),
      builder.addCase(fetchData.pending, (state) => {
        state.status = "pending";
      }),
      builder.addCase(fetchData.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {
  setIsReadOnly,
  addCard,
  removeCard,
  editCard,
  checkCard,
  uncheckCard,
} = CardsSlice.actions;
export default CardsSlice.reducer;
