import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ESTADO from "./estado";

const urlBase = "https://backend-bcc-2-b.vercel.app/usuario"

export const get = createAsyncThunk('get',async()=>{
    try {
        const resp = await fetch(urlBase, { method: "GET" });
        const r = await resp.json();
        if (r.status) {
            return {
                status: r.status,
                listaUsuarios: r.listaUsuarios
            }
        }
        else {
            return {
                status: r.status,
                listaUsuarios: []
            }
        }
    } catch (erro) {
        return {
            status: false,
            listaUsuarios: []
        }
    }
});

export const cadastar = createAsyncThunk('cadastrar', async(usuario)=>{
    try{
        const resp = await fetch(urlBase, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });
        const r = await resp.json();

        if(r.status){
            return{
                status: r.status,
                usuario: usuario,
                mensagem: r.mensagem
            
            }
        }
        else{
            return{
                status: r.status,
                mensagem: r.mensagem
            }
        }
        
    }
    catch(erro){
        return {
            status: false,
            mensagem: "Não foi possível cadastrar! : " + erro.message
        }
    }
});

const estadoInicial = {
    estado: ESTADO.OCIOSO,
    mensagem: "",
    usuarios: []
}


const slice = createSlice({
    name: 'usuario',
    initialState: estadoInicial,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(get.pending, (state, action) => {
                state.estado = ESTADO.PENDENTE;
                state.mensagem = '';
            })
            .addCase(get.fulfilled, (state, action) => {
                if (action.payload.status) {
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = "Usuarios recuperados";
                    state.usuarios = action.payload.listaUsuarios;
                }
                else {
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                    state.usuarios = [];
                }
            })
            .addCase(get.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
                state.usuarios = [];
            })
            .addCase(cadastar.pending, (state, action) =>{
                state.estado = ESTADO.PENDENTE;
                state.mensagem = 'Processando'
            })
            .addCase(cadastar.fulfilled, (state, action) =>{
                if (action.payload.status){
                    state.estado = ESTADO.OCIOSO;
                    state.mensagem = action.payload.mensagem;
                    state.usuarios.push(action.payload.produto);
                }
                else{
                    state.estado = ESTADO.ERRO;
                    state.mensagem = action.payload.mensagem;
                }
            })
            .addCase(cadastar.rejected, (state, action) => {
                state.estado = ESTADO.ERRO;
                state.mensagem = action.payload.mensagem;
            })
    }
})


export default slice.reducer;