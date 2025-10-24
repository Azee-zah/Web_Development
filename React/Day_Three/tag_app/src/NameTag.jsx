import './NameTag.css'
import { useState } from 'react'

function NameTag() {

    const [name, setNAme] = useState('')
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')

    return (
        <div className='gen-con'>
            <div className='input-field'>
                <input placeholder="First name" value={name} onChange={(e) => setNAme(e.target.value)} />

                <input placeholder="Job title" value={title} onChange={(e) => setTitle(e.target.value)} />

                <input placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            </div>

            <div className='display'>
                <p>Hello, I am: </p>
                <p>{name} </p>
                <p>{title} </p>
                <p>{company} </p>
            </div>

            <button onClick={() => alert(`Succesfully Dowloaded ${name}'s tag`)}>Download</button>
        </div>
    )
}

export default NameTag