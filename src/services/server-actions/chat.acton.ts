'use server'

import { prisma } from '@/libs/prisma'

import { Chat } from '@/models/Chat'

export async function createChatAction(input: {
  message: string
}): Promise<Chat> {
  const chat = await prisma.chat.create({
    data: {
      message: input.message
    }
  })

  return chat
}

export async function listChatAction(): Promise<Chat[]> {
  const chat = await prisma.chat.findMany({})

  return chat
}
