import { useEffect, useState } from 'react';
import './index.css';

const App = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res =>res.json())
      .then(setData)
  },[])
  return (
    <div className="App">
      <div className=' bg-slate-500 text-red-500'>
    test{data && JSON.stringify(data)}
      </div>
    </div>
  );
}

export default App;
