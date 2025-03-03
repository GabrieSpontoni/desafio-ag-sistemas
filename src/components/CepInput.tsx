interface CepInputProps {
    cep: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
  }
  
  export function CepInput({ cep, onChange, onSearch }: CepInputProps) {
    return (
      <div className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={onChange}
          className="p-2 border rounded text-center"
          maxLength={9}
        />
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Consultar
        </button>
      </div>
    );
  }
  