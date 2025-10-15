import { useState } from "react";
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import ParagraphComponent from "./components/ParagraphComponent";
import ListsComponent from "./components/ListsComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ImageComponent />
      <VideoComponent />
      <ParagraphComponent />
      <ListsComponent />
    </div>
  );
}

export default App;
