import React, { useState } from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let [isPlaying, setIsPlaying] = useState(false);

  function playAudio() {
    // inside this function, there is an additional check before playing the audio of the pronounciation.
    // it checks if the props.phonetic.audio is available. if it's null or undefined, the audio playback won't be triggered.
    if (props.phonetic.audio) {
      let audio = new Audio(props.phonetic.audio);
      audio.play();
      setIsPlaying(true);
      audio.onended = () => setIsPlaying(false);
    }
  }
  return (
    <div className="Phonetic">
      <div className="Phonetic__text">
        <div className="Phonetic__text__phonetic">
          {props.phonetic.audio ? (
            <button
              type="button"
              className="btn rounded-pill play"
              onClick={playAudio}
              disabled={isPlaying}
            >
              <i class="bi bi-play-fill"></i>
            </button>
          ) : (
            <span className="not-available">Audio not available</span>
          )}
        </div>
        <div>{props.phonetic.text}</div>
      </div>
    </div>
  );
}

// in the component return statement, i added a condition to check if props.phonetic,audio is available.it it is the play button
// is rendered normally.
// if it's not available, the button is rendered with the text "Audio not available"
// with his update, when the audio is not available for a word, the play button won't be shown.
// instead there'll be a message indicating the audio is not available.
