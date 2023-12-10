import { JustinQuilesSongs } from '../Songs'


let songList1 = JustinQuilesSongs.map(song =>
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

/*
<div key={song.id} className="songList">
        <img
            className="cover"
            src={song.imageUrl}
            alt={song.title + " cover photo"}
        />
        <h2>{song.title}</h2>
        <p>{song.releasedDate}</p>
    </div>

*/ 

const JustinQuilesList = () => {

    return (
        <div className="songsDiv">
            {songList1}
        </div>
    )
}

export default JustinQuilesList;
