# 📍 Consulta de Endereço via CEP

Este é um projeto desenvolvido com **Next.js 14**, **TypeScript** e **TailwindCSS**, que permite aos usuários consultar endereços via **API do ViaCEP**, armazená-los localmente e visualizá-los de forma organizada.

## 🚀 Funcionalidades

✅ Consulta de endereço por **CEP** utilizando a API do [ViaCEP](https://viacep.com.br/).  
✅ **Máscara automática** no campo de CEP (`00000-000`).  
✅ Armazena os endereços no **localStorage**, permitindo **persistência** dos dados.  
✅ **Remoção de endereços** salvos.  
✅ Interface responsiva e estilizada com **TailwindCSS**.  
✅ Código modularizado com **componentização** e **hooks personalizados**.  

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** → Framework para aplicações React.  
- **TypeScript** → Tipagem estática para maior segurança no código.  
- **TailwindCSS** → Estilização moderna e responsiva.  
- **LocalStorage** → Persistência dos endereços salvos no navegador.  

---

## 📦 Como rodar o projeto?

### **1️⃣ Clonar o repositório**
```bash
git clone https://github.com/GabrieSpontoni/desafio-ag-sistemas.git
cd seu-repositorio
```

### **2️⃣ Instalar as dependências**
```bash
npm install
```

### **3️⃣ Rodar o servidor local**
```bash
npm run dev
```
Acesse **[http://localhost:3000](http://localhost:3000)** no navegador.

---

## 📂 Estrutura principal do Projeto

```
📦 src
 ┣ 📂 app
 ┃ ┗ 📜 page.tsx         # Página principal
 ┣ 📂 components
 ┃ ┣ 📜 CepInput.tsx     # Componente de input de CEP
 ┃ ┣ 📜 AddressCard.tsx  # Componente de exibição do endereço consultado
 ┃ ┗ 📜 SavedAddresses.tsx # Lista de endereços salvos
 ┣ 📂 hooks
 ┃ ┗ 📜 useAddress.ts    # Hook para gerenciar lógica de endereços
```

---

## 🏗️ Decisões Técnicas

- **Separação de responsabilidades**: O projeto foi dividido em **componentes reutilizáveis** e um **hook personalizado (`useAddress`)** para centralizar a lógica.  
- **Uso de `localStorage`**: Armazenar os endereços localmente para que o usuário não perca os dados ao atualizar a página.  
- **Máscara no input de CEP**: Para evitar erros na digitação e manter um padrão no formato de `00000-000`.  
- **Validação e tratamento de erros**: Caso o usuário insira um CEP inválido ou que não exista na API do ViaCEP, uma mensagem de erro será exibida.  

---

## 🧠 Uso de Inteligência Artificial

Foi utilizado o **ChatGPT** para **otimizar a estrutura do código**, sugerir boas práticas e melhorar a responsividade do layout.  
Nenhuma parte do código foi gerada e utilizada diretamente sem revisão, todos os trechos foram testados e ajustados conforme as necessidades do projeto.  



