import './App.css';
import React , {useState, useEffect} from 'react';
//importing components 
import TodoList from "./components/TodoList"
import { Container } from '@mui/material';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import Button from '@mui/material/Button';
//import tensorflow dependencies
import * as speech from "@tensorflow-models/speech-commands"
import * as tf from "@tensorflow/tfjs"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';




function App() {
  //create the model, action, and label states
  const [model, setModel]= useState(null)
  const [action, setAction]= useState(null)
  const [labels, setLabels]= useState(null)//command

  //create the Recognizer
  const loadModel = async()=>{
    const reconizer = await speech.create('BROWSER_FFT');
    console.log("Model Loaded");
    await reconizer.ensureModelLoaded()
    console.log(reconizer.wordLabels())
    setModel(reconizer)
    setLabels(reconizer.wordLabels());
  }
  useEffect(()=> {loadModel()},[]);
  
  //listen for actions
  function argMax(arr){
    return arr.map((x,i)=>[x, i]).reduce((r,a)=> (a[0] > r[0]? a:r))[1];
  }
  const recognizeCommands=async()=>{
    console.log('Listening for commands')
    model.listen(results=>{
      console.log(labels[argMax(Object.values(results.scores))])
      setAction(labels[argMax(Object.values(results.scores))])
    }, {includeSpectrogram:true, probabilityThreshold:0.9})
    setTimeout(()=> model.stopListening(), 10e3)
  }
  return (
    <div className="App"  style={{'backgroundColor':'#85FFBD',
    'backgroundImage':'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%',"padding-bottom":"800px"}} >
        <h1 role="header" >To Do List</h1>
        <Stack  alignItems="center" spacing={1} sx={{'padding-bottom':'10px'}}>
          <Alert sx={{fontSize:'1rem',maxWidth:'500px'}} severity="error">Delete the TOP note from the list:- click on the speak button and say "do zero"</Alert>
          <Alert sx={{fontSize:'1rem',maxWidth:'500px'}} severity="info">Tick the TOP note completed  :- click on the speak button and say "do one"</Alert>
        </Stack>
        <Container >
          <Button variant="contained" color="success" aria-label="speak" onClick={recognizeCommands} endIcon={<MicNoneOutlinedIcon />}>speak</Button>
          {action ?<div>{action}</div>:<div>No Action Detected</div>}
          </Container>
          <Container sx={{ paddingBottom: 2 }}>
            <TodoList role="todolist-layout" action={action}/>
          </Container>
    </div>
  );
}

export default App;
