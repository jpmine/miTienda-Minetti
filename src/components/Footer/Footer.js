import React, { Fragment } from 'react'

export default function Footer() {
  return (
      <Fragment>
        <div class="footer-content">
            <h3>#LaBemol</h3>
            <p>Especialistas en guitarras</p>
            <ul class="socials">
                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>@copyright <a href="#">#LaBemol</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">Eléctricas</a></li>
                        <li><a href="">Acústicas</a></li>
                        <li><a href="">Criollas</a></li>
                        <li><a href="">Amplificadores</a></li>
                        <li><a href="">Contacto</a></li>
                      </ul>
                    </div>
        </div>
    </Fragment>
  )
}
