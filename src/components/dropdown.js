import { useState, useEffect, useRef } from "react";

function Dropdown ({options, selected, language}) {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
      const onBodyClick = (event)=> {
        if(ref.current.contains(event.target)) {
            return;
        }
        setOpen(false)
      }
      document.addEventListener('click', onBodyClick)

      return(()=> {
        document.removeEventListener('click', onBodyClick)
      })
    }, [])

    const renderedOptions = options.map((option) => { 

        if(selected.value === option.value) {
            return null;
        }

        return (
            <div onClick={()=> language(option)} key={option.value} className="item">
                {option.label}
             </div>
        )
    })

    return <div  ref={ref} className="ui form">
        <div className=" field">
            <label className="label">Select A Language</label>
            <div
            onClick={() => setOpen(!open)}
             className=
             {`ui selection dropdown ${open ?'visible active': ''}`}>
                <i className="dropdown icon"></i>
                <div className="text">{selected.label}</div>
                <div className=
                {`menu ${open ? 'visible transition': ''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>
    </div>
}

export default Dropdown;