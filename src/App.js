import './App.css';
import {Link, Button} from '@mui/material'
import {getTrendingFeed} from "./requests";
import InfoIcon from "./components/InfoIcon/InfoIcon";
import Hashtag from "./components/Hashtag/Hashtag";

function App() {
  return (
    <div className="App">
      Hello
        <Link href="#">Link</Link>
        <Button variant="contained" onClick={getTrendingFeed}>Contained</Button>
      <div>
        <InfoIcon />
          <InfoIcon icon={'forum'} color={'primary'} number={12999}/>
          <Hashtag name={'hashtag'}/>
      </div>
    </div>
  );
}

export default App;
