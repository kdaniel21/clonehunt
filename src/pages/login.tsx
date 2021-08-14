import Auth from '../modules/auth/Auth'
import LoginForm from '../modules/auth/LoginForm'

const LoginPage: React.FC = () => (
  <Auth isRegisterMode={false}>
    <LoginForm />
  </Auth>
)

export default LoginPage
