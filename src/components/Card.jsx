const CardLanguage = ({languageData}) => {
    return (
        <div className="card">
          <div className="card-body">
            {languageData ? (
              <>
                <h5 className="card-title">{languageData.title}</h5>
                <p className="card-text">{languageData.description}</p>
              </>
            ) : (
              <p>Nessun linguaggio selezionato</p>
            )}
          </div>
        </div>
    )
}

export default CardLanguage