import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Message from './components/Message';
import store from './redux/configureStore';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" index element={<Message />} />
          </Routes>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
