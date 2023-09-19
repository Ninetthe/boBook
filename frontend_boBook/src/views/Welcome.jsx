
import Button from '../components/atoms/buttons/Button'
import "../components/atoms/buttons/button.css"
import "./welcome.css"
function Welcome() {
return (
    <div className='containerWelcome'>


    <div>
        <Button styleButton="bttnGreen"  texButton="Sign In"/>
        <Button styleButton="bttnGreen"  texButton="Sign Up"/>
    </div>

    </div>
)
}

export default Welcome