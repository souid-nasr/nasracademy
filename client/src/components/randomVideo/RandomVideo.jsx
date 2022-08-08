import axios from "axios";
import { useEffect, useState } from "react";
import "./randomVideo.scss";

export default function RandomVideo({ type, setGenre }) {
  const [video, setVideo] = useState({});

useEffect(() => {
    const getRandomVideo = async () => {
    try {
        const res = await axios.get(`/videos/random?type=${type}`, {
        headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
        setVideo(res.data[0]);
    } catch (err) {
        console.log(err);
    }
    };
    getRandomVideo();
}, [type]);
return(
    <div className="randomVideo">
<video className="video" autoPlay progress controls src={video.video} />
    </div>
)
}