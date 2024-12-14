import { Chat } from '@/models/Chat'
import { createChatAction, listChatAction } from './server-actions/chat.acton'

export class ChatService {
  async createChat(input: { message: string }): Promise<Chat> {
    const chat = await createChatAction({
      message: input.message
    })

    return chat
  }

  async listChat(): Promise<Chat[]> {
    const chat = await listChatAction()

    return chat
  }
}
