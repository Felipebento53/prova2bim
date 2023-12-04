import Menu from "./templates/Menu";
import TelaChat from "./templates/TelaChat";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import store from "./Redux/store";
import UsuarioForm from "./Cadastros/UsuarioForm";
import { Provider } from "react-redux";//componente



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Routes>
              <Route path="/usuarios" element={<UsuarioForm/>} />
              <Route path="/" element={<Menu/>} />
              <Route path="/chat" element={<TelaChat/>}/>
              <Route path="*"/>
            </Routes>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
