import { NavBar } from './components/UI/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Converter } from './pages/Converter/Converter'
import { ExchangeRates } from './pages/ExchangeRates/ExchangeRates'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Converter />} />
                <Route path="/rates" element={<ExchangeRates />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
