import React from 'react'

const Cookies = () => {
  return <>
      <div className="bg-gray-950 text-gray-200 min-h-screen px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Cookie Policy</h1>
        <p className="mb-4 text-sm text-gray-400">Last updated: April 17, 2025</p>

        <section className="space-y-6 text-base leading-7 text-gray-300">
          <p>
            This Cookie Policy explains how <strong>ViewFlix</strong> uses cookies and similar technologies to recognize you when you visit our website or use our services. It explains what these technologies are, why we use them, and your rights to control their use.
          </p>

          <h2 className="text-xl font-semibold text-white">1. What Are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your device when you visit a website. Cookies are widely used to make websites work more efficiently and to provide reporting information.
          </p>

          <h2 className="text-xl font-semibold text-white">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for basic functionality and secure login.</li>
            <li><strong>Performance Cookies:</strong> Help us analyze usage to improve our services.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences like language or location.</li>
            <li><strong>Advertising Cookies:</strong> Deliver personalized ads based on your browsing behavior.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">3. How We Use Cookies</h2>
          <p>
            We use cookies to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep you signed in to your account</li>
            <li>Analyze website traffic and performance</li>
            <li>Understand your content preferences</li>
            <li>Provide targeted advertisements</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">4. Managing Your Cookies</h2>
          <p>
            You can change or withdraw your cookie preferences at any time by modifying your browser settings. Please note that disabling some cookies may affect the functionality of our services.
          </p>

          <h2 className="text-xl font-semibold text-white">5. Third-Party Cookies</h2>
          <p>
            We may allow third-party service providers to place cookies on your device to assist us with analytics and advertising. These third parties may collect information about your activity on our site over time.
          </p>

          <h2 className="text-xl font-semibold text-white">6. Updates to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly.
          </p>

          <h2 className="text-xl font-semibold text-white">7. Contact Us</h2>
          <p>
            For questions about our cookie use, contact us at: <a href="mailto:support@viewflix.com" className="text-blue-400 hover:underline">support@viewflix.com</a>
          </p>
        </section>
      </div>
    </div>
  </>
}

export default Cookies