// Para poder usar uma variável de ambiente (no arquivo .env)
require("dotenv").config();

const { ethers } = require("ethers");

// Variável de ambiente com a URL
const infuraUrl = process.env.INFURA_POLYGON_AMOY_URL;

// Conectar-se a um nó Ethereum usando Infura
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// Obter saldo de uma conta Polygon Amoy (Rede de testes)
const conta = process.env.WALLET_ADDRESS;

async function getBalanceWithEthers() {
  await provider
    .getBalance(conta)
    .then((balance) => {
      console.log(
        "Saldo da conta:",
        ethers.utils.formatEther(balance),
        "MATIC"
      );
    })
    .catch((err) => {
      console.log("Erro ao obter saldo:", err);
    });
}

// Chamar a função para checar saldo da conta
getBalanceWithEthers();
