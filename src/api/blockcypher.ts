import axios from 'axios';

const API_KEY = process.env.REACT_APP_BLOCKCYPHER_API_KEY;

export const getWalletBalance = async (address: string) => {
  const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}/balance?token=${API_KEY}`);
  return response.data;
};

export const getWalletTransactions = async (address: string) => {
  const response = await axios.get(`https://api.blockcypher.com/v1/btc/test3/addrs/${address}/full?token=${API_KEY}`);
  return response.data;
};
