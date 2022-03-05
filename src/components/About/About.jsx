import React from "react";
import { Container} from 'react-bootstrap'
import './About.css'

export default function About(){
    return(
        <Container fluid  className="containere">
               <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img src="https://giffiles.alphacoders.com/162/162107.gif" class="img-fluid rounded-circle" alt="" /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4"></h2>
                            <p> Con casi 30 000 juegos publicados; desde grandes compañías hasta estudios independientes pasando por todo lo intermedio. Disfruta de ofertas exclusivas, actualizaciones automáticas y otras grandes ventajas en WolfGaming.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        
        </Container>
    )
}