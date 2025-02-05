import React from 'react'

//Creo el componente Card
//Y añadimos Array(x).fill que consiste en repetir x veces el mismo contenido
const Card = () => {
    return (
        <>
            <div class='row'>
                {Array(4).fill(
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card">
                            <img class="card-img-top" src="https://placehold.co/600x400/EEE/31343C" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}



//Exportamos Card
export default Card;