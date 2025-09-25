# API de Gerenciamento de Tarefas (CRUD)

    Esta tarefa foi feita em Node.js e Express para gerenciar uma lista de tarefas(CRUD).

    ## O que você vai precisar para rodar:

    - Node.js instalado (Versão 18+)
    - Postman ou Insomia (para testar as ROTAS)

## Como rodar o projeto

1. Clone o repositório ou baixe os arquivos.
2. Abra o terminal na pasta do projeto
3. Execute no terminal: npm install
4. Inicie o servidor com: npm start ou node index.js
5. Inicie o Postman ou o Insomia e vá para Create e selecione Resquest collection após isso clique no + e selecione Add request to current collection.
6. Para testar as rotas utilize: (http://localhost:3000/tarefas).
7. Crie uma rota Get e utilize /tarefa ele vai mostrar [] pois não tem nenhuma tarefa ainda. (Get é para listar a lista)
8. Crie uma rota Post e utilize um JSON para testar: (Post é para criar a lista)
   {
   "titulo": "Teste Tarefa",
   "descricao": "Ler a documentação",
   "concluida": false
   }
9. Crie uma rota Put e utilize um JSON para atualizar a tarefa: (Put para atualiza a lista)
   {
   "concluida": true
   }
10. Crie uma rota Delete e utilize /tarefa/:id (**Exemplo: /tarefa/1**) (Delete deleta a lista selecionada)

## Localização das prints das rotas no Insomnia/Postman:

Os testes foram realizados no Insomnia e os prints estão na pasta `/prints`:

- ![GET /tarefas](Rotas/prints/Rota-Get.png)
- ![GET /tarefas](Rotas/prints/Rota-Get-UPD.png) - (Apenas a rota get atualizada com informações das tarefas)
- ![POST /tarefas](Rotas/prints/Rota-Post.png)
- ![PUT /tarefas/:id](Rotas/prints/Rota-Put.png)
- ![DELETE /tarefas/:id](Rotas/prints/Rota-Delete.png)
