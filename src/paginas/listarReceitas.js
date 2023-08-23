import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { collection, onSnapshot } from "firebase/firestore"; 
import { db } from "../firebaseConnection";

function ListaTitulosReceitas() {
  const [titulosReceitas, setTitulosReceitas] = useState([]);

  useEffect(() => {
    consultarTitulosReceitas();
  }, []);

  async function consultarTitulosReceitas() {
    onSnapshot(collection(db, "receitas"), (snapshot) => {
      let listaTitulosReceitas = [];
      snapshot.forEach((doc) => {
        listaTitulosReceitas.push({
          id: doc.id,
          titulo: doc.data().titulo,
        });
      });
      setTitulosReceitas(listaTitulosReceitas);
    });
  }

  return (
    <div>
      <h1>Lista de Receitas</h1>
      <ul>
        {titulosReceitas.map((receita) => (
          <li key={receita.id}>
            <Link to={`/detalhes/${receita.id}`}>{receita.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTitulosReceitas;
