const { RESTDataSource } = require("apollo-datasource-rest");

class RandomCoin extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.coinlore.net/api/tickers/";
  }

  async getCoin(id = "all") {
    const Coin = await this.get(`/?id=${id}`);

    return Coin.data[0];
  }


  async getCoins(id = "all") {
    const Coin = await this.get(`/?id=${id}`);

    return Coin.data;
  }
}

module.exports = RandomCoin;