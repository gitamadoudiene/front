"use client";

import Link from "next/link";
import { useState, useEffect } from "react";


export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
        .then(res => res.json())
        .then(setProducts)
        .catch(err => console.error("Error fetching products:", err));
    }, []);

    const handleDelete = async (id) => {
        if(!confirm("Supprimer ce produit ?")) return;
        await fetch(`http://localhost:5000/api/products/${id}`, {
            method: 'DELETE'});
        setProducts(products.filter((p) => p._id !== id));
    };

  return (
    <div>
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">Liste des Produits </h1>
            <Link href="/admin/products/add"> +AJOUTER </Link>
        </div>

        <table className="min-w-full bg-white border">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border px-4 py-2">Nom</th>
                    <th className="border px-4 py-2">Prix</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
            </thead>

            <tbody>
                {products.map((p) => (
                    <tr key={p._id} className="border-t">
                        <td className="p-2">{p.name}</td>
                        <td className="p-2">{p.price} Fcfa</td>
                        <td className="p-2 space-x-2">
                            <Link href={`/admin/products/edit/${p._id}`} className="text-blue-500">Modifier</Link>
                            <button onClick={() => handleDelete(p._id)} className="text-red-500">Supprimer</button>
                        </td>

                    </tr>
                )
                )}
            </tbody>

        </table>
      
    </div>
  )
}
