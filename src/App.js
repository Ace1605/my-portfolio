import './App.css';
import styled from "styled-components";
import { ReactComponent as BackIcon } from "./svg/back-button.svg";
import { ReactComponent as OptionsIcon } from "./svg/three-dot.svg";




function App() {

  setTimeout(() => {
    const main = document.querySelector('main')
main.style.opacity = 1
main.style.filter = 'blur(0px)'
}, 1000)

  return (
    <div className="app">
      <main>
        <header id='profile__section'>
            <BackIcon className="back" />
            <OptionsIcon className='dots'/>
            <img src="/Ace.jpeg" alt="profile" id="profile__img" />
            <h1 id='twitter'>Achugo Ebuka</h1>
            <h2 id='slack'>AceDev</h2>
        </header>
      </main>
    </div>
  );
}

export default App;
