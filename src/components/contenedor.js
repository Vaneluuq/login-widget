import React, { useEffect,useState } from 'react';
import './componentes.css'
import { Notas } from './notes'
import { firestore } from '../firebase.js'

export const Contenedor = () => {
  
const [notas, setNotas] =useState([]);
  const addOrEdit = async (noteObject) => {
    await firestore.collection('notas').doc().set(noteObject);
    console.log('nueva tarea')

  };
  
  const getLinks = async () => {
    const querySnapshot = await firestore.collection('notas').onSnapshot((querySnapshot) => {
      const docs=[];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(),id:doc.id})
      });
      setNotas(docs);


    });
  }
  useEffect(() => {
    getLinks();

  }, [])


  return (
    <div>
      <Notas addOrEditNote={addOrEdit} />
      <div>
        {notas.map(nota=>(
          <div>
            <div>
              <h3>{nota.name}</h3>
              <p>{nota.description}</p>
            </div>
          </div>
        )
        )}
      </div>
    </div>
  )
}
