import { FormatMiliseconds } from "../convertTime";
import * as Apple from "./Apple.json";

export const GetServiceField = (provider, field) => {
  if (provider.toLowerCase() === "apple") {
    return Apple[field];
  } else if (provider.toLowerCase() === "spotify") {
    return null;
  }
};

const ResizeImg = (src) => {
  return src.replace("100x100bb", "1000x1000bb");
};

export const ExtractRelevantInfo = (jsonObject, provider) => {
  console.log("json Object ", jsonObject);
  return {
    title: jsonObject[GetServiceField(provider, "title")],
    artist: jsonObject[GetServiceField(provider, "artist")],
    coverArt: ResizeImg(jsonObject[GetServiceField(provider, "coverArt")]),
    album: jsonObject[GetServiceField(provider, "album")],
    albumExplicit: jsonObject[GetServiceField(provider, "albumExplicit")],
    discCount: jsonObject[GetServiceField(provider, "discCount")],
    discNum: jsonObject[GetServiceField(provider, "discNum")],
    genre: jsonObject[GetServiceField(provider, "genre")],
    releaseDate: jsonObject[GetServiceField(provider, "releaseDate")],
    albumTrackCount: jsonObject[GetServiceField(provider, "albumTrackCount")],
    trackNum: jsonObject[GetServiceField(provider, "trackNum")],
    trackExplicit: jsonObject[GetServiceField(provider, "trackExplicit")],
    time: FormatMiliseconds(jsonObject[GetServiceField(provider, "time")]),
  };
};
