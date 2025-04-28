import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayOut from './layout/LayOut';
import Loading from './componants/pages/Loading';
import { Toaster } from "react-hot-toast";


// Lazy loading the components
const Home = lazy(() => import('./componants/Home/Home'));
// const Aboutus = lazy(() => import('./componants/pages/Aboutus'));

function App() {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }} className="">
            <Router>
                <Suspense fallback={<div><Loading /></div>}>
                    <Routes>
                        <Route path='/' element={<LayOut />}>
                            <Route path="/" element={<Home />} />
                            {/* <Route path="/aboutus" element={<Aboutus />} /> */}
                        </Route>
                    </Routes>
                </Suspense>
                <Toaster />
            </Router>
        </div>
    );
}

export default App;
