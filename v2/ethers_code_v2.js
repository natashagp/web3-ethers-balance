// Para importamos as variáveis de ambiente
require("dotenv").config();

// Biblioteca ethers.js
const { ethers } = require("ethers");

// Variável de ambiente da URL
const infuraUrl = process.env.INFURA_POLYGON_AMOY_URL;

// Variável de ambiente da carteira
const wallet = process.env.WALLET_ADDRESS;

// Conectar-se a um nó Polygon (Amoy) pela Infura
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// Obter o saldo da carteira
const getBalance = async () => {
  try {
    const balance = await provider.getBalance(wallet);
    const formatedBalance = ethers.utils.formatEther(balance);
    console.log(`Saldo da conta: ${formatedBalance} MATIC`);
  } catch (error) {
    console.log(`Erro ao obter o saldo: ${error}`);
  }
};

// Chamada a função para checar o saldo da carteira
getBalance();
