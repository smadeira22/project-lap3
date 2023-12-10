import React from 'react'
import { JustinQuilesList } from '../../components'
import '../../App.css'
import { ArtistInfo1 } from '../../components/ArtistInfo'

const JustinQuiles = () => {
  return (
    <>  
    <div>
    <img src="https://media1.giphy.com/media/xUPGcBabZ3Pcs8Om76/giphy.gif?cid=ecf05e475hn96q8u88xepsejn0ej1d524jov35ucj0tr5l4c&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
     <h1>Justin Quiles'</h1>
    
       <ArtistInfo1/>
     </div>
     <section id="artistList">
     <JustinQuilesList/>
     </section>
   </>
  )
}

export default JustinQuiles