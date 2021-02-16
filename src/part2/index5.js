const { ApolloServer, gql } = require("apollo-server");
const RandomCoin = require("./CoinStruct.js");

const typeDefs = gql`


  type Coin {

    id: String
    symbol: String
    name: String
    nameid: String
    rank: String
    price_usd: String
    percent_change_24h: String
    percent_change_1h: String
    percent_change_7d: String
    price_btc: String
    market_cap_usd: String
    volume24: String
    volume24a: String
    csupply: String
    tsupply: String
    msupply: String

   
  }

  type Query {

    getCoin(id: String): Coin
    getCoins(people:Int, id:String): [Coin]
  }
`;

const resolvers = {
  Query: {
    getCoin: async (_, { id }, { dataSources }) =>
      dataSources.RandomCoin.getCoin(id),
      getCoins: async (_, { people, id }, { dataSources }) =>
      dataSources.RandomCoin.getCoins(people, id)
  
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    RandomCoin: new RandomCoin()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
