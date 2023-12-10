import { LunaySongs } from '../Songs'

let songList2 = LunaySongs.map(song =>
    <section key={song.id} id="songList">
        <div className='divSong'>
            <img
            src={song.imageUrl}
            alt={song.title + " cover photo"}
            />
        <div>
            <h2>{song.title}</h2>
            <p>Release Date:{song.releasedDate}</p>
            <button>Like</button>

        </div>   
        </div>  
    </section>
);


export const LunayList = () => {

    return (
        <div>
            {songList2}
        </div>
    )
}

export default LunayList;



