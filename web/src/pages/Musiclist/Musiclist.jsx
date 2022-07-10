import React, { useState } from "react";
import axios from "axios";
import ViewEditSong from "../../components/ViewEditSong";
import DisplayList from "../../components/DisplayList/DisplayList";

const Musiclist = () => {
  const sampleSong = {
    title: "What you need",
    artist: "The Weeknd",
    album: "House of Balloons",
    genre: "R&B",
    coverArt: "LINK_HERE",
    time: 197,
  };

  const [youtubeLink, setYoutubeLink] = useState("");
  const [serviceProvider, setServiceProvider] = useState("Apple");
  const [song, setSong] = useState("");

  const fetchSongInfo = () => {
    axios
      .post(`http://localhost:4000/songinfo`, {
        youtubeLink,
        serviceProvider,
      })
      .then((result) => {
        const songInfo = result.data;
        setSong(songInfo);
        console.log(songInfo);
      })
      .catch((error) => {
        console.log("[error youtubelink api call]: ", error);
      });
  };

  const requestDownload = () => {
    axios
      .post(`http://localhost:4000/download`, {
        youtubeLink,
        location: "location",
        song: "song here",
      })
      .then((result) => {
        if (result.success) {
          console.log("finished downloading");
        } else {
          console.log("[ERROR]: ", result.error);
        }
      })
      .catch((error) => {
        console.log("[error download api call]: ", error);
      });
  };

  const switchServiceProvider = () => {
    console.log("switching to");
    if (serviceProvider === "Apple") {
      setServiceProvider("Spotify");
    } else {
      setServiceProvider("Apple");
    }
  };

  return (
    <div>
      <p>Musiclist page</p>
      <form>
        <input
          type="text"
          placeholder="enter youtube link"
          value={youtubeLink}
          onChange={(e) => {
            setYoutubeLink(e.target.value);
          }}
        />
        <input type="button" onClick={fetchSongInfo} value={"submit"} />
        <input
          type="button"
          onClick={switchServiceProvider}
          value={`Using ${serviceProvider}`}
        />
      </form>
      <DisplayList songList={[sampleSong, sampleSong]} />
      <ViewEditSong song={sampleSong} />
    </div>
  );
};

export default Musiclist;
