import { Address } from "@/hooks/useAddress";

interface SavedAddressesProps {
  savedAddresses: Address[];
  onRemove: (cep: string) => void;
}

export function SavedAddresses({ savedAddresses, onRemove }: SavedAddressesProps) {
  if (savedAddresses.length === 0) return null;

  return (
    <div className="mt-8 w-80">
      <h2 className="text-lg font-bold mb-4">Endereços Salvos:</h2>
      <ul className="border rounded p-4">
        {savedAddresses.map((addr) => (
          <li key={addr.cep} className="mb-2 border-b pb-2 last:border-b-0">
            <p><strong>CEP:</strong> {addr.cep}</p>
            <p><strong>Logradouro:</strong> {addr.logradouro}</p>
            <p><strong>Bairro:</strong> {addr.bairro}</p>
            <p><strong>Cidade:</strong> {addr.localidade} - {addr.uf}</p>
            <button
              onClick={() => onRemove(addr.cep)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
