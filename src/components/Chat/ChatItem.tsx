type ChatItemProps = {
  message: string
}

export function ChatItem({ message }: ChatItemProps) {
  return <p className="p-2 rounded-md bg-zinc-400">{message}</p>
}
