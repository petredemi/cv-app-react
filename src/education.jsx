import { useState} from 'react';
import  styles from'./stylefiles/education.module.css';
function Info({index, inf, }){
    return (
        <div className = {styles.in}>
            <div className= {'index'}> {index} </div>
            <div className='inf'>{inf}</div> 
        </div>
    )
}
function FromTo({startmonth, startyear, endmonth, endyear}){
    return(
        <>
            <div className="date">
                    <div>from: {startmonth + '  '}{startyear} </div>
                    <div>  to: {endmonth + '  '}{endyear}</div>
            </div>
        </>
    )
}
function Label({title, type, name, value, setValue}){
    return(
        <>
        <label htmlFor = {name}>
             <h4>{title}: {''}</h4>
        </label>
             <input type={type}
                id = {name}
                name = {name}
                 value={value}
                 onChange={(event) => {setValue(event.target.value)}}
                 className={styles.input}
              /> 
        </>            
    )
}
const educards = ['first']
const cards = ['second', 'third']
function Education(){
    const [add, setAdd] = useState(0)
    function Educards(){
        if (add == add){
           return( 
            <>
                {educards.map((card) => <Edu key = {card} className = {card}/>)}
            </>
           )
        }
    }
function Add(event){
    if ( add > 1){return}
    event.preventDefault()
    educards.push(cards[add])
        setAdd(add+ 1);
    console.log(add);
    console.log(educards)
}
    function Edu(){
        const [grade, setGrade] = useState('');
        const [study, setStudy] = useState('')
        const [school, setSchool] = useState('')
        const[startmonth, setStartmonth] = useState('')
        const [startyear, setStartyear] = useState('')
        const [endmonth, setEndmonth] = useState('')
        const [endyear, setEndyear] = useState('');

        const [edit, setEdit] = useState(false);
        const [col, setCol] = useState('');
        const [show, setShow] = useState('none');

        const field = ['Grade:',  'Field of study:', 'School:']
        const months = ['Ianuary', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October','November', 'December']
        const years = []
        const labels = [
            {id:11, title: 'Grade', name: 'grade', type: 'text', value: grade, setValue: setGrade},
            {id:22, title: 'Field of study', name: 'study', type: 'text', value: study, setValue: setStudy},
            {id:33, title: 'School', name: 'school', type: 'text', value: school, setValue: setSchool}
        ]
        function CreateYears(){
                const yeardata = new Date()
                const y = yeardata.getFullYear()
                for (let i = y; i > 2010; i-- )
                 years.push(i)
            }

        CreateYears()
        const personal = [ 
            {id: 1, inf: grade, index: 0},
            {id: 2, inf: study, index: 1},
            {id: 3, inf: school, index: 2}
        ];
        const dates = [
            {id:1, dat: startmonth},
            {id: 2, dat: startyear},
            {id:3, dat: endmonth},
            {id: 4, dat: endyear}
        ]
        function Edit(event){
            event.preventDefault();
                if(!edit){
                    console.log(edit)
                    setCol('grey')
                    setShow('flex')
                    setEdit(true);
                    console.log(years)
                }else{
                    console.log(edit)
                    setCol('blue')
                    setShow('none')
                    setEdit(false)
                }
        } 
        function Save(event){
            event.preventDefault();
            if(edit){
                setShow('none')
                setEdit(false)
            }else{
                setShow('flex')
                setEdit(true)
            }

        }
        function Form(){
            return(
                <>
                <form className='form'>
                {labels.map((label) => <Label key ={label.id} title = {label.title} name = {label.name} type={label.type}
                        value = {label.value} setValue={label.setValue}/>)}
                  <label className='month'>
                     <h4>start month</h4>
                     <input list="studydates" name="studydates"
                        value = {startmonth}
                        onChange= {(event) => {
                            return setStartmonth(event.target.value)
                        }}
                        onClick = {(event) => {setStartmonth(event.target.value = '')}}
                     />
                     <datalist id="studydates" onChange={(event) => {
                        return setStartmonth(event.target.value);
                     }}   name ='studydates'>
                        {months.map((month) => {
                            return <option key = {month} value = {month}/>
                        })}
                      </datalist>
                  </label>
                  <label className='month'>
                     <h4>Start year</h4>
                    
                     <input list="startyear" name="startyear" className='name'
                        value = {startyear}
                        onChange={(event) =>{
                            setStartyear(event.target.value)
                         }}
                         onClick = {(event) => {setStartyear(event.target.value = '')}}
                        />
                     <datalist id="startyear" onChange={(event) =>{
                        setStartyear(event.target.value);
                            }} name ='startyear'>
                        {years.map((year) => {
                            return <option key = {year} value = {year}/>
                        })}
                      </datalist>
                    </label>
                    
                  <label className='month'>
                     <h4>end month</h4>
                     <input list="endmonth" name="endmonth"
                        value = {endmonth}
                        onChange={(event) =>{
                            setEndmonth(event.target.value)
                         }}
                         onClick = {(event) => {setEndmonth(event.target.value = '')}}
                        />
                     <datalist id="endmonth" onChange={(event) =>{
                        setEndmonth(event.target.value);
                     }} name ='endmonth'>
                        {months.map((month) => {
                            return <option key = {month} value = {month}/>
                        })}
                      </datalist>
                  </label>
                  <label className='month'>
                     <h4>End year</h4>
                     <input list="endyear" name="endyear"
                        value = {endyear}
                        onChange={(event) =>{
                            setEndyear(event.target.value)
                         }}
                         onClick = {(event) => {setEndyear(event.target.value = '')}}
                        />
                     <datalist id="endyear" onChange={(event) =>{
                        setEndyear(event.target.value);
                            }} name ='endyear'>
                        {years.map((year) => {
                            return <option key = {year} value = {year}/>
                        })}
                      </datalist>
                  </label>
                </form>
            </>
            )
        } 
        
    return(
        <>
    <div className="addeducation">
        <div className="basic" style={{display:show, backgroundColor: col}}>
            {Form()}
            <button itemID='save'  onClick={Save}>Save</button>
        </div>
        <div className="info">
            {personal.map((persona) => <Info key = {persona.id} inf = {persona.inf} index = {field[persona.index]}/>)}
            <FromTo  startmonth={startmonth} endmonth={endmonth} startyear={startyear} endyear={endyear}/>
            <div className= 'btn'>
                <button itemID='edit' onClick={Edit}>Edit</button>
                <button itemID='edit'>Delete</button>
            </div>
        </div>
    </div>

</>
    )
}
        return (
            <>
                <div className={styles.education}>
                        <h3>Education</h3>
                        <button itemID='add' onClick={Add}>add</button>
                </div>
                <Educards/>
            </>
    ) 
}
function Quote() {
    return <h5>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h5>;
  }
 export {Education, Quote} ;