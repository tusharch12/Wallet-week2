let menos ='';
let wallets = [];

document.getElementById('CreateMnemonic').addEventListener('click',()=>{
    menos=ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
   document.getElementById('mnemonicDisplay').innerHTML= menos;
});


document.getElementById('addwallet').addEventListener('click',()=>{
    if(menos==''){
        alert('Firstly Create mnemonic');
        return ;
    }

    const hdNode = ethers.utils.HDNode.fromMnemonic(menos);
    const wallet = hdNode.derivePath(`m/44'/60'/0'/0/${wallets.length}`);
    wallets.push(wallet);
    showwallet();
})

function showwallet(){
    const walletList = document.getElementById('walletList');
    walletList.innerHTML = '';
    wallets.forEach((wallet, index) => {
        const walletInfo = document.createElement('p');
        walletInfo.textContent = `W ${index + 1}: ${wallet.address}`;
        walletList.appendChild(walletInfo);
    });
}