import react from 'react';
import './App.css';
import meditations from 'meditations';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const App = () => {

  const [quote,updateQuote ] = react.useState(meditations.random());

  return (
    <div className="App">
      <Typography variant="h3">Merry Christmas Anna</Typography>
      <Container>
          <Typography variant={'p', 'h6'}>May next year bring you joy and heaps of laughter. Made this app since you like english, mindfulness, and posting bullshit typograph. It will randomly generate a quote said by the famous stoic philosopher. Also, the present I got you actually doesnt help your one of your goals.</Typography>
          
        </Container>
      <header className="App-header">
       
        <Container fixed>
          <Typography variant='h3'>{quote}</Typography>
          <Typography variant={'h6', 'bold'}> Marcus Aureilus</Typography>
        </Container>
        <Button color="primary" onClick={() => updateQuote(meditations.random())}>Hit me for a new Quote.</Button>
      </header>
    </div>
  );
}

export default App;
