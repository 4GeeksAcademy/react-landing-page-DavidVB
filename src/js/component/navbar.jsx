import React from 'react'

//Creo el componente Navbar
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    
                    <a class="navbar-brand" href="#">Start BootStrap</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSoportado" aria-controls="navbarSoportado" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSoportado">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        
                    </div>

                </div>
            </nav>
        </>
    )
}

//Exportamos Navbar
export default Navbar;