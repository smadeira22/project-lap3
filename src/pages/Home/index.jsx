import React from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <h1>Check out my favourite artists!</h1>
    <section id="artist">
     
      <div>
      	<img src="https://l-hit.com/img_id/110913.jpg" />
        <button onClick={() => navigate('/JustinQuiles')}> Check artist</button>
      </div>
      <div>
        <img src="https://i.scdn.co/image/ab6761610000e5eb11ed192ea9e419dfaf801e9b" />
        <button onClick={() => navigate('/Lunay')}> Check artist</button>
      </div>
      <div>
        <img src="https://i1.sndcdn.com/artworks-9P2e4uRYTO8QKbWV-oZDgFg-t500x500.jpg" />
        <button onClick={() => navigate('/Feid')}> Check artist</button>
      </div>
    </section>
    </>
  );
}

export default Home;