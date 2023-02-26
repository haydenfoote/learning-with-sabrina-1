import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getData } from "../../api/getData";

export type CardType = {
  id: string;
  header: string;
  body: string;
};

type InitialStateProps = {
  cardsCollection: CardType[];
  checkedCards: string[];
  isReadOnly: boolean;
  status: null | string;
};

const initialState: InitialStateProps = {
  cardsCollection: [],
  checkedCards: [],
  isReadOnly:
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("readOnly")!)
      : false,
  status: null,
};

export const fetchData = createAsyncThunk<
  CardType[],
  void,
  { fulfilledMeta: any }
>("cardsInfo/fetchData", async (_, { rejectWithValue, fulfillWithValue }) => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
    );
    console.log(response);
    const allData = response.data.splice(0, 15).map((eachItem: any) => ({
      header: eachItem.Name,
      body: eachItem.About,
      id: eachItem.Number,
    })) as CardType[];
    console.log(allData);
    return fulfillWithValue(allData, null);
  } catch (e) {
    return rejectWithValue(e.response);
  }
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
    removeCard: (state) => {
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
        console.log("fullfilled");
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
            header: "Card1",
            body: "Body of Card1",
            id: "01",
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
