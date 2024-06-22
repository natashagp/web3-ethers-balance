// Para importarmos as variáveis de ambiente
require("dotenv").config();

// Biblioteca ethers.js
const { ethers } = require("ethers");

// Variável de ambiente da URL da Infura
const infuraUrl = process.env.INFURA_POLYGON_AMOY_URL;

// Conectar-se a um nó Polygon (Amoy) pela Infura
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// Checar conexão com a Infura
const checkConnection = async () => {
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log(
      `Conexão com Infura está funcionando. Último bloco: ${blockNumber}`
    );
  } catch (error) {
    console.log(`Erro ao verificar a conexão com Infura: ${error}`);
  }
};

// Chamada da função para verificar a conexão
checkConnection();
