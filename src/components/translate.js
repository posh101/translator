
import {useState} from "react";
import Dropdown from './dropdown';
import Convert from "./convert";

function Translate () {

    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
          
        {
            label: 'Chinese',
            value: 'zh'
        },

        {
            label: 'spanish',
            value: 'es'
        },
        
        {
          label: 'French',
          value: 'fr'
        },

        {
            label: 'German',
            value: 'de'
        },

        {
            label: 'Arabic',
            value: 'ar'
        }
    ]


    const [language, setLanguage] = useState(options[0])

    const [text, setText] = useState('')

   
    return (
            <div>
                <div className="ui segment">
                 <div className="ui form">
                    <label className="ui header">Enter Text</label>
                <input value={text} 
                onChange={(e) => setText(e.target.value)}
                />
                </div>
                </div>
               <Dropdown
               selected={language}
               language={setLanguage}
               options={options} />

               <div className="header">
                 <label className="ui header">Output</label>
                 <Convert language={language} text={text}/>
               </div>
            </div>  
    )
}

export default Translate;