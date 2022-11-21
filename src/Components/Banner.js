import {React, useState} from 'react'
import bannerimage from "../assets/arrows.svg"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Bannerimg from "../assets/bannerimg.svg"

const Banner = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='MainDiv'>
            <div className='MainContainer'>
                <div className='FirstContainer'>
                    <div className='Firstin'>
                    <div className='MainHead'>
                        <h1>
                            Always Look On The Bright Side Of Life.
                        </h1>
                    </div>
                    <div className='Paragraph'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias cum necessitatibus quia quasi ullam incidunt sapiente magnam ut illo</p>
                    </div>
                    <div className='ButtonLogin'>
                        <button className='btn btn-light buttonlog'  onClick={handleShow} >Login</button>
                    </div>
                    </div>
                </div>

                <div className='BannerIMG'>
                    <img className='imageContainer' src={bannerimage}  alt="bannernew" />
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <div className='loginclr'>
          <Modal.Title>Login</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
            <div>
            <label>Username</label>
            <input className='form-control' type='text' />
            </div>
        </Modal.Body>
        <Modal.Body>
           <div>
           <label>Password</label>
            <input className='form-control' type='password' />
           </div>
        </Modal.Body>
        <Modal.Body>
            <label>Forget Password</label>
            
        </Modal.Body>
        <Modal.Footer>
         <div >
          <Button className='logbuttonmodal' variant="light" onClick={handleClose}>
            Login
          </Button>
          </div>
        </Modal.Footer>
      </Modal>



        </div>
    )
}

export default Banner