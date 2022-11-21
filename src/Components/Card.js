import React from 'react'
import dia from "../assets/dioment.PNG"
import Round from "../assets/round.PNG"
import Tria from "../assets/triangle.PNG"

const Card = () => {
    return (
        <div>

            <div className='cardmain'>


                <div className='dia'>
                    <div className='cardbox'>
                        <div>
                            <img src={dia} alt="" />
                        </div>
                        <div>
                            <p className='cardparagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, facilis, nemo corporis placeat veritatis  vero sunt quaerat temporibus </p>
                        </div>
                    </div>
                </div>
                <div className='dia'>
                    <div className='cardbox'>
                        <div>
                            <img className='roundimg' src={Round} alt="" />
                        </div>
                        <div>
                            <p className='cardparagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, facilis, nemo corporis placeat veritatis vero sunt quaerat temporibus</p>
                        </div>
                    </div>

                    <div>
                    </div>
                </div>
                <div className='dia'>
                    <div className='cardbox'>
                        <div >
                            <img src={Tria} alt="" />
                        </div>
                        <div>
                            <p className='cardparagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, facilis, nemo corporis placeat veritatis vero sunt quaerat temporibus </p>
                        </div>
                    </div>

                    <div>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default Card