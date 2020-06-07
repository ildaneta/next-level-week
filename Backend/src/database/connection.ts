import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    // essa função une caminhos baseada no seu SO
    // dirname é uma variável global que devolve o caminho do diretório do arquivo que estamos executando
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true
});

export default connection;