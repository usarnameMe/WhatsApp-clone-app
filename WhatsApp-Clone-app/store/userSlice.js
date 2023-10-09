import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    storedUsers: {},
  },
  reducers: {
    setStoredUsers: (state, action) => {
      state.storedUsers = { ...state.storedUsers, ...action.payload.newUsers };
    },
  },
});
export const setStoredUsers = userSlice.actions.setStoredUsers;
export default userSlice.reducer;
