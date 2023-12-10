import { FeidSongs } from '../Songs'


let songList3 = FeidSongs.map(song =>
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

const FeidList = () => {

    return (
        <div className="songsDiv">
            {songList3}
        </div>
    )
}
export default FeidList;
