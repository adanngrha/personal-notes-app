import React from "react";
import Header from "./Header.jsx";
import HomePage from "../pages/HomePage.jsx";
import AddPage from "../pages/AddPage.jsx";
import ArchivePage from "../pages/ArchivePage.jsx";
import { Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage.jsx";

const NotesApp = () => {
    return (
        <div className='app-container'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/archive' element={<ArchivePage />} />
                    <Route path='/notes/add' element={<AddPage />} />
                    <Route path='/notes/:id' element={<DetailPage />} />
                </Routes>
            </main>
        </div>
    )
}

export default NotesApp;