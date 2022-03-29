import React, { Dispatch, ReactNode } from 'react'
import { useReducerAsync } from 'use-reducer-async'
import { Message } from '../Types'
import { MessageActions, MessageAsyncActions } from './actions'
import { asyncActions, reducer } from './reducers'

export type MessageContextState = {
  messages: Array<Message>,
  loading: boolean,
  error: string | null
}

const initialState: MessageContextState = {
  messages: [],
  loading: false,
  error: null
}

const MessageContext = React.createContext<{
  state: MessageContextState,
  dispatch: Dispatch<MessageActions | MessageAsyncActions>
}>({
  state: initialState,
  dispatch: () => null
})

function MessageContextProvider({ children }: { children: ReactNode }) {
  const [ state, dispatch ] = useReducerAsync(reducer, initialState, asyncActions)
  
  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageContext

export {
  MessageContextProvider
}