import React, { useEffect, useState } from "react";

function GitHubUser({ username }) {
  const [user, setUser] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al cargar datos de GitHub:", err);
        setCargando(false);
      });
  }, [username]);

  if (cargando) return <p>Cargando datos de GitHub...</p>;
  if (!user) return <p>No se encontró el usuario</p>;

  return (
    <div className="d-flex flex-col align-items-center justify-content-center p-4 flex-column">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="img-github rounded-circle mx-auto"
      />
      <h2 className="text-primary fs-5 ">{user.name || user.login}</h2>
      <p className="text-body-secondary fs-6 text-gray-600">@{user.login}</p>
      <p>Repositorios:{user.public_repos}</p>
      <p>Pais:{user.location}</p>
      <p className="text-body-secondary fs-6">{user.bio}</p>
      <div className="mt-4 text-center">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark btn-sm"
        >
          Ver en GitHub
        </a>
      </div>

      {/* Card Section */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={user.avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user.name || user.login}</h5>
            <p className="card-text">@{user.login}</p>
            <p className="card-text">{user.bio}</p>
          <a href={user.html_url} className="btn btn-dark btn-sm"  rel="noopener noreferrer" target="_blank">
          Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default GitHubUser;
