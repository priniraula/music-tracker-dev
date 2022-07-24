export const ConvertMilisecondsToSeconds = (miliseconds) => {
  return miliseconds / 1000;
};

export const FormatSecondsToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds - minutes * 60;
  return `${minutes}:${remaining}`;
};

export const FormatMiliseconds = (miliseconds) => {
  return FormatSecondsToMinutes(ConvertMilisecondsToSeconds(miliseconds));
};
