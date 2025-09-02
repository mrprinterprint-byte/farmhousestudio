"use client";

import { useState } from "react";
import { products } from "../data/products/products";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");

  // Add item to localStorage cart
  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const item = { ...product, size: selectedSize || product.sizes[0], qty: 1 };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>

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
                <span className="text-gray-500 line-through">
                  ${product.price}
                </span>
                <span className="text-black font-semibold">
                  ${(
                    product.price *
                    (1 - product.discount / 100)
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Product Detail */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white max-w-4xl w-full rounded-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-black text-xl"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Product Images */}
              <div>
                {selectedProduct.images.map((img: string, idx: number) => (
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
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProduct.name}
                </h2>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

                <div className="mb-4">
                  <label className="font-semibold mr-2">Size:</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="border p-2 rounded"
                  >
                    {selectedProduct.sizes.map((size: string) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <span className="text-gray-500 line-through mr-2">
                    ${selectedProduct.price}
                  </span>
                  <span className="text-black font-bold text-xl">
                    ${(
                      selectedProduct.price *
                      (1 - selectedProduct.discount / 100)
                    ).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(selectedProduct)}
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
