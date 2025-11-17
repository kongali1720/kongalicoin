async function connectWallet() {
  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  return accounts[0];
}
