# Quickstart

## 1. Configurar as variáveis de ambiente

Use como exemplo o arquivo ```.env.example```, e crie o seu arquivo ```.env``` com os valores necessários de ```INFURA_POLYGON_AMOY_URL``` (obtido através do site da [Infura](https://www.infura.io/)) e o ```WALLET_ADDRESS``` (endereço de uma carteira na rede Amoy - rede de testes da Polygon)

![env_example](https://github.com/natashagp/web3-ethers-balance/assets/49295632/d548a76b-7518-48c3-9e28-274fd3fe890e)

---

## 2. Instalar as dependências

```
npm install
```
---

## 3. Checar conexão com a Infura
```
npm run check_infura
```
![run_check_infura_script](https://github.com/natashagp/web3-ethers-balance/assets/49295632/4f30fe7f-611c-44a8-b8ab-40ec61be0e40)

---

## 4. Checar saldo da carteira usando Web3.js

```
npm run start_web3
```
![run_web3_script](https://github.com/natashagp/web3-ethers-balance/assets/49295632/1bd04a8d-5c00-40b0-9c19-357a4ff39214)

---

## 5. Checar saldo da carteira usando Ethers.js

```
npm run start_ethers
```
![run_ethers_script](https://github.com/natashagp/web3-ethers-balance/assets/49295632/8cbb2253-ce39-495e-86ef-d913bb07d46b)

---

## Resumo sobre Web3.js e Ethers.js

### Web3.js

Web3.js é uma biblioteca JavaScript oficial para interação com a blockchain Ethereum. Ela fornece métodos para se conectar a nós Ethereum, enviar transações, ler dados de contratos inteligentes e muito mais.

Principais funcionalidades:

- Conectar-se à rede Ethereum:
Você pode usar Web3.js para se conectar a um nó Ethereum. Isso pode ser um nó local (como ganache-cli) para desenvolvimento ou um nó remoto (como Infura) para aplicativos em produção.

- Interagir com contratos inteligentes:
Você pode instanciar contratos inteligentes existentes ou criar novos contratos usando Web3.js. Ela facilita o envio de transações para métodos de contrato, leitura de estado e eventos.

- Gerenciar contas Ethereum:
Web3.js permite que você crie, importe e gerencie chaves privadas e contas Ethereum diretamente do seu código JavaScript.

- Assinatura de mensagens:
É possível assinar mensagens com chaves privadas para provar a propriedade de uma conta Ethereum sem necessidade de realizar transações na blockchain.

- Eventos e notificações:
Web3.js pode ouvir eventos emitidos por contratos inteligentes, permitindo que seu aplicativo reaja a mudanças na blockchain em tempo real.

---

### Ethers.js
Ethers.js é outra biblioteca JavaScript para interação com a blockchain Ethereum. Ela é conhecida por sua interface elegante e orientada a objetos para trabalhar com contas, contratos e transações Ethereum.

Principais funcionalidades:

- Gerenciamento de contas e chaves privadas:
Ethers.js simplifica a criação e gerenciamento de contas Ethereum, permitindo que você importe e exporte chaves privadas, assine transações e mensagens.

- Interagir com contratos inteligentes:
Você pode criar, depurar e interagir com contratos inteligentes usando uma API intuitiva. Ethers.js fornece métodos para enviar transações, ler dados de contratos e ouvir eventos.

- Suporte a vários provedores:
Assim como Web3.js, Ethers.js suporta diferentes provedores Ethereum, como Infura, nó local (ganache), MetaMask e outros.

- Assinatura de transações e mensagens:
Facilita a criação e assinatura de transações e mensagens diretamente do seu aplicativo.

- Eventos e filtros:
Permite ouvir eventos emitidos por contratos inteligentes e definir filtros para reagir a mudanças específicas na blockchain.
