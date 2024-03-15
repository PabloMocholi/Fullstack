import { useEffect, useState } from 'react'
import './Email.css'

const Email = () => {

    const [emails, setEmails] = useState([])
    const [isOpen, setOpen] = useState(false)
    const { VITE_MAIL } = import.meta.env

    const ToggleActive = () => {
        setOpen(!isOpen);
        console.log(isOpen)
    }


    const getApi = async () => {
        const controller = new AbortController();
        let opciones = {
            method: 'GET', // POST, PUT, DELETE, etc
            mode: 'cors', // no-cors, same-origin, cors
            signal: controller.signal, // para abortar la petición
            headers: {
                'Content-Type': 'application/json'
            },

        }

        fetch(VITE_MAIL, opciones)
            .then(function (response) {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setEmails(data)
            }).catch(error =>{
                console.log(error)
            })
            .finally(() => {
                controller.abort();
            })
    };

    useEffect(() => {
        getApi()

    }, [])


    return (<>
        {
            emails.length > 0 && <>
                <div className='Email' onClick={ToggleActive}>
                    <div className='Email-div'>
                        <h2>{emails[0].title}</h2>
                        <div className='Email-info' >
                            <div className='Email-remitente'>
                                <img className='Email-initial' src={emails[0].initial} alt="" />
                                <h4>{emails[0].author}</h4>
                            </div>
                            <span>{emails[0].hour}</span>

                        </div>

                    </div>

                    <p className='Email-p'>
                        {emails[0].content}
                    </p>

                </div>
                <Reply isOpen={isOpen} ToggleActive={ToggleActive} email={emails[0]} />
            </>
        }



    </>)
}

const Reply = ({ isOpen, ToggleActive, email }) => {
    return (
        <div className={`Reply ${isOpen ? 'is-active' : ''}`} >
            <div className='Reply-section Reply-top'>
                <span onClick={ToggleActive} className='u-blue'>Cancel</span>
                <h4>Reply</h4>
                <i class="fa-regular fa-paper-plane Reply-icon"></i>
            </div>
            <div className='Reply-section Reply-user'>
                <div className='Reply-user-div'>
                    <i class="fa-solid fa-reply Reply-icon"></i>
                    {email.author}
                </div>
                <i class="fa-solid fa-chevron-down Reply-icon"></i>

            </div>
            <div className='Reply-section Reply-title'>Re: {email.title}</div>
            <div className='Reply-content'> Your reply....</div>
        </div>
    );
};
export default Email