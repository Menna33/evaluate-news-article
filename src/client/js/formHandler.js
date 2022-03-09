import {validateUrl} from './checkURL'

const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

const handleSubmit = async () => {
    //Get Value of the input for URL
     let url=document.getElementById('article-url').value; 
     if(validateUrl())
     {
         //send the url-value to the backend
         post("http://localhost:8081/add-url",{url}).then(res =>{
             return res.json();
         })
     } 
     else 
     {
         alert('please, Enter a valid URL')
     }


}

export default handleSubmit
