import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy - DEU App",
  description:
    "Privacy Policy for the DEU App. Learn how we handle your data while preparing for the Leben in Deutschland test.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-cream/90 backdrop-blur-xl border-b border-sage-100/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/DEU.png"
              alt="DEU logo"
              width={36}
              height={36}
              className="w-9 h-9 rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-extrabold text-navy-900 text-lg tracking-tight">
              DEU
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mb-3">
          Privacy Policy for the DEU App
        </h1>
        <p className="text-navy-900/50 text-sm mb-2">
          <strong>Effective Date:</strong> 17th June 2025
        </p>
        <p className="text-navy-900/50 text-sm mb-12">
          <strong>Last Updated:</strong> 17th June 2025
        </p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            1. Introduction
          </h2>
          <p className="text-navy-900/80 leading-relaxed">
            Lulo (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
            committed to protecting your privacy. This Privacy Policy explains
            how the <strong>DEU app</strong> (&ldquo;the App&rdquo;) collects,
            uses, stores, and protects your information. The App is designed to
            help users prepare for the German citizenship test (
            <em>Einbürgerungstest</em> and <em>Leben in Deutschland</em>) and
            functions entirely offline.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            2. Information We Collect
          </h2>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">
            A. Data Stored Locally on Your Device
          </h3>
          <p className="text-navy-900/80 leading-relaxed mb-4">
            All data is stored on your device using iOS&rsquo;s{" "}
            <strong>UserDefaults</strong> system. The App stores the following
            types of information:
          </p>

          <h4 className="font-semibold text-navy-900 mb-2">• Study Progress</h4>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-1 ml-2 mb-4">
            <li>Progress in Practice, Bundesland, Mock Test, and Starred Modes</li>
            <li>Answer history and question completion status</li>
            <li>Overall performance statistics</li>
          </ul>

          <h4 className="font-semibold text-navy-900 mb-2">
            • User Preferences
          </h4>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-1 ml-2 mb-4">
            <li>Name (optional)</li>
            <li>Exam date and location (optional)</li>
            <li>Selected Bundesland (German state)</li>
            <li>Preferred language</li>
            <li>Appearance settings (light/dark/system)</li>
          </ul>

          <h4 className="font-semibold text-navy-900 mb-2">
            • Saved Questions
          </h4>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-1 ml-2 mb-4">
            <li>Questions marked as favorites for later review</li>
            <li>Associated question IDs and metadata</li>
          </ul>

          <h4 className="font-semibold text-navy-900 mb-2">• App Cache</h4>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-1 ml-2 mb-6">
            <li>Downloaded question database for offline use</li>
            <li>Cache version information for data consistency</li>
          </ul>

          <h3 className="text-lg font-semibold text-navy-900 mb-2">
            B. Data We Do NOT Collect
          </h3>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-2 ml-2">
            <li>
              <strong>No PII:</strong> We do not collect your real name, email,
              phone number, or other personal data unless entered voluntarily.
            </li>
            <li>
              <strong>No Location Tracking:</strong> We do not access or use GPS
              or location services.
            </li>
            <li>
              <strong>No Analytics or Advertising:</strong> We do not use
              analytics tools, third-party SDKs, or ad networks.
            </li>
            <li>
              <strong>No Network Communication:</strong> The app does not send
              or receive any data from external servers.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            3. How Your Data Is Used
          </h2>
          <p className="text-navy-900/80 leading-relaxed mb-3">
            All data is stored locally and used solely to:
          </p>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-2 ml-2">
            <li>Track your study progress</li>
            <li>Provide a personalized learning experience</li>
            <li>Enable offline use</li>
            <li>Improve app performance through caching</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            4. Data Storage and Security
          </h2>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-2 ml-2">
            <li><strong>Local Only:</strong> Data remains on your device</li>
            <li><strong>No Cloud Sync:</strong> We do not use iCloud or cloud services</li>
            <li><strong>Secured by iOS:</strong> Data is protected by your device&rsquo;s encryption and access controls</li>
            <li><strong>No Third-Party Access:</strong> No data is shared with third parties</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            5. Data Sharing
          </h2>
          <p className="text-navy-900/80 leading-relaxed">
            We do <strong>not</strong> share, sell, or transmit your data. The
            app operates fully offline with no server communication.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            6. Your Rights and Choices
          </h2>
          <h4 className="font-semibold text-navy-900 mb-2">
            • Access &amp; Control
          </h4>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-1 ml-2 mb-4">
            <li>View and modify preferences in app settings</li>
            <li>Clear study progress or saved questions</li>
            <li>Use &ldquo;Reset App&rdquo; to delete all data</li>
          </ul>
          <h4 className="font-semibold text-navy-900 mb-2">• Data Deletion</h4>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-1 ml-2 mb-4">
            <li>Delete saved data in settings</li>
            <li>Uninstalling the app deletes all stored data</li>
          </ul>
          <p className="text-navy-900/80 leading-relaxed">
            <strong>No Opt-Out Required:</strong> Since no data is collected, no
            opt-out is necessary.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            7. Children&rsquo;s Privacy
          </h2>
          <p className="text-navy-900/80 leading-relaxed">
            The app may be used by individuals under 13. However, we do not
            knowingly collect personal information. All data stays local and
            anonymous.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            8. Data Retention
          </h2>
          <ul className="list-disc list-inside text-navy-900/80 leading-relaxed space-y-2 ml-2">
            <li>Data is stored only on your device</li>
            <li>You can delete it anytime via app settings</li>
            <li>Nothing is stored or backed up online</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            9. International Users
          </h2>
          <p className="text-navy-900/80 leading-relaxed">
            As no data leaves your device, international data transfer laws
            (like GDPR or CCPA) do not apply. Your data remains in your local
            jurisdiction.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            10. Changes to This Policy
          </h2>
          <p className="text-navy-900/80 leading-relaxed">
            We may update this policy from time to time. Changes will be noted
            with a new &ldquo;Last Updated&rdquo; date. Continued use of the app
            confirms your acceptance of the updates.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-navy-900 mb-4">
            11. Contact Us
          </h2>
          <p className="text-navy-900/80 leading-relaxed mb-3">
            If you have questions or concerns about this Privacy Policy, contact
            us at:
          </p>
          <p className="text-navy-900/80 leading-relaxed mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:saradrada@luloai.com"
              className="text-sage-600 hover:text-sage-700 underline underline-offset-2"
            >
              saradrada@luloai.com
            </a>
            ,{" "}
            <a
              href="mailto:yesidlopez@luloai.com"
              className="text-sage-600 hover:text-sage-700 underline underline-offset-2"
            >
              yesidlopez@luloai.com
            </a>
          </p>
          <p className="text-navy-900/80 leading-relaxed">
            <strong>Developers:</strong> Sara Ortiz Drada, Yesid L&oacute;pez
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-bold text-navy-900 mb-4">Summary</h2>
          <p className="text-navy-900/80 leading-relaxed">
            The DEU app is privacy-focused. It works entirely offline, stores
            all data locally, and does not collect or transmit personal or
            usage data.
          </p>
        </section>
      </main>

      <footer className="border-t border-sage-100/80 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy-900/40">
            &copy; {new Date().getFullYear()} Lulo. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-sage-600 hover:text-sage-700 font-medium transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
