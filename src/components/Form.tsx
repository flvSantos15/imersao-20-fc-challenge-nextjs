'use client'

export function Form() {
  async function handleSubmit(e: FormData) {
    try {
      const message = e.get('message') as string

      await fetch(`http://localhost:3000/api/chats/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  return (
    <form
      className="flex items-center justify-between w-[24rem]"
      action={handleSubmit}
    >
      <input
        type="text"
        name="message"
        placeholder="Deixe sua mensagem aqui"
        className="rounded p-2.5 text-zinc-600"
      />

      <button
        type="submit"
        className="bg-[#ffcc04] text-black p-2.5 rounded-md font-medium"
      >
        Criar chat
      </button>
    </form>
  )
}
