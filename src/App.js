import logo from './sovtech_logo.png';
import './App.css';

//const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
// });
// client
//   .query({
//     query: gql`
//       {
//         getCoins{
//           id,
//           symbol
//           name
//           nameid
//           rank
//           price_usd
//           percent_change_24h
//           percent_change_1h
//           percent_change_7d
//           price_btc
//           market_cap_usd
//           volume24
//           volume24a
//           csupply
//           tsupply
//           msupply
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

function App() {
  return (
    <div className="App">
      <header className="App-header">

      Coinlore Crypto API

        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
