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
    <div className="d-flex flex-col align-items-center justify-content-center p-4 ">    
         
      <div className="mt-4 text-center">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
         <img src="https://1000marcas.net/wp-content/uploads/2020/02/GitHub-logo-1.jpg" alt="" className="img-github rounded-circle mx-auto" />
        </a>
        <p className="text-body-secondary fs-6 text-gray-600">@{user.login}</p> 
      </div>     
    </div>
  );
}

export default GitHubUser;
