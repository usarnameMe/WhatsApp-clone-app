import { createSelector } from "reselect";

const selectChatsData = (state) => state.chats.chatsData;

const selectUserChats = createSelector([selectChatsData], (chatsData) => {
  return Object.values(chatsData);
});

export { selectUserChats };
