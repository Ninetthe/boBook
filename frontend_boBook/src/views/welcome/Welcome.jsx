
import Button from '../../components/atoms/buttons/Button';
import '../../components/atoms/buttons/button.css';
import Logo from '../../components/atoms/logo/Logo';
import VectorDesign from '../../components/atoms/vectordesign/VectorDesign';
import "./welcome.css"

function Welcome() {
return (
    <div className='welcomeContainer'>
        <div className=''>
            <VectorDesign></VectorDesign>
        </div>
        <div className='LogoWelcome'>
            <Logo></Logo>
        </div>
        <div>
            <a href="/login"><Button styleButton="bttnGreen"  texButton="Sign In"/></a>
            <a href="/register">  <Button styleButton="bttnGreen"  texButton="Sign Up"/></a>
        </div>
    </div>
)
}

export default Welcome