import "./featured.scss";
export default function Featured({ type, setGenre }) {
  return (
    <div className="featured">
{type && (
        <div className="category">
          <span>{type === "videos" ? "Videos" : "Playlists"}</span>
          <select 
          name="genre"
          id="genre"
          onChange={(e) => setGenre(e.target.value)}>
          <option variant="success" id="dropdown-basic">Genre</option>
            <option value="arabic">Arabic</option>
            <option value="french">French</option>
            <option value="english">English</option>
            <option value="maths">Maths</option>
            <option value="physics">Physics</option>
            <option value="svt">SVT</option>
            <option value="philosophy">Philosophy</option>
            <option value="computer-sciences">Computer sciences</option>
          </select>
        </div>
    )}
    </div>
  );
}