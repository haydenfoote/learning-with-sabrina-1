import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getData } from "../../api/getData";

const initialState = {
  cardsCollection: [],
  checkedCards: [],
  isReadOnly: false,
  status: null,
};
export const fetchData = createAsyncThunk("cardsInfo/fetchData", async () => {
  getData();
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
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        // Add user to the state array
        state.status = "success";
        state.cardsCollection = action.payload;
      })
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "rejected";
      })
      .addDefaultCase((state, action) => {
        state.cardsCollection = [
          {
            Header: "Card1",
            Body: "Body of Card1",
            Id: "01",
          },
        ];
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
