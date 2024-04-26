import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/header'
import Sidebar from './components/sidebar'
import Brands from './components/brands'
import Horizontalsidebar from './components/horizontalsidebar'
import School from './components/school'
import Horizontalsidebar2 from './components/horizontalsidebar2'
import Footer from './components/footer'
import Mid from './components/mid'

let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
 <>

<Header/>
<Sidebar/>
<Brands/>
<Horizontalsidebar/>
<School/>
<Horizontalsidebar2/>
<Mid/>
<Footer/>

 </>
)