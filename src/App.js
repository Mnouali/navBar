import TogglerLang from './Multilang/component/togglerLang';
import Content from './Multilang/component/Content';
import Context from './Multilang/context/context';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Calcul from './calcu/Calcul';
import Navbar1 from './navBar/Navbar';
import Slider from './slider/Slider';
import Form from './todList/form';
import Pagination from './Api/PaginationApi';
import ThemeContextProvider from './context/themeContext';
import BtnToggler from './componet/btnToggler/btnToggler/btnToggler';


function App() {

  return (
    <div className="App" >

     <Navbar1/>
       <Routes>
         <Route path='/' element={<Calcul/>}/>
         <Route path='/slide' element={<Slider/>}/>
         <Route path='/todolist' element={<Form/>}/>
         <Route path='/pagination' element={<Pagination/>}/>
         <Route path='/multilang' element={ <Context><TogglerLang/><Content/></Context>}/>
         <Route path='*' element={<h1>Not Found</h1>}/>
       </Routes>

    
       <ThemeContextProvider>
          <BtnToggler/>
      </ThemeContextProvider>

    
    
        
    </div>
  );
}

export default App;

