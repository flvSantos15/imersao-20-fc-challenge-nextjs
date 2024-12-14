import { ChatService } from '@/services/chat.service'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const chatService = new ChatService()

  const { message } = await request.json()

  chatService.createChat({ message })

  return NextResponse.json('Sucesso!')
}
