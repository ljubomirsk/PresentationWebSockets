import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import { HubConnectionBuilder } from "@aspnet/signalr";
// CSS
import "./App.css";
// Static data
import videos from "./videos/videos";
// Components
import ImagesPage from "./components/ImagesPage";
import VideosPage from "./components/VideosPage";

const apiBase = "http://localhost:51218";

const hubConnection = new HubConnectionBuilder()
  .withUrl(`${apiBase}/hubs/presentation`)
  .build();

const App = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(
    () => {
      hubConnection.on("ChangeSlide", value => {
        if (value === "right") {
          setSlideIndex(prevIndex => prevIndex + 1);
        } else if (value === "left") {
          setSlideIndex(prevIndex => prevIndex - 1);
        }
      });

      hubConnection.start();

      return () => {
        hubConnection.stop();
      };
    },
    [hubConnection]
  );

  return (
    <Router>
      <ImagesPage path="/" slideIndex={slideIndex} />
      <VideosPage path="videos" video={Object.values(videos)[slideIndex]} />
    </Router>
  );
};

export default App;
