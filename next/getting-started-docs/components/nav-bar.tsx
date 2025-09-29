import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between p-5 bg-slate-800 text-white">
      <div className="brand-section">
        <p className="font-bold text-xl">AnyRevue</p>
      </div>
      <div className="nav-section">
        <ul className="flex flex-row gap-5">
          <li className="hover:underline"><Link href='#'>Home</Link></li>
          <li className="hover:underline"><Link href='#'>Products</Link></li>
          <li className="hover:underline"><Link href='#'>About</Link></li>
          <li className="hover:underline"><Link href='#'>Contacts</Link></li>
        </ul>
      </div>
    </div>
  )
}