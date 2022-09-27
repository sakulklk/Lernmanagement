import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import * as React from 'react';
import ReactDOM from 'react-dom';
import MultipleChoice from '../components/uebungen/MultipleChoice.js';
import Crosswords from '../components/uebungen/Crosswords.js';
import DragDrop from '../components/uebungen/DragDrop.js';
import DragDrop2 from '../components/uebungen/DragDrop2.js';
import GapText from '../components/uebungen/GapText.js';
import Button from '@mui/material/Button';
import { useState } from 'react';
//npm install react-dnd react-dnd-html5-backend --save
//import { DndProvider } from 'react-dnd';
//import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Uebungen() {
  const [chosenType, setType] = useState('MultipleChoice');

  return (
    <body>
            <div style={{ paddingBottom: '65px' }}>

      <NavBar></NavBar>

      <Button
        style={{ padding: '30px', margin: '10px' }}
        variant="outlined"
        onClick={() => {
          setType('MultipleChoice');
        }}
      >
        Multiple Choice
      </Button>
      <Button
        style={{ padding: '30px', margin: '10px' }}
        variant="outlined"
        onClick={() => {
          setType('Crosswords');
        }}
      >
        Crosswords
      </Button>
      <Button
        style={{ padding: '30px', margin: '10px' }}
        variant="outlined"
        onClick={() => {
          setType('DragDrop');
        }}
      >
        DragDrop
      </Button>
      <Button
        style={{ padding: '30px', margin: '10px' }}
        variant="outlined"
        onClick={() => {
          setType('DragDrop2');
        }}
      >
        DragDrop2
      </Button>

      <Button
        style={{ padding: '30px', margin: '10px' }}
        variant="outlined"
        onClick={() => {
          setType('GapText');
        }}
      >
        GapText
      </Button>

      {chosenType == 'MultipleChoice' ? (
        <MultipleChoice></MultipleChoice>
      ) : (
        <></>
      )}
      {chosenType == 'Crosswords' ? <Crosswords></Crosswords> : <></>}
      {chosenType == 'DragDrop' ? <DragDrop></DragDrop> : <></>}
      {chosenType == 'GapText' ? <GapText></GapText> : <></>}
      {chosenType == 'DragDrop2' ? (
        //<DndProvider>
        <DragDrop2></DragDrop2>
      ) : (
        //</DndProvider>
        <></>
      )}
</div>
      <Footer></Footer>
    </body>
  );
}
