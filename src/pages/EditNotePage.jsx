import  {useState, useEffect} from 'react'
import './AddNotePage.css'
import { useNavigate , useParams } from 'react-router-dom'
import axios from 'axios'

const EditNotePage = ({updateNote}) => {
  const[title,setTitle] = useState("")
  const[body, setBody] = useState("")
  const[category,setCategory] = useState("")

  const {slug} =useParams()
  
  const navigate = useNavigate()

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(()=> {
    axios.get(`${API_URL}/notes/${slug}/`)
    .then(res => {
      console.log(res.data)
      setTitle(res.data.title)
      setBody(res.data.body)
      setCategory(res.data.category)
    })
    .catch(err => {
      console.log(err.message)
    })
  },[slug])

  const UpdateNoteObject = {
    title: title,
    body: body,
    category: category
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title && !body && !category) return;
      updateNote(UpdateNoteObject,slug)
      navigate(`/notes/${slug}`)
  }

  return (
    <form onSubmit={handleSubmit}>
        <h5>Update Note</h5>
        <div className='mb-3'>
            <label htmlFor='exampleformControlInput1' className='form-label'>
                Title
            </label>
            <input
              input="email"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              placeholder="Enter note 's content"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
        </div>
        <div className='mb-3'>
            <label htmlFor='exampleformControlInput1' className='form-label'>
             Content
            </label>
            <textarea
              input="email"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              placeholder="Enter note's content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <div className='mb-3'>
                <label htmlFor='exampleformControlInput1' className='form-label'>
                    Note's category
                </label>
                <select className='form-select' 
                aria-label="Default select example" 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{height: "50px"}}
                >
                    <option value="">Pick a category</option>
                    <option value="BUSINESS">Business</option>
                    <option value="PERSONAL">Personal</option>
                    <option value="IMPORTANT">Important</option>
                </select>
            </div>
            <button className='btn btn-primary d-flex justify-content-center' style={{width: "100%"}}>Update Note</button>
        </div>
    </form>
  )
}

export default EditNotePage
