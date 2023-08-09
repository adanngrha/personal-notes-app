import React, {useState} from "react";
import Header from "./Header.jsx";
import HomePage from "../pages/HomePage.jsx";
import AddPage from "../pages/AddPage.jsx";
import ArchivePage from "../pages/ArchivePage.jsx";
import { Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage.jsx";
import NotFound from "./NotFound.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

const NotesApp = () => {
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [localeContext, setLocaleContext] = useState({

    });

    return (
        <div className='app-container'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/archives' element={<ArchivePage />} />
                    <Route path='/notes/new' element={<AddPage />} />
                    <Route path='/notes/:id' element={<DetailPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    )
}

export default NotesApp;