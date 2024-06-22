// Para importarmos as variáveis de ambiente
require("dotenv").config();

// Biblioteca Web3.js
const { Web3 } = require("web3");

// Variável de ambiente da URL
const infuraUrl = process.env.INFURA_POLYGON_AMOY_URL;

// Variável de ambiente da carteira
const wallet = process.env.WALLET_ADDRESS;

// Conectar-se a um nó Polygon (Amoy) pela Infura
const provider = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// Obter saldo da carteira
const getBalance = async () => {
  try {
    const balance = await provider.eth.getBalance(wallet);
    const formatedBalance = Web3.utils.fromWei(balance, "ether");

    console.log(`Saldo da conta: ${formatedBalance} MATIC`);
  } catch (error) {
    console.log(`Erro ao obter saldo: ${error}`);
  }
};

// Chamar função para obter o saldo da conta
getBalance();
