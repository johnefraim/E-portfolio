import Navbar from './components/Navbar';
import Login from './components/login';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-9">
      <Navbar/>
      <Login/>
    </main>
  )
}
