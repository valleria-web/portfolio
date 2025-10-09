export const metadata = {
  title: "Sales Dashboard — Technical Overview",
  description:
    "Technical documentation and architecture overview of the Sales Dashboard project.",
};

export default function SalesDashboardPage() {
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
            Sales Dashboard
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
            Technical Overview & Architecture (Next.js Version)
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/dashboard"
              className="rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition"
            >
              🚀 Go to Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Technical Content */}
      <section className="mx-auto max-w-4xl px-4 pb-20 text-slate-200">
        <article className="space-y-12">
          {/* 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
            <p>
              <strong>Sales Dashboard</strong> is a web application that transforms raw data
              from customers, products, and sales into clear and interactive visualizations.
              It allows monitoring sales performance, identifying behavioral patterns, and
              performing detailed analysis within a chosen date range.
            </p>
          </div>

          {/* 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Main Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Dynamic sales visualization in a table view.</li>
              <li>Query products, clients, and totals for each transaction.</li>
              <li>Backend now uses Next.js API routes and Server Components.</li>
              <li>Frontend built with React + Next.js + TailwindCSS.</li>
              <li>
                Modular architecture based on classes (<code>Client</code>, <code>Product</code>, <code>Sale</code>, etc.).
              </li>
              <li>Prepared for filters, date range analysis, and chart visualization.</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Project Structure</h2>
            <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">
{`sales-dashboard-next/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── dashboard/
│   │   ├── page.js
│   │   └── DashboardView.jsx
│   ├── api/
│   │   └── sales/
│   │       └── route.js
│   └── globals.css
├── components/
│   ├── ChartView.jsx
│   ├── SalesTable.jsx
│   └── ReportsPanel.jsx
├── lib/
│   ├── db.js
│   ├── dataAccess/
│   │   └── SalesRepository.js
│   ├── models/
│   │   ├── Client.js
│   │   ├── Product.js
│   │   ├── Sale.js
│   │   └── EnumProductType.js
│   ├── database/
│   │   └── schemas/
│   │       ├── ClientSchema.js
│   │       ├── ProductSchema.js
│   │       └── SaleSchema.js
│   ├── controllers/
│   │   └── SalesController.js
│   └── reports/
│       ├── TotalSales.js
│       ├── SalesByProduct.js
│       ├── SalesByClient.js
│       └── SalesByRangeAnalitics.js
├── package.json
├── next.config.js
└── node_modules/`}
            </pre>
          </div>

          {/* 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Technologies Used</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Frontend:</strong> Next.js (React), TailwindCSS</li>
              <li><strong>Backend:</strong> Next.js API routes, Server Components</li>
              <li><strong>Architecture:</strong> OOP with clear separation of models and presentation logic</li>
            </ul>
          </div>

          {/* 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Planned Improvements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Sales analysis by hour, day, week, month, or year</li>
              <li>Trading-view style comparative charts</li>
              <li>Filters by client, product, or date range</li>
              <li>Data and report exporting</li>
              <li>MongoDB or other persistent storage integration</li>
            </ul>
          </div>

          {/* 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Installation & Usage</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Clone the repository:
                <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">
{`git clone https://github.com/your-username/sales-dashboard.git
cd sales-dashboard-next`}
                </pre>
              </li>
              <li>
                Install dependencies:
                <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">npm install</pre>
              </li>
              <li>
                Run the development server:
                <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">npm run dev</pre>
              </li>
              <li>
                Open your browser at:
                <pre className="bg-slate-800 text-slate-100 p-4 rounded-lg overflow-auto text-sm">http://localhost:3000/dashboard</pre>
              </li>
            </ol>
          </div>

          {/* 7 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">7. License</h2>
            <p>This project is released under the MIT License.</p>
          </div>
        </article>
      </section>
    </div>
  );
}
