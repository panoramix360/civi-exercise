import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import i18next from "i18next"
import { messagesApi } from "../Services/routes"
import { RootState } from "../store"
import { Message } from "../Types"

export type MessagesState = {
  messages: Message[],
  lastMessageOpened: Message | null,
  loading: boolean,
  error: string | undefined
}

const initialState: MessagesState = {
  messages: [],
  lastMessageOpened: null,
  loading: false,
  error: undefined
}

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const messages: Message[] = await messagesApi.fetchMessages()
    messages.sort((a, b) => b.timestamp - a.timestamp)
    return messages
  }
)

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setLastMessageOpened: (state, action: PayloadAction<Message>) => {
      state.lastMessageOpened = action.payload
    },
    readMessage: (state, action: PayloadAction<Message>) => {
      const message = state.messages.find((m) => m.id === action.payload.id)
      if (message) {
        message.isRead = true
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchMessages.pending, (state, _) => {
      state.loading = true
    })
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload
      state.loading = false
      state.error = undefined
    })
    builder.addCase(fetchMessages.rejected, (state, action) => {
      if (action.error) {
        console.log(action.error)
        state.error = i18next.t("basicError")
      }
      state.loading = false
    })
  }
})

export const selectMessages = (state: RootState) => state.messages

export const { setLastMessageOpened, readMessage } = messagesSlice.actions

export default messagesSlice.reducer