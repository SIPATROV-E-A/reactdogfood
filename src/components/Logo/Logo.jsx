import '../Logo/logo.css';
import logoPics from '../images/dog.svg'

function Logo() {
  return (
    <a href='/' className='logo'>
        <img src={logoPics} alt="Логотип компании" className='logo__pic' />
    </a>
  )
}

export default Logo;
