'use client';

import { useState, useEffect } from 'react';

export default function ProductForm({ initialData = null, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    category: '',
    tags: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        tags: initialData.tags ? initialData.tags.join(', ') : '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
    };
    if (onSubmit && typeof onSubmit === 'function') {
      await onSubmit(finalData);
    } else {
      console.error('onSubmit is not a function');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nom du produit"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="image"
        placeholder="URL de l'image"
        value={formData.image}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Prix"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="category"
        placeholder="Catégorie"
        value={formData.category}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="tags"
        placeholder="Tags (ex: promo, nouveauté)"
        value={formData.tags}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {initialData ? 'Modifier' : 'Ajouter'}
      </button>
    </form>
  );
}
