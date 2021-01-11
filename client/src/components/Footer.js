import React from "react";
import "./Footer.css";
// I need body with classname if i want to use Footer with bootstrap
export default function Footer() {
    return (
        <body className="d-flex flex-column min-vh-100">
            <footer className="mt-auto">
                <div className="main-footer">
                    <div className="container">
                        <div className="row">
                            {/* Column1 */}
                            <div className="col">
                                <h4>Integrantes</h4>
                                <ul className="list-unstyled">
                                    <li>Lucas Gualampa</li>
                                </ul>
                            </div>
                            {/* Column2 */}
                            <div className="col">
                                <h4>Redes sociales</h4>
                                <ul className="list-unstyled">
                                    <li><i class='fab fa-linkedin' /></li>
                                    <li><i class='fab fa-instagram' /></li>
                                    <li><i class='fab fa-facebook-f' /></li>
                                </ul>
                            </div>
                            {/* Column3 */}
                            <div className="col">
                                <h4>Hoja de Ruta</h4>
                                <ul className="list-unstyled">
                                    <li>Pagina Principal</li>
                                    <li>Catalogo</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm text-center">
                                MINI-Merchant <i class="fas fa-comment-dollar" /> &copy;
                                {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
    );
}
