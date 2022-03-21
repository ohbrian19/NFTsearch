const BASE_URL = "https://eth-mainnet.alchemyapi.io/v2";
const API_KEY = "demo";

export const getNfts = ({queryKey}) => fetch(`${BASE_URL}/${API_KEY}/getNFTs?owner=${queryKey[1]}`).then(response => response.json())