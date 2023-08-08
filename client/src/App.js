
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./page/home_page";
import VideoDetailPage from "./page/video_detail_page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/:video_id" element={ <VideoDetailPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;