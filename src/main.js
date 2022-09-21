import * as fs from 'fs';


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

////// GET DEPTH ///////////////////
const getDepth = async(amountIn, limit) =>{
    // Get JSON Surface Rates
    console.log("Reading surface rate information...");
    let fileInfo = getFile("../../python/UniswapV3TriangularArbitrage/src/uniswapV3_surface_rate.json");
    let fileJsonArray = JSON.parse(fileInfo);
    let fileJsonArrayLimit = fileJsonArray.slice(0, limit);
    // Get price info for each trade
    for (let i=0; i < fileJsonArrayLimit.length;i++){
        let pair1ContractAddress = fileJsonArrayLimit[i].poolContract1;
        let pair2ContractAddress = fileJsonArrayLimit[i].poolContract2;
        let pair3ContractAddress = fileJsonArrayLimit[i].poolContract3;
        let trade1Direction = fileJsonArrayLimit[i].poolDirectionTrade1;
        let trade2Direction = fileJsonArrayLimit[i].poolDirectionTrade2;
        let trade3Direction = fileJsonArrayLimit[i].poolDirectionTrade3;

        // Trade 1
        console.log("Checking trade 1 acquired coin...");
        // Trade 2
        console.log("Checking trade 2 acquired coin...");
        // Trade 3
        console.log("Checking trade 3 acquired coin...");
    }
    return
}

await getDepth(1, 1);