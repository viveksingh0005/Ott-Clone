import React from 'react'

const Help = () => {
  return <>
          <div className="bg-gray-950 text-gray-200 min-h-screen px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Help Center
        </h1>
        <p className="mb-8 text-gray-400">
          Welcome to the ViewFlix Help Center. Find answers to common questions or contact us directly for assistance.
        </p>

        <section className="space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">1. How do I reset my password?</h2>
            <p className="text-gray-300">
              You can reset your password by clicking "Forgot Password" on the login screen. A reset link will be sent to your registered email address.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">2. How do I manage my subscription?</h2>
            <p className="text-gray-300">
              Go to your Account Settings &rarr; Subscription tab to view, upgrade, or cancel your current plan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">3. Why isn’t my video playing?</h2>
            <p className="text-gray-300">
              Please check your internet connection and try refreshing the page. If the issue persists, clear your browser cache or try a different device.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">4. What devices does ViewFlix support?</h2>
            <p className="text-gray-300">
              ViewFlix is supported on web browsers, iOS, Android, smart TVs, Fire Stick, and other streaming devices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">5. How do I contact support?</h2>
            <p className="text-gray-300">
              You can reach out to us via email at{' '}
              <a href="mailto:support@viewflix.com" className="text-blue-400 hover:underline">
                support@viewflix.com
              </a>{' '}
              or by filling out the contact form below.
            </p>
          </div>

          {/* Optional: Add a simple contact form */}
          <div className="mt-12 border-t border-gray-800 pt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Still need help?</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="4"
                placeholder="Describe your issue..."
                className="w-full bg-gray-800 text-gray-200 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </>
}

export default Help