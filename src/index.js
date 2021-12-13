const Web3 = require('web3');

window.onload = () => {
  // Variables
  let web3;
  let from;

  // Elements
  const connectButton = document.getElementById('connect');
  const content = document.getElementById('content');

  const containerForm = document.getElementById('container-form')
  // Functions
  const connect = async () => {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);

      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        content.style.display = 'initial';
        connectButton.style.display = 'none';

        const accounts = await web3.eth.getAccounts();
        
        from = accounts[0];
        
        let wallet = document.getElementById('wallet')

        wallet.innerHTML = `<h3>${accounts[0]}</h3>`

        console.log(from)
        console.log(accounts[0])
        goShop()

        containerForm.style.display = 'none';
      } catch (err) {
        alert('Please accept the request');
        console.log(err)
      }
    } else {
      alert('Web3 is required');
    }
  };

  // Listeners
  connectButton.onclick = connect;
};



function goShop(){
  var containerLove = document.getElementById('container-love');

  containerLove.classList.remove('none');
}