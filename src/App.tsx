import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AllStock from './AllStock';



const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/AllStock">AllStock</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    {/* Define routes for different pages */}
                    <Route path="/AllStock" element={<AllStock />} />
                </Routes>
            </div>
        </Router>
    );
};


export default App;
