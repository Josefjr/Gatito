import React from "react";
import { FlatList } from 'react-native';
import Item from "./item";


const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no se gato! Ma se necessario nos damos."
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4, Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrábica. Seu gato precisa de 1 por ano."
    }
];


export default function Servicos() {
    return <>
        <FlatList
            data={servicos}
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={({ id }) => String(id)}
        />
    </>
}