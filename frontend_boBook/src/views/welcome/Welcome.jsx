
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
            <Button styleButton="bttnGreen"  texButton="Sign In"/>
            <Button styleButton="bttnGreen"  texButton="Sign Up"/>
        </div>
    </div>
)
}

export default Welcome