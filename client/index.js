import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router'; 
import Apps from './Apps';
import './styles.css'; 



function rerender() {
  var route = window.location.hash.substr(1);
  render(<div> 
         <Apps header="Thing List for Apps"/>
       </div> 
       
       , document.getElementById('application'));
}

rerender();