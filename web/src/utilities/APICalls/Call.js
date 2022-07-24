import { ExtractRelevantInfo } from "../ServiceProviderLocale/GetServiceField";
import axios from "axios";

export const requestDownload = (youtubeLink) => {
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

export function matchYoutubeUrl(url) {
  const p =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (url.match(p)) {
    return url.match(p)[1];
  }
  return false;
}

// export const fetchSongInfo = (youtubeLink, serviceProvider) => {
//   if (!matchYoutubeUrl(youtubeLink)) {
//     return;
//   }
//   console.log("youtubelink", youtubeLink);
//   axios
//     .post(`http://localhost:4000/songinfo`, {
//       youtubeLink,
//       serviceProvider,
//     })
//     .then((result) => {
//       if (serviceProvider.toLowerCase() === "apple") {
//         const results = result.data.results;
//         const songInfo = ExtractRelevantInfo(results[0], serviceProvider);
//         return songInfo;
//         // dispatch(setSongInfo(songInfo));
//       }
//     })
//     .catch((error) => {
//       console.log("[error youtubelink api call]: ", error);
//     });
// };
