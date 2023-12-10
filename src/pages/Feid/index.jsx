import React from 'react'
import { FeidList } from '../../components'
import '../../App.css'
import { ArtistInfo3 } from '../../components/ArtistInfo'

const Feid = () => {
  return (
    <>  
    <div>
    <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGdmbWE5NTZja2RxeHAwOGJmdnJ3d2Q2OG5raWdmODYwM3ZlcTBxYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QOgpQ0EzRG55WipPzX/giphy.gif"/>
     <h1>Feid</h1>
    
       <ArtistInfo3/>
     </div>
     <section id="artistList">
       <FeidList/>
     </section>
   </>
  )
}

export default Feid