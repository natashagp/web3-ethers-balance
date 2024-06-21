// Para poder usar uma variável de ambiente (no arquivo .env)
require("dotenv").config();

const { Web3 } = require("web3");

// Variável de ambiente com a URL
const infuraUrl = process.env.INFURA_POLYGON_AMOY_URL;

// Conectar-se a um nó Ethereum usando Infura
const provider = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// Obter saldo de uma conta Polygon Amoy (Rede de testes)
const conta = process.env.WALLET_ADDRESS;

async function getBalanceWithWeb3() {
  await provider.eth
    .getBalance(conta)
    .then((balance) => {
      console.log(
        "Saldo da conta:",
        Web3.utils.fromWei(balance, "ether"),
        "MATIC"
      );
    })
    .catch((err) => {
      console.log("Erro ao obter saldo:", err);
    });
}

// Chamar a função para checar saldo da conta
getBalanceWithWeb3();
