import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'
import Feed from './components/Feed'

export default function Home() {
  return (
    <>
    <Header />
    <main className="app_body flex justify-center max-w-7xl px-2 mx-auto sm:px-10 xl:px-20   w-full">
      <Sidebar />
      <Feed />
      <Widget />
    </main>
  </>
  )
}
