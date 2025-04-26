import React from 'react'

const PrivacyPolicy = () => {
  return <>
    <div className="bg-gray-950 text-gray-200 min-h-screen px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Privacy Policy</h1>

        <p className="mb-4 text-sm text-gray-400">
          Last updated: April 17, 2025
        </p>

        <section className="space-y-6 text-base leading-7 text-gray-300">
          <p>
            At <strong>ViewFlix</strong>, your privacy is a top priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our streaming platform and services.
          </p>

          <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal details (name, email address, billing info)</li>
            <li>Viewing activity and preferences</li>
            <li>Device and browser information</li>
            <li>Cookies and analytics data</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">2. How We Use Your Information</h2>
          <p>
            We use your data to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide personalized content and recommendations</li>
            <li>Process transactions and subscriptions</li>
            <li>Improve platform performance</li>
            <li>Send updates, promotions, or service notifications</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">3. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. However, we may share data with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Trusted service providers for analytics and infrastructure</li>
            <li>Legal authorities if required by law</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">4. Your Choices</h2>
          <p>
            You can manage your privacy preferences in your account settings. You may also:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opt-out of marketing emails</li>
            <li>Disable cookies in your browser</li>
            <li>Request access, correction, or deletion of your data</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">5. Data Security</h2>
          <p>
            We implement advanced security measures to protect your data, including encryption, firewalls, and secure payment processing.
          </p>

          <h2 className="text-xl font-semibold text-white">6. Children's Privacy</h2>
          <p>
            ViewFlix is not intended for users under the age of 13. We do not knowingly collect personal data from children.
          </p>

          <h2 className="text-xl font-semibold text-white">7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.
          </p>

          <h2 className="text-xl font-semibold text-white">8. Contact Us</h2>
          <p>
            If you have any questions or concerns, contact us at: <a href="mailto:support@viewflix.com" className="text-blue-400 hover:underline">support@viewflix.com</a>
          </p>
        </section>
      </div>
    </div>
  </>
}

export default PrivacyPolicy