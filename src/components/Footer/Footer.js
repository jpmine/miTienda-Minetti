import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
      <Fragment>
        <div class="footer-content">
            <h3>#LaBemol</h3>
            <p>Especialistas en guitarras</p>
            <ul class="socials">
                <li><Link to="instagram.com"><i class="fa fa-instagram"></i></Link></li>
                <li><Link to="twitter.com"><i class="fa fa-twitter"></i></Link></li>
                <li><Link to="youtube.com"><i class="fa fa-youtube"></i></Link></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>@copyright <Link to='/'>#LaBemol</Link> </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/categoria/electrica'>Eléctricas</Link></li>
                        <li><Link to='/categoria/acustica'>Acústicas</Link></li>
                        <li><Link to='/categoria/criolla'>Criollas</Link></li>
                        <li>Contacto</li>
                      </ul>
                    </div>
        </div>
    </Fragment>
  )
}
