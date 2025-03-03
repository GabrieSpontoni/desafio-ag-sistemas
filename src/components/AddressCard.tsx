import { Address } from "@/hooks/useAddress";

interface AddressCardProps {
  address: Address;
  onSave: () => void;
}

export function AddressCard({ address, onSave }: AddressCardProps) {
  return (
    <div className="mt-6 p-6 border border-gray-200 rounded-lg shadow-md bg-white w-full">
      <h2 className="text-xl font-semibold text-gray-700">
        Endereço Encontrado:
      </h2>
      <div className="mt-3 text-gray-600">
        <p>
          <strong>CEP:</strong> {address.cep}
        </p>
        <p>
          <strong>Logradouro:</strong> {address.logradouro}
        </p>
        <p>
          <strong>Bairro:</strong> {address.bairro}
        </p>
        <p>
          <strong>Cidade:</strong> {address.localidade} - {address.uf}
        </p>
      </div>
      <button
        onClick={onSave}
        className="cursor-pointer mt-4 w-full bg-green-600 text-white font-semibold h-12 px-6 rounded-lg transition hover:bg-green-700 active:scale-95"
      >
        Salvar Endereço
      </button>
    </div>
  );
}
