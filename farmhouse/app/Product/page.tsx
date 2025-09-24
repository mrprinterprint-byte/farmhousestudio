"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

// ---- Types ----
type Product = {
  id: string;
  name: string;
  price: number;
  discount?: number;
  images: string[];
  sizes: string[];
  description: string;
};

type ProductWithQuantities = Product & {
  quantities?: Record<string, number>; // { size: qty }
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductWithQuantities | null>(null);

  // ---- Fetch products from Supabase ----
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-xl">{product.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-500 line-through">${product.price}</span>
                <span className="text-black font-semibold">
                  ${(product.price * (1 - (product.discount || 0) / 100)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---- Modal / Product Detail ---- */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] rounded-lg p-6 relative overflow-y-auto">
            <button
              className="sticky top-2 right-2 ml-auto block text-black text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Product Images */}
              <div className="overflow-y-auto max-h-[70vh]">
                {selectedProduct.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={selectedProduct.name}
                    className="mb-2 w-full object-cover h-64 rounded"
                  />
                ))}
              </div>

              {/* Product Info */}
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

                {/* Bulk Quantities by Size */}
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Select Quantities by Size:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.sizes.map((size) => (
                      <div key={size} className="flex items-center gap-2">
                        <label className="w-20">{size}</label>
                        <input
                          type="number"
                          min="0"
                          className="border p-2 rounded w-20"
                          value={selectedProduct.quantities?.[size] ?? 0}
                          onChange={(e) => {
                            const qty = parseInt(e.target.value, 10) || 0;
                            setSelectedProduct((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    quantities: {
                                      ...(prev.quantities || {}),
                                      [size]: qty,
                                    },
                                  }
                                : prev
                            );
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-gray-500 line-through mr-2">${selectedProduct.price}</span>
                  <span className="text-black font-bold text-xl">
                    ${(selectedProduct.price * (1 - (selectedProduct.discount || 0) / 100)).toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => {
                    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

                    Object.entries(selectedProduct.quantities || {}).forEach(([size, qty]) => {
                      if (qty && qty > 0) {
                        cart.push({ ...selectedProduct, size, qty });
                      }
                    });

                    localStorage.setItem("cart", JSON.stringify(cart));
                    setSelectedProduct(null); // close modal
                  }}
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
