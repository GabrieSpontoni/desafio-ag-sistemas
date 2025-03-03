interface CepInputProps {
  cep: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export function CepInput({ cep, onChange, onSearch }: CepInputProps) {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={onChange}
        className="p-3 border text-black border-gray-300 rounded-lg text-center text-lg shadow-sm transition"
        maxLength={9}
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white font-semibold h-12 px-6 rounded-lg transition hover:bg-blue-700 active:scale-95 cursor-pointer"
      >
        Consultar
      </button>
    </div>
  );
}
