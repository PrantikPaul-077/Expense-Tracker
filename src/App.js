// import logo from './logo.svg';
import './App.css';
import { useState }from 'react';
import { Typography, styled ,Box} from '@mui/material';


import Balance from './components/Balance';
import ExpenceCard from './components/ExpenceCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';


const Header = styled(Typography)`
  
  color: #000000 ;
  font-size: 50px;


  text-transform: uppercase;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-family: 'Cinzel', serif;
  bold: true;

`


const Component = styled(Box)`
  display: flex;
  background: #fff;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  width: 800px;
  
  & > div {
    padding: 10px;
    width: 50%;
    height: 70vh;
  }
`;



function App() {

  const [transactions, setTransactions] = useState([

    { id: 1, text: 'Salary', amount: 30000},
    { id: 2, text: 'Lunch', amount: -200},
    { id: 3, text: 'Bonus', amount: 1500 },
    { id: 4, text: 'Book', amount: -2000},
   
  ]);

  const deleteTransaction = (id) => {
    console.log(id);
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    console.log(transactions);
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }



  return (
    <div className="App">
      <br/>
      <Header>Expense Tracker</Header>
      <br/>
      
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenceCard transactions={transactions} />
          <NewTransaction addTransaction={addTransaction}/>
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
        </Box>
      </Component>
    </div>
  );
}

export default App;