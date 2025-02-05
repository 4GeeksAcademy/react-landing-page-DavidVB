import React from 'react'

//Creo el componente Jumbotron
const Jumbotron = () => {
    return (
        <>
            <div class="jumbotron bg-light p-5">
                <h1 class="display-4">A Warm Welcome!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Call to Action!</a>
                </p>
            </div>
        </>
    )
}

//Exportamos Jumbotron
export default Jumbotron;