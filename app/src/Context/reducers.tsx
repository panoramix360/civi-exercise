import i18next from "i18next";
import { Reducer } from "react";
import { AsyncActionHandlers } from "use-reducer-async";
import { MessageContextState } from ".";
import { messagesApi } from "../Services/routes";
import { Message } from "../Types";
import { fail, MessageActions, MessageAsyncActions, MessageAsyncTypes, MessageTypes, setLoading, setMessages } from "./actions";


export function reducer(state: MessageContextState, action: MessageActions) {
  switch(action.type) {
    case MessageTypes.SetMessages:
      return {
        ...state,
        messages: action.payload,
        loading: false,
        error: null
      }
    case MessageTypes.SetLastMessageOpened:
      return {
        ...state,
        lastMessageOpened: action.payload
      }
    case MessageTypes.ReadMessage:
      const messageIndex = state.messages.findIndex((m) => m.id === action.payload.id)

      const newMessagesList = [...state.messages]
      const message = newMessagesList[messageIndex]
      if (message) {
        message.isRead = true
      }

      return {
        ...state,
        messages: newMessagesList
      }
    case MessageTypes.Fail:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case MessageTypes.SetLoading:
      return {
        ...state,
        loading: action.payload
      }
  }
}

export const asyncActions: AsyncActionHandlers<
  Reducer<MessageContextState, MessageActions>,
  MessageAsyncActions
> = {
  [MessageAsyncTypes.FetchMessages]: ({ dispatch }) => async () => {
    try {
      dispatch(setLoading(true))
      const response: Array<Message> = await messagesApi.fetchMessages()
      dispatch(setMessages(response))
    } catch (e) {
      dispatch(fail(i18next.t("basicError")))
    }
  }
}