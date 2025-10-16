import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/api.js'
import {IMAGE_URL2} from '../../utils/Constances/Constance.js'

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const navigate = useNavigate();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get(`/movie/${category ? category : "now_playing"}`, {
          params: {
            language: "en-US",
            page: 1
          }
        })
        setApiData(res.data.results)
      } catch (error) {
        console.error("API error:", error)
      }
    }

    fetchMovies()
    const ref = cardsRef.current
    ref.addEventListener("wheel", handleWheel)

    return () => {
      ref.removeEventListener("wheel", handleWheel)
    }
  }, [category])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}?type=movie`} className="card" key={index} onClick={() => {
            if (card.key) {
              navigate("/player", { state: { key: card.key} });
            }
          }}>
            <img src={`${IMAGE_URL2}${card.backdrop_path}`} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
