import { useDispatch } from "react-redux"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Menu from "../templates/Menu";



export default function UsuarioForm(props){

    const usuarioVazio = {
        id:'',
        nickname:'',
        urlAvatar:'',
        dataIngresso:'',
    }

    const dispatch = useDispatch();

    return(
    <div>
        <Menu/>
        <br />
        <br /> 
        <h1>Cadastro de Usuarios</h1>
        <hr />
        <Form>
        <Form.Group className="mb-3" controlId="nick">
            <Form.Label>Nickname</Form.Label>
            <Form.Control type="text" placeholder="Nome de usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="url">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="text" placeholder="url do avatar" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="data">
            <Form.Label>Data Ingresso</Form.Label>
            <Form.Control type="date" placeholder="Data do ingresso" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Cadastrar
        </Button>
        </Form>
    </div>
  );
    
}