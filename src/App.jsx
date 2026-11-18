import { useMemo, useState } from "react";
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, BriefcaseBusiness,
  CalendarDays, ChevronDown, CircleHelp, Command, CreditCard, Download,
  LayoutDashboard, Menu, MoreHorizontal, Search, Settings, Users, Wallet,
  X, CheckCircle2, Clock3, CircleDot
} from "lucide-react";

const metrics = [
  { label: "Total revenue", value: "$48,294", change: "+12.8%", positive: true, icon: Wallet, points: [22,30,25,42,34,52,47,68,61,78,73,90] },
  { label: "Active customers", value: "2,840", change: "+8.2%", positive: true, icon: Users, points: [28,35,31,45,40,50,47,60,56,69,65,80] },
  { label: "Conversion rate", value: "4.86%", change: "-0.4%", positive: false, icon: Activity, points: [72,64,70,58,62,48,54,45,50,38,43,34] },
  { label: "Avg. order value", value: "$169.40", change: "+3.6%", positive: true, icon: CreditCard, points: [30,28,42,38,48,44,57,53,65,61,74,80] },
];

const projects = [
  { name: "Website redesign", client: "Acme Studio", owner: "JD", progress: 78, status: "In progress", tone: "blue", due: "May 24" },
  { name: "Mobile application", client: "Vertex Labs", owner: "MK", progress: 46, status: "In review", tone: "amber", due: "May 28" },
  { name: "Brand identity", client: "Northwind Co.", owner: "AL", progress: 100, status: "Completed", tone: "green", due: "May 18" },
  { name: "Analytics platform", client: "Brightside", owner: "SR", progress: 24, status: "In progress", tone: "blue", due: "Jun 02" },
];

const activity = [
  { title: "Payment received", detail: "Acme Studio · Invoice #1048", time: "12 min ago", amount: "+$2,400", icon: CreditCard, tone: "green" },
  { title: "New project created", detail: "Analytics platform", time: "1 hour ago", amount: "", icon: BriefcaseBusiness, tone: "blue" },
  { title: "Review requested", detail: "Mobile application · Milestone 2", time: "3 hours ago", amount: "", icon: Clock3, tone: "amber" },
];

function Sparkline({ points, negative }) {
  const path = points.map((p, i) => `${(i / (points.length - 1)) * 100},${100 - p}`).join(" ");
  return <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={`sparkline ${negative ? "down" : ""}`} aria-hidden="true"><polyline points={path} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function RevenueChart() {
  const bars = [36,48,43,62,55,72,61,83,68,92,76,100];
  return <div className="chart-wrap"><div className="chart-y"><span>$12k</span><span>$9k</span><span>$6k</span><span>$3k</span><span>$0</span></div><div className="chart"><div className="chart-grid"><i/><i/><i/><i/><i/></div><div className="bars">{bars.map((height, i) => <div className={`bar-slot ${i === 9 ? "selected" : ""}`} key={i}><div className="bar" style={{ height: `${height}%` }} /></div>)}</div><div className="chart-x">{["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => <span key={m}>{m}</span>)}</div></div></div>;
}

function Sidebar({ open, close }) {
  const links = [
    { label: "Overview", icon: LayoutDashboard, active: true },
    { label: "Projects", icon: BriefcaseBusiness },
    { label: "Customers", icon: Users },
    { label: "Payments", icon: CreditCard },
    { label: "Reports", icon: Activity },
  ];
  return <><div className={`mobile-scrim ${open ? "show" : ""}`} onClick={close}/><aside className={`sidebar ${open ? "open" : ""}`}><div className="brand"><span className="brand-icon"><Command size={18}/></span><span>northstar<span className="brand-period">.</span></span><button className="mobile-close" onClick={close}><X size={18}/></button></div><div className="workspace-switch"><div className="workspace-avatar">N</div><div><strong>Northstar Studio</strong><small>Free workspace</small></div><ChevronDown size={15}/></div><div className="nav-label">WORKSPACE</div><nav>{links.map(({label,icon:Icon,active})=><a key={label} href="#" className={active?"nav-link active":"nav-link"} onClick={e=>e.preventDefault()}><Icon size={17}/><span>{label}</span>{label==="Projects"&&<small>4</small>}</a>)}</nav><div className="nav-label tools-label">PREFERENCES</div><nav><a href="#" className="nav-link" onClick={e=>e.preventDefault()}><Settings size={17}/><span>Settings</span></a><a href="#" className="nav-link" onClick={e=>e.preventDefault()}><CircleHelp size={17}/><span>Help center</span></a></nav><div className="sidebar-bottom"><div className="upgrade-card"><div className="upgrade-symbol">✦</div><strong>Unlock your potential</strong><p>Get more insights with the Pro plan.</p><button>Explore plans <ArrowUpRight size={13}/></button></div><div className="user-profile"><div className="user-avatar">SA</div><div><strong>Samuel Aguiar</strong><small>Administrator</small></div><MoreHorizontal size={18}/></div></div></aside></>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [period, setPeriod] = useState("Last 12 months");
  const [query, setQuery] = useState("");
  const filteredProjects = useMemo(() => projects.filter(p => `${p.name} ${p.client} ${p.status}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <div className="app-shell"><Sidebar open={menuOpen} close={()=>setMenuOpen(false)}/><main className="main-content"><header className="topbar"><div className="topbar-left"><button className="mobile-menu" onClick={()=>setMenuOpen(true)}><Menu size={20}/></button><div><span className="breadcrumb">Workspace <span>/</span> Overview</span><h1>Overview</h1></div></div><div className="topbar-actions"><label className="search-box"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects..."/><kbd>⌘ K</kbd></label><button className="icon-button" aria-label="Notifications"><Bell size={18}/><i/></button><div className="top-avatar">SA</div></div></header>
    <section className="welcome-row"><div><h2>Good morning, Samuel <span>✦</span></h2><p>Here's what's happening with your workspace today.</p></div><button className="export-button" onClick={()=>window.print()}><Download size={15}/> Export report</button></section>
    <section className="metric-grid">{metrics.map(({label,value,change,positive,icon:Icon,points})=><article className="metric-card" key={label}><div className="metric-top"><span>{label}</span><span className="metric-icon"><Icon size={17}/></span></div><div className="metric-value">{value}</div><div className="metric-bottom"><span className={positive?"change positive":"change negative"}>{positive?<ArrowUpRight size={13}/>:<ArrowDownRight size={13}/>} {change}</span><span className="muted">vs. last month</span><Sparkline points={points} negative={!positive}/></div></article>)}</section>
    <section className="content-grid"><article className="panel revenue-panel"><div className="panel-heading"><div><span className="overline">PERFORMANCE</span><h3>Revenue overview</h3></div><select value={period} onChange={e=>setPeriod(e.target.value)}><option>Last 12 months</option><option>Last 6 months</option><option>This year</option></select></div><div className="revenue-total"><strong>$48,294.00</strong><span><ArrowUpRight size={13}/> 12.8%</span></div><p className="chart-caption">Revenue performance · {period}</p><RevenueChart/></article><article className="panel activity-panel"><div className="panel-heading"><div><span className="overline">LATEST UPDATES</span><h3>Recent activity</h3></div><button className="more-button" aria-label="More activity"><MoreHorizontal size={19}/></button></div><div className="activity-list">{activity.map(({title,detail,time,amount,icon:Icon,tone})=><div className="activity-item" key={title}><div className={`activity-icon ${tone}`}><Icon size={16}/></div><div className="activity-copy"><strong>{title}</strong><span>{detail}</span><small>{time}</small></div>{amount&&<b>{amount}</b>}</div>)}</div><button className="view-all">View all activity <ArrowUpRight size={14}/></button></article></section>
    <section className="panel projects-panel"><div className="panel-heading"><div><span className="overline">PROJECT TRACKER</span><h3>Active projects</h3></div><button className="text-button">View all projects <ArrowUpRight size={14}/></button></div><div className="table-scroll"><table><thead><tr><th>PROJECT</th><th>OWNER</th><th>PROGRESS</th><th>STATUS</th><th>DUE DATE</th><th></th></tr></thead><tbody>{filteredProjects.map(p=><tr key={p.name}><td><div className="project-name"><span className="project-symbol">{p.name.slice(0,1)}</span><div><strong>{p.name}</strong><small>{p.client}</small></div></div></td><td><span className="owner-avatar">{p.owner}</span></td><td><div className="progress-cell"><div className="progress-track"><i style={{width:`${p.progress}%`}}/></div><span>{p.progress}%</span></div></td><td><span className={`status-badge ${p.tone}`}>{p.tone==="green"?<CheckCircle2 size={12}/>:p.tone==="amber"?<Clock3 size={12}/>:<CircleDot size={12}/>} {p.status}</span></td><td className="due-date"><CalendarDays size={13}/>{p.due}</td><td><button className="more-button" aria-label={`More options for ${p.name}`}><MoreHorizontal size={18}/></button></td></tr>)}</tbody></table>{filteredProjects.length===0&&<div className="no-results">No projects match “{query}”.</div>}</div></section>
    <footer className="footer"><span>© 2025 Northstar Studio. All rights reserved.</span><span>Made for better work <span className="footer-heart">✦</span></span></footer>
  </main></div>;
}
