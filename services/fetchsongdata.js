const ytdl = require('ytdl-core')
const axios = require('axios').default

const spotify_client_token = "NEED_TO_GENERATE_TOKEN_HOURLY?"
const LIMIT = 5;

const words_to_remove = [
    "ft",
    "closed captioned",
    "official video",
    "official audio",
    "official music video",
    "official music audio",
    "4k",
    "hd",
]

const extractRequiredInfo = (songdata) => {
    if (!songdata || songdata==='') {
        return
    }

    songdata = songdata.replace(/\s*\(.*?\)\s*/g, '')
    songdata = songdata.replace(/ *\[[^\]]*]/, '');
    songdata = songdata.toLowerCase();

    let artist, title;
    if (songdata.includes('-')) {
        [artist, title] = songdata.split('-')
    } else if (songdata.includes(':')) {
        [artist, title] = songdata.split(':')
    }
    for (const i of words_to_remove) {
        if (title.includes(i)) {
            const index = title.indexOf(i)
            title = title.substring(0, index)
        }
    }
    return {
        "artist": artist.trim(),
        "title": title.trim()
    };
}

const getSongTitle = (url) => {
    const val =  ytdl.getInfo(url).then((response) => {
        return response
    })
    return val;
}

const fetchAppleMusicData = ({ title, artist }) => {
    const apple_url = encodeURI(`https://itunes.apple.com/search?term=${title} ${artist}&limit=${LIMIT}&entity=song`)

    const val = axios.get(apple_url).then(res => {
        return res;
    })
    return val;
}

const encode = (val) => {
    return val.replaceAll(' ', '+')
}

const fetchSpotifyMusicData = ({ title, artist }) => {
    const spotify_url = (`https://api.spotify.com/v1/search?query=track%3A${encode(title)}+artist%3A${encode(artist)}&type=track&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=10`)

    const val = axios.get(spotify_url, { headers: {Authorization: `Bearer ${spotify_client_token}`} }).then(jsonResponse => {
        console.log(jsonResponse.data)
        if (!jsonResponse.data.tracks){
            return [];
        } 
        return jsonResponse.data.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artist[0].name,
            album: track.album.name,
            uri: track.uri
        }))
    }).catch((err) => {
        console.error(err)
    })
    return val;
}

module.exports = { getSongTitle, extractRequiredInfo, fetchAppleMusicData, fetchSpotifyMusicData }