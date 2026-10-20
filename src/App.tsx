import { useEffect } from 'react'
import './App.css'
import { convertTxtTonumber } from './logic/seleksiNumeral'

function App() {
  useEffect(() => {
    console.log("Sebelum fungsi");

    const [f1, f2] = convertTxtTonumber("22+33*2");

  alert("Hasil fungsi f1: " + f1 + ", f2: " + f2);
  }, []);
  return (
    <>
      <div>
        <h1>TEST REACT BERHASIL</h1>

        <button onClick={() => console.log("Halo dari React!")}>
          Tes Console
        </button>

      </div>
    </>
  )
}

export default App
