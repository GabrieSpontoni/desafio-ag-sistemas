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
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Consulta de Endereço via CEP</h1>

      <CepInput cep={cep} onChange={handleCepChange} onSearch={fetchAddress} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {address && <AddressCard address={address} onSave={saveAddress} />}

      <SavedAddresses
        savedAddresses={savedAddresses}
        onRemove={removeAddress}
      />
    </div>
  );
}
