import Auth from '../modules/auth/Auth'
import RegisterForm from '../modules/auth/RegisterForm'

const RegisterPage: React.FC = () => (
  <Auth isRegisterMode={true}>
    <RegisterForm />
  </Auth>
)

export default RegisterPage
