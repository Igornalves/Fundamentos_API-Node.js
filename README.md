# Fundamentos do Node.js

Este Repositorio é totalmente voltado para o aprendizado em conhecimentos tecnicos em node.js para desenvolvimento de APIs para obter melhor visão de como se criar e como acontece por traz do panos na utilizacao do node e da criacao de APIs usando bibliotecas de terceiros.

## Tecnologias Utilizadas

Foi utilizado no projeto varias tecnologias para o desenvolvimento das interfaces.

<div style="display: inline_block"  align="center">
  <img align="center" alt="Python" height="49" width="51" src="https://skillicons.dev/icons?i=nodejs">
  <img align="center" alt="React" height="49" width="51" src="https://skillicons.dev/icons?i=javascript">
  <img align="center" alt="Python" height="49" width="51" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg">
  <img align="center" height="49" width="51" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-plain.svg" />
</div>

<br>

- node.js
- JavaScript ( Linguagem )
- swagger ( Documentacao )
- Json ( DataBase ) 

## Documentação de Rotas da Aplicação

### Introdução

Este README documenta as rotas da aplicação, detalhando os métodos HTTP, caminhos, parâmetros e formatos de resposta para cada rota. A aplicação utiliza um sistema simples de gerenciamento de usuários.

## Rotas da Aplicação

### 1. Listar Usuários

- **Método:** `GET`
- **Caminho:** `/listandoUsers`
- **Descrição:** Retorna uma lista de usuários. Pode filtrar a lista com base no nome ou email fornecidos na query string.
- **Parâmetros de Query:**
  - `search` (opcional): Filtra os usuários com base no nome ou email.
- **Resposta:**
  - **Código de Status 200:**
    - **Corpo da Resposta:**
      ```json
      [
        {
          "id": "uuid",
          "nome": "Nome do Usuário",
          "email": "email@exemplo.com"
        }
      ]
      ```
  - **Código de Status 400:** Erro de solicitação inválida.

### 2. Criar Usuário

- **Método:** `POST`
- **Caminho:** `/criandoUsers`
- **Descrição:** Cria um novo usuário com o nome e email fornecidos.
- **Parâmetros de Corpo:**
  - `nome` (obrigatório): Nome do usuário.
  - `email` (obrigatório): Email do usuário.
- **Resposta:**
  - **Código de Status 201:**
    - **Corpo da Resposta:**
      ```
      Usuario Criado com Sucesso !!!
      ```
  - **Código de Status 400:** Erro de solicitação inválida.

### 3. Deletar Usuário

- **Método:** `DELETE`
- **Caminho:** `/deletandoUsers/:id`
- **Descrição:** Remove um usuário com o ID especificado.
- **Parâmetros de URL:**
  - `id` (obrigatório): ID do usuário a ser excluído.
- **Resposta:**
  - **Código de Status 204:**
    - **Corpo da Resposta:**
      ```
      user Deletando com sucesso !!!
      ```
  - **Código de Status 404:** Usuário não encontrado.

### 4. Atualizar Usuário

- **Método:** `PUT`
- **Caminho:** `/atualizandoUsers/:id`
- **Descrição:** Atualiza as informações de um usuário com o ID especificado.
- **Parâmetros de URL:**
  - `id` (obrigatório): ID do usuário a ser atualizado.
- **Parâmetros de Corpo:**
  - `nome` (opcional): Novo nome do usuário.
  - `email` (opcional): Novo email do usuário.
- **Resposta:**
  - **Código de Status 200:**
    - **Corpo da Resposta:**
      ```
      User Atualizando com sucesso !!!
      ```
  - **Código de Status 400:** Erro de solicitação inválida.
  - **Código de Status 404:** Usuário não encontrado.

### 5. Documentação da API

- **Método:** `GET`
- **Caminho:** `/api-docs`
- **Descrição:** Retorna a documentação Swagger da API em formato JSON.
- **Resposta:**
  - **Código de Status 200:**
    - **Corpo da Resposta:**
      ```json
      {
        "swagger": "2.0",
        "info": {
          "title": "API",
          "version": "1.0.0"
        },
        "paths": {
          ...
        }
      }
      ```

## Observações

- As respostas de erro podem incluir detalhes adicionais sobre o motivo da falha.
- Certifique-se de fornecer dados válidos e necessários em cada solicitação para garantir o funcionamento correto da API.


