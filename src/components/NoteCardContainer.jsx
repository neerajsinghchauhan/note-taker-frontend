// NoteCardContainer.jsx
import { Grid } from "@mui/material"
import NoteCard from './NoteCard'
import Loader from './Loader'

const NoteCardContainer = ({ notes }) => {
  if (!Array.isArray(notes)) {
    return <Loader />;  // Display a loader if notes aren't available yet
  }

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: 3 }}>
      {notes.map(note => (
        <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>
          <NoteCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
};



export default NoteCardContainer