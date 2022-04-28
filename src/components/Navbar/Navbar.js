export default function Menunavbar() {
    return (
        <header className="header">
                <div className="menu_simple">
                    <div className='navbar-logo'><img src={require('./logo-labemol.png')} /></div>
                    <div><a href="#">GUITARRAS ELECTRICAS</a></div>
                    <div><a href="#">ACUSTICAS</a></div>
                    <div><a href="#">CRIOLLAS</a></div>
                    <div><a href="#">AMPLIFICADORES</a></div>                    
                </div>        
        </header>
    );
  }