# Como rodar o projeto

Primeiro de tudo, como o banco escolhido para o desafio foi o MYSQL, será necessário ter ele instalado juntamente com o Node.js.

## Backend

Para rodar o projeto da missão backend, basta seguir os passos abaixo:

1.  Primeiro, crie um arquivo .env na pasta `server`, com a seguinte estrutura, basta substituir por suas credenciais:

    MYSQL_HOST=SEU_HOST
    MYSQL_PORT=SUA_PORTA
    MYSQL_USER=SEU_USER
    MYSQL_PASSWORD=SUA_SENHA
    MYSQL_DB=NOME_DO_BD

2.  Depois, abra seu terminal e digite `npm install`, ou, caso tenha o _yarn_ instalado, `yarn`
3.  Logo após ter terminado de instalar todas as dependências e com o .env previamente preenchido com as credenciais, basta abrir novamente o terminal e rodar o comando `npm run dev` ou `yarn dev`

**Algumas rotas criadas foram:**
`GET /veiculos`

Retorna todos os veículos

---

`GET /veiculos/find?name=`

Retorna os veículos de acordo com o nome previamente passado.

---

`POST /veiculos`

Adiciona um novo veículo

---

`PUT /veiculo/:id`

Edita um veículo

## Front End

Para rodar o projeto da missão front end, basta seguir os passos abaixo:

1. Primeiro, crie um arquivo .env na pasta `web`, com a seguinte estrutura, basta substituir por suas credenciais:

   REACT_APP_API=URL_DA_API

2. Depois, abra seu terminal e digite `npm install`, ou, caso tenha o _yarn_ instalado, `yarn`
3. Logo após ter terminado de instalar todas as dependências e com o .env previamente preenchido com as credenciais, basta abrir novamente o terminal e rodar o comando `npm run start` ou `yarn start`.
