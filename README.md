# Começando com o Projeto

Este documento descreve as etapas necessárias para configurar e executar o projeto.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema antes de prosseguir:

* **.NET Core SDK 8:** Necessário para compilar e executar a aplicação backend. [Baixe aqui](https://dotnet.microsoft.com/download/dotnet/8.0)
* **Node.js 18:** Ambiente de execução JavaScript para o frontend. [Baixe aqui](https://nodejs.org/en/download/)
* **Angular CLI 18.1.0:** Interface de linha de comando para desenvolvimento Angular. Instale globalmente com `npm install -g @angular/cli@18.1.0`
* **npm-run-all:** Utilitário para executar múltiplos scripts npm em paralelo ou sequencialmente. Será instalado automaticamente durante a configuração do frontend.

## Configuração do Backend (.NET)

1. **Navegue até o diretório backend:** Abra o terminal e execute o comando `cd backend`.
2. **Restaure as dependências:** Execute `dotnet restore` para baixar todas as bibliotecas .NET necessárias.

## Configuração do Frontend (Angular)

1. **Navegue até o diretório frontend:** Execute o comando `cd frontend`.
2. **Instale as dependências:** Execute `npm install` para instalar os pacotes Node.js.

## Executando o Projeto

Você pode executar o backend e o frontend separadamente ou em conjunto:

**Executando o Backend:**

1. **Navegue até o diretório frontend:** Execute o comando `cd frontend`.
2. **Execute o backend:** Execute o comando `npm run start:backend`.

**Executando o Frontend:**

1. **Navegue até o diretório frontend:** Execute o comando `cd frontend`.
2. **Execute o frontend:** Execute o comando `npm run start:frontend`.

**Executando Backend e Frontend em Conjunto:**

1. **Navegue até o diretório frontend:** Execute o comando `cd frontend`.
2. **Inicie a aplicação:** Execute `npm run start:all`

## Endpoints da API

A API REST fornece os seguintes endpoints para interagir com os dados dos livros:

| Método | Endpoint                  | Descrição                      |
| ------ | ------------------------- | -------------------------------|
| GET    | `/api/livros`             | Lista todos os livros.         |
| GET    | `/api/livros/{id}`        | Recupera um livro pelo ID.     |
| POST   | `/api/livros`             | Adiciona um novo livro.        |
| PUT    | `/api/livros/{id}`        | Atualiza um livro existente.   |
| DELETE | `/api/livros/{id}`        | Remove um livro pelo ID.       |

**Observação:** Assegure-se de que o backend esteja em execução antes de acessar os endpoints da API.