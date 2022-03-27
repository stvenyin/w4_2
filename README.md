# LooneySwap
A rudimentary implementation of uniswap for educational purposes. You'd be crazy to actually use this.

## Guide
Read the guide here: [Uniswap from scratch](https://monokh.com/posts/uniswap-from-scratch)

## Run tests
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```
npm install
npx hardhat node
npx hardhat compile
npx hardhat run scripts/deploy.js --network dev
npx hardhat test
