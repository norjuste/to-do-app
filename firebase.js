import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  query,
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyA07nCSsigS-ELBNq4BbvVHpMik_Rz23cQ',
  authDomain: 'todo-list-2a205.firebaseapp.com',
  projectId: 'todo-list-2a205',
  storageBucket: 'todo-list-2a205.appspot.com',
  messagingSenderId: '847615104280',
  appId: '1:847615104280:web:3fd699a549a5cc750c3a6d',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const addTodo = async ({ title, isCompleted, id }) => {
  await setDoc(doc(db, 'TodoItem', String(id)), {
    title,
    isCompleted,
    id,
  })
}

const updateTodo = async ({ isCompleted, id, title }) => {
  await setDoc(doc(db, 'TodoItem', String(id)), {
    isCompleted,
    id,
    title,
  })
}

const getTodos = async () => {
  const data = await getDocs(query(collection(db, 'TodoItem')))

  return data.docs.map((doc) => doc.data())
}

export { addTodo, updateTodo, getTodos }
