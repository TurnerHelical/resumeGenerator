import "../styles/header.css";

function Header() {
    window.onload = () => {
        const title = document.querySelector('.title');
        title.classList.add('fade-in');
    }
  return <>
            <header>
                <h1 className="title">Resume Generator</h1>
            </header>
  
        </>;
}

export default Header;
