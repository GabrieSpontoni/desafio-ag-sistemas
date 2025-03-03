import { Address } from "@/hooks/useAddress";

interface SavedAddressesProps {
  savedAddresses: Address[];
  onRemove: (cep: string) => void;
}

export function SavedAddresses({ savedAddresses, onRemove }: SavedAddressesProps) {
  if (savedAddresses.length === 0) return null;

  return (
    <div className="mt-8 w-full">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
        Endereços Salvos
      </h2>
      <ul className="space-y-4">
        {savedAddresses.map((addr) => (
          <li
            key={addr.cep}
            className="p-4 border border-gray-200 rounded-lg shadow-md bg-white flex flex-col gap-2"
          >
            <p className="text-gray-600">
              <strong>CEP:</strong> {addr.cep}
            </p>
            <p className="text-gray-600">
              <strong>Logradouro:</strong> {addr.logradouro}
            </p>
            <p className="text-gray-600">
              <strong>Bairro:</strong> {addr.bairro}
            </p>
            <p className="text-gray-600">
              <strong>Cidade:</strong> {addr.localidade} - {addr.uf}
            </p>
            <button
              onClick={() => onRemove(addr.cep)}
              className="cursor-pointer mt-3 bg-red-500 text-white font-semibold h-10 px-4 rounded-lg transition hover:bg-red-600 active:scale-95"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
