const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const ffmpeg = require("ffmpeg");
const ytdl = require("ytdl-core");

const {
  getSongTitle,
  extractRequiredInfo,
  fetchAppleMusicData,
  fetchSpotifyMusicData,
} = require("./services/fetchsongdata");

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
var jsonParser = bodyParser.json();

app.get("/", cors(), async (request, response) => {
  response.send(`Init server ${port}`);
});

app.post("/songinfo", jsonParser, async (request, response) => {
  const content = request.body;
  console.log("recived request with ", content);
  getSongTitle(content.youtubeLink).then((a) => {
    result = extractRequiredInfo(a.videoDetails.title);
    console.log("required info are ", result);
    if (content.serviceProvider === "apple") {
      fetchAppleMusicData(result).then((b) => {
        console.log("music is ", b.data);
        response.send(JSON.stringify(b.data));
      });
    } else if (content.serviceProvider === "spotify") {
      // fetchSpotifyMusicData(result).then((b) => {
      //     console.log(b)
      //     response.send(JSON.stringify("FAILED?"))
      // })
      response.send(JSON.stringify("Spotify API is not connected?"));
    }
  });
});

app.post("/download", jsonParser, async (request, response) => {
  const content = request.body;
  const youtubeLink = content.youtubeLink;
  const song = content.song;
  const location = content.location;

  const download = ytdl(youtubeLink, { filter: "audioonly" });
  const writeStream = fs.createWriteStream(`${location}\\${song.title}.mp3`);
  download.pipe(writeStream);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
