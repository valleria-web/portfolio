export const metadata = {
    title: "Geo Pixel Map — Technical Paper",
    description:
        "Technical documentation for Geo Pixel Map: A Minimalistic, Real-Time Global Status Visualization Tool.",
};

export default function GeoPixelMapPage() {
    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen text-slate-100">
            {/* Hero Section */}
            <section className="relative py-16 text-center overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
                    <div className="absolute top-20 right-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
                </div>

                <div className="relative z-10 px-4">
                    <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                        Geo Pixel Map
                    </h1>
                    <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
                        A Minimalistic, Real-Time Global Status Visualization Tool
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <a
                            href="https://geo-pixel-map.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
                        >
                            🌐 Live Demo
                        </a>
                    </div>
                </div>
            </section>

            {/* Technical Paper Content */}
            <section className="mx-auto max-w-4xl px-4 pb-20 text-slate-200">
                <article className="space-y-12">
                    {/* 1 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                        <p>
                            In an increasingly digital and distributed world, the need for
                            real-time visualizations that reflect human presence and activity has
                            never been more relevant. Geo Pixel Map offers a minimalist yet
                            powerful approach: a global canvas where users anonymously share their
                            current status with a single pixel.
                        </p>
                        <p>
                            With no accounts, no personal data, and no barriers to entry, the app
                            invites users to paint the world with their presence—whether they’re
                            working, relaxing, studying, or doing something else entirely.
                        </p>
                    </div>

                    {/* 2 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. System Architecture</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Frontend:</strong> Next.js 15 (App Router) + Tailwind CSS</li>
                            <li><strong>Backend:</strong> API Routes in Next.js</li>
                            <li><strong>Database:</strong> MongoDB Atlas</li>
                            <li><strong>Map Rendering:</strong> Leaflet.js with OpenStreetMap tiles</li>
                            <li><strong>Hosting:</strong> Vercel</li>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">3. Data Model & Storage</h2>
                        <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">
                            {`{
  latitude: Number,
  longitude: Number,
  status: String,        // 'Working' | 'Relaxing' | 'Studying' | 'Other'
  timestamp: Date        // auto-generated on creation
}`}
                        </pre>
                        <p>
                            Geolocation is taken from the client browser. Status is selected by
                            the user. Timestamp is used to display only recent points (e.g., last
                            24h), compute “active users” (e.g., last 10 minutes), and schedule data
                            cleanup tasks.
                        </p>
                    </div>

                    {/* 4 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">4. API Design</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><code>POST /api/ping</code>: Saves a pixel to the database with location and status.</li>
                            <li><code>GET /api/locations</code>: Returns all recent pixels and the active users count.</li>
                        </ul>
                        <p>All requests are rate-limited on the client side. IPs are not stored.</p>
                    </div>

                    {/* 5 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">5. Performance & Scalability</h2>
                        <p>
                            Geo Pixel Map is designed with minimal backend logic and a lean data
                            model. Points are loaded once on page load and interactions are handled
                            client-side with Leaflet. The system can scale horizontally through
                            timestamp indexing, caching active user counts, and adding pagination or
                            tile-based loading.
                        </p>
                    </div>

                    {/* 6 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">6. Basic Security Measures</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>No personal data collected</li>
                            <li>No user accounts or IP tracking</li>
                            <li>Client-side rate limiting</li>
                            <li>Only location, status, and timestamp stored</li>
                        </ul>
                    </div>

                    {/* 7 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">7. Future Improvements</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Map clustering and zoom-aware rendering</li>
                            <li>Heatmaps or emoji-based visualization</li>
                            <li>Filters by status or country</li>
                            <li>Scheduled cleanup for old data</li>
                            <li>WebSocket support for real-time updates</li>
                            <li>Mobile-first design enhancements</li>
                        </ul>
                    </div>

                    {/* 8 */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Conclusion</h2>
                        <p>
                            Geo Pixel Map demonstrates how a simple, focused architecture can
                            deliver a meaningful experience. By combining geolocation, real-time
                            data, and expressive visuals, it opens the door to applications ranging
                            from collective art to global analytics.
                        </p>
                    </div>

                    {/* Appendix */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Appendix: Repo & Demo</h2>
                        <p>
                            <br />
                            <a
                                href="https://geo-pixel-map.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-300 hover:text-cyan-200 underline"
                            >
                                Live Demo
                            </a>
                        </p>
                    </div>
                </article>
            </section>

        </div>
    );
}

