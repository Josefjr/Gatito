import React from "react";
import { TouchableOpacity, Text } from "react-native-web";
import funcaoEstilosPadrao from "./estilos";

export default function Botao({pequeno = false, invertido = false, valor, acao, estilos}) {
    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);

    return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
        <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
}