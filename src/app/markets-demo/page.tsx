"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  Home, 
  Briefcase, 
  Calendar, 
  ArrowUpRight, 
  Heart, 
  Search, 
  Compass, 
  Layers, 
  Bell, 
  User, 
  ArrowLeft,
  TrendingUp,
  Star
} from "lucide-react";

// Interactive canvas network rendering for a true product demo feel
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth || 300;
    let height = canvas.height = canvas.offsetHeight || 220;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const numNodes = 40;
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) * 0.45;

    for (let i = 0; i < numNodes; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * maxRadius;
      nodes.push({
        x: centerX + Math.cos(angle) * r,
        y: centerY + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.5,
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Dash circle boundary
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, maxRadius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw links
      for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 55})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      nodes.forEach((node) => {
        node.vx += (Math.random() - 0.5) * 0.015;
        node.vy += (Math.random() - 0.5) * 0.015;
        
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > 0.6) {
          node.vx = (node.vx / speed) * 0.6;
          node.vy = (node.vy / speed) * 0.6;
        }

        node.x += node.vx;
        node.y += node.vy;

        const dx = node.x - width / 2;
        const dy = node.y - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxRadius - 5) {
          const angle = Math.atan2(dy, dx);
          node.x = width / 2 + Math.cos(angle) * (maxRadius - 5);
          node.vx = -node.vx * 0.8;
          node.vy = -node.vy * 0.8;
        }

        if (isHovering) {
          const mdx = mouseX - node.x;
          const mdy = mouseY - node.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 65) {
            node.x += mdx * 0.02;
            node.y += mdy * 0.02;
          }
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(59, 130, 246)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full min-h-[220px]" />;
}

// Carousel Component
function StartupCarousel({ list }: { list: { name: string; industry: string; cat?: string; hasStar?: boolean; isLive?: boolean; iconColor?: string }[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scroll-smooth -mx-6 px-6 sm:-mx-0 sm:px-0">
      {list.map((item, idx) => (
        <div 
          key={idx} 
          className="min-w-[155px] sm:min-w-[170px] max-w-[155px] sm:max-w-[170px] border border-slate-100 rounded-2xl p-4 bg-white shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative group cursor-pointer"
        >
          {item.hasStar && (
            <Star className="absolute top-3.5 right-3.5 size-4 fill-amber-400 text-amber-400" />
          )}
          <div className="flex flex-col gap-3">
            <div className={`size-10 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-xs ${item.iconColor || 'bg-slate-200'}`}>
              {item.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-800 tracking-tight group-hover:text-primary transition-colors truncate">
                {item.name}
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">
                {item.industry}
              </p>
            </div>
            {(item.cat || item.isLive) && (
              <div className="flex items-center justify-between mt-1">
                {item.isLive && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live
                  </span>
                )}
                {item.cat && (
                  <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.cat}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MarketsDemoPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-50 flex flex-col font-sans select-none text-slate-700">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-55 bg-slate-900 text-white text-xs sm:text-sm font-medium py-2.5 px-5 rounded-full shadow-lg border border-slate-800 animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-100 px-4 sm:px-8 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/projects/privatecircle-markets"
            className="flex items-center gap-1 text-slate-400 hover:text-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors mr-2 sm:mr-4"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden sm:inline">Case Study</span>
          </Link>
          <div className="flex items-baseline gap-1">
            <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tighter">private<span className="text-blue-600">circle</span></span>
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">markets</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => triggerToast("Dashboard list has been refreshed")}
            className="h-9 rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
          >
            <Heart className="size-3.5" />
            <span>Saved</span>
          </button>
          <button 
            onClick={() => triggerToast("Skipped records are stored in settings")}
            className="h-9 rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
          >
            <Compass className="size-3.5" />
            <span>Skipped</span>
          </button>
        </div>
      </header>

      {/* Main Page Container */}
      <main className="max-w-[1100px] w-full mx-auto px-4 sm:px-8 py-8 flex flex-col gap-10 pb-28">
        
        {/* Top 4 Summary Cards */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Connect requests */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-800">Connect requests</span>
              <button onClick={() => triggerToast("Redirecting to Connect requests")} className="text-[10px] font-bold text-blue-500 hover:underline">View all</button>
            </div>
            <div className="flex flex-col items-center text-center my-3 gap-1">
              <div className="size-16 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-500">
                <Layers className="size-8" />
              </div>
              <h3 className="font-bold text-sm text-slate-800 mt-1">No pending requests</h3>
              <p className="text-[10px] sm:text-xs text-slate-400">Connect with founders & set a meeting</p>
            </div>
            <button 
              onClick={() => triggerToast("Opening founder connection flow")}
              className="w-full h-9 rounded-xl bg-blue-50 text-xs font-bold text-blue-600 hover:bg-blue-100/80 transition-colors"
            >
              Send request
            </button>
          </div>

          {/* Card 2: Active connections */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-800">Active connections</span>
              <button onClick={() => triggerToast("Redirecting to Active connections")} className="text-[10px] font-bold text-blue-500 hover:underline">View all</button>
            </div>
            <div className="flex flex-col items-center text-center my-3 gap-1">
              <div className="size-16 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-500">
                <TrendingUp className="size-8" />
              </div>
              <h3 className="font-bold text-sm text-slate-800 mt-1">Live deals found</h3>
              <p className="text-[10px] sm:text-xs text-slate-400">Connect with founders & set a meeting</p>
            </div>
            <button 
              onClick={() => triggerToast("Opening match listings")}
              className="w-full h-9 rounded-xl bg-blue-50 text-xs font-bold text-blue-600 hover:bg-blue-100/80 transition-colors"
            >
              View matches
            </button>
          </div>

          {/* Card 3: My portfolio */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-800">My portfolio</span>
              <button onClick={() => triggerToast("Redirecting to Portfolio holdings")} className="text-[10px] font-bold text-blue-500 hover:underline">View all</button>
            </div>
            <div className="flex flex-col items-center text-center my-3 gap-1">
              <div className="size-16 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-500">
                <Briefcase className="size-8" />
              </div>
              <h3 className="font-bold text-sm text-slate-800 mt-1">No holdings</h3>
              <p className="text-[10px] sm:text-xs text-slate-400">Update portfolio to get personalised deals</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => triggerToast("Opening portfolio edit wizard")}
                className="w-full h-9 rounded-xl bg-blue-50 text-xs font-bold text-blue-600 hover:bg-blue-100/80 transition-colors"
              >
                Update portfolio
              </button>
            </div>
          </div>

          {/* Card 4: Meetings */}
          <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-800">Meetings</span>
              <button onClick={() => triggerToast("Redirecting to Meetings console")} className="text-[10px] font-bold text-blue-500 hover:underline">View all</button>
            </div>
            <div className="flex flex-col items-center text-center my-3 gap-1">
              <div className="size-16 rounded-full bg-blue-50/50 flex items-center justify-center text-blue-500">
                <Calendar className="size-8" />
              </div>
              <h3 className="font-bold text-sm text-slate-800 mt-1">No meetings</h3>
              <p className="text-[10px] sm:text-xs text-slate-400">Currently, There are no meetings</p>
            </div>
            <button 
              onClick={() => triggerToast("Opening calendar scheduler")}
              className="w-full h-9 rounded-xl bg-blue-50 text-xs font-bold text-blue-600 hover:bg-blue-100/80 transition-colors"
            >
              Set meeting
            </button>
          </div>
        </section>

        {/* Section 1: Actively Raising */}
        <section className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <h2 className="font-bold text-lg text-slate-800">Actively Raising</h2>
            <span className="text-xs text-slate-400 font-medium">Explore startups raising now</span>
          </div>

          <div className="border border-slate-100 bg-white p-6 rounded-3xl flex flex-col gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-800">Super List</span>
              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                <span className="size-1 bg-emerald-500 rounded-full animate-ping"></span> Live
              </span>
              <div className="ml-auto flex gap-2">
                <select className="h-8 rounded-lg border border-slate-200 px-3 text-[10px] font-semibold bg-white text-slate-600">
                  <option>All filters</option>
                </select>
                <select className="h-8 rounded-lg border border-slate-200 px-3 text-[10px] font-semibold bg-white text-slate-600">
                  <option>Sort by: Relevance</option>
                </select>
              </div>
            </div>

            <StartupCarousel 
              list={[
                { name: "NextEra Publishing", industry: "Publishing & Media", iconColor: "bg-teal-500" },
                { name: "CrystalGrid Energy", industry: "Power & Utilities", hasStar: true, iconColor: "bg-rose-500" },
                { name: "AgriNext Systems", industry: "Agriculture", iconColor: "bg-emerald-600" },
                { name: "SkyPort Drones", industry: "Drones & Technology", hasStar: true, iconColor: "bg-indigo-500" },
                { name: "HyperLoop Transit", industry: "Transportation & Logistics", iconColor: "bg-purple-500" },
                { name: "MetaVista Gaming", industry: "Gaming & Entertainment", iconColor: "bg-amber-500" },
              ]} 
            />
          </div>
        </section>

        {/* Section 2: Based on commitment */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-sm text-slate-800 uppercase tracking-wider">Based on commitment</h3>
            <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
              <span className="size-1 bg-emerald-500 rounded-full animate-ping"></span> Live
            </span>
          </div>

          <StartupCarousel 
            list={[
              { name: "Davis - Toy", industry: "Healthcare", iconColor: "bg-slate-700" },
              { name: "BlueHaven Analytics", industry: "Data & Analytics", iconColor: "bg-sky-500" },
              { name: "ZenithWear Apparel", industry: "Fashion & Retail", iconColor: "bg-orange-500" },
              { name: "NimbusPay", industry: "Fintech", iconColor: "bg-indigo-600" },
              { name: "Solaris Dynamics", industry: "Renewable Energy", iconColor: "bg-cyan-500" },
              { name: "Skyline Ventures", industry: "Investment & PE", iconColor: "bg-violet-500" },
            ]} 
          />
        </section>

        {/* Section 3: PC Suggestions (AI matching box wrapper) */}
        <section className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <h2 className="font-bold text-lg text-slate-800">PC Suggestions</h2>
            <span className="text-xs text-slate-400 font-medium">Our AI based matches for you</span>
          </div>

          <div className="border border-blue-100 bg-blue-50/20 p-6 rounded-3xl flex flex-col gap-8 shadow-xs">
            {/* Subsection 1 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm text-slate-800">Personalised for you</h3>
                <button onClick={() => triggerToast("Opening all Personalized matches")} className="text-xs font-bold text-blue-500 hover:underline">View all</button>
              </div>
              <StartupCarousel 
                list={[
                  { name: "NetWeb Technology", industry: "Healthcare", isLive: true, iconColor: "bg-green-600" },
                  { name: "StarLink Events", industry: "Real Estate", iconColor: "bg-violet-600" },
                  { name: "QuantumCore AI", industry: "Artificial Intelligence", isLive: true, iconColor: "bg-teal-600" },
                  { name: "Neopay Technology", industry: "Fintech", iconColor: "bg-indigo-600" },
                  { name: "EverGlide Motors", industry: "Automotive", isLive: true, iconColor: "bg-pink-600" },
                  { name: "BrightPath Learning", industry: "Education", iconColor: "bg-amber-600" },
                ]} 
              />
            </div>

            {/* Subsection 2 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm text-slate-800">Invested by Super Angels</h3>
                <button onClick={() => triggerToast("Opening Super Angel investment lists")} className="text-xs font-bold text-blue-500 hover:underline">View all</button>
              </div>
              <StartupCarousel 
                list={[
                  { name: "Summit Edge Consulting", industry: "Business Consulting", isLive: true, iconColor: "bg-slate-800" },
                  { name: "NetWeb Technology", industry: "Healthcare", iconColor: "bg-emerald-600" },
                  { name: "CloudForge Solutions", industry: "SaaS & Cloud", iconColor: "bg-blue-600" },
                  { name: "AquaPulse Beverages", industry: "Food & Beverage", iconColor: "bg-purple-600" },
                  { name: "UrbanNest Living", industry: "Real Estate", iconColor: "bg-zinc-700" },
                  { name: "NetWeb Technology", industry: "Healthcare", iconColor: "bg-emerald-600" },
                  { name: "MediSync", industry: "Healthcare", iconColor: "bg-cyan-600" },
                ]} 
              />
            </div>

            {/* Subsection 3 */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm text-slate-800">Invested by VC/PE</h3>
                <button onClick={() => triggerToast("Opening VC/PE matching listings")} className="text-xs font-bold text-blue-500 hover:underline">View all</button>
              </div>
              <StartupCarousel 
                list={[
                  { name: "WaveLink Maritime", industry: "Shipping & Logistics", isLive: true, iconColor: "bg-cyan-500" },
                  { name: "Pixel Craft Studios", industry: "Media & Entertainment", iconColor: "bg-amber-500" },
                  { name: "VantageShield Security", industry: "Cybersecurity", iconColor: "bg-emerald-500" },
                  { name: "OrthoHaul Transport", industry: "Transportation", iconColor: "bg-rose-500" },
                  { name: "IronClad Robotics", industry: "Manufacturing", iconColor: "bg-indigo-500" },
                  { name: "AeroWave Systems", industry: "Aerospace", iconColor: "bg-purple-500" },
                ]} 
              />
            </div>
          </div>
        </section>

        {/* Section 4: User Lists */}
        <section className="flex flex-col gap-4">
          <div className="flex items-baseline gap-2">
            <h2 className="font-bold text-lg text-slate-800">User Lists</h2>
            <span className="text-xs text-slate-400 font-medium">Profiles saved by you</span>
          </div>

          <div className="border border-slate-100 bg-white p-6 rounded-3xl flex flex-col gap-4 shadow-xs">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm text-slate-800">Saved</h3>
              <button onClick={() => triggerToast("Opening complete Saved list")} className="text-xs font-bold text-blue-500 hover:underline">View all</button>
            </div>
            <StartupCarousel 
              list={[
                { name: "NeuroLink Labs", industry: "Biotechnology", isLive: true, iconColor: "bg-red-500" },
                { name: "HarborView Finance", industry: "Banking & Financial", iconColor: "bg-orange-500" },
                { name: "EcoTrack Solutions", industry: "Environmental Tech", iconColor: "bg-emerald-500" },
                { name: "PulsePoint Diagnostics", industry: "Medical Devices", iconColor: "bg-teal-500" },
                { name: "CobaltWorks Engineering", industry: "Industrial Engineering", iconColor: "bg-indigo-500" },
                { name: "FreshNest Kitchens", industry: "Food Tech", iconColor: "bg-amber-500" },
                { name: "TerraNova", industry: "Agriculture", iconColor: "bg-lime-500" },
              ]} 
            />
          </div>
        </section>

        {/* Section 5: CTA Cards */}
        <section className="grid md:grid-cols-2 gap-6">
          <div 
            onClick={() => triggerToast("Navigating to fund investment dashboard")}
            className="border border-slate-100 bg-white rounded-3xl p-6 shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center justify-between cursor-pointer"
          >
            <div className="flex flex-col gap-1.5">
              <h3 className="font-extrabold text-base text-slate-800">Looking to invest in <span className="text-blue-500">funds?</span></h3>
              <p className="text-xs text-slate-400">Investment opportunities in various funds.</p>
            </div>
            <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <ArrowUpRight className="size-5" />
            </div>
          </div>

          <div 
            onClick={() => triggerToast("Opening syndicate contributions")}
            className="border border-slate-100 bg-white rounded-3xl p-6 shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-center justify-between cursor-pointer"
          >
            <div className="flex flex-col gap-1.5">
              <h3 className="font-extrabold text-base text-slate-800">Create a <span className="text-blue-500">syndicate</span> or join one!</h3>
              <p className="text-xs text-slate-400">10+ syndicates are actively contributing.</p>
            </div>
            <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </section>

        {/* Section 6: Bottom Section (Network and News) */}
        <section className="grid lg:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
          {/* Explore Network */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-extrabold text-lg text-slate-800">Explore Network</h3>
              <p className="text-xs text-slate-400 mt-0.5">Explore companies, investors and directors you want to reach</p>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search here" 
                className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                onChange={(e) => triggerToast(`Filtering network for "${e.target.value}"`)}
              />
            </div>

            <div className="border border-slate-100 bg-white rounded-3xl p-4 shadow-xs relative overflow-hidden flex items-center justify-center min-h-[250px]">
              <NetworkCanvas />
            </div>
          </div>

          {/* Latest News */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-extrabold text-lg text-slate-800">News</h3>
              <p className="text-xs text-slate-400 mt-0.5">Latest visually happened in private market</p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { 
                  title: "Infosys Acquires 75% Stake in Telstra's Versent Group", 
                  meta: "11 Oct 2023 • Times of India • Infosys", 
                  source: "Times of India" 
                },
                { 
                  title: "Mahindra looks to acquire 350-acre land parcel in Nagpur", 
                  meta: "10 Oct 2023 • Economic Times • Mahindra", 
                  source: "Economic Times" 
                },
                { 
                  title: "Reliance Jio plans offer Netflix, Amazon Prime, Disney+ Hotstar", 
                  meta: "9 Oct 2023 • Equity Bulls • Reliance Industries Limited", 
                  source: "Equity Bulls" 
                },
                { 
                  title: "RSB Retail India files DRHP with Sebi for IPO, plans to raise Rs 500 crore", 
                  meta: "8 Oct 2023 • Moneycontrol • RSB Retail", 
                  source: "Moneycontrol" 
                }
              ].map((news, idx) => (
                <div 
                  key={idx} 
                  onClick={() => triggerToast(`Loading news: "${news.title}"`)}
                  className="p-4 border border-slate-100 bg-white rounded-2xl shadow-xs hover:border-blue-200 transition-all flex flex-col gap-1 cursor-pointer group"
                >
                  <h4 className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors leading-snug">
                    {news.title}
                  </h4>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1">
                    <span>{news.meta}</span>
                    <span className="text-blue-500 font-semibold group-hover:underline">{news.source} ➔</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Bottom Sticky Mobile Navbar */}
      <nav className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 sm:px-12 py-3 flex items-center justify-around shadow-lg">
        {[
          { icon: <Home className="size-5" />, label: "Home", active: true },
          { icon: <Briefcase className="size-5" />, label: "Deals" },
          { icon: <Calendar className="size-5" />, label: "Meetings" },
          { icon: <Compass className="size-5" />, label: "Syndicates" },
          { icon: <Bell className="size-5" />, label: "Notifications" },
          { icon: <User className="size-5" />, label: "Account" }
        ].map((item, idx) => (
          <button 
            key={idx}
            onClick={() => triggerToast(`Navigated to ${item.label}`)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${item.active ? 'text-blue-600 scale-105 font-bold' : 'text-slate-400 hover:text-slate-700'}`}
          >
            {item.icon}
            <span className="text-[9px] sm:text-[10px] tracking-tight">{item.label}</span>
          </button>
        ))}
      </nav>

    </div>
  );
}
