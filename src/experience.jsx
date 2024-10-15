{labels.map((label) => <Label key ={label.id} title = {label.title} namee = {label.name} type={label.type}
value = {label.value} setValue={label.setValue}/>)}
const labels = [
    {id:11, title: 'Grade', namee: 'grade', type: 'text', value: grade, setValue: setGrade},
    {id:22, title: 'Field of study', namee: 'study', type: 'text', value: study, setValue: setStudy},
    {id:33, title: 'School', namee: 'school', type: 'text', value: school, setValue: setSchool}
]
//<button itemID='add' onClick={Add}>add</button>
