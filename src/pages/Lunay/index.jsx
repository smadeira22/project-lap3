import React from 'react'
import { LunayList } from '../../components'
import './styles.css'
import { ArtistInfo2 } from '../../components/ArtistInfo'

const Lunay = () => {
   console.log(LunayList)
  return (
    <>  
    <h1>Lunay</h1>
    <div></div>
    <ArtistInfo2/>
      <section id="artistList">
        <LunayList />
      </section>
    </>
  )
}

export default Lunay