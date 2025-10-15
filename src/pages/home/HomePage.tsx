export const HomePage = () => {
  return (
    <>
    {/* Placeholder content to enable scrolling */}
      <div className="pt-24 bg-gray-900 min-h-[300vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-extrabold text-white">Scroll Down to See Navbar in Action</h1>
              <p className="mt-4 text-xl text-gray-400">
                  The bar will slide up and disappear when you scroll down quickly, and reappear when you scroll up.
                  The background will turn from transparent to black after scrolling 80px.
              </p>
              <div className="h-[200vh] mt-10 bg-gray-800 rounded-xl p-6 text-gray-300">
                  <p>Content block...</p>
              </div>
          </div>
      </div>
    </>
  )
}