import React from "react";
import { Table } from "react-bootstrap";
import { FormatSecondsToMinutes } from "../../utilities/convertTime";

const DisplayList = ({ songList }) => {
  const displaySongOnTable = (song, entry) => {
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

  return (
    <Table striped border hover>
      <thead>
        <th>#</th>
        <th>song name</th>
        <th>time</th>
        <th>artist</th>
        <th>album</th>
        <th>genre</th>
        <th>favorite</th>
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
