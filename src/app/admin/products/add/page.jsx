'use client';

import ProductForm from '@/components/ProductForm';

export default function AddProductPage() {
  const handleProductSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi du produit');
      }

      const data = await response.json();
      console.log('Produit ajouté :', data);
      alert('Produit ajouté avec succès');
    } catch (error) {
      console.error('Erreur lors de la soumission du produit :', error.message);
      alert('Erreur serveur');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Ajouter un produit</h1>
      <ProductForm onSubmit={handleProductSubmit} />
    </div>
  );
}
