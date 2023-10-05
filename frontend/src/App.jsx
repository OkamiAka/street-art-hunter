import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Camera from "./components/Camera";
import GameBoyScreen from "./components/GameBoyScreen";
import Score from "./components/Score";
import Gallery from "./components/Gallery";
import StreetArtsList from "./components/StreetArtsList";
import Connection from "./pages/Connection";
import Artist from "./components/Artist";
import Friends from "./components/Friends";
import { useAuth } from "./contexts/AuthContext";
import "./App.scss";
import InfoStreetArt from "./components/InfoStreetArt";
import InfoAdminStreetArt from "./components/InfoAdminStreetArt";
import MapGlobal from "./components/MapGlobal";
import PendingStreetArtList from "./components/PendingStreetArtsList";
import Setting from "./components/Setting";
import EnCoursDeTravaux from "./components/EnCoursDeTravaux";
import Autre from "./components/Autre";

function App() {
  const nav = useNavigate();
  const { token, role } = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connection" element={<Connection />} />
        {token != null && (
          <>
            <Route path="/menu" element={<Menu />} />

            <Route path="/camera" element={<Camera />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/map-global" element={<MapGlobal />} />
            <Route path="/artistes" element={<EnCoursDeTravaux />} />
            <Route path="/profil" element={<EnCoursDeTravaux />} />
            <Route path="setting" element={<Setting />} />
            <Route
              path="/gallery/:id/:longitude/:latitude"
              element={<InfoStreetArt />}
            />
            <Route
              path="/gallery/artists/:id"
              element={
                <>
                  <Artist />
                  <button
                    type="button"
                    className="retoure"
                    onClick={() => nav("/gallery")}
                  >
                    retoure a la gallery
                  </button>
                </>
              }
            />
            <Route path="/score" element={<Score />} />
            <Route
              path="/artists/:id"
              element={
                <GameBoyScreen>
                  <Artist />
                </GameBoyScreen>
              }
            />
            <Route path="/friends" element={<Friends />} />

            {role === 1 && (
              <>
                <Route path="/street-arts" element={<StreetArtsList />} />
                <Route
                  path="/street-arts-pending"
                  element={<PendingStreetArtList />}
                />
                <Route
                  path="/street-arts/:id/:longitude/:latitude"
                  element={<InfoAdminStreetArt />}
                />
                <Route
                  path="/street-arts/artists/:id"
                  element={
                    <>
                      <Artist />
                      <button
                        type="button"
                        className="retoure"
                        onClick={() => nav("/street-arts")}
                      >
                        retoure a la list
                      </button>
                    </>
                  }
                />
              </>
            )}
          </>
        )}
        <Route path="*" element={<Autre />} />
      </Routes>
    </div>
  );
}

export default App;
