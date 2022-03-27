// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
let { writeAddr } = require('./artifact_log.js')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  let [owner, second] = await hre.ethers.getSigners();

  const Sushi = await hre.ethers.getContractFactory("SushiToken");
  const sushi = await Sushi.deploy();

  await sushi.deployed();

  console.log("Sushi deployed to:", sushi.address);

  let sushiPerBlock = hre.ethers.utils.parseUnits("300", 18);

  const MasterChef = await hre.ethers.getContractFactory("MasterChef");
  const masterChef = await MasterChef.deploy(sushi.address,owner.address,sushiPerBlock,0,100);

  await masterChef.deployed();
  console.log("MasterChef deployed to:", masterChef.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });