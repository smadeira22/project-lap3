import React from 'react'
import { LunayList } from '../../components'
import '../../App.css'
import { ArtistInfo2 } from '../../components/ArtistInfo'

const Lunay = () => {
  console.log(LunayList)
  return (
    <>  
     <div>
      <img src="https://c.tenor.com/jtIuuHwlZ-AAAAAC/dont-move-lunay.gif"/>
      <h1>Lunay</h1>
        <ArtistInfo2/>
      </div>
      <section id="artistList">
        <LunayList />
      </section>
    </>
  )
}

export default Lunay