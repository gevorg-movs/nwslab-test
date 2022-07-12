import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout";

const Home = React.lazy(() => import("./pages/Home"))
const Category = React.lazy(() => import("./pages/Category"))

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={
                            <React.Suspense>
                                <Home/>
                            </React.Suspense>}/>
                        <Route path="/categories/:categoryId" element={
                            <React.Suspense>
                                <Category/>
                            </React.Suspense>}/>
                    </Route>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
