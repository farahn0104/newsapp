import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Navbar = () => {
  const [q,setQ] = useState('All');
  const [language, setLanguage] = useState('en');
  const [searchParam] = useSearchParams();
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
  
  function handleSearch(e) {
    e.preventDefault();
    navigate(`?q=${search}&langauge=${language}`)
    setSearch('')
  }

  
  useEffect(() => {
    setQ(searchParam.get('q') ?? 'All') 
    setLanguage(searchParam.get('language') ?? 'en') 

  },[searchParam])
  
  return (

    <nav className="sticky-top navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <Link className="text-white navbar-brand" to={`/?q=All&language=${language}`}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="text-white nav-link active" aria-current="page" to={`/?q=All&language=${language}`}>All</Link>
        </li>
        <li className="nav-item">
          <Link className="text-white nav-link" to={`/?q=Politics&language=${language}`}>Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="text-white nav-link" to={`/?q=Crime&language=${language}`}>Crime</Link>
        </li>
        <li className="nav-item">
          <Link className="text-white nav-link" to={`/?q=Education&language=${language}`}>Education</Link>
        </li>
        <li className="nav-item">
          <Link className="text-white nav-link" to={`/?q=Economics&language=${language}`}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="text-white nav-link" to={`/?q=Technology&language=${language}`}>Technology</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="text-white nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/?q=Sports&language=${language}`}>Sports</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Cricket&language=${language}`}>Cricket</Link></li>
            <li><Link className="dropdown-item" to={`/?q=AsiaCup&language=${language}`}>Asia Cup</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Economics&language=${language}`}>Economics</Link></li>
            <li><Link className="dropdown-item" to={`/?q=World&language=${language}`}>World</Link></li>
            <li><Link className="dropdown-item" to={`/?q=India&language=${language}`}>India</Link></li>
            <li><Link className="dropdown-item" to={`/?q=Joke&language=${language}`}>Jokes</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="text-white nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={`/?q=${q}&language=hi`}>Hindi</Link></li>
            <li><Link className="dropdown-item" to={`/?q=${q}&language=en`}>English</Link></li>
            
          </ul>
        </li>
              </ul>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input onChange={(e) => setSearch(e.target.value)} value={search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar