import Link from 'next/link';

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white p-4 shadow">
            <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
            <ul className="space-y-2">
                <li> <Link href="/admin">DashBoard</Link></li>
                <li> <Link href="/admin/products">Produits</Link> </li>
                <li> <Link href="/admin/silders" >Sliders</Link> </li>
                <li> <Link href="/admin/users" >Utilisateurs</Link> </li>
            </ul>
      </aside>
        <main>
            {children}
         </main>
    </div>
  )
}
