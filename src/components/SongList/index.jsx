import { JustinQuilesSongs } from '../../components/Songs'
import { LunaySongs } from '../Songs'
import { FeidSongs } from '../Songs'
import './styles.css'
/*
let songList1 = justinQuilesSongs.map(song =>
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
*/
let songList2 = LunaySongs.map(song =>
    <div key={song.id} className="songList">
        <img
            className="cover"
            src={song.imageUrl}
            alt={song.title + " cover photo"}
        />
        <h2>{song.title}</h2>

        <p>Release Date:{song.releasedDate}</p>
    </div>

);
/*
let songList3 = lunaySongs.map(song =>
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
*/
/*
const JustinQuilesList = () => {

    return (
        <div className="songsDiv">
            {songList1}
        </div>
    )
}
*/
const LunayList = () => {

    return (
        <div>
            {songList2}
        </div>
    )
}
/*
const feidList = () => {

    return (
        <div className="songsDiv">
            {songList3}
        </div>
    )
}*/

export default LunayList;



