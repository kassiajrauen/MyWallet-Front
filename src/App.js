import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import NewEntry from './components/NewEntry';
import NewExit from './components/NewExit';
import {TokenProvider} from "./contexts/TokenContext";
import {UserProvider} from "./contexts/UserContext";

function App(){
    return (
        <TokenProvider>
            <UserProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Login />} />
                        <Route path='/sign-up' element={<SignUp />} />
                        <Route path='/home' element={<Home />}></Route>
                        <Route path='/new-entry' element={<NewEntry />} />
                        <Route path='/new-exit' element={<NewExit />}></Route>
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </TokenProvider>
    )
}

export default App;