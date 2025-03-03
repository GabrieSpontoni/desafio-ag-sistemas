"use client";
import { useState } from "react";

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export default function Home() {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchAddress = async () => {
    setError(null);
    setAddress(null);

    if (!/^\d{8}$/.test(cep)) {
      setError("CEP inválido. Digite um CEP com 8 dígitos.");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      const data: Address & { erro?: boolean } = await response.json();

      if (data.erro) {
        setError("CEP não encontrado.");
        return;
      }

      setAddress(data);
    } catch {
      setError("Erro ao buscar o CEP.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">Consulta de Endereço via CEP</h1>

      <div className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="p-2 border rounded text-center"
        />
        <button
          onClick={fetchAddress}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Consultar
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {address && (
        <div className="mt-6 p-4 border rounded w-80">
          <h2 className="text-lg font-bold">Endereço:</h2>
          <p>
            <strong>Logradouro:</strong> {address.logradouro}
          </p>
          <p>
            <strong>Bairro:</strong> {address.bairro}
          </p>
          <p>
            <strong>Cidade:</strong> {address.localidade}
          </p>
          <p>
            <strong>Estado:</strong> {address.uf}
          </p>
        </div>
      )}
    </div>
  );
}
