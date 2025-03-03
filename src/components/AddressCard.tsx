import { Address } from "@/hooks/useAddress";

interface AddressCardProps {
  address: Address;
  onSave: () => void;
}

export function AddressCard({ address, onSave }: AddressCardProps) {
  return (
    <div className="mt-6 p-4 border rounded w-80">
      <h2 className="text-lg font-bold">Endereço:</h2>
      <p><strong>CEP:</strong> {address.cep}</p>
      <p><strong>Logradouro:</strong> {address.logradouro}</p>
      <p><strong>Bairro:</strong> {address.bairro}</p>
      <p><strong>Cidade:</strong> {address.localidade} - {address.uf}</p>
      <button
        onClick={onSave}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
      >
        Salvar
      </button>
    </div>
  );
}
