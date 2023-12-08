import './style.css'
import { songs } from '../../components/Songs'

let songList = songs.map(song =>
    <div key={song.id} className="songList">
        <img
            className="cover"
            src={song.imageUrl}
            alt={song.title + " cover photo"}
        />
        <h2>{song.title}</h2>
        <p>{song.releasedDate}</p>
    </div>
);


const listSong = () => {

    return (
        <div className="songsDiv">
            {songList}
        </div>
    )
}

export default listSong


