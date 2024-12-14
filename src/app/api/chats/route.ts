import { ChatService } from '@/services/chat.service'
import { NextRequest, NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const chatService = new ChatService()

  const response = await chatService.listChat()

  return NextResponse.json(response)
}
