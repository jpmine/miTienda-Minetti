import CartWidget from '../CartWidget/CartWidget';

export default function Menunavbar() {
    return (
        <header className="header">
            <nav class="navbar navbar-expand-lg navbar navbar-dark menu_simple">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="img/logo-labemol.png" alt="" width="60" height="48" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Eléctricas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Acústicas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Criollas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Amplificadores</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Quiero encontrar..." aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                    <CartWidget className="cart-logo"/>
                </form>
                </div>
            </div>
            </nav>     
        </header>
    );
  }