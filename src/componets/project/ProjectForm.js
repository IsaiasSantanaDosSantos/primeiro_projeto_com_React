import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {}) 

    useEffect(() => {
        fetch("http://localhost:5000/categories", { 
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefaut()
        console.log("Nome projeto")
        handleSubmit(project)
        
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
        console.log(e.target.value) //  mostrar valor projeto
    }
    function handleCategory(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
            
        },
    })
    console.log(e.target.options[e.target.selectedIndex].text) // mostrar categoria projeto
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text" 
            text="Nome do projeto" 
            name="name" 
            placeholder="Insira o nome do projeto"
            handleOnChanger={handleChange}
            value={project.name} //? project.name :''}  
            />
            <Input 
            type="Number" 
            text="Orçamento" 
            name="budget" 
            placeholder="Insira o orçamento do projeto"
            handleOnChange={handleChange} 
            value={project.budget ? project.budget : ''} 
            />
            <Select 
            name="category_id" 
            text="Selecione a categoria" 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''} 
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm