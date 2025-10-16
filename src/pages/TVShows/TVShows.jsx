import React, { useEffect, useState } from 'react'
import './TVShows.css'
import api from '../../utils/api'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import netflix_spinner from '../../assets/netflix_spinner.gif'
import {IMAGE_URL2} from '../../utils/Constances/Constance.js'


const TVShows = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                const res = await api.get("/discover/tv", {
                    params: {
                        include_adult: false,
                        include_null_first_air_dates: false,
                        language: "en-US",
                        page: 1,
                        sort_by: "popularity.desc",
                    },
                })
                setApiData(res.data.results)
                console.log(res.data)
            } catch (error) {
                console.error(error)
            }
            setLoading(false)
        }
        fetchMovies()
    }, [])


    return (
        loading ? (
            <div className="loading-spinner">
                <img src={netflix_spinner} alt="" />
            </div>
        ) : (
            <div className='tv-shows-page'>
                <img
                    src={back_arrow_icon}
                    alt="Go back"
                    className="back-arrow"
                    onClick={() => { navigate("/") }}
                />

                <div className='tv-shows'>
                    {apiData.map((tvShow, index) => (
                        <div className="tvShow-card" key={index}>
                            {tvShow.backdrop_path ? (
                                <Link to={`/player/${tvShow.id}?type=tv`} className="card" key={index} onClick={() => {
                                    if (tvShow.key) {
                                        navigate("/player", { state: { key: tvShow.key } });
                                    }
                                }}>
                                    <img
                                        src={`${IMAGE_URL2}${tvShow.backdrop_path}`}
                                        alt={tvShow.name}
                                    />
                                </Link>
                            ) : (
                                <div style={{ height: "135px", background: "#333" }}>No Image</div>
                            )}
                            <p>{tvShow.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}
export default TVShows;
