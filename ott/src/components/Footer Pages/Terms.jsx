import React from 'react'

const Terms = () => {
  return <>
         <div className="bg-gray-950 text-gray-200 min-h-screen px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Terms & Conditions
        </h1>
        <p className="mb-4 text-sm text-gray-400">Last updated: April 17, 2025</p>

        <section className="space-y-8 text-base leading-7 text-gray-300">
          <p>
            These Terms & Conditions (“Terms”) govern your use of the ViewFlix platform and all related services. By accessing or using our website or apps, you agree to these Terms in full.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">1. Use of Service</h2>
            <p>
              You must be at least 13 years old to use ViewFlix. You agree to use the platform for personal, non-commercial purposes and follow all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">2. User Accounts</h2>
            <p>
              When creating an account, you must provide accurate information. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">3. Subscription & Payments</h2>
            <p>
              Some content or features may require a subscription. Fees are billed in advance and are non-refundable. You can manage your subscription in your account settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">4. Intellectual Property</h2>
            <p>
              All content on ViewFlix — including videos, images, logos, and software — is the property of ViewFlix or its licensors and is protected by copyright and trademark laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">5. Prohibited Activities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sharing your account with others</li>
              <li>Downloading or redistributing content illegally</li>
              <li>Attempting to hack, disrupt, or reverse-engineer the platform</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to ViewFlix for any reason, including violation of these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">7. Limitation of Liability</h2>
            <p>
              ViewFlix is not responsible for any indirect, incidental, or consequential damages resulting from your use of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">8. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the platform after changes constitutes your acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:support@viewflix.com" className="text-blue-400 hover:underline">support@viewflix.com</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  </>
}

export default Terms