// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx"
import HomePage from "./pages/HomePage.jsx"
import AddNotePage from "./pages/AddNotePage.jsx"
import NoteDetailPage from "./pages/NoteDetailPage.jsx"
import EditNotePage from "./pages/EditNotePage.jsx"
import axios from 'axios'
import {  toast } from 'react-toastify';

  
const API_URL = import.meta.env.VITE_API_URL;

const addNote = (data) => {
  axios.post(`${API_URL}/notes/`, data)
  .then(res => {
    toast.success("A new note has been added");
    console.log(res.data)
  })
  .catch(err => {
    console.log(console.log(err.message))
  })
}

const updateNote = (data,slug) => {
  axios.put(`${API_URL}/notes/${slug}/`, data)
  .then(res => {
    console.log(res.data)
    toast.success("Note updated succesfully");
  })
  .catch(err => {
    console.log(err.message)
  })
}

const deleteNote = (slug) => {
  axios.delete(`${API_URL}/notes/${slug}/`)
  .catch(err => console.log(err.message))
}

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout   />,
    children: [
      { index: true, element: <HomePage  /> },
      { path: "add-note", element: <AddNotePage  addNote={addNote}/> },
      { path: "edit-note/:slug", element: <EditNotePage updateNote={updateNote}/> },
      { path: "notes/:slug", element: <NoteDetailPage deleteNote={deleteNote} /> },
    ]
  }
])

  return <RouterProvider router={router} />
}






export default App