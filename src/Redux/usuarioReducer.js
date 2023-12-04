import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "./estado";

const usuarioSlice = createSlice({
    name:'usuario',
    initialState:{
        status:ESTADO.OCIOSO,
        mensagem:'',
        listaUsuarios:[]
    },
    reducers:{
        adicionar:(state, action)=>{
            state.listaUsuarios.push(action.payload);
        },
        remover:(state,action)=>{
            state.listaUsuarios = state.listaUsuarios.filter(usuario => usuario.id !== action.payload.id);
        },
    }
});

export const {adicionar,remover} = usuarioSlice.actions;
export default usuarioSlice.reducer;