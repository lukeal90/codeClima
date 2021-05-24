import { useEffect, useState } from 'react';
import Formulario from './componentes/Formulario';
import TableBoots  from './componentes/TableBoots';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {

  const [search, saveSearch] = useState({
        city: '',
  })

  const [listen, saveListen] = useState(false);
  const [result, saveResult] = useState({});
  
  const { city } = search;

  useEffect(() => {
    const fetchApi = async () => {
      if (listen) {
        const keyApi = "8ebba8a45515997fc04417254f2a140f";
        const url = `http://api.weatherstack.com/current?access_key=${keyApi}&query=${city}`;
        const response = await fetch(url);
        const result = await response.json();
        saveResult(result);
        saveListen(false);
      }
    }
    fetchApi();
  });

  return (
    <div className="d-flex flex-column  w-50 container">
      <h1>Weather</h1>
      <Formulario
          search={search}
          saveSearch={saveSearch}
          saveListen={saveListen}
        />
        <TableBoots
          result= {result}
        />
    </div>

  );
}

export default App;
