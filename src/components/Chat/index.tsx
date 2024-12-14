import { ChatItem } from './ChatItem'

export function Chat() {
  return (
    <div className="flex flex-col gap-4 max-h-72 overflow-y-auto">
      <ChatItem message="Olá Mundo" />
      <ChatItem message="Estou completando o segundo desafio da fullcycle" />
      <ChatItem message="Estou aguardando meu teclado chegar" />
      <ChatItem message="Esse aqui é muito ruim" />
      <ChatItem message="Fim." />
      <ChatItem message="Fim." />
      <ChatItem message="Fim." />
      <ChatItem message="Fim." />
      <ChatItem message="Fim." />
    </div>
  )
}
