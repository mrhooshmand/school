// import pakages & hooks
import {Routes, Route, useLocation, Redirect} from 'react-router-dom'
// import components
import UsersList from "./pages/UsersListPage"
import NavContent from './components/NavContent'
import NavMenu from './components/NavMenu'
import UserProfile from './pages/UserProfilePage'
import LoginPage from './pages/LoginPage'
import AreasListPage from './pages/AreasListPage'
import SchoolsListPage from './pages/SchoolsList'
import CategoriesListPage from './pages/CategoriePage'
import AttributesListPage from './pages/AttributesList'
import NotFound from './pages/NotFound'

function App() {
    const path = useLocation().pathname
    return (
        <div className=' font-["Vazirmatn"] h-screen overflow-hidden '>
            {/*{path !== '/login' && <NavContent/>}*/}
            <span className=' flex h-full'>
        <div className={`${path !== '/login' ? 'w-5/6' : 'w-full'} bg-[#DBD7D4] overflow-y-scroll`}>
          <Routes>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/users" element={<UsersList/>}/>
              <Route path="/user/:id" element={<UserProfile/>}/>
              <Route path="/areas" element={<AreasListPage/>}/>
              <Route path="/schools" element={<SchoolsListPage/>}/>
              <Route path="/categories" element={<CategoriesListPage/>}/>
              <Route path="/attributes" element={<AttributesListPage/>}/>
              <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </div>
                {path !== '/login' && <NavMenu/>}
      </span>
        </div>
    )
}

export default App
