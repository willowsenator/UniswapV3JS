import * as fs from 'fs';
import {ethers} from "ethers";


///// READ FILE ///////////////
const getFile = (fPath) => {
    try {
        const data = fs.readFileSync(fPath, 'utf8');
        return data;
    }
    catch(err){
        return [];
    }
}

/////// GET PRICE ///////////////////////
const getPrice = async(factory, amountIn, tradeDirection)=> {
    // Get provider
    const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/1680b86acdf84d6a99da734a57721b84");
    const ABI = [
        'function token0() external view returns (address)',
        'function token1() external view returns (address)',
        'function fee() external view returns (uint24)'
    ];
    // Get Pool Token Info
    const address = factory;
    const poolContract = new ethers.Contract(address, ABI, provider);
    let token0Address = await poolContract.token0();
    let token1Address = await poolContract.token1();
    let tokenFee = await poolContract.fee();

    console.log(address, token0Address, token1Address, tokenFee);
    // Get token info
    let addressArray = [token0Address, token1Address];
    let tokenInfoArray = [];

    for(let i = 0; i < addressArray.length; i++){
        let tokenAddress = addressArray[i];
        const tokenABI = [
            'function name() view returns (string)',
            'function symbol() view returns (string)',
            'function decimals() view returns (uint)'
        ];

        let contract = new ethers.Contract(tokenAddress, tokenABI, provider);
        let tokenSymbol = await contract.symbol();
        let tokenName = await contract.name();
        let tokenDecimals = await contract.decimals();

        let tokenDetails = {
            id: "token" + i,
            tokenSymbol: tokenSymbol,
            tokenName: tokenName,
            tokenDecimals: tokenDecimals.toString()
        }
        tokenInfoArray.push(tokenDetails);
    }
    console.log(tokenInfoArray);
}

////// GET DEPTH ///////////////////
const getDepth = async(amountIn, limit) =>{
    // Get JSON Surface Rates
    console.log("Reading surface rate information...");
    let fileInfo = getFile("../../python/UniswapV3TriangularArbitrage/src/uniswapV3_surface_rate.json");
    let fileJsonArray = JSON.parse(fileInfo);
    let fileJsonArrayLimit = fileJsonArray.slice(0, limit);

    // Get price info for each trade
    for (let i=0; i < fileJsonArrayLimit.length;i++) {
        let pair1ContractAddress = fileJsonArrayLimit[i].poolContract1;
        let pair2ContractAddress = fileJsonArrayLimit[i].poolContract2;
        let pair3ContractAddress = fileJsonArrayLimit[i].poolContract3;
        let trade1Direction = fileJsonArrayLimit[i].poolDirectionTrade1;
        let trade2Direction = fileJsonArrayLimit[i].poolDirectionTrade2;
        let trade3Direction = fileJsonArrayLimit[i].poolDirectionTrade3;

        // Trade 1
        console.log("Checking trade 1 acquired coin...");
        let acquiredCoinDetailsT1 = await getPrice(pair1ContractAddress, amountIn, trade1Direction);
    }
    return
}

await getDepth(1, 1);