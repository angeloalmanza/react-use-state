import languages from './data/data'
import { useState } from 'react'
import CardLanguage from './components/Card';

function App() {

  const [ActiveLanguage, setActiveLanguage] = useState(null);

  const ActiveLanguageData = languages.find((curLanguage) => curLanguage.id === ActiveLanguage);

  return (
    <>
      <h1 className='mb-5'>Learn Web development</h1>
      <div className="container">
        {languages.map((curLanguage) => (
          <button onClick={() => {setActiveLanguage(curLanguage.id)}} key={curLanguage.id} className={`btn me-2 mb-2 text-white ${ActiveLanguage === curLanguage.id ? curLanguage.title.replace('.', '') : 'btn-primary'}`}>{curLanguage.title}</button>
        ))}
        <CardLanguage languageData={ActiveLanguageData}/>
      </div>
    </>
  )
}

export default App
