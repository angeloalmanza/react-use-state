const LanguageButton = ({language, isActive, onClick}) => {
    return (
        <button 
            onClick={() => {onClick(language.id)}} 
            className={`btn me-2 mb-2 text-white ${isActive ? language.title.replace('.', '') : 'btn-primary'}`}
        >
            {language.title}
        </button>
    )
}

export default LanguageButton