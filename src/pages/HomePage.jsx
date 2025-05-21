// HomePage.jsx
import  { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "../components/Filter"
import NoteCardContainer from '../components/NoteCardContainer'
import Loader from '../components/Loader'

const API_URL = import.meta.env.VITE_API_URL;

const HomePage = ({}) => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [filterText, setFilterText] = useState("");
  
  const handleFilterText = (val) => {
    setFilterText(val);
  };

  const filteredNotes = 
     filterText === "BUSINESS"
     ? notes.filter((note) => note.category == "BUSINESS")
     : filterText === "PERSONAL" ? notes.filter((note) => note.category == "PERSONAL")
     : filterText === "IMPORTANT" ? notes.filter((note) => note.category == "IMPORTANT")
     : notes

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${API_URL}/notes/`)
        setNotes(response.data)
      } catch (err) {
        console.error("Error fetching notes:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchNotes()
  }, [])

  if (loading) {
    return <div className="text-center mt-5">{< Loader />}</div>
  }
  return (
    <div>
      <Filter handleFilterText={handleFilterText}/>
      {notes.length === 0 ? (
        <div className="text-center mt-5">No notes found</div>
      ) : (
        <NoteCardContainer notes={filteredNotes} />
      )}
    </div>
  )
}

export default HomePage