import MainLayout from "@/components/layout/main-layout";

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy for DEU App</h1>
          <p className="text-lg text-gray-600 mb-2"><strong>Effective Date:</strong> 17th June 2025</p>
          <p className="text-lg text-gray-600 mb-8"><strong>Last Updated:</strong> 17th June 2025</p>
          
          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Lulo (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how the <strong>DEU app</strong> (&ldquo;the App&rdquo;) collects, uses, stores, and protects your information. The App is designed to help users prepare for the German citizenship test (<em>Einbürgerungstest</em> and <em>Leben in Deutschland</em>) and functions entirely offline.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">A. Data Stored Locally on Your Device</h3>
            <p className="mb-4">
              All data is stored on your device using iOS&rsquo;s <strong>UserDefaults</strong> system. The App stores the following types of information:
            </p>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">• Study Progress</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Progress in Practice, Bundesland, Mock Test, and Starred Modes</li>
                <li>Answer history and question completion status</li>
                <li>Overall performance statistics</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">• User Preferences</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Name (optional)</li>
                <li>Exam date and location (optional)</li>
                <li>Selected Bundesland (German state)</li>
                <li>Preferred language</li>
                <li>Appearance settings (light/dark/system)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">• Saved Questions</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Questions marked as favorites for later review</li>
                <li>Associated question IDs and metadata</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">• App Cache</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Downloaded question database for offline use</li>
                <li>Cache version information for data consistency</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3">B. Data We Do NOT Collect</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">• No Personally Identifiable Information (PII):</h4>
              <p className="mb-4">We do not collect your real name, email, phone number, or other personal data unless entered voluntarily.</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">• No Location Tracking:</h4>
              <p className="mb-4">We do not access or use GPS or location services.</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">• No Analytics or Advertising:</h4>
              <p className="mb-4">We do not use analytics tools, third-party SDKs, or ad networks.</p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">• No Network Communication:</h4>
              <p className="mb-4">The app does not send or receive any data from external servers.</p>
            </div>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How Your Data Is Used</h2>
            <p className="mb-4">All data is stored locally and used solely to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Track your study progress</li>
              <li>Provide a personalized learning experience</li>
              <li>Enable offline use</li>
              <li>Improve app performance through caching</li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Local Only:</strong> Data remains on your device</li>
              <li><strong>No Cloud Sync:</strong> We do not use iCloud or cloud services</li>
              <li><strong>Secured by iOS:</strong> Data is protected by your device&rsquo;s encryption and access controls</li>
              <li><strong>No Third-Party Access:</strong> No data is shared with third parties</li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
            <p className="mb-4">
              We do <strong>not</strong> share, sell, or transmit your data. The app operates fully offline with no server communication.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">• Access & Control:</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>View and modify preferences in app settings</li>
                <li>Clear study progress or saved questions</li>
                <li>Use &ldquo;Reset App&rdquo; to delete all data</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">• Data Deletion:</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Delete saved data in settings</li>
                <li>Uninstalling the app deletes all stored data</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">• No Opt-Out Required:</h4>
              <p className="mb-4">Since no data is collected, no opt-out is necessary.</p>
            </div>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Children&rsquo;s Privacy</h2>
            <p className="mb-4">
              The app may be used by individuals under 13. However, we do not knowingly collect personal information. All data stays local and anonymous.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Data is stored only on your device</li>
              <li>You can delete it anytime via app settings</li>
              <li>Nothing is stored or backed up online</li>
            </ul>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. International Users</h2>
            <p className="mb-4">
              As no data leaves your device, international data transfer laws (like GDPR or CCPA) do not apply. Your data remains in your local jurisdiction.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this policy from time to time. Changes will be noted with a new &ldquo;Last Updated&rdquo; date. Continued use of the app confirms your acceptance of the updates.
            </p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy, contact us at:
            </p>
            <p className="mb-2"><strong>Email:</strong> saradrada@luloai.com, yesidlopez@luloai.com</p>
            <p className="mb-4"><strong>Developers:</strong> Sara Ortiz Drada, Yesid López</p>
          </section>

          <hr className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Summary</h2>
            <p className="mb-4">
              The DEU app is privacy-focused. It works entirely offline, stores all data locally, and does not collect or transmit personal or usage data.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
} 
