import React from "react";
import { Table } from "react-bootstrap";
import { FormatSecondsToMinutes } from "../../utilities/convertTime";

const DisplayList = ({ songList }) => {
  const displaySongOnTable = (song, entry) => {
    console.log("the song is ", song);
    return (
      <tr key={entry}>
        <td>{entry}</td>
        <td>{song.title}</td>
        <td>{FormatSecondsToMinutes(song.time)}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.genre}</td>
        <td>{song.favorite}</td>
      </tr>
    );
  };
  console.log("recieved list", songList);
  return (
    <Table striped border="secondary" hover>
      <thead>
        <tr>
          <th>#</th>
          <th>song name</th>
          <th>time</th>
          <th>artist</th>
          <th>album</th>
          <th>genre</th>
          <th>favorite</th>
        </tr>
      </thead>
      <tbody>
        {songList.map((d, idx) => {
          return displaySongOnTable(d, idx + 1);
        })}
      </tbody>
    </Table>
  );
};

export default DisplayList;
