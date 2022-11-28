import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "notification",
  initialState: {
    notification: false,
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export default UISlice.reducer;
export const UISliceActions = UISlice.actions;
