import { ListItemText, ListItem, styled, ListItemIcon } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const List = styled(ListItem)`
    display: flex;
    marginTop: 20px;
    border: 3px solid #e3e3ec;
    padding: 10px;
    border-radius: 15px;
    
`;

const Transaction = ({transaction, deleteTransaction}) => {
    
    const sign = transaction.amount >= 0 ? '₹' : '-₹';
    const amount = sign + Math.abs(transaction.amount);
    const color = transaction.amount >=0 ? 'Green' : 'Red';
     

    return (
        <List style={{background: `${color}`, color: '#fcfcfc'}}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
            </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={amount} />
        </List>
    )
}

export default Transaction;