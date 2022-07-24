import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { setYoutubeLink } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";

const CreateSong = () => {
  const dispatch = useDispatch();
  const [link, setLink] = useState("");
  const [button, setButton] = useState(true);

  const CreateForm = () => {
    return (
      <Form>
        <Row>
          <Col xxl={11}>
            <Form.Group className="mb-3" controlId="forYoutubeLink">
              <Form.Control
                type="text"
                placeholder={"Enter youtube link"}
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xxl={1}>
            <div className="d-grid">
              <Button variant="primary" type="button" onClick={saveYoutubeLink}>
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    );
  };

  const CreateButton = () => {
    return <Button></Button>;
  };

  const saveYoutubeLink = () => {
    if (link) {
      dispatch(setYoutubeLink(link));
    }
  };

  return <div>{button ? <CreateForm /> : <button></button>}</div>;
};

export default CreateSong;
