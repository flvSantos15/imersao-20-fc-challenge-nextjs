export function Form() {
  return (
    <form className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Deixe sua mensagem aqui"
        className="rounded p-2.5"
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
