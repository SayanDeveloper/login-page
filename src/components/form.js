import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGithub, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import '../styles/form.css'

function Form() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [subscribed, setSubscribed] = useState(true);

    const formHandling = (e) => {
        e.preventDefault();
        alert(`Welcome ${firstName} ${secondName}! You have successfully signed in.`);
    }

    return (
        <form className='form-holder' onSubmit={formHandling}>
            <div className='name-conatainer'>
                <input 
                    type={"text"}
                    placeholder={"First Name"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required={true} />
                <input 
                    type={"text"}
                    placeholder={"Second Name"}
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                    required={true} />
            </div>
            <div>
                <input type={"email"}
                    value={email}
                    placeholder={"Email Address"}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                    />
            </div>
            <div>
                <input type={"password"}
                    value={password}
                    placeholder={"Password"}
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                    />
            </div>
            <div className='subscribe-holder'>
                <input 
                    type={"checkbox"}
                    id="subscribe-checkbox"
                    checked={subscribed}
                    onChange={(e) => setSubscribed(e.target.checked)} />
                <label htmlFor="subscribe-checkbox">
                    Subscribe to our newsletter
                </label>
            </div>
            <button className='sign-up-btn'>SIGN UP</button>
            <div className='text-center'>
                or sign up with:
            </div>
            <div className='oauth-icons-holder'>
                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                <span><FontAwesomeIcon icon={faGoogle} /></span>
                <span><FontAwesomeIcon icon={faTwitter} /></span>
                <span><FontAwesomeIcon icon={faGithub} /></span>
            </div>
        </form>
    )
}

export default Form