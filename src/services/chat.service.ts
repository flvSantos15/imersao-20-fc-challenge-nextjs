import { prisma } from '@/libs/prisma'

type Chat = {
  id: number
  message: string
}

export class ChatService {
  // Posso construir um instancia do prisma e acessar o servico dele para inserir no banco.
  async createChat(input: { message: string }): Promise<Chat> {
    // O service vai inserir os dados no DB
    const chat = await prisma.chat.create({
      data: {
        message: input.message
      }
    })

    return chat
  }

  async listChat(): Promise<Chat[]> {
    const chat = await prisma.chat.findMany({})

    return chat
  }
}
