import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Stay On Top of Your Permits
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            A single dashboard for electricians, plumbers, and remodelers to track, renew, and file local permits across every municipality.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/dashboard" className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
              Get Started
            </Link>
            <Link href="#features" className="rounded-md bg-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Unified Permit Calendar</h3>
              <p className="text-gray-600">View all upcoming expirations from every city in a single, color‑coded calendar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Smart Reminders</h3>
              <p className="text-gray-600">Email and SMS alerts 30, 14, and 3 days before a deadline so you never miss a renewal.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Ready‑to‑Use Templates</h3>
              <p className="text-gray-600">Download city‑specific filing forms pre‑filled with your business info.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Multi‑User Teams</h3>
              <p className="text-gray-600">Add crew members, assign permits, and track who is responsible for each job.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">See renewal trends, cost savings, and compliance rates at a glance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Secure Cloud Sync</h3>
              <p className="text-gray-600">All data stored in Supabase with end‑to‑end encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-12">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to simplify your permits?</h2>
          <Link href="/dashboard" className="inline-block bg-white text-indigo-600 font-medium py-3 px-6 rounded-md hover:bg-gray-100">
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </main>
  );
}