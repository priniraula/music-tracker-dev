import React from "react";
import { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

const ViewEditSong = ({ song }) => {
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [coverArt, setCoverArt] = useState(song.coverArt);
  const [genre, setGenre] = useState(song.genre);

  const saveSong = () => {
    console.log("attempting to save song");
  };

  return (
    <Card border="secondary">
      <Card.Header>Viewing Current Song</Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="forSongTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder={title} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="forSongTitle">
                <Form.Label>Artist</Form.Label>
                <Form.Control type="text" placeholder={artist} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="forSongTitle">
                <Form.Label>Album</Form.Label>
                <Form.Control type="text" placeholder={album} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="forSongTitle">
                <Form.Label>Genre</Form.Label>
                <Form.Control type="text" placeholder={genre} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="forSongTitle">
              <Form.Label>Cover Art</Form.Label>
              <Form.Control type="text" placeholder={coverArt} />
            </Form.Group>
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
