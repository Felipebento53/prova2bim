import Menu from "./templates/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./Redux/store";
import UsuarioForm from "./Cadastros/UsuarioForm";
import { Provider } from "react-redux";//componente



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/usuarios" element={<UsuarioForm/>} />
            <Route path="/" element={<Menu/>} />
            <Route path="*"/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
