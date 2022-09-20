// WEB3
// import abi from './abi.json' assert {type: 'json'}
// import Web3 from 'web3';
// const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/1680b86acdf84d6a99da734a57721b84'));
// const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';
//
// const TestContract = new web3.eth.Contract(abi, address);
//
// const getWeb3Details = async () => {
//     let tokenName = await TestContract.methods.name().call();
//     let tokenDecimals = await TestContract.methods.decimals().call();
//     let tokenSymbol = await TestContract.methods.symbol().call();
//     console.log(tokenName, tokenDecimals, tokenSymbol);
// }
//
// getWeb3Details()

// ETHERS
// import { ethers } from "ethers";
//
// const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1680b86acdf84d6a99da734a57721b84");
// const ABI = [
//     "function name() view returns (string)",
//     "function symbol() view returns (string)",
//     "function decimals() view returns (uint256)"
// ];
// const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';
// const omgContract = new ethers.Contract(address, ABI, provider);
//
// const getEthersDetails = async () => {
//     let tokenName = await omgContract.name();
//     let tokenDecimals = await omgContract.decimals();
//     let tokenSymbol = await omgContract.symbol();
//     console.log(tokenName, tokenDecimals.toString(), tokenSymbol);
// }
//
// getEthersDetails()