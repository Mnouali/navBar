import TogglerLang from './Multilang/component/togglerLang';
import Content from './Multilang/component/Content';
import Context from './Multilang/context/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calcul from './calcu/Calcul';
import Navbar1 from './navBar/Navbar';
import Slider from './slider/Slider';
import Form from './todList/form';
import Pagination from './Api/PaginationApi';


function App() {

  return (
    <div className="App" >
       <Navbar1/>
       <BrowserRouter>
       <Routes>
         <Route path='/' element={<Calcul/>}/>
         <Route path='/tp2' element={<Slider/>}/>
         <Route path='/tp3' element={<Form/>}/>
         <Route path='/tp4' element={<Pagination/>}/>
         <Route path='/tp5' element={ <Context><TogglerLang/><Content/></Context>}/>
       </Routes>
       </BrowserRouter>
    
        
    </div>
  );
}

export default App;

