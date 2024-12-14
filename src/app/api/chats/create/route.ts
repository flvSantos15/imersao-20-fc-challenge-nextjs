import { ChatService } from '@/services/chat.service'
import { NextRequest, NextResponse } from 'next/server'

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: NextRequest) {
  const chatService = new ChatService()

  console.log('API', request)
  chatService.createChat({ message: 'Aqui vai a mensagem.' })

  return NextResponse.json('Deu certo')
}
