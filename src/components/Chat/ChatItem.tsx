type ChatItemProps = {
  message: string
}

export function ChatItem({ message }: ChatItemProps) {
  return (
    <div className="p-2 rounded-md bg-zinc-400 w-full">
      <p className="">{message}</p>
    </div>
  )
}
