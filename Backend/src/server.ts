import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log("Listagem de usuários");

  response.json({ message: "Essa alteração funcionou de novo" });
});

app.listen(4444);