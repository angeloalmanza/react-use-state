import languages from './data/data'
import { useState } from 'react'
import CardLanguage from './components/Card';
import LanguageButton from './components/Buttons';

function App() {

  const [ActiveLanguage, setActiveLanguage] = useState(null);

  const ActiveLanguageData = languages.find((curLanguage) => curLanguage.id === ActiveLanguage);

  return (
    <>
      <h1 className='mb-5'>Learn Web development</h1>
      <div className="container">
        {languages.map((curLanguage) => (
          <LanguageButton
          key={curLanguage.id}
          language={curLanguage}
          isActive={ActiveLanguage === curLanguage.id}
          onClick={setActiveLanguage} 
          />
        ))}
        <CardLanguage languageData={ActiveLanguageData}/>
      </div>
    </>
  )
}

export default App
