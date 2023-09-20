import '../../components/atoms/buttons/button.css'
import './logIn.css';
import Logo from '../../components/atoms/logo/Logo';
import VectorDesign from '../../components/atoms/vectordesign/VectorDesign';
import Button from '../../components/atoms/buttons/Button'
import '../../components/atoms/forms/forms.css'
import '../welcome/welcome.css'

export default function SignIn() {
return (
    <div className='logInContainer'>
        <VectorDesign></VectorDesign>
        <div className='LogoWelcome'>
        <Logo ></Logo>

        </div>
        <div className='containerForm'>

        
        <form  action="" method='POST'>
                <label className='styleFormsLabel'  name="email">Email
                <br />
                    <input className='bttnWhite' name="email" type="text" />
                </label>
                <br />
                <label  className='styleFormsLabel' name="password">Password
                <br />
                    <input className='bttnWhite' name="password" type="text" />
                </label>
        </form>
    </div>
        <Button styleButton="bttnGreenMedium"  texButton="Sign In"/>
    </div>

    )
}
