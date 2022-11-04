import React from 'react'
import homeImg from "../assets/2.webp";
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai";


const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>HackerLytics</h1>
                    <p>Solution of your all IT Problems </p>
                </main>
            </div>


            <div className="home2" >
                <img src={homeImg} alt="Graphics" />

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur 
                       adipisicing elit. Eius pariatur autem, dolorem 
                       doloremque sunt cumque laudantium, eos perspiciatis unde
                       amet minus magnam deleniti tenetur aut et odit eveniet? Quas,
                        doloremque tempora repellat dolore asperiores facilis optio odit 
                        mollitia aperiam labore libero aspernatur. Id, veniam ex?</p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are ?</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo reiciendis excepturi eum asperiores aperiam, incidunt ab dolor beatae debitis tempore rem nihil itaque voluptatum ut ullam earum temporibus dolorem. Eaque impedit cumque eius, repellendus earum placeat animi aperiam. Assumenda aliquam, architecto facere eveniet sequi nemo totam inventore. Eius nemo, ipsum natus numquam aspernatur expedita harum facilis, inventore, enim accusantium fugit quidem perferendis quis consequuntur? Odit, eum asperiores? Culpa dignissimos doloribus adipisci nesciunt aperiam suscipit rerum, consequatur magni cupiditate porro quibusdam aliquam facilis consectetur eos, dolores hic nobis dolore provident eius mollitia! Animi, error consequatur.</p>
                </div>
            </div>


            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{animationDelay: "0.3s"}}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{animationDelay: "0.5s"}}>
                            <AiFillAmazonCircle />
                            <p>Amazone</p>
                        </div>

                        <div style={{animationDelay: "0.7s"}}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                        <div style={{animationDelay: "0.9s"}}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>

        </>
    )
}

export default Home