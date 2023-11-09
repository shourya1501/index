import React from 'react';
import './App.css';
function App() {
  return (
    <div>
      <div style={{fontSize:"45px",textAlign:"center"}}>React Tasks</div>
      <center>
      <table id="id1">
        <tr>
          <td style={{width:"150px"}}>S.No</td>
          <td style={{width:"600px"}}>Title</td>
          <td style={{width:"300px"}}>Git Repo</td>
          <td style={{width:"400px"}}>Link</td>
        </tr>
        <tr id="id">
          <td>1</td>
          <td>Paragraph Word Counter</td>
          <td><a href="https://github.com/shourya1501/wordcount">Repo Task-1</a></td>
          <td><a href="https://wordcount-gold.vercel.app/">Word Count</a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Calculator</td>
          <td><a href="https://github.com/shourya1501/calculator">Repo Task-2</a></td>
          <td><a href="https://calculator-eta-two-13.vercel.app/">Calculator</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Color Picker</td>
          <td><a href="https://github.com/shourya1501/colorpicker">Repo Task-3</a></td>
          <td><a href="https://colorpicker-three-ivory.vercel.app/">Color Picker</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td>API Fetch</td>
          <td><a href="https://github.com/shourya1501/database">Repo Task-4</a></td>
          <td><a href="https://database-lac.vercel.app/">API Fetching</a></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Age Calculator</td>
          <td><a href="https://github.com/shourya1501/age">Repo Task-5</a></td>
          <td><a href="https://age-chi.vercel.app/">Age Calculator</a></td>
        </tr>
        <tr>
          <td>6</td>
          <td>PortFolio</td>
          <td><a href="https://github.com/shourya1501/portfolio">Repo Task-6</a></td>
          <td><a href="https://portfolio-ten-psi-57.vercel.app/">Portfolio</a></td>
        </tr>
      </table>
      </center>
    </div>
  );
}
export default App;
