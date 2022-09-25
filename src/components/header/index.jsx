import "./header.css"

let AppHeader = ({logIn, setLogIn}) => {
  return (
    <header>
      <div>
        <h1>
          <span>Nu</span> Kenzie
        </h1>
      </div>

      <div>
         <button onClick={() => setLogIn(false) }>Inicio</button> 
        
      </div>
    </header>
  );
};

export default AppHeader;
