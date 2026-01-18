import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      { id: 1, name: "Bob", email: "bob@example.com" },
      { id: 2, name: "Bill", email: "gates@example.com" },
      { id: 3, name: "Steve", email: "jobs@example.com" },
    ],
  },
  reducers: {},
});

export default userSlice.reducer;
