import React, { useState } from "react";
import axios from "axios";
import ViewEditSong from "../../components/ViewEditSong";
import DisplayList from "../../components/DisplayList/DisplayList";
import { setSongInfo, toggleSave } from "../../store/slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CreateSong from "../../components/CreateSong/CreateSong";
import { ExtractRelevantInfo } from "../../utilities/ServiceProviderLocale/GetServiceField";
import { matchYoutubeUrl } from "../../utilities/APICalls/Call";
import { Container, Row, Col } from "react-bootstrap";
import SwitchResult from "../../components/SwitchResult/SwitchResult";
// import { fetchSongInfo } from "../../utilities/APICalls/Call";

const Musiclist = () => {
  const dispatch = useDispatch();
  const { songInfo, youtubeLink, saved } = useSelector((state) => state.song);
  const serviceProvider = "apple"; // will change to state to accomodate multiple services
  const [songResults, setSongResults] = useState([]);
  const [extractedSongResults, setExtractedSongResults] = useState([]);
  const musicList = [];

  const fetchSongInfo = () => {
    axios
      .post(`http://localhost:4000/songinfo`, {
        youtubeLink,
        serviceProvider,
      })
      .then((result) => {
        const songList = result.data;
        let extractedList = [];
        if (serviceProvider === "apple") {
          songList.results.forEach((item) => {
            const extracted = ExtractRelevantInfo(item, serviceProvider);
            extractedList.push(extracted);
          });
          const firstSongInfo = extractedList[0];
          dispatch(setSongInfo(firstSongInfo));
        }

        setSongResults(songList);
        setExtractedSongResults(extractedList);
      })
      .catch((error) => {
        console.log("[error youtubelink api call]: ", error);
      });
  };

  useEffect(() => {
    if (saved) {
      musicList.push(songInfo);
    }
  }, [saved]);

  useEffect(() => {
    if (matchYoutubeUrl(youtubeLink)) {
      fetchSongInfo(youtubeLink, "apple");
    }
  }, [youtubeLink]);

  return (
    <Container fluid>
      <Row>
        <Col xxl={8}>
          <CreateSong />
          <DisplayList songList={musicList} />
        </Col>
        <Col xxl={4}>
          <SwitchResult songList={extractedSongResults} />
          <ViewEditSong song={songInfo} />
        </Col>
      </Row>
    </Container>
  );
};

export default Musiclist;
