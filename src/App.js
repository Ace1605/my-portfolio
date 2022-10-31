import './App.css';
import styled from "styled-components";
import { ReactComponent as BackIcon } from "./svg/back-button.svg";
import { ReactComponent as OptionsIcon } from "./svg/three-dot.svg";
import { ReactComponent as SlackIcon } from "./svg/slack.svg";
import { ReactComponent as GitIcon } from "./svg/github.svg";
import { ReactComponent as ZuriIcon } from "./svg/zuri-logo.svg";
import { ReactComponent as IFGIcon } from "./svg/ifg.svg";


const LinkWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1rem 2rem 2rem 2rem;
  max-width: 82.28rem;
`;

const Footer = styled.footer`
  position: relative;
  max-width: 82.28rem;
  margin: 0 auto;
  justify-content: center;
  .footer-details{
    display: flex;
    justify-content: space-between; 
    border-top: 1px solid #EAECF0;
    margin-top: 2rem;
    padding-top: 1rem;
    align-items: center;

    p{
      color: #667085;
      font-weight: normal;
      font-size: 16px;
      font-family:  Inter;
    }
    .logo{
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0;
    .footer-details{
    display: block;
    border-top: 1px solid #EAECF0;
    margin-top: 2rem;
    padding: 1rem 2rem 2rem 2rem;
    text-align: left;
  }
  }

`;


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
        <LinkWrapper>
                <a href="https://twitter.com/AchugoEbuka" target="_blank" rel='noreferrer'>
                    Twitter Link
                </a>
                <a id='btn__zuri' href="https://training.zuri.team/"  target="_blank" rel='noreferrer'>
                    Zuri Team
                </a>
                <a id='books' href="http://books.zuri.team " target="_blank" rel='noreferrer' title='Click here to access your design and coding books.' >
                    Zuri Books
                </a>
                <a id='book__python' title='Begin your Python adventure with a click and at a cost effective price!' href="https://books.zuri.team/python-for-beginners?ref_id=AceDev" target="_blank" rel='noreferrer' >
                    Python Books
                </a>
                <a id='pitch' href="https://background.zuri.team" target="_blank" rel='noreferrer' title='Visit this page for exclusive information on coders'>
                    Background Check for Coders
                </a>
                <a id='book__design' title='Don&apos;t miss out. Get Zuri design books absolutely FREE!!! ' href="https://books.zuri.team/design-rules" target="_blank" rel='noreferrer' >
                    Design Books
                </a>
        </LinkWrapper>
        <div className='icons'>
            <SlackIcon/>
            <GitIcon/>
        </div>
        <Footer>
          <div className='footer-details'>
            <ZuriIcon 
              className='logo'
              onClick={() => {
              window.location.reload();
              }}/>
            <p>HNG Internship 9 Frontend Task</p>
            <IFGIcon/>
          </div>
        </Footer>
      </main>
    </div>
  );
}

export default App;
