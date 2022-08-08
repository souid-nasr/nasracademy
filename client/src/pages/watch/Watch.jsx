import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const el = location.el;
  return (
    <div className="watch">
      <Link to="/student/courses">
        <div className="back">
          <ArrowBackOutlined />
          GoToBack
        </div>
      </Link>
      <iframe className="video" src={el.content}/>
    </div>
  );
}
