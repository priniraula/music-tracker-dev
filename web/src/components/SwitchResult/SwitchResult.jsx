import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSongInfo } from "../../store/slice";

const SwitchResult = ({ songList }) => {
  const dispatch = useDispatch();
  let [currentSongNum, setCurrentSongNum] = useState(1);
  const totalSongSize = songList.length || 0;

  // useEffect(() => {
  //   dispatch(setSongInfo(songList[currentSongNum]));
  // }, [currentSongNum]);

  const increment = () => {
    if (currentSongNum === totalSongSize) {
      return;
    }
    setCurrentSongNum(currentSongNum + 1);
  };

  const decrement = () => {
    if (currentSongNum === 1) {
      return;
    }
    setCurrentSongNum(currentSongNum - 1);
  };

  return (
    <Card border="secondary">
      <Card.Header>Viewing Current Song</Card.Header>
      <Card.Body>
        <Row>
          <Col xxl={2} onClick={decrement}>
            <Button>Prev</Button>
          </Col>
          <Col xxl={8} style={{ textAlign: "center" }}>
            Showing result {currentSongNum} of {totalSongSize}
          </Col>
          <Col xxl={2} style={{ textAlign: "right" }} onClick={increment}>
            <Button>Next</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SwitchResult;
