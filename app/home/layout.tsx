import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />

      {/* Main content takes the full available height */}
      <main className="grow pt-16">
        {children}
      </main>

      <Footer />
    </div>
  )
}
