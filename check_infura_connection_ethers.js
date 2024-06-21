require("dotenv").config();

const { ethers } = require("ethers");

// URL do Infura para a rede Polygon (Amoy - Rede de Testes)
const infuraUrl = process.env.INFURA_POLYGON_AMOY_URL;

// Conectar-se a um nó Ethereum usando Infura
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);

// Função para verificar a conexão com Infura
async function verificarConexaoInfura() {
  try {
    // Realiza uma chamada simples para verificar a conexão
    const blockNumber = await provider.getBlockNumber();
    console.log(
      "Conexão com Infura está funcionando. Último bloco:",
      blockNumber
    );
  } catch (error) {
    console.error("Erro ao verificar a conexão com Infura:", error);
  }
}

// Chamar a função para verificar a conexão com Infura
verificarConexaoInfura();
