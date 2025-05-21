import './styles.scss';
import { MdMarkunread } from 'react-icons/md';
import { Link } from 'react-router-dom'
import {FormatDate} from './FormatDate'

const NoteCard = ({note}) => {
  const body= `${note.body.split(" ").slice(0,10).join(" ")} ...`
  const color = note.category == "BUSINESS" ? "blue" : note.category == "PERSONAL" ? "green" : "purple"
  return (
    <div id="scoped">
      <div className="card">
        <Link to={`/notes/${note.slug}`} style={{textDecoration: "none", color: "black"}}>
        <p className="card-title">{note.title}</p>
        <p>{FormatDate(note.updated)}</p>
        <p className="small-desc">
          {body}
        </p>
        </Link>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        <span className="d-flex justify-content-around align-items-center mt-2">
          <Link to={`/notes/${note.slug}`}>
            <MdMarkunread
              style={{ fontSize: '25px', cursor: 'pointer', color: color }}
            />
          </Link>
          <small className="text-muted">{note.category}</small>
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
