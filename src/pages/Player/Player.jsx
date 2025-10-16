import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import api from '../../utils/api.js'

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // get type from query params
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type") || "movie";

  const [apiData, setApiData] = useState({ name: "", key: "", published_at: "", type: "" });

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await api.get(`/${type}/${id}/videos`, {
          params: { language: "en-US" }
        });
        if (res.data.results.length > 0) {
          setApiData(res.data.results[0]);
        }
      } catch (error) {
        console.error("Error fetching video: ", error);
      }
    };

    fetchVideo();
  }, [id, type]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => { navigate(-1) }} />
      <iframe
        width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' frameBorder='0' allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player
