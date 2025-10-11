import { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import './FacialExpression.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import axios from 'axios';

export default function FacialExpression({ setSongs, songs }) {
  const videoRef = useRef();
  const loadModels = async () => {
    const MODEL_URL = '/models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };
  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error('Error accessing webcam: ', err));
  };
  async function detectMood() {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    let mostProbableExpression = 0;
    let _expression = '';
    if (!detections || detections.length === 0) {
      alert('No face detected!');
      console.log('No face detected!');
      return;
    }
    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProbableExpression) {
        mostProbableExpression = detections[0].expressions[expression];
        _expression = expression;
      }
    }
    axios
      .get(`http://localhost:3000/songs?mood=${_expression}`)
      .then((response) => {
        // console.log(response.data);
        setSongs(response.data.songs);
      });
  }

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);
  return (
    <div className="facial-sec">
      <nav className="navbar">
        <h1>Moody player</h1>
        <RxHamburgerMenu className="hambg" />
      </nav>
      <div className="video-its-desc">
        <div className="video-sec">
          <video ref={videoRef} autoPlay muted />
        </div>
        <div className="video-desc">
          <p>
            Here is the project where the user press the detect button to detect
            the mood and then the songs will appears according to the mood!
          </p>
          <div>
            <button onClick={detectMood}>Detect Mood</button>
          </div>
        </div>
      </div>
    </div>
  );
}
