import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  authorised: boolean;
  role: string;
  status: null | string;
  name: string;
};

const initialState: InitialStateProps = {
  authorised: false,
  role: "simple_user",
  status: null,
  name: "",
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { authorised, name, status, role } = action.payload;
      state.role = role;
      state.authorised = authorised;
      state.status = status;
      state.name = name;
    },
  },
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
