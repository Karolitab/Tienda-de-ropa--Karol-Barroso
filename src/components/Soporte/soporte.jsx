import React from "react";
import {Container} from 'react-bootstrap'
import './soporte.css'



export default function Soporte(){
    return(
        <Container fluid  className="containere">
               <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img src="https://pbs.twimg.com/media/Emq58PfXIAE9XNo?format=png&name=900x900" class="img-fluid rounded-circle" alt="" /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4"></h2>
                            
                            <h2> Contactanos al número <b> 000-000-000</b></h2>
                            <h2> o al correo <b> xx@gmail.com</b></h2>
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        
        </Container>
    )
}