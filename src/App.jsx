import { useState } from "react";
import Router from "./shared/Router";

function App() {
  const [user, setUser] = useState(null);

  return <Router user={user} setUser={setUser} />;
}

export default App;
