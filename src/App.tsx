import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, BarChart3, Network, 
  TrendingUp, HeartPulse, ShieldCheck, Mail, Phone, 
  Globe, ArrowRight, CheckCircle2, Zap, BrainCircuit,
  MessageSquare, LayoutDashboard, Share2, Award, LucideIcon
} from 'lucide-react';
import { Toaster, toast } from 'sonner';

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
  prefix?: string;
}

// --- Constants ---
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Investors', href: '#investors' },
  { label: 'Contact', href: '#contact' },
];

const LOGO_SRC = '/favicon.png';

const IMAGES = {
  hero: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/dd3e3c9a-db2e-47c8-900a-fa3104479b6a/hero-image-ad5e1f99-1774556131094.webp',
  about: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/dd3e3c9a-db2e-47c8-900a-fa3104479b6a/about-pharmacist-1505806b-1774556130424.webp',
  vision: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/dd3e3c9a-db2e-47c8-900a-fa3104479b6a/vision-background-6471bd56-1774556130047.webp',
  investor: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/dd3e3c9a-db2e-47c8-900a-fa3104479b6a/investor-section-4f6b5eb3-1774556129530.webp',
  analytics: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/dd3e3c9a-db2e-47c8-900a-fa3104479b6a/services-analytics-be21c3f7-1774556129816.webp',
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <img src={LOGO_SRC} alt="F2F Logo" className="w-10 h-10 rounded-xl object-cover shadow-lg border border-[#ffffff]/30" />
          <span className="text-2xl font-black tracking-tighter text-[#0F3D3E]">
            F2F
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-[#0F3D3E]/80 hover:text-[#2E8B57] font-semibold transition-colors text-sm uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#0F3D3E] p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[#0F3D3E] text-xl font-bold hover:text-[#2E8B57] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  toast.success('Joining sequence initiated!');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#0F3D3E] text-white px-6 py-4 rounded-2xl font-bold w-full text-lg shadow-lg"
              >
                Join Network
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Modern Pharmacy" 
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#072B2B]/70 via-[#0F3D3E]/50 to-[#2E8B57]/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl backdrop-blur-sm bg-white/20 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-16 bg-[#7ED957] animate-pulse"></span>
              <span className="text-[#7ED957] font-black tracking-widest uppercase text-sm">
                Next-Gen Healthcare Logistics
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 drop-shadow-lg">
              F2F – Ethiopia's First <br />
              <span className="bg-gradient-to-r from-[#7ED957] via-[#2E8B57] to-[#34D399] bg-clip-text text-transparent">AI-Powered</span> <br />
              Pharmacy Network
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl font-medium">
              Connect pharmacies with real-time inventory signals, demand forecasting, and seamless logistics to keep communities healthy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2E8B57] px-10 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:bg-[#7ED957]"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 font-bold text-white">
              {[
                { title: 'Pharmacies', value: '500+' },
                { title: 'Patients', value: '1M+' },
                { title: 'Accuracy', value: '98%' },
                { title: 'Regions', value: '11' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/10 p-4 text-center backdrop-blur-sm border border-white/20">
                  <div className="text-3xl text-[#7ED957]">{item.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/80">{item.title}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-[#F7FAF9]">
              <img src={IMAGES.about} alt="Ethiopian Pharmacist" className="w-full aspect-[4/5] object-cover" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#7ED957]/20 rounded-full blur-[80px] -z-0" />
            <div className="absolute top-10 -left-10 w-48 h-48 bg-[#2E8B57]/10 rounded-full blur-[60px] -z-0" />
            
            <div className="absolute top-1/2 -right-12 bg-white p-6 rounded-3xl shadow-2xl z-20 max-w-[200px] border border-gray-100 hidden md:block">
              <Award className="w-10 h-10 text-[#7ED957] mb-3" />
              <p className="font-bold text-[#0F3D3E]">First AI Health Network in Ethiopia</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-[#F7FAF9] text-[#2E8B57] rounded-full text-xs font-black mb-6 tracking-widest uppercase border border-[#2E8B57]/10">
              Our Identity
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F3D3E] mb-8 leading-tight">
              Empowering Ethiopia's <br/>
              <span className="text-[#2E8B57]">Healthcare Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              F2F is Ethiopia’s first AI-driven pharmacy-to-pharmacy platform. We empower pharmacies with real-time connectivity, data insights, and predictive analytics, enabling smarter inventory management and better healthcare delivery.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <CheckCircle2 className="text-[#2E8B57]" />, title: "Real-time Connectivity" },
                { icon: <CheckCircle2 className="text-[#2E8B57]" />, title: "Data-Driven Insights" },
                { icon: <CheckCircle2 className="text-[#2E8B57]" />, title: "Predictive Analytics" },
                { icon: <CheckCircle2 className="text-[#2E8B57]" />, title: "Smarter Inventory" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7ED957]/20 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-bold">{item.title}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-[#0F3D3E] font-black group">
              Learn more about our journey 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#2E8B57]" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  return (
    <section className="py-32 bg-[#F7FAF9]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 bg-white text-[#0F3D3E] rounded-full text-xs font-black mb-6 tracking-widest uppercase border border-[#0F3D3E]/10">
            Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F3D3E] mb-8">What We Do</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            We solve the challenges of fragmented pharmacy networks and inefficient medicine distribution through technology that puts patients first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Share2,
              title: "Stock Sharing",
              desc: "Enable pharmacies to share surplus stock and fulfill urgent patient needs through a unified network."
            },
            {
              icon: BrainCircuit,
              title: "Predictive Demand",
              desc: "Utilize AI to forecast medicine demand based on regional health trends and historical data."
            },
            {
              icon: TrendingUp,
              title: "Optimized Supply",
              desc: "Streamline the distribution chain to reduce waste and ensure essential medicines are always available."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-[#0F3D3E]/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 bg-[#F7FAF9] rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#0F3D3E] transition-colors">
                <item.icon className="w-8 h-8 text-[#2E8B57]" />
              </div>
              <h3 className="text-2xl font-black text-[#0F3D3E] mb-6">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: ServiceCard[] = [
    {
      icon: Network,
      title: "Pharmacy Connectivity",
      description: "Secure, real-time networking between pharmacies to share inventory and insights instantly."
    },
    {
      icon: LayoutDashboard,
      title: "AI & Data Analytics",
      description: "Advanced algorithms that turn raw pharmacy data into actionable growth and care insights."
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Optimization of inventory turnover and reduction of expiry losses to boost profitability."
    },
    {
      icon: HeartPulse,
      title: "Patient Care Improvement",
      description: "Ensuring patients always find their medication, reducing wait times and improving outcomes."
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-[#F7FAF9] text-[#2E8B57] rounded-full text-xs font-black mb-6 tracking-widest uppercase border border-[#2E8B57]/10">
              Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F3D3E] mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 font-medium">
              Tailored solutions designed to bring the power of AI to every pharmacy counter in Ethiopia.
            </p>
          </div>
          <button className="text-[#0F3D3E] font-black flex items-center gap-2 group text-lg">
            All Solutions <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#2E8B57]" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-10 rounded-[2rem] bg-[#F7FAF9] border border-[#0F3D3E]/5 hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#2E8B57] mb-8 shadow-sm group-hover:bg-[#0F3D3E] group-hover:text-white transition-all duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#0F3D3E] mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChatSection = () => {
  return (
    <section className="py-24 bg-white" id="chat">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#F7FAF9] text-[#2E8B57] rounded-full text-xs font-black mb-4 tracking-widest uppercase border border-[#2E8B57]/10">
            Support Chat
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F3D3E] mb-4">AI-powered Pharmacy Chat</h2>
          <p className="text-lg text-gray-600">Ask F2F Assistant about stock status, order suggestions, or supply chain updates instantly.</p>
        </div>

        <div className="max-w-4xl mx-auto rounded-[2rem] border border-[#0F3D3E]/10 bg-[#F7FAF9] shadow-lg overflow-hidden">
          <div className="px-8 py-6 bg-[#0F3D3E] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={LOGO_SRC} alt="F2F chat logo" className="w-9 h-9 rounded-lg bg-white" />
              <div>
                <div className="text-base font-black">F2F Chat Assistant</div>
                <div className="text-xs text-[#A8D8B7]">AI-enriched pharmacy intelligence</div>
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#A8D8B7]">Live</span>
          </div>
          <div className="p-8 space-y-5">
            {[
              { role: 'user', text: 'What medicines are low on stock this week?', time: '08:12' },
              { role: 'assistant', text: 'Amlodipine, Metformin, and Atorvastatin stocks are below 20% in Addis region. Recommended reorder quantity: 150 units each.', time: '08:12' },
              { role: 'user', text: 'Any predicted demand spike next month?', time: '08:13' },
              { role: 'assistant', text: 'Yes, there is a forecasted 18% increase for pediatric anti-infectives in Oromia. Consider advance supply reallocation.', time: '08:13' }
            ].map((message, index) => (
              <div key={index} className={`p-4 rounded-2xl ${message.role === 'assistant' ? 'bg-white border border-[#0F3D3E]/10' : 'bg-[#DFF7EA] border border-[#2E8B57]/20'}`}>
                <div className="text-xs font-black uppercase text-[#0F3D3E]/50 mb-1">{message.role}</div>
                <p className="text-gray-700 leading-relaxed">{message.text}</p>
                <div className="text-xs text-gray-400 text-right mt-2">{message.time}</div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#0F3D3E]/10 flex items-center p-4 gap-3 bg-white">
            <input type="text" placeholder="Type your question here..." className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2E8B57]/40" />
            <button className="bg-[#2E8B57] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#0F3D3E] transition-all">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  return (
    <section id="how-it-works" className="py-32 bg-[#0F3D3E] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2E8B57]/5 -skew-x-12 transform translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-[#7ED957] rounded-full text-xs font-black mb-6 tracking-widest uppercase border border-white/10 backdrop-blur-sm">
            Operations
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8">How We Work</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            A seamless, two-sided ecosystem designed for operational excellence and strategic impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 relative">
          {/* Vertical Divider for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {/* Pharmacies Side */}
          <div className="space-y-16">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-3xl bg-[#7ED957] flex items-center justify-center text-[#0F3D3E] shadow-lg shadow-[#7ED957]/20">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl font-black">For Pharmacies</h3>
            </div>
            {[
              { step: "01", title: "Join the Network", desc: "Integrate your existing POS system with our secure F2F bridge in minutes." },
              { step: "02", title: "Sync Inventory", desc: "Gain real-time visibility into your stock and neighborhood availability safely." },
              { step: "03", title: "Optimize & Grow", desc: "Receive automated AI suggestions for smart ordering and stock rebalancing." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <span className="text-7xl font-black text-white/5 group-hover:text-[#7ED957]/20 transition-colors select-none leading-none">{item.step}</span>
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-[#7ED957]">{item.title}</h4>
                  <p className="text-white/60 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investors Side */}
          <div className="space-y-16 lg:pl-10">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-3xl bg-[#2E8B57] flex items-center justify-center text-white shadow-lg shadow-[#2E8B57]/20">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-3xl font-black">For Partners</h3>
            </div>
            {[
              { step: "01", title: "Review Insights", desc: "Access anonymized data on medicine consumption and regional market gaps." },
              { step: "02", title: "Invest in Growth", desc: "Fuel the scaling of critical medicine hubs and AI infrastructure." },
              { step: "03", title: "Scale Impact", desc: "Monitor healthcare accessibility improvements via our impact dashboard." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 group"
              >
                <span className="text-7xl font-black text-white/5 group-hover:text-[#2E8B57]/30 transition-colors select-none leading-none">{item.step}</span>
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-[#2E8B57]">{item.title}</h4>
                  <p className="text-white/60 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
    <section className="relative py-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.vision} 
          alt="Future Vision" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F3D3E]/90 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-24 h-24 bg-[#7ED957]/20 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-10 animate-pulse border border-[#7ED957]/30">
            <Zap className="w-12 h-12 text-[#7ED957]" />
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tight">Future Vision</h2>
          <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light italic">
            "A scalable, data-driven healthcare platform with predictive analytics and nationwide impact, creating a smarter pharmacy ecosystem across Ethiopia."
          </p>
          <div className="mt-16 flex justify-center gap-4">
            <span className="w-2 h-2 rounded-full bg-[#7ED957]"></span>
            <span className="w-2 h-2 rounded-full bg-[#7ED957]/50"></span>
            <span className="w-2 h-2 rounded-full bg-[#7ED957]/20"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Investors = () => {
  const stats: Stat[] = [
    { label: "Partner Pharmacies", value: "500", prefix: "+" },
    { label: "Patients Served", value: "1M+", prefix: "" },
    { label: "Predictive AI Accuracy", value: "98%", prefix: "" },
    { label: "Regions Covered", value: "11", prefix: "" },
  ];

  return (
    <section id="investors" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#F7FAF9] rounded-[4rem] p-10 md:p-24 overflow-hidden relative border border-[#0F3D3E]/5">
          <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <div className="inline-block px-4 py-1.5 bg-[#0F3D3E] text-white rounded-full text-xs font-black mb-8 tracking-widest uppercase">
                Growth Opportunity
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#0F3D3E] mb-8 leading-[1.1]">
                Why Invest in F2F?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                F2F is not just a network — it’s a growth engine for pharmacies and investors alike. We unlock new revenue streams while improving essential healthcare access.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                {stats.map((stat, i) => (
                  <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-[#0F3D3E]/5 hover:shadow-xl transition-shadow">
                    <div className="text-4xl font-black text-[#2E8B57] mb-2 tracking-tighter">
                      {stat.prefix}{stat.value}
                    </div>
                    <div className="text-xs font-black text-[#0F3D3E]/40 uppercase tracking-[0.2em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src={IMAGES.investor} 
                  alt="Investors Meeting" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D3E]/60 to-transparent" />
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 border border-gray-100 hidden xl:block">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#7ED957]/20 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#2E8B57]" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-[#0F3D3E]">12.5%</div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Efficiency Increase</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Our team will reach out shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#F7FAF9] text-[#2E8B57] rounded-full text-xs font-black mb-6 tracking-widest uppercase border border-[#2E8B57]/10">
              Get in touch
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F3D3E] mb-8">Ready to <br/>Connect?</h2>
            <p className="text-xl text-gray-600 mb-16 font-medium leading-relaxed">
              Whether you're a pharmacy owner looking to optimize or an investor seeking impact, our team is ready to scale with you.
            </p>

            <div className="space-y-10">
              {[
                { icon: Phone, label: "Call Us", value: "+251 94 130 2922" },
                { icon: Mail, label: "Email", value: "selomewondimneh@gmail.com" },
                { icon: Globe, label: "Headquarters", value: "Arada, Addis Ababa, Ethiopia" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#F7FAF9] flex items-center justify-center text-[#2E8B57] group-hover:bg-[#0F3D3E] group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                    <div className="text-2xl font-bold text-[#0F3D3E]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F7FAF9] p-12 md:p-16 rounded-[3rem] border border-[#0F3D3E]/5 shadow-xl relative"
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#7ED957] rounded-3xl flex items-center justify-center text-[#0F3D3E] shadow-lg">
              <MessageSquare size={32} />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-[#0F3D3E] mb-3 uppercase tracking-wider">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Abebe Bikila"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-[#0F3D3E] mb-3 uppercase tracking-wider">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="abebe@pharmacy.et"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-[#0F3D3E] mb-3 uppercase tracking-wider">Organization Type</label>
                <select className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all bg-white appearance-none">
                  <option>Pharmacy Owner</option>
                  <option>Healthcare Investor</option>
                  <option>Government Partner</option>
                  <option>Supplier</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-[#0F3D3E] mb-3 uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us how we can collaborate..."
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#2E8B57]/20 focus:border-[#2E8B57] transition-all bg-white"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#0F3D3E] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#2E8B57] transition-all shadow-xl hover:shadow-[#2E8B57]/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0F3D3E] text-white pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-2xl flex items-center justify-center shadow-lg">
                <Network className="text-white w-7 h-7" />
              </div>
              <span className="text-4xl font-black tracking-tighter text-white">F2F</span>
            </div>
            <p className="text-white/60 text-xl max-w-md mb-10 leading-relaxed font-medium">
              Ethiopia's pioneer AI-powered pharmacy network. Redefining medical supply chains for a healthier future.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-10 text-[#7ED957]">Company</h4>
            <ul className="space-y-6 text-white/50 text-lg font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#investors" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} F2F PHARMACY NETWORK. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#F7FAF9] font-['Inter',sans-serif] selection:bg-[#7ED957]/40 selection:text-[#0F3D3E]">
      <Toaster position="top-right" richColors closeButton />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Services />
        <ChatSection />
        <Workflow />
        <Vision />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}