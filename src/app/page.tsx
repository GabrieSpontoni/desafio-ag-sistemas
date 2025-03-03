"use client";
import { useState, useEffect } from "react";

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
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);

  useEffect(() => {
    const storedAddresses = localStorage.getItem("savedAddresses");
    if (storedAddresses) {
      setSavedAddresses(JSON.parse(storedAddresses));
    }
  }, []);

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

  const saveAddress = () => {
    if (!address) return;

    const updatedAddresses = [...savedAddresses, address];
    setSavedAddresses(updatedAddresses);
    localStorage.setItem("savedAddresses", JSON.stringify(updatedAddresses));
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
          <button
            onClick={saveAddress}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Salvar
          </button>
        </div>
      )}

      {savedAddresses.length > 0 && (
        <div className="mt-8 w-80">
          <h2 className="text-lg font-bold mb-4">Endereços Salvos:</h2>
          <ul className="border rounded p-4">
            {savedAddresses.map((addr, index) => (
              <li key={index} className="mb-2 border-b pb-2 last:border-b-0">
                <p>
                  <strong>CEP:</strong> {addr.cep}
                </p>
                <p>
                  <strong>Logradouro:</strong> {addr.logradouro}
                </p>
                <p>
                  <strong>Bairro:</strong> {addr.bairro}
                </p>
                <p>
                  <strong>Cidade:</strong> {addr.localidade} - {addr.uf}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
