import logo from './logo.svg';
import menu from './images/menu-top-xs.png'
import ironhacklogo from './images/ironhack-logo-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="nav-bar-rigth">
          <img src={menu} alt="image du menu droit" />
       </div>
       <div className="nav-bar-left">
          <img src={ironhacklogo} alt="image du menu gauche" />
       </div>
       <div className="body">
       <h1> Say hello to<br /> ReactJs</h1> 
       <p> You will lear how to use <br />the most popular frontend library, <br />and become a super Ninja developer.</p>
         <button type="button"> Awesome!</button>
        </div>
      </div>
        <section id="contained"> 
         <div>
          <img src={icon1} alt="iconedeclaration" />
          <h2> Declaration </h2>
          <p> React maskes it painless to create interactive Uls.</p>
         </div>
         <div>
          <img src={icon2} alt="iconecompenents"/>
          <h2> Compenents </h2>
          <p> Buil encapsulated compenents that manage their state.</p>
         </div>
         <div>
          <img src={icon3} alt="iconesingle"/>
          <h2> Single-Way </h2>
          <p> A set of immutable values are passed to the component's.</p>
         </div>
         <div>
          <img src={icon4} alt="iconjsx"/>
          <h2> JSX </h2>
          <p> Statically-typed, designed to run on medern browsers.</p>
         </div>

        </section>
       
      
      </>
  );
}

export default App;
