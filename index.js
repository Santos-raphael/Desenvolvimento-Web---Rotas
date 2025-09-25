const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tarefas = [];

//Rota Get(Lista as Tarefas):
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

//Rota Post(Cria uma nova tarefa):
app.post('/tarefas', (req, res) => {
  const novaTarefa = req.body;
  novaTarefa.id = tarefas.length + 1;
  tarefas.push(novaTarefa);
  res.status(201).json({ mensagem: 'Tarefa criada com sucesso', novaTarefa });
});

//Rota Put(Atualiza a tarefa criada pelo ID):
app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tarefas.findIndex(t => t.id === id);

  if (index !== -1) {
    tarefas[index] = { ...tarefas[index], ...req.body };
    res.json({ mensagem: 'Tarefa atualizada com sucesso', tarefa: tarefas[index] });
  } else {
    res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }
});

//Rota delete:
app.delete('/tarefas/:id', (req, res) => {
const id = parseInt(req.params.id);
const index = tarefas.findIndex(t => t.id === id);

if (index !== -1) {
  tarefas.splice(index, 1);
  res.json({mensagem: 'Tarefa deletada com sucesso'});
}
else{
    res.status(404).json({mensagem: 'Tarefa não encontrada'});
}
})


//Servidor Rodando:
app.listen(port, () => {
    console.log(`Servidor rodando na porta:${3000}`);
});

