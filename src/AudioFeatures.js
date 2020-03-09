import React, { Component } from 'react';
import './App.css';

class AudioFeatures extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onTrackUpdated(track) {
    const spotifyURL = "https://api.spotify.com/v1/audio-features/"
    fetch(spotifyURL + track, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.props.oAuth
      }
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        track: track,
        songFeatures: response,
      })
    })
  }

  componentDidMount() {
    this.onTrackUpdated(this.props.track);
  }

  render() {

    const keyInteger = {0: 'C', 1: 'C♯/D♭', 2: 'D', 3: 'D♯/E♭', 4: 'E', 5: 'F', 6: 'F♯/G♭', 7: 'G', 8: 'G♯/A♭', 9: 'A', 10: 'A♯/B♭', 11: 'B'}
    const getDancelevel = {0: 'low-danceability', 0.1: 'low-danceability', 0.2: 'low-danceability', 0.3: 'low-danceability', 0.4: 'mid-danceability', 0.5: 'mid-danceability', 0.6: 'mid-danceability', 0.7: 'high-danceability', 0.8: 'high-danceability', 0.9: 'high-danceability', 1.0: 'high-danceability'}
    const getEnergylevel = {0: 'Low Energy', 0.1: 'Low Energy', 0.2: 'Low Energy', 0.3: 'Low Energy', 0.4: 'Medium Energy', 0.5: 'Medium Energy', 0.6: 'Medium Energy', 0.7: 'High Energy', 0.8: 'High Energy', 0.9: 'High Energy', 1.0: 'High Energy'}
    const getValencelevel = {0: 'Melancholy', 0.1: 'Melancholy', 0.2: 'Melancholy', 0.3: 'Melancholy', 0.4: 'Neutral', 0.5: 'Neutral', 0.6: 'Neutral', 0.7: 'Positive', 0.8: 'Positive', 0.9: 'Positive', 1.0: 'Positive'}
    function millisToMinutesAndSeconds(getTimeDuration) {
      var minutes = Math.floor(getTimeDuration / 60000);
      var seconds = ((getTimeDuration % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    if (!this.state.songFeatures) {
      return <div></div>
    }
    
    
    return (
    <div className="AudioFeatures">
        <div> Selected song danceability: { getDancelevel[parseFloat(this.state.songFeatures.danceability).toFixed(1)] }</div>
        <div> Selected song key: { keyInteger[this.state.songFeatures.key] }</div>
        <div> Selected song time signature: { this.state.songFeatures.time_signature }</div>
        <div> Selected song duration: { millisToMinutesAndSeconds(this.state.songFeatures.duration_ms) }</div>
        <div> Selected song energy: { getEnergylevel[parseFloat(this.state.songFeatures.energy).toFixed(1)] }</div>
        <div> Selected song tempo: { parseFloat(this.state.songFeatures.tempo).toFixed(0) } BPM</div>
        <div> Selected song acousticness: { this.state.songFeatures.acousticness }</div>
        <div> Selected song instrumentalness: { this.state.songFeatures.instrumentalness }</div>
        <div> Selected song valence: { getValencelevel[parseFloat(this.state.songFeatures.valence).toFixed(1)] }</div>
        <div> Selected song liveness: { this.state.songFeatures.liveness }</div>
        <div> Selected song loudness: { this.state.songFeatures.loudness }</div>
    </div>
    )
  }
}

export default AudioFeatures;
