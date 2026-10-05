import { Outlet } from 'react-router'
import Navbar from '../components/common/Navbar'
import TopScroll from '../components/common/TopScroll'
import Footer from '../components/common/Footer'
import MouseFollower from '../components/mouse/MouseFollower'


export default function Layout() {
  return (
    <>
      <MouseFollower />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <TopScroll />
    </>
  )
}
