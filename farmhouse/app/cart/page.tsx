"use client";

import { useState, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  discount: number;
  qty: number;
  size: string;
  selected?: boolean;
  img: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
const handleCheckout = async () => {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems: selectedItems }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // redirect to Stripe Checkout
    } else {
      alert("Checkout failed");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQty = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updated);
  };

  const decrementQty = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    updateCart(updated);
  };

  const deleteItem = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const toggleSelect = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    updateCart(updated);
  };

  const filteredCart = cart.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedItems = cart.filter((item) => item.selected);

  const totalPrice = selectedItems.reduce(
    (acc, item) =>
      acc + (item.price * (1 - item.discount / 100)) * item.qty,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-6"
      />

      {filteredCart.length === 0 ? (
        <p className="text-gray-500">No products found in cart.</p>
      ) : (
        <div className="space-y-4">
          {filteredCart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow"
            >
              {/* Checkbox + image */}
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={!!item.selected}
                  onChange={() => toggleSelect(item.id)}
                />
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Size: {item.size}</p>
                  <p className="text-gray-700">
                    ${(
                      item.price *
                      (1 - item.discount / 100)
                    ).toFixed(2)}{" "}
                    x {item.qty} ={" "}
                    <span className="font-bold">
                      ${(
                        (item.price * (1 - item.discount / 100)) *
                        item.qty
                      ).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-end gap-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Checkout */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <div>
          <p className="text-lg font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <p className="text-gray-500 text-sm">
            {selectedItems.length} item(s) selected
          </p>
        </div>
        <button
  disabled={selectedItems.length === 0}
  className={`px-6 py-2 rounded text-white font-semibold transition ${
    selectedItems.length > 0
      ? "bg-black hover:bg-gray-800"
      : "bg-gray-400 cursor-not-allowed"
  }`}
  onClick={handleCheckout} // <-- change here
>
  Checkout
</button>
      </div>
    </div>
  );
}
