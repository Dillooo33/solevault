import React from 'react'
import Header from './components/NavbarComponent'
/* import HomePage from './components/HomeComponent'; */
import Home from './pages/Home'
import ProductComponent from './components/ProductComponent'
import ProductList from './components/ProductList'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <CssBaseline />
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shoe/:id" element={<ProductComponent />} />
                    <Route path="/shoes" element={<ProductList />} />
                </Routes>
            </Router>
        </Box>
    )
}

export default App
