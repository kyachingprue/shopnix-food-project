import { Outlet } from 'react-router'
import Navbar from '../components/common/Navbar'
import TopScroll from '../components/common/TopScroll'
import Footer from '../components/common/Footer'


export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <TopScroll />
    </>
  )
}
