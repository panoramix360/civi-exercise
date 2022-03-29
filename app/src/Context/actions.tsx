import { ActionMap, Message } from "../Types";

export enum MessageTypes {
  SetMessages = 'SET_MESSAGES',
  SetLastMessageOpened = 'SET_LAST_MESSAGE_OPENED',
  ReadMessage = 'READ_MESSAGE',
  Fail = 'FAIL',
  SetLoading = 'SET_LOADING'
}

type MessagePayload = {
  [MessageTypes.SetMessages]: Array<Message>;
  [MessageTypes.SetLastMessageOpened]: Message;
  [MessageTypes.ReadMessage]: Message;
  [MessageTypes.Fail]: string;
  [MessageTypes.SetLoading]: boolean;
}

export enum MessageAsyncTypes {
  FetchMessages = 'FETCH_MESSAGES'
}

type MessageAsyncPayload = {
  [MessageAsyncTypes.FetchMessages]: undefined;
}

export type MessageActions = ActionMap<MessagePayload>[keyof ActionMap<MessagePayload>]
export type MessageAsyncActions = ActionMap<MessageAsyncPayload>[keyof ActionMap<MessageAsyncPayload>]

export const setMessages = (messages: Array<Message>): MessageActions => {
  return { type: MessageTypes.SetMessages, payload: messages }
}

export const setLastMessageOpened = (message: Message): MessageActions => {
  return { type: MessageTypes.SetLastMessageOpened, payload: message }
}

export const readMessage = (message: Message): MessageActions => {
  return { type: MessageTypes.ReadMessage, payload: message }
}

export const fail = (error: string): MessageActions => {
  return { type: MessageTypes.Fail, payload: error }
}

export const setLoading = (loading: boolean): MessageActions => {
  return { type: MessageTypes.SetLoading, payload: loading }
}

export const fetchMessages = (): MessageAsyncActions => {
  return { type: MessageAsyncTypes.FetchMessages }
}