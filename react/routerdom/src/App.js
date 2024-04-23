import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { useState, createContext } from "react";
import { Form } from "./components/Form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [username, setUsername] = useState("Victor");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h1>404 Error</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
