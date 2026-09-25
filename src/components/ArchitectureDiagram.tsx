import React, { useState } from 'react';
import { 
  Server, 
  Smartphone, 
  Globe, 
  Database, 
  ShieldCheck, 
  CreditCard, 
  Layers, 
  ArrowDown, 
  Activity, 
  Cpu, 
  Info
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string>('api');

  const layers = [
    {
      id: 'clients',
      title: '01. Client Tier (Web & Mobile)',
      badge: 'Frontend Clients',
      items: [
        { name: 'Web Application', tech: 'React 18 + TypeScript + Vite + Tailwind CSS', role: 'Customer ordering UI, real-time status tracker, vendor portal' },
        { name: 'Mobile App', tech: 'React Native + Expo', role: 'Cross-platform native mobile experience with local state caching' },
      ],
      description: 'Typed clients communicate via HTTPS with serialized JSON payloads. Client-side authentication tokens (JWT) are dispatched in Authorization Bearer headers.',
    },
    {
      id: 'api',
      title: '02. API Gateway & Controller Layer',
      badge: 'Node.js & Express',
      items: [
        { name: 'REST Routing & Middleware', tech: 'Express.js Router', role: 'Rate limiting, CORS, request payload validation, error normalization' },
        { name: 'Security & Auth Guard', tech: 'JWT + bcrypt', role: 'HMAC-SHA256 token verification, claims validation, RBAC enforcement' },
      ],
      description: 'Stateless REST server routing client requests to isolated controllers with defense-in-depth parameter sanitization.',
    },
    {
      id: 'services',
      title: '03. Domain Business Services',
      badge: 'Core Logic Services',
      items: [
        { name: 'Restaurant & Catalog', tech: 'Menu hierarchy, stock availability, search indexing', role: 'Catalog lifecycle' },
        { name: 'Cart & Order Engine', tech: 'Server-side price verification, inventory locking', role: 'Transactional ordering' },
        { name: 'Payment Gateway', tech: 'Razorpay Orders API + HMAC Webhook signature verify', role: 'Financial handshake' },
        { name: 'Admin Analytics', tech: 'Aggregated revenue, order velocity & vendor metrics', role: 'Operational intelligence' },
      ],
      description: 'Domain services isolate business rules from HTTP transport details, ensuring reusable logic across Web and Mobile APIs.',
    },
    {
      id: 'data',
      title: '04. Persistence Tier',
      badge: 'Prisma ORM & PostgreSQL',
      items: [
        { name: 'Prisma ORM Client', tech: 'Type-safe queries, connection pool management', role: 'Data access layer' },
        { name: 'PostgreSQL Relational DB', tech: 'ACID transactions, foreign key constraints, indexes', role: 'Source of truth' },
      ],
      description: 'Relational database ensuring zero inventory overselling via atomic database transactions and strict referential integrity.',
    },
  ];

  return (
    <section id="architecture" className="py-20 border-b border-slate-200/80 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-2">
            <Cpu className="w-3.5 h-3.5 text-brand-600" />
            <span>03 // SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            MealBites Full-Stack Architecture
          </h2>
          <p className="text-base text-slate-600 mt-2 max-w-2xl">
            A production-style decoupled architecture demonstrating clean separation of concerns, transactional integrity, and cross-platform API parity.
          </p>
        </div>

        {/* Visual Architecture Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Flow Diagram */}
          <div className="lg:col-span-8 space-y-4">
            {/* TIER 1: CLIENTS */}
            <div 
              onClick={() => setActiveLayer('clients')}
              className={`p-5 rounded-3xl border transition-all cursor-pointer backdrop-blur-md ${
                activeLayer === 'clients'
                  ? 'bg-white border-brand-500 shadow-md ring-2 ring-brand-500/20'
                  : 'bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-brand-700 flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  <span>CLIENT TIER (PRESENTATION)</span>
                </span>
                <span className="text-xs font-mono text-slate-600 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                  HTTPS / JSON
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-sky-600" />
                    <span>Web Application</span>
                  </div>
                  <div className="text-xs font-mono text-brand-600 mt-0.5">React 18 • TypeScript • Vite</div>
                  <div className="text-xs text-slate-600 mt-1">Responsive consumer app &amp; vendor dashboard</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-pink-600" />
                    <span>Mobile Application</span>
                  </div>
                  <div className="text-xs font-mono text-pink-600 mt-0.5">React Native • Expo</div>
                  <div className="text-xs text-slate-600 mt-1">Cross-platform iOS / Android native client</div>
                </div>
              </div>
            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center -my-1">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-xs">
                <ArrowDown className="w-3.5 h-3.5 text-brand-600" />
                <span>REST API Calls • Bearer JWT Header</span>
              </div>
            </div>

            {/* TIER 2: API & CONTROLLERS */}
            <div 
              onClick={() => setActiveLayer('api')}
              className={`p-5 rounded-3xl border transition-all cursor-pointer backdrop-blur-md ${
                activeLayer === 'api'
                  ? 'bg-white border-brand-500 shadow-md ring-2 ring-brand-500/20'
                  : 'bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-sky-700 flex items-center gap-1.5">
                  <Server className="w-4 h-4" />
                  <span>API ROUTING &amp; SECURITY GATEWAY</span>
                </span>
                <span className="text-xs font-mono text-slate-600 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                  Node.js + Express
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Authentication &amp; RBAC</span>
                  </div>
                  <div className="text-xs font-mono text-emerald-700 mt-0.5">JWT • bcrypt • Role Guards</div>
                  <div className="text-xs text-slate-600 mt-1">Role validation: Customer, Vendor, Admin</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-600" />
                    <span>Request Pipeline</span>
                  </div>
                  <div className="text-xs font-mono text-amber-700 mt-0.5">CORS • Express Validator • Error Layer</div>
                  <div className="text-xs text-slate-600 mt-1">Payload defense, centralized exception mapping</div>
                </div>
              </div>
            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center -my-1">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-xs">
                <ArrowDown className="w-3.5 h-3.5 text-brand-600" />
                <span>Synchronous Domain Service Invocations</span>
              </div>
            </div>

            {/* TIER 3: SERVICES */}
            <div 
              onClick={() => setActiveLayer('services')}
              className={`p-5 rounded-3xl border transition-all cursor-pointer backdrop-blur-md ${
                activeLayer === 'services'
                  ? 'bg-white border-brand-500 shadow-md ring-2 ring-brand-500/20'
                  : 'bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-indigo-700 flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <span>DOMAIN BUSINESS SERVICES</span>
                </span>
                <span className="text-xs font-mono text-slate-600 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                  Modular Services
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900">Restaurant</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Catalog &amp; Menus</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900">Cart &amp; Order</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Price &amp; Lifecycle</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80">
                  <div className="text-xs font-bold text-emerald-700 flex items-center justify-center gap-1">
                    <CreditCard className="w-3 h-3" />
                    <span>Razorpay</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Webhook Verify</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900">Analytics</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Kitchen Metrics</div>
                </div>
              </div>
            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center -my-1">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-xs">
                <ArrowDown className="w-3.5 h-3.5 text-brand-600" />
                <span>Prisma Type-Safe Client &amp; Connection Pool</span>
              </div>
            </div>

            {/* TIER 4: DATABASE */}
            <div 
              onClick={() => setActiveLayer('data')}
              className={`p-5 rounded-3xl border transition-all cursor-pointer backdrop-blur-md ${
                activeLayer === 'data'
                  ? 'bg-white border-brand-500 shadow-md ring-2 ring-brand-500/20'
                  : 'bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1.5">
                  <Database className="w-4 h-4" />
                  <span>PERSISTENCE LAYER (ACID TRANSACTIONS)</span>
                </span>
                <span className="text-xs font-mono text-slate-600 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                  Prisma + PostgreSQL
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">PostgreSQL Relational Storage</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Tables: Users, Restaurants, Categories, MenuItems, Orders, OrderItems, Payments
                  </div>
                </div>
                <div className="text-xs font-mono text-emerald-700 font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/70 shrink-0">
                  ACID Compliant
                </div>
              </div>
            </div>
          </div>

          {/* Deep-Dive Inspection Panel */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 rounded-3xl bg-white/85 backdrop-blur-md border border-slate-200/90 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-700 uppercase tracking-wider mb-2 font-semibold">
                <Info className="w-4 h-4" />
                <span>Architecture Inspection</span>
              </div>

              {layers.filter(l => l.id === activeLayer).map(layer => (
                <div key={layer.id} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    {layer.title}
                  </h3>
                  <div className="inline-block px-2.5 py-1 rounded-lg bg-brand-50 border border-brand-200 text-brand-700 font-mono text-xs font-medium">
                    {layer.badge}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {layer.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-slate-500 uppercase">Subsystems &amp; Roles:</span>
                    {layer.items.map((sub, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                        <div className="font-semibold text-slate-900">{sub.name}</div>
                        <div className="text-brand-700 font-mono text-[11px] mt-0.5">{sub.tech}</div>
                        <div className="text-slate-600 mt-1">{sub.role}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-[11px] font-mono text-slate-500">
                      💡 Click any block on the left diagram to inspect layer contracts and technologies.
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
