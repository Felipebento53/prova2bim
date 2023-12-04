import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Menu from "../templates/Menu";
import { cadastar } from "../Redux/usuarioReducer";
import { useState } from "react";



export default function UsuarioForm(props){

    const usuarioVazio = {
        nickname:'',
        urlAvatar:'',
    }

    const [usuario,setUsuario] = useState(usuarioVazio);
    const { estado, mensagem, usuarios } = useSelector((state) => state.usuario);
    const dispatch = useDispatch();

    function enviou(e){
        const conteudo = e.currentTarget;
        setUsuario({...usuario,[conteudo.name]:conteudo.value});
    }

    function HandleSubmit(e){
        const cad = e.currentTarget;
        dispatch(cadastar(usuario));
        setUsuario(usuarioVazio);

        e.stopPropagation();
        e.preventDefault();
    }

    return(
    <div>
        <Menu/>
        <br />
        <br /> 
        <h1>Cadastro de Usuarios</h1>
        <hr />
        <Form>
        <Form.Group className="mb-3" controlId="nickname">
            <Form.Label>Nickname</Form.Label>
            <Form.Control type="text" id="nick" name="nick" value={usuario.nickname} onChange={enviou} required placeholder="Nome de usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="url">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="text" id="url" name="url" onChange={enviou} value={usuario.urlAvatar} required placeholder="url do avatar" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
            <Form.Label>Data Ingresso</Form.Label>
            <Form.Control type="date" placeholder="Data do ingresso" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Cadastrar
        </Button>
        <p>   </p>
        <Button type="submit" variant={"secondary"} as={Link} to="/">Voltar</Button>
        </Form>
    </div>
  );
    
}