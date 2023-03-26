import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { SignUp } from './pages/SignUp/SignUp';
import "./styles.css"

function App() {
  return (
    <div className='page-container common-col j-center a-center'>
      <ToastContainer />
      <SignUp/>
    </div>
  );
}

export default App;
