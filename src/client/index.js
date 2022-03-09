import handleSubmit from './js/formHandler'

import './styles/_base.scss'
import './styles/_footer.scss'
import './styles/_form.scss'
import './styles/_header.scss'
import './styles/_resets.scss'
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    const submitButton=document.getElementById('button-submit');
    submitButton.addEventListener('click',handleSubmit);
    
})
export { handleSubmit }
