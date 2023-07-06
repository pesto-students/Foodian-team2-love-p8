import './Tabs.css'



export const TabItem = ({ title, index, active, setActive}) => {
    return (
        <div className='nav-item'>
            <button onClick={() => setActive(title)} className='button-item'>
            <span className={`my-component ${active ? 'active' : ''}`} >
                               {title.toUpperCase()}
               </span>
            </button>
        </div> 
    )
}

