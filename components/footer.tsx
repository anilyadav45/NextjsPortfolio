export default function Footer() {
  return (
    <footer className="py-8 bg-[#0F172A] text-white text-center">
      <div className="container mx-auto px-4">
        <p>Made with 💻 by Anil Yadav</p>
        <p className="text-sm text-gray-400 mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  )
}
