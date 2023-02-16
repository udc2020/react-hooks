import 'bootstrap/dist/css/bootstrap.min.css';

import CallBacker from './components/callbacker';
import FetchDataEffect from './components/fetchdata';
import CollapseElements from './components/collapselements';
import ListGroups from './components/listgroups';
import ProgressEffect from './components/progressEffect';
import ButtonRef from './components/buttonRef/ButtonRef';
import MainComponent from './components/contextManager';
import MemoBtn from './components/memobtn';
import ReducerChecker from './components/reducerChecker';
import SpaicialNavbar from './components/navbar';



function App() {
  return (
    <>
      <SpaicialNavbar />
      <CollapseElements />
      <ListGroups />
      <FetchDataEffect />
      <ProgressEffect />
      <ButtonRef />
      <MainComponent />
      <ReducerChecker />
      <CallBacker />
      <MemoBtn />
    </>

  )
}

export default App
