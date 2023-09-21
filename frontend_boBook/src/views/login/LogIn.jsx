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
        <a className="textDecoration" href="/"><Logo ></Logo></a>
        </div>

        <div className='containerForm'>
            <form  action="" method='POST'>
                <label className='styleFormsLabel'  name="email">Email
                <br />
                    <input className='styleFormsInput' name="email" type="text" />
                </label>
                <br />
                <label  className='styleFormsLabel' name="password">Password
                <br />
                    <input className='styleFormsInput' name="password" type="text" />
                </label>
            </form>
        </div>
        <Button styleButton="bttnGreenMedium"  texButton="Sign In"/>
        <a className="resetPassword" href="">Forwot a password</a>
        <p className="styleParagraphLogin">No Account
            <a className='enlaceRegister' href="/register">Sign Up</a>
        </p>
    </div>

    )
}
