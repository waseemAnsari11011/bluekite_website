import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Step 1 */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-blue-600 mb-4">1</div>
            <h3 className="text-2xl font-semibold mb-2">Browse Restaurants</h3>
            <p className="text-gray-600">
              Find all your favorite local fast-food spots in one place.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-blue-600 mb-4">2</div>
            <h3 className="text-2xl font-semibold mb-2">Place Your Order</h3>
            <p className="text-gray-600">
              Add food from one or multiple restaurants to your cart.
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <div className="text-5xl font-bold text-blue-600 mb-4">3</div>
            <h3 className="text-2xl font-semibold mb-2">Get Fast Delivery</h3>
            <p className="text-gray-600">
              We'll pick it up and deliver it hot and fresh to your home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
