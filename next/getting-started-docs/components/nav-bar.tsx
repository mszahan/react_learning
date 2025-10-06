import Link from "next/link"

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between p-5 bg-slate-800 text-white">
      <div className="brand-section">
        <p className="font-bold text-xl">AnyRevue</p>
      </div>
      <div className="nav-section">
        <ul className="flex flex-row gap-5">
          <li className="hover:border-b-1 border-white"><Link href='/'>Home</Link></li>
          <li className="hover:border-b-1 border-white"><Link href='/blog'>Blog</Link></li>
          <li className="hover:border-b-1 border-white"><Link href='#'>About</Link></li>
          <li className="hover:border-b-1 border-white"><Link href='#'>Contacts</Link></li>
        </ul>
      </div>
    </div>
  )
}