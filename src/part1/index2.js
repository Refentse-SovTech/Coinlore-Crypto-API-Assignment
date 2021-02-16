const axios = require('axios');
    const { ApolloServer, gql } = require('apollo-server');
    
    // A schema is a collection of type definitions (hence "typeDefs")
    // that together define the "shape" of queries that are executed against
    // your data.
    const typeDefs = gql`
      # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
      type Query {

        coins: [Coins]
        
       }
       
       type Coins {
       
        coins_count:Int
        active_markets:Int
        total_mcap:String
        total_volume:String
        btc_d:String
        eth_d:String
        mcap_change:String
        volume_change:String
        avg_change_percent:String
        volume_ath:String
        mcap_ath:String
       
       }

    `;
    
    // Resolvers define the technique for fetching the types defined in the
    // schema. This resolver retrieves books from the "books" array above.
    
    const resolvers = {
        Query: {
          coins: () => axios.get(
            'https://api.coinlore.net/api/global/',
          ) 
          .then(res => res.data)
  
        },
      };
    
    // The ApolloServer constructor requires two parameters: your schema
    // definition and your set of resolvers.
    const server = new ApolloServer({ typeDefs, resolvers });
    
    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });