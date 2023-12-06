import { useState } from 'react'
import './App.css'
import { ArtistInfo1 } from './components/ArtistInfo'
import { ArtistInfo2 } from './components/ArtistInfo'
import { ArtistInfo3 } from './components/ArtistInfo'

function App() {
/*
  const Songs = [
    { title: 'Te Perdio', id: 1, imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ab/c2/1e/abc21e0c-3a9b-dc84-f69b-e28b441c788f/5054197891748.jpg/1000x1000bb.png'},
    {}
    
  ]

  let listSongs = Songs.map(song =>
    <section key={song.id} id="artistList">
      <div>
        <img
        className="cover"
        src={song.imageUrl}
        alt={song.title + " cover photo"}
      />
      <h2>{song.title}</h2>
      <p>{song.date}</p>
      </div>

    </section>
  );
*/
  const[inputText, setInputText] = useState('')
  const[submitValue, setSubmitValue] = useState('')

  const handleInput = (e) => {
    setInputText(e.target.value)
    console.log(e.target.value)
  }
  const handleSubmit = (e) => {
    e.prevent.Deafult()
    setSubmitValue(inputText)
  }

  return (/*
    <div className='App'>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Clicker />} />
        <Route path="/getter" element={<Getter />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>*/
    <>
    <h1>Check out some of my favourites songs and artists!</h1>
    <ArtistInfo1/>
    
   
      <h2>Songs</h2>
      <section id="artistList">
        <div>
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ab/c2/1e/abc21e0c-3a9b-dc84-f69b-e28b441c788f/5054197891748.jpg/1000x1000bb.png"></img>
          <h2>Te Perdió</h2>
          <p>Release Date: 09/11/2023</p>
          <a href="https://open.spotify.com/intl-pt/track/3kJcccOmysUkWWyOQvxKIw">Listen here</a>
          <button>Like</button>
        </div>
        <div>
          <img src="https://t2.genius.com/unsafe/255x255/https%3A%2F%2Fimages.genius.com%2F007fe81da9e626c905a23149a6cdae76.1000x1000x1.png"></img>
          <h2>Medallo</h2>
          <p>Release Date: 27/10/2021</p>
          <a href="https://open.spotify.com/intl-pt/track/6lX6l7OuA3qrnIRfdsr0dw">Listen here</a>
          <button>Like</button>
        </div>
         <div>
          <img src="https://images.genius.com/4aaffbe0f0864405dd920ed50be47eb0.1000x1000x1.jpg"></img>
          <h2>PORFA - Remix</h2>
          <p>Release Date: 20/06/2020</p>
          <a href="https://open.spotify.com/intl-pt/track/4iKznA0Zia7dNQxZ6574uC">Listen here</a>
          <button>Like</button>
        </div>
        <div>
          <img src="https://t2.genius.com/unsafe/255x255/https%3A%2F%2Fimages.genius.com%2Fff0208e6eb5ff85df5b479dd6540ad98.1000x1000x1.jpg"></img>
          <h2>Egoísta</h2>
          <p>Release Date: 10/03/2017</p>
          <div>
          <a href="https://open.spotify.com/intl-pt/track/5ESAML4PZAbsiTK6OgRV2q">Listen here</a>
          <button>Like</button>
        </div>
        </div>
      </section>
      <hr></hr>
      <ArtistInfo2/> 
      <h2>Songs</h2>
      <section id="artistList">
        <div>
          <img src="https://corazonurbano.com/wp-content/uploads/2019/10/lunay-epico-portada.jpg"></img>
          <h2>Soltera</h2>
          <p>Release Date: 25/10/2019</p>
          <a href="https://open.spotify.com/intl-pt/track/78uXMDNh2W2jZVrc4qBatZ">Listen here</a>
          <button>Like</button>
        </div>
        <div>
          <img src="https://t2.genius.com/unsafe/255x255/https%3A%2F%2Fimages.genius.com%2F97a65eb6b5ad8dd79ad8bc5ad5f6afd0.1000x1000x1.png"></img>
          <h2>LE GUSTA QUE LA VEAN</h2>
          <p>Release Date: 21/05/2021</p>
          <a href="https://open.spotify.com/intl-pt/track/3Xaiksu578RaSvmvq893dg ">Listen here</a>
          <button>Like</button>
        </div>
         <div>
          <img src="https://t2.genius.com/unsafe/255x255/https%3A%2F%2Fimages.genius.com%2F717e6146b151d1e5497301995bf6e595.1000x1000x1.png"></img>
          <h2>TODO O NADA</h2>
          <p>Release Date: 21/05/2021</p>
          <a href=" https://open.spotify.com/intl-pt/track/59rjsHYxdxeUG6gd43Emzs">Listen here</a>
          <button>Like</button>
        </div>
        <div>
          <img src="https://images.genius.com/a7029b3364600d98a50c0902b1fd015c.500x500x1.jpg"></img>
          <h2>Si Te Vas Conmigo</h2>
          <p>Release Date: 11/05/2018</p>
          <a href="https://open.spotify.com/intl-pt/album/6AAlu0DqcjBVH2bkJZoInM">Listen here</a>
          <button>Like</button>
        </div>
      </section>
      <hr></hr>
      <ArtistInfo3/> 
      <h2>Songs</h2>
      <section id="artistList">
        <div>
          <img src="https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c5/c0/ce/c5c0cedf-07a1-6ef6-7e53-6e59955bc804/22UMGIM88226.rgb.jpg/1200x1200bf-60.jpg"></img>
          <h2>Feliz Cumpleaños Ferxxo</h2>
          <p>Release Date: 14/09/2022</p>
          <a href="https://open.spotify.com/intl-pt/track/2CeKVsFFXG4QzA415QygGb">Listen here</a>
          <button>Like</button>
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/I/51CRgqo2VKL.jpg"></img>
          <h2>CHORRITO PA LAS ANIMAS</h2>
          <p>Release Date: 02/12/2022</p>
          <a href="https://open.spotify.com/intl-pt/track/0CYTGMBYkwUxrj1MWDLrC5">Listen here</a>
          <button>Like</button>
        </div>
         <div>
          <img src="https://t2.genius.com/unsafe/255x255/https%3A%2F%2Fimages.genius.com%2Ff63ef23271daf3475b35d6728b982a6f.1000x1000x1.png"></img>
          <h2>VENTE CONMIGO</h2>
          <p>Release Date: 04/08/2023</p>
          <a href="https://open.spotify.com/intl-pt/track/4zzyCocu8LZVqctOGSfVKz">Listen here</a>
          <button>Like</button>
        </div>
        <div>
          <img src="https://t2.genius.com/unsafe/606x0/https%3A%2F%2Fimages.genius.com%2F47b7b46ed404cc0757255bc17494599e.1000x1000x1.jpg"></img>
          <h2>Niña Bonita</h2>
          <p>Release Date: 29/09/2023</p>
          <a href="https://open.spotify.com/intl-pt/track/4VPoFy002PwspvctfYP6zx">Listen here</a>
          <button>Like</button>
        </div>
      </section>
      <hr></hr>
      <div class="bottomDiv">
        <h2>Did you have a good time? Please leave a review below!</h2>
        <textarea 
        value={inputText}
        onChange={handleInput}
        ></textarea>
        <button 
        type="submit"
        onSubmit={handleSubmit}
        > Submit</button>
      </div>
        <h2>
          Reviews
        </h2>
      <div class="reviews">

      </div>
      
    </>
  )
}

export default App
