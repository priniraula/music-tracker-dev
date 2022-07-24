import React, { useState } from "react";
import { useEffect } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setSongInfo, toggleSave } from "../../store/slice";

const ViewEditSong = ({ song }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [coverArt, setCoverArt] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    setTitle(song.title);
    setAlbum(song.album);
    setArtist(song.artist);
    setCoverArt(song.coverArt);
    setGenre(song.genre);
  }, [song]);
  const saveSong = () => {
    dispatch(
      setSongInfo({
        ...song,
        title: title,
        artist: artist,
        album: album,
        coverArt: coverArt,
        genre: genre,
      })
    );
    dispatch(toggleSave());
  };

  return (
    <Card border="secondary">
      {/* <Card.Header>Viewing Current Song</Card.Header> */}
      <Card.Img variant="top" src={coverArt} />
      <Card.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="forSongTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="forArtist">
                <Form.Label>Artist</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={artist}
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="forAlbum">
                <Form.Label>Album</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={album}
                  value={album}
                  onChange={(e) => setAlbum(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="forGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={genre}
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="forCoverArt">
              <Form.Label>Cover Art</Form.Label>
              <Form.Control
                type="text"
                placeholder={coverArt}
                value={coverArt}
                onChange={(e) => setCoverArt(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="forReleaseDate"
              ></Form.Group>
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="text"
                placeholder={song.releaseDate}
                disabled
                value={song.releaseDate}
              />
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="forTime"></Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                placeholder={song.time}
                disabled
                value={song.time}
              />
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="forExplicit"></Form.Group>
              <Form.Label>Explicit</Form.Label>
              <Form.Control
                type="text"
                placeholder={song.trackExplicit}
                disabled
                value={song.trackExplicit}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="forDiscCount"
              ></Form.Group>
              <Form.Label>Disc Count</Form.Label>
              <Form.Control
                type="text"
                placeholder={song.discCount}
                disabled
                value={song.discCount}
              />
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="forDiscNum"></Form.Group>
              <Form.Label>Disc Num</Form.Label>
              <Form.Control
                type="text"
                placeholder={song.discNum}
                disabled
                value={song.discNum}
              />
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="forTrackCount"
              ></Form.Group>
              <Form.Label>Track Count</Form.Label>
              <Form.Control
                type="text"
                placeholder={song.albumTrackCount}
                disabled
                value={song.albumTrackCount}
              />
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="forTrackNum"></Form.Group>
              <Form.Label>Track Num</Form.Label>
              <Form.Control
                type="text"
                placeholder={song.trackNum}
                disabled
                value={song.trackNum}
              />
            </Col>
          </Row>
          <Button variant="primary" type="button" onClick={saveSong}>
            Save
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ViewEditSong;
