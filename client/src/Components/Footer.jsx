import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer >
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3"/>
          <p class="font-italic text-white">
          Rassemblez votre gestion commerciale <br/> Augmentez votre chiffre d'affaires <br/> Facilitez votre comptabilité


                


          </p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="/" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="/" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="/" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="/" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
            <li class="list-inline-item"><a href="/" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="/" class="text-white">Certification</a></li>
            <li class="mb-2"><a href="/" class="text-white">Comment ça marche ?</a></li>
            <li class="mb-2"><a href="/" class="text-white">Combien ça coute ?</a></li>
            <li class="mb-2"><a href="/" class="text-white">Aide</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="/" class="text-white"> Connexion</a></li>
            <li class="mb-2"><a href="/" class="text-white">Blog</a></li>
            <li class="mb-2"><a href="/" class="text-white"> Services</a></li>
            <li class="mb-2"><a href="/" class="text-white">Mentions légales</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Inscription</h6> 
          <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Entrez votre adresse mail" aria-describedby="button-addon1" class="form-control border-0 shadow-0"/>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class=" py-4">
      <div class="container text-center">
        <p class="text-white mb-0 py-2">© 2021 Gariox All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
