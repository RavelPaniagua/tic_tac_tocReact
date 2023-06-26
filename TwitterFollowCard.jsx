import {useState} from 'react';

export function TwitterFollowCard({
  userName = 'none',
  name = 'none',
  children = 'none',
  initialisFollowing
}) {

const [isFollowing,setIsFollowing] = useState(initialisFollowing); //devuelve el estado y la funcion que permite cambiar ese estado

  //definimos el cambio del texto
  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  //definimos el cambio de clase 
  const buttonClassName = isFollowing ? 'Siguiendo' : 'Seguir';


const cambiar_stado = ()=>{
  setIsFollowing(!isFollowing);
}

  return (
    <article className="Article">
      <header>
        <img
          className="avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Avatar"
        />
        <div className="description">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={cambiar_stado}>{text}</button>
      </aside>
      <span>{children}</span>
    </article>
  );
}
