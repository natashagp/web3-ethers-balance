## Instalar as dependência

```
npm install
```
---

## Configurar as variáveis de ambiente

Use como exemplo o arquivo .env.example, e crie o seu arquivo .env com os valores necessários de INFURA_POLYGON_AMOY_URL (obtido através do site da Infura) e o endereço de uma carteira na rede Amoy (rede de testes da Polygon)

---

## Checar conexão com a Infura
```
npm run check_infura
```
---

## Web3.js

Web3.js é uma biblioteca JavaScript oficial para interação com a blockchain Ethereum. Ela fornece métodos para se conectar a nós Ethereum, enviar transações, ler dados de contratos inteligentes e muito mais.

Principais funcionalidades:
Conectar-se à rede Ethereum:
Você pode usar Web3.js para se conectar a um nó Ethereum. Isso pode ser um nó local (como ganache-cli) para desenvolvimento ou um nó remoto (como Infura) para aplicativos em produção.

Interagir com contratos inteligentes:
Você pode instanciar contratos inteligentes existentes ou criar novos contratos usando Web3.js. Ela facilita o envio de transações para métodos de contrato, leitura de estado e eventos.

Gerenciar contas Ethereum:
Web3.js permite que você crie, importe e gerencie chaves privadas e contas Ethereum diretamente do seu código JavaScript.

Assinatura de mensagens:
É possível assinar mensagens com chaves privadas para provar a propriedade de uma conta Ethereum sem necessidade de realizar transações na blockchain.

Eventos e notificações:
Web3.js pode ouvir eventos emitidos por contratos inteligentes, permitindo que seu aplicativo reaja a mudanças na blockchain em tempo real.

Rodar o código web3_code.js
```
npm run start_web3
```
---

## Ethers.js
Ethers.js é outra biblioteca JavaScript para interação com a blockchain Ethereum. Ela é conhecida por sua interface elegante e orientada a objetos para trabalhar com contas, contratos e transações Ethereum.

Principais funcionalidades:
Gerenciamento de contas e chaves privadas:
Ethers.js simplifica a criação e gerenciamento de contas Ethereum, permitindo que você importe e exporte chaves privadas, assine transações e mensagens.

Interagir com contratos inteligentes:
Você pode criar, depurar e interagir com contratos inteligentes usando uma API intuitiva. Ethers.js fornece métodos para enviar transações, ler dados de contratos e ouvir eventos.

Suporte a vários provedores:
Assim como Web3.js, Ethers.js suporta diferentes provedores Ethereum, como Infura, nó local (ganache), MetaMask e outros.

Assinatura de transações e mensagens:
Facilita a criação e assinatura de transações e mensagens diretamente do seu aplicativo.

Eventos e filtros:
Permite ouvir eventos emitidos por contratos inteligentes e definir filtros para reagir a mudanças específicas na blockchain.

Rodar o código ethers_code.js
```
npm run start_ethers
```
---

