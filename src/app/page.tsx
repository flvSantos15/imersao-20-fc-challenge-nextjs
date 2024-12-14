import { Form } from '@/components/Form'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-semibold">FullCycle Chat</h1>

      {/* button (modal -> criar o chat) */}
      <Form />

      {/* lists -> listar os chats */}
      <div>Aqui vai a lista de chats</div>
    </div>
  )
}
