import languages from './data/data'
import { useState } from 'react'

function App() {

  const [ActiveLanguage, setActiveLanguage] = useState(null);

  const ActiveLanguageData = languages.find((curLanguage) => curLanguage.id === ActiveLanguage);

  return (
    <>
      <h1>Learn Web development</h1>
      <div className="container">
        {languages.map((curLanguage) => (
          <button onClick={() => {setActiveLanguage(curLanguage.id)}} key={curLanguage.id} className='btn btn-primary me-2 mb-2'>{curLanguage.title}</button>
        ))}
        <div className="card">
          <div className="card-body">
          {ActiveLanguageData ? (
              <h5 className="card-title">{ActiveLanguageData.title}</h5>
              <p className="card-text">{ActiveLanguageData.description}</p>
            ) : (
              <p>Nessun linguaggio selezionato</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
