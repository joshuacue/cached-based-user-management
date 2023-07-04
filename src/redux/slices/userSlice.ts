import { UserListType } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  usersDisplay: UserListType;
  deletedUsersList: number[];
  markedFavorites: number[];
  previousUsersDisplay: UserListType;
};

const initialState: UserState = {
  usersDisplay: [],
  deletedUsersList: [],
  markedFavorites: [],
  previousUsersDisplay: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsersDisplay: (state, action: PayloadAction<UserListType>) => {
      state.usersDisplay = action.payload;
    },
    setDeletedUsersList: (state, action: PayloadAction<number[]>) => {
      state.deletedUsersList = action.payload;
    },
    setMarkedFavorites: (state, action: PayloadAction<number[]>) => {
      state.markedFavorites = action.payload;
    },
    removeUserDisplay: (state, action: PayloadAction<number>) => {
      state.usersDisplay = state.usersDisplay.filter(
        ({ id: userId }) => userId !== action.payload,
      );
    },
    setPreviousUsersDisplay: (state, action: PayloadAction<UserListType>) => {
      state.previousUsersDisplay = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (state.markedFavorites.includes(action.payload)) {
        state.markedFavorites = state.markedFavorites.filter(
          (id) => id !== action.payload,
        );
      } else {
        state.markedFavorites.push(action.payload);
      }
    },
  },
});

export const {
  setUsersDisplay,
  setDeletedUsersList,
  setMarkedFavorites,
  removeUserDisplay,
  setPreviousUsersDisplay,
  toggleFavorite,
} = userSlice.actions;

export default userSlice.reducer;
