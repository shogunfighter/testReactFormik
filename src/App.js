// import logo from './logo.svg';
import './App.css';
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
          <div className="App">
              <h3>Just modify app.js</h3>
              {/*<FormikContainer />*/}
              <LoginForm />
              {/*<RegistrationForm/>*/}
              {/*<EnrollmentForm/>*/}
          </div>
      </ChakraProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
