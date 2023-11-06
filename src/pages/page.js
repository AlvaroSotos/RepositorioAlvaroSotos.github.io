import React from 'react';
import { useThemeContext } from "../context/ThemeContext";
import logoGit from "../Imagenes/logogit.png"
import logoBitBucket from "../Imagenes/LogoBitbucket.png"
import game from "../Imagenes/InMonsters.png";
import enRaya from "../Imagenes/3EnRaya.png";
import palos from "../Imagenes/21Palos.png";
import buscaminas from "../Imagenes/Buscaminas_4.png"
import profile from "../Imagenes/profile.png"
import pang from "../Imagenes/Pang.png"
import logoC from "../Imagenes/CSharp_Logo_600x600.png"
import logoUnity from "../Imagenes/Unity_Technologies_logo.png"
import mail from "../Imagenes/Mailbox-amico.svg"
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import YouTube2 from 'react-youtube';
//import Imageen from "../Imagenes/PortadaImageen.png"
//import MaterialMuro from "../Imagenes/MaterialMuro.png"
//import CasaNeptuno from "../Imagenes/CasaNeptuno.png"
//import Banco from "../Imagenes/Banco.png"
import ShinChanGIF from "../Imagenes/ShinChan2.gif"
import OutlineNodes from "../Imagenes/OutlineNodes.png"
import HandPaintedNodes from "../Imagenes/HandPaintedNodes.png"
import PivotBakingGIF from "../Imagenes/PivotBaking.gif"
import InterfazGIF from "../Imagenes/InterfazGIF.gif"
import CortonAnimacionGIF from "../Imagenes/CortoAnimacionGIF.gif"
import AnimacionPokeball from "../Imagenes/AnimacionPokeball.gif"
import MonstersOdysseyGIF from "../Imagenes/MonsterOdysseyGIF.gif"
import LogoShaderToy from "../Imagenes/ShaderToy.png"
import ZiggsVFXGIF from "../Imagenes/ZiggsVFX.gif"







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
      const [modalIsOpenCorto, setModalIsOpenCorto] = React.useState(false);
      const [modalIsOpenBulbasaur, setModalIsOpenBulbasaur] = React.useState(false);
      const [modalIsOpenGraphicInterface, setModalIsOpenGraphicInterface] = React.useState(false);
      //const [modalIsOpenImageen, setModalIsOpenImageen] = React.useState(false);
      const [modalIsOpenShaderFragment, setModalIsOpenShaderFragment] = React.useState(false);
      const [modalIsOpenStylizedShader, setModalIsOpenStylizedShader] = React.useState(false);
      const [modalIsOpenZiggsVFX, setModalIsOpenZiggsVFX] = React.useState(false);
      const videoId = "gsbUS7zGTtA";
      const bulbasaurVideoId = "4ky0rCV_ZOs";
      const GraphicInterfaceVideoId = "aiH3Y2bVk7g"; 
      const ShaderFragments = "QdMTsZmNfXQ";
      const ShinChanVid = "S41dxq-GugY";
      const ZiggsVFXVid = "bcnnzZ9n3Sg";


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
      function openModalCorto(){
        setModalIsOpenCorto(true)
      }
      function openModalBulbasaur(){
        setModalIsOpenBulbasaur(true)
      }
      function openModalGraphicInterface(){
        setModalIsOpenGraphicInterface(true)
      }
      //function openModalImageen(){
       // setModalIsOpenImageen(true)
      //}
      function openModalShaderFragment(){
        setModalIsOpenShaderFragment(true)
      }
      function openModalStylizedShader(){
        setModalIsOpenStylizedShader(true)
      }
      function openModalZiggsVFX(){
        setModalIsOpenZiggsVFX(true)
      }
      
      function closeModal() {
        setModalIsOpenGame(false);
        setModalIsOpenBuscaminas(false);
        setModalIsOpenPalos(false);
        setModalIsOpenPang(false);
        setModalIsOpenRaya(false);
        setModalIsOpenCorto(false);
        setModalIsOpenBulbasaur(false);
        setModalIsOpenGraphicInterface(false);
        //setModalIsOpenImageen(false);
        setModalIsOpenShaderFragment(false);
        setModalIsOpenStylizedShader(false);
        setModalIsOpenZiggsVFX(false);

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
            <p>My name is Álvaro Sotos, I'm a 3D artist and video games programmer, I'm always looking to learn and improve my skills. I hope you like my proyects.</p>
            <p>📍 Madrid, Spain</p>
            <p><h3>Repositories </h3></p>
            <div className='skillsContainer'>
              
            <a href="https://bitbucket.org/alvarosotos/"><img src={logoBitBucket} alt="logoBitbucket"/></a>
            <a href="https://www.shadertoy.com/profile/?show=shaders"><img src={LogoShaderToy} alt="logoShaderToy"/></a>
            <a href="https://github.com/alvarosotos"><img src={logoGit} alt="logoGithub"/> </a>   
            </div>
            

            <p></p>
            <h3>Skills </h3>
            <div className='skillsContainer'>
            <img src={logoC} alt="logo C"></img>
            <img src={logoUnity} alt="logo Unity"></img>
            </div>
            </div>
            </section>
            <section className="portfolio">
            <h2>Portfolio<hr></hr></h2>
            <br></br>
            <div className='contenedorModal'>

{/*copiar*/}
<div className="modal">
                <img title = "ZiggsVFX" src={ZiggsVFXGIF} alt="ZiggsVFX" onClick={openModalZiggsVFX}></img>
                <Modal
                    isOpen={modalIsOpenZiggsVFX}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="StylizedShader"
                >
                    <div className="ZiggsVFX">
                    <YouTube title = "Ziggs' Q grafitti skin VFX" className="ZiggsVFX" videoId={ZiggsVFXVid} alt="Ziggs' Q grafitti skin VFX" controls ></YouTube>
                    <h3>Ziggs' Q grafitti skin VFX</h3>
                    <p>This is a VFX I made wondering how would it be If league of legends champion Ziggs had a Ink/grafitti skin. To know more about how I made every part of the effect, the mesh and the main shader
                      take a look at the post I did in ArtStation here: <a href = "https://www.artstation.com/artwork/g04Z1Q"> (Breakdown Post)</a> </p>
                      <p>|</p>
                    <p>Date: October 2023</p>
                    <p className="service">Service: Unity3D, Blender and Substance Designer</p>
                    </div>
                </Modal>
            </div>
<div className="modal">
                <img title = "StylizedShader" src={ShinChanGIF} alt="StylizedShader" onClick={openModalStylizedShader}></img>
                <Modal
                    isOpen={modalIsOpenStylizedShader}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="StylizedShader"
                >
                    <div className="StylizedShader">
                    <YouTube title = "StylizedShader" className="StylizedShader" videoId={ShinChanVid} alt="Stylized Hand-draw shader" controls ></YouTube>
                    <h3>Unity Stylized painted shader</h3>
                    <p>This time I wanted to reply this shader from a tutorial <a href = "https://www.youtube.com/watch?v=TvqNnKKKd8A&list=WL&index=5&t=0s"> (Link here)</a>, but using the URP shader graph
                     instead of a HDRP surface shader, I made the texture by using a tile generator in Substance Designer. I also implemented an animated outline to achieve a greater hand-drawn effect, it has some drawing mistakes but I believe it gives a good touch anyways. 
                     Here you can see both shader graphs nodes: </p> 
                     <p><img title = "StylizedShader" src={OutlineNodes} alt="StylizedShader" width = "872" heigh = "400"></img>
                     <img title = "HandPaintedNodes" src={HandPaintedNodes} alt="HandPaintedNodes" width = "800" heigh = "400"></img></p>
                    <p>Date: august 2023</p>
                    <p className="service">Service: Unity3D, Blender and Substance Designer</p>
                    </div>
                </Modal>
            </div>
<div className="modal">
                <img title = "FragmentShader" src={PivotBakingGIF} alt="FragmentShader" onClick={openModalShaderFragment}></img>
                <Modal
                    isOpen={modalIsOpenShaderFragment}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="FragmentShader"
                >
                    <div className="FragmentShader">
                    <YouTube title = "FragmentShader" className="FragmentShader" videoId={ShaderFragments} alt="Fragment Shader" controls ></YouTube>
                    <h3>Pivot Baking Fragment Shader</h3>
                    <p>This shader was made thanks to Cyanilux's tutorial breakdown. It's made by creating a fractured mesh in Blender,
                       baking the fractured mesh's pivot into UVs and later in Unity, I modify this pivots position and scale. In this case
                        it is modified by the position of a capsule and I also included some color and emission variation. </p>
                    <a href="https://youtu.be/QdMTsZmNfXQ">YouTube link</a>
                    <p></p>
                    <p>Date: june 2023</p>
                    <p className="service">Service: Unity3D</p>
                    </div>
                </Modal>
            </div>
<div className="modal">
                <img title = "GraphicInterface" src={InterfazGIF} alt="graphicinterface" onClick={openModalGraphicInterface}></img>
                <Modal
                    isOpen={modalIsOpenGraphicInterface}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="graphicinterface"
                >
                    <div className="graphicinterface">
                    <YouTube title = "GraphicInterface" className="graphicinterface" videoId={GraphicInterfaceVideoId} alt="Graphic Interface" controls ></YouTube>
                    <h3>OpenTK Graphic Interface</h3>
                    <p>This is a my HNC final project, I wanted to learn more about graphic programming so I started by creating a 3D space using OpenTK ( an OpenGL wrapper).This is a video showing how I move around the objects in movement that I made.
                       I look forward to keep improving it and learning more and more. </p>
                    <a href="https://youtu.be/aiH3Y2bVk7g">YouTube link</a>
                    <p></p>
                    <a href="https://bitbucket.org/alvarosotos/opentk-graphic-interface/src/master/">Repository link</a>
                    <p>Date: june 2023</p>
                    <p className="service">Service: OpenTK</p>
                    </div>
                </Modal>

                
                
            </div>

<div className="modal">
                <img title = "Cortoanimacion" src={CortonAnimacionGIF} alt="cortoanimacion" onClick={openModalCorto}></img>
                <Modal
                    isOpen={modalIsOpenCorto}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="cortoanimacion"
                >
                    <div className="cortoanimacion">
                    <YouTube title = "Cortoanimacion" className="cortoanimacion" videoId={videoId} alt="Corto de animacion" controls ></YouTube>
                    <h3>Blender animation short</h3>
                    <p>This is a blender animation short made in Blender with 2 partners, we made all the scenes models, including props, we wanted to give it a cartoon style so we made a toon shader with a fresnel and glossy effects </p>
                    <a href="https://www.youtube.com/watch?v=gsbUS7zGTtA">YouTube link.</a>
                    <p>Date: march 2023</p>
                    <p className="service">Service: Blender</p>
                    </div>
                </Modal>

                
                
            </div>
            <div className="modal">
            <img src={MonstersOdysseyGIF} alt="game" onClick={openModalGame}></img>
                <Modal
                    isOpen={modalIsOpenGame}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="monsters"
                >
                <div className="monsters" onClick={closeModal}>
                    <img className="monsters" src={game} alt="game"></img>
                    <h3>MONSTERS ODYSSEY</h3>
                    <p>We developed as a team in my HNC a 3D action RPG named Monsters Odyssey where I was the lead programmer and I've been expanding my knowledge by
                      implementing algorithms like flocking, creating diferent type of shaders, like a ToonShader, an outline, displacement shader to make sea
                      waves or fishes swim moves and also I used them to make better VFX.
                      I implemented for first time the Unity new Input System, a third person camera (using a virtual camera) that can be locked into enemies, a recursive pool of objects...
                      Monsters Odyssey has 5 levels, each made by one of the team, I made an underwater adventure where you figth against some enemies made by me but also harvest some key plants to beat the final boss!. 
                       Here are some links where you can see some of the shaders and VFX in action:</p>
                    <p> <a href="https://github.com/AlvaroSotos/MonstersOdyssey-Scripts"> My scripts at GitHub</a><a href="https://youtu.be/BItB2lQJZRM">Tornado VFX</a><a href="https://youtu.be/zH0kw0nh9sg">Tornado Battle VFX</a><a href="https://youtu.be/HjMlDVfnax0">Fish vertex displacement</a>
                    <a href="https://youtu.be/_brRltwmNUE">Plants vertex displacement</a><a href="https://youtu.be/1Pc9TvsKzcA">Dissolve helmet animation</a></p>
                    <p>Date: march 2022</p>
                    <p className="service">Service: c# Windows forms</p>
                </div>
                </Modal>
                </div>
            <div className="modal">
                <img title = "BulbasaurCard" src={AnimacionPokeball} alt="BulbasaurCard" onClick={openModalBulbasaur}></img>
                <Modal
                    isOpen={modalIsOpenBulbasaur}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="BulbasaurCard"
                >
                    <div className="BulbasaurCard">
                    <YouTube2 title = "Bulbasaurcard" className="BulbasaurCard" videoId={bulbasaurVideoId} alt="3D Bulbasaur Card Video" controls ></YouTube2>
                    <h3>Blender 3D bulbasaur card</h3>
                    <p>I modeled this 3D card in Blender and rendered it using the compositing tab in Blender to finally get this result.
                       I wanted to give bulbasaur a cartoon style so I used a toon shader made with nodes and added an outline material too.</p>
                    <a href="https://youtu.be/4ky0rCV_ZOs">YouTube link.</a>
                    <p>Date: january 2023</p>
                    <p className="service">Service: Blender</p>
                    </div>
                </Modal>

                
                
            </div>
            {/*<div className="modal">
                <img title = "EnviromentModeling" src={Imageen} alt="EnviromentModeling" onClick={openModalImageen}></img>
                <Modal
                    isOpen={modalIsOpenImageen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="EnviromentModeling"
                >
                    <div className="EnviromentModeling">
                    <img className="Imageen" src={Imageen} alt="Imageen"></img>
                    <img className="MaterialMuro" src={MaterialMuro} alt="MaterialMuro"></img>
                    <img className="CasaNeptuno" src={CasaNeptuno} alt="CasaNeptuno"></img>
                    <img className="Banco" src={Banco} alt="Banco"></img>
                    <h3>Realistic Enviroment Modeling</h3>
                    <p>This are some of the models, textures and materials that I made during my internship at Imageen. All of them are replies of spanish monuments, at the past or in the present:
                       Alcántara's roman bridge, period homes from Cánovas' square e.t.c. During these months I also learned Substance Designer to make fully editable materials. </p>
                    <p></p>
                    <p>Date: june 2023</p>
                    <p className="service">Service: Blender and Substance Painter/Designer</p>
                    </div>
                </Modal>

                
                
    </div>*/}
            
{/*copiar*/}

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
            <h2>Contact me<hr></hr></h2>
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