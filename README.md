# API REST de Livros – Node.js & Express

API REST desenvolvida em **Node.js** utilizando **Express**, criada durante o curso de **JavaScript para Back-end** da **Alura**.  
O projeto simula o gerenciamento de um catálogo de livros, com foco em boas práticas de organização, arquitetura e tratamento de dados.

---

## 🚀 Funcionalidades

- **Arquitetura MVC**
  - Separação clara entre **rotas**, **controladores** e **modelos**, facilitando manutenção e escalabilidade.
- **CRUD completo**
  - Criação, leitura, atualização e exclusão de livros.
- **Busca avançada**
  - Permite consultas dinâmicas por diferentes critérios.
- **Paginação**
  - Reduz o consumo de recursos ao lidar com grandes volumes de dados.
- **Tratamento de erros**
  - Padronização das respostas de erro, expondo apenas informações relevantes ao usuário da API.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- JavaScript (ES Modules)
- MongoDB *(se aplicável – ajuste conforme seu projeto)*
- Mongoose *(se aplicável)*

---

## ▶️ Como executar o projeto

# Criar .env contendo a variável de ambiente abiaxo para conexão com o banco
DB_CONNECT_URL

```bash
# Instalar dependências
npm install



# Iniciar o servidor
npm run dev
