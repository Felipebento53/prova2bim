import Menu from "./templates/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";//componente



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/usuarios" element={dawda} />
            <Route path="/" element={<Menu/>} />
            <Route path="*" element={nada} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
