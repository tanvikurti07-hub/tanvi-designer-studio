export default function TanviDesignerStudio() {
  const products = [
    {
      id: 1,
      name: 'Royal Beige Floral Kurti Set',
      price: '₹2,499',
      image:
        'https://images.unsplash.com/photo-1583391733956-6c77a9a2d1d9?q=80&w=1200&auto=format&fit=crop',
      colors: ['Beige', 'Pink', 'Gold'],
    },
    {
      id: 2,
      name: 'Pastel Green Peacock Kurti Set',
      price: '₹2,799',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
      colors: ['Green', 'Cream'],
    },
  ]

  const sizes = ['M', 'L', 'XL', 'XXL']

  return (
    <div className="min-h-screen bg-[#f7f1ec] text-[#5c1f16] font-serif">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm sticky top-0 z-50">
        <div>
          <h1 className="text-3xl tracking-wide font-semibold">TANVI</h1>
          <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
            Designer Studio
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a href="#home" className="hover:text-black transition">
            Home
          </a>
          <a href="#collection" className="hover:text-black transition">
            Collections
          </a>
          <a href="#new" className="hover:text-black transition">
            New Arrivals
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

        <button className="bg-[#7d2415] text-white px-5 py-2 rounded-full hover:opacity-90 transition">
          Cart (0)
        </button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="grid md:grid-cols-2 items-center px-8 md:px-20 py-16 gap-10"
      >
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#7d2415] mb-4">
            Luxury Ethnic Fashion
          </p>

          <h2 className="text-5xl md:text-7xl leading-tight mb-6">
            Elegant Kurtis For Every Occasion
          </h2>

          <p className="text-gray-700 text-lg mb-8 max-w-xl">
            Discover premium designer kurtis with elegant embroidery,
            sophisticated prints, and timeless ethnic fashion curated by
            Tanvi Designer Studio.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#7d2415] text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition">
              Shop Now
            </button>

            <button className="border border-[#7d2415] px-8 py-4 rounded-full text-lg hover:bg-white transition">
              Explore Collection
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
            alt="Designer Kurti"
            className="rounded-[40px] shadow-2xl w-full object-cover"
          />
        </div>
      </section>

      {/* Featured Banner */}
      <section className="mx-8 md:mx-20 mb-20 bg-white rounded-[40px] overflow-hidden shadow-lg grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
          alt="Fashion Banner"
          className="h-full object-cover"
        />

        <div className="p-10 md:p-16 flex flex-col justify-center">
          <p className="uppercase tracking-[0.25em] text-sm mb-4 text-[#7d2415]">
            New Collection
          </p>

          <h3 className="text-4xl mb-6 leading-snug">
            Premium Ethnic Wear Crafted With Elegance
          </h3>

          <p className="text-gray-600 text-lg mb-8">
            Soft fabrics, luxurious embroidery, and beautiful prints designed
            for women who love timeless style.
          </p>

          <button className="w-fit bg-[#7d2415] text-white px-8 py-4 rounded-full hover:opacity-90 transition">
            View Collection
          </button>
        </div>
      </section>

      {/* Products */}
      <section id="collection" className="px-8 md:px-20 pb-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#7d2415]">
              Best Sellers
            </p>
            <h3 className="text-4xl mt-3">Featured Kurtis</h3>
          </div>

          <button className="border border-[#7d2415] px-6 py-3 rounded-full hover:bg-white transition">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-[450px] w-full object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <h4 className="text-2xl mb-2">{product.name}</h4>
                    <p className="text-[#7d2415] text-xl font-semibold">
                      {product.price}
                    </p>
                  </div>

                  <button className="bg-[#7d2415] text-white px-4 py-2 rounded-full text-sm">
                    Add
                  </button>
                </div>

                <div className="mb-4">
                  <p className="text-sm uppercase tracking-wide mb-2 text-gray-500">
                    Colors
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="px-4 py-2 bg-[#f7f1ec] rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide mb-2 text-gray-500">
                    Sizes
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className="border border-[#7d2415] px-4 py-2 rounded-full hover:bg-[#7d2415] hover:text-white transition"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Admin Dashboard Preview */}
      <section className="px-8 md:px-20 pb-24">
        <div className="bg-white rounded-[40px] p-10 shadow-lg">
          <div className="mb-10">
            <p className="uppercase tracking-[0.25em] text-sm text-[#7d2415] mb-3">
              Admin Dashboard
            </p>

            <h3 className="text-4xl mb-4">Manage Your Products Easily</h3>

            <p className="text-gray-600 max-w-2xl">
              Upload product photos, add color variations, set prices, manage
              stock, and receive instant order notifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f7f1ec] p-6 rounded-3xl">
              <h4 className="text-2xl mb-3">Add Products</h4>
              <p className="text-gray-600">
                Upload new kurti collections with images and pricing.
              </p>
            </div>

            <div className="bg-[#f7f1ec] p-6 rounded-3xl">
              <h4 className="text-2xl mb-3">Manage Orders</h4>
              <p className="text-gray-600">
                Track customer orders and payment confirmations.
              </p>
            </div>

            <div className="bg-[#f7f1ec] p-6 rounded-3xl">
              <h4 className="text-2xl mb-3">Notifications</h4>
              <p className="text-gray-600">
                Receive instant alerts for new orders and payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-8 md:mx-20 mb-20 bg-[#7d2415] rounded-[40px] text-white p-10 md:p-16 text-center">
        <p className="uppercase tracking-[0.3em] text-sm mb-4">
          Stay Updated
        </p>

        <h3 className="text-4xl md:text-5xl mb-6">
          Get Latest Fashion Collections
        </h3>

        <p className="max-w-2xl mx-auto text-lg opacity-90 mb-8">
          Subscribe for exclusive launches, designer collections, and festive
          offers.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full text-black outline-none"
          />

          <button className="bg-white text-[#7d2415] px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-white border-t px-8 md:px-20 py-12"
      >
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-3xl mb-3">TANVI</h4>
            <p className="text-gray-600 leading-relaxed">
              Premium designer kurtis crafted for elegance, comfort, and
              timeless fashion.
            </p>
          </div>

          <div>
            <h5 className="text-xl mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>Collections</li>
              <li>New Arrivals</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl mb-4">Payments</h5>
            <ul className="space-y-2 text-gray-600">
              <li>UPI</li>
              <li>Card Payment</li>
              <li>Net Banking</li>
              <li>Cash on Delivery</li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl mb-4">Contact</h5>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@tanvistudio.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Instagram: @tanvidesignerstudio</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Tanvi Designer Studio. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
