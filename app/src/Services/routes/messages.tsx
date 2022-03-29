import { Message } from "../../Types";
import { api } from "../api";

export const messagesApi = {
  fetchMessages: async (): Promise<Array<Message>> => {
    return await api.get('/messages')
  }
}