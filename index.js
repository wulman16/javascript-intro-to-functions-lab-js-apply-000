function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  const shoutedString = string.toUpperCase();
  console.log(shoutedString);
}

function logWhisper(string) {
  const whisperedString = string.toLowerCase();
  console.log(whisperedString);
}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return 'I can\'t hear you!';
  } else if (string === shout(string)) {
    return ''
  }