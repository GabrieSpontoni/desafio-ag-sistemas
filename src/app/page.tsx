"use client";
import { CepInput } from "@/components/CepInput";
import { AddressCard } from "@/components/AddressCard";
import { SavedAddresses } from "@/components/SavedAddresses";
import { useAddress } from "@/hooks/useAddress";

export default function Home() {
  const {
    cep,
    handleCepChange,
    address,
    error,
    fetchAddress,
    saveAddress,
    removeAddress,
    savedAddresses,
  } = useAddress();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 sm:px-10">
      <div className="max-w-screen-sm w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Consulta de Endereço via CEP
        </h1>

        <CepInput
          cep={cep}
          onChange={handleCepChange}
          onSearch={fetchAddress}
        />

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {address && <AddressCard address={address} onSave={saveAddress} />}

        <SavedAddresses
          savedAddresses={savedAddresses}
          onRemove={removeAddress}
        />
      </div>
    </div>
  );
}
