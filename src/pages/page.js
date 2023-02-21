import React from 'react';
import { useThemeContext } from "../context/ThemeContext";
import logoGit from "../Imagenes/logogit.png"
import logoBitBucket from "../Imagenes/LogoBitbucket.png"
import game from "../Imagenes/game.png";
import enRaya from "../Imagenes/3EnRaya.png";
import palos from "../Imagenes/21Palos.png";
import buscaminas from "../Imagenes/Buscaminas_4.png"
import profile from "../Imagenes/profile.png"
import pang from "../Imagenes/Pang.png"
import logoC from "../Imagenes/CSharp_Logo_600x600.png"
import logoUnity from "../Imagenes/Unity_Technologies_logo.png"
import mail from "../Imagenes/Mailbox-amico.svg"
import Modal from 'react-modal';

import "../App.css"
const Page = () => {
  const { theme } = useThemeContext();
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      const [modalIsOpenGame, setModalIsOpenGame] = React.useState(false);
      const [modalIsOpenBuscaminas, setModalIsOpenBuscaminas] = React.useState(false);
      const [modalIsOpenPalos, setModalIsOpenPalos] = React.useState(false);
      const [modalIsOpenRaya, setModalIsOpenRaya] = React.useState(false);
      const [modalIsOpenPang, setModalIsOpenPang] = React.useState(false);

    function openModalGame() {
        setModalIsOpenGame(true);
      }
      
      function openModalBuscaminas() {
        setModalIsOpenBuscaminas(true);
      }
      function openModalRaya(){
        setModalIsOpenRaya(true)
      }
      function openModalPalos(){
        setModalIsOpenPalos(true)
      }
      function openModalPang(){
        setModalIsOpenPang(true)
      }
      
      function closeModal() {
        setModalIsOpenGame(false);
        setModalIsOpenBuscaminas(false);
        setModalIsOpenPalos(false);
        setModalIsOpenPang(false);
        setModalIsOpenRaya(false);
      }
    
    
    return (
          <main className={theme}>
            <section className="home">
            <h1 className="tittle">Álvaro Sotos</h1>
            <p> Video game programmer - 3D Artist </p>
            </section>
            <section className="about">
            <img className='avatar' src={profile} alt="avatar Alvaro Sotos"></img>
            <div>
            <h2>About me </h2><hr></hr>
            <p>My name is Álvaro Sotos, I'm a 3D artist and videogames programmer student, I'm always looking to learn and improve my skills. I hope you like my proyects.</p>
            <p>📍Madrid, Spain</p>
            <ul>
            <li>
            <a href="https://github.com/alvarosotos"><img src={logoGit} alt="logoGithub"/> </a> 
            </li>
            <li>
            <a href="https://bitbucket.org/alvarosotos/"><img src={logoBitBucket} alt="logoBitbucket"/></a>
            </li>
            </ul>
            <h3>Skills </h3>
            <div className='skillsContainer'>
            <img src={logoC} alt="logo C"></img>
            <img src={logoUnity} alt="logo Unity"></img>
            </div>
            </div>
            </section>
            <section className="portfolio">
            <h2>Portfolio<hr></hr></h2>
            <div className='contenedorModal'>
            <div className="modal">
            <img src={game} alt="game" onClick={openModalGame}></img>
                <Modal
                    isOpen={modalIsOpenGame}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="monsters"
                >
                <div className="monsters" onClick={closeModal}>
                    <img className="monsters" src={game} alt="game"></img>
                    <h3>MONSTERS ODYSSEY</h3>
                    <p>Right now in my HND I'm developing as a team a 3D action RPG named Monsters Odyssey where I'm the lead programmer and I've been improving my code implementing the Unity new Input System, a third person camera (using a virtual camera) that can be locked into enemies,I made an infinite pool of objects and also a flock algorithym that controls the behavior of the fishes you'll see at an underwater level, the enemies in this level will also behave in a similar way but having also an attack behavior. Also I'm learning unity shaders and OpenGL and I aim to apply it to the game.</p>
                    <p>Date: January 2022</p>
                    <p className="service">Service: c# Windows forms</p>
                </div>
                </Modal>
                </div>
                <div className="modal">
                <img src={buscaminas} alt="buscaminas" onClick={openModalBuscaminas}></img>
                <Modal
                    isOpen={modalIsOpenBuscaminas}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="buscaminas"
                >
                    <div className="buscaminas">
                  <img  className="buscaminas" src={buscaminas} alt="buscaminas"></img>
                    <h3>MINESWEEPER</h3>
                    <p>Minesweeper game done in c# windows forms. I used list of bottoms to make the board, those react to right click to show what's behind or left click to place a flag, if you find an empty square it will show all boxes around like the clasic minesweeper, this can happen thanks to an iterative function that works as a star algorithm </p>
                    <a href="https://bitbucket.org/alvarosotos/minesweeper/src/main/"> Bitbucket link MINESWEEPER</a>
                    <p>Date: January 2022</p>
                    <p className="service">Service: c# Windows forms</p>
                </div>
                </Modal>
                </div>
                <div className="modal">
                <img src={pang} alt="pang" onClick={openModalPang}></img>
                <Modal
                    isOpen={modalIsOpenPang}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="pang"
                >
                    <div className="pang">
                    <img className="pang" src={pang} alt="pang" ></img>
                    <h3>PANG</h3>
                    <p>This is my first unity game, I made a demo version of the old game Pang using a 3D pixel style, I made the assets with Magica Voxel and added some effect with the Unity Particle System.</p>
                    <a href="https://bitbucket.org/alvarosotos/pang/src/main/">Bitbucket link PANG</a>
                    <p>Date: March 2022</p>
                    <p className="service">Service: Unity 3D</p>
                    </div>
                    </Modal>
                </div>
                <div className="modal">
                <img src={palos} alt="21palos" onClick={openModalPalos}></img>
                <Modal
                    isOpen={modalIsOpenPalos}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="palos"
                >
                <div className="palos">
                 <img className="palos" src={palos} alt="21palos"></img>
                    <h3> 21STICKS</h3>
                    <p>This is the first game I made in the visual c# console, you can pIay against an unbeatable IA or against your friend. You can also ask for random facts. His menu is totally accesible from any moment of the execution and it doesnt have any bug.</p>
                    <a href="https://bitbucket.org/alvarosotos/21sticks/src/main/">Bitbucket link 21STICKS</a>
                    <p>Date: November 2021</p>
                    <p>Service: c# console</p>
                    </div>
                    </Modal>
                </div>
                <div className="modal">
                <img src={enRaya} alt="3enraya" onClick={openModalRaya}></img>
                <Modal
                    isOpen={modalIsOpenRaya}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="enraya"
                >
                    <div className="enraya">
                    <img className="enraya" src={enRaya} alt="3enraya" ></img>
                    <h3>TICTACTOE</h3>
                    <p>This is a tic-tac-toe game that I made in c# console, it has a menu that is accesible at any time. You can play with a friend and it has 0 bugs</p>
                    <a href="https://bitbucket.org/alvarosotos/tictactoe/src/main/">Bitbucket link TICTACTOE </a>
                    <p>Date: December 2021</p>
                    <p className="service">Service: c# console</p>
                    </div>
                </Modal>
                
            </div>
            </div>
            </section>
            <section className="contact">
           <img src={mail} alt= "gif email"></img>
           <div>
            <h2>Contact me <hr></hr></h2>
            <li>
            <a href="mailto:alvarosotos28@gmail.com">📫alvarosotos28@gmail.com</a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/%C3%A1lvaro-sotos-murillo-897952227/">💻 Perfil de LinkedIn </a>
            </li>
           </div>
            </section>
        </main>
)
}
export default Page