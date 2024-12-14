import { TChat } from '@/models/Chat'
import { ChatItem } from './ChatItem'

export async function Chat() {
  const response = await fetch(`http://localhost:3000/api/chats`, {
    headers: {
      'Cache-Control': 'max-age=20' // Cache for 60 seconds
    }
  })

  const data = await response.json()

  return (
    <div className="flex flex-col gap-4 max-h-72 overflow-y-auto">
      {data?.length &&
        data?.map((chat: TChat) => {
          return <ChatItem key={chat?.id} message={chat?.message} />
        })}
    </div>
  )
}
