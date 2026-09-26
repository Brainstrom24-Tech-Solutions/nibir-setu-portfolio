import Head from "next/head";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBarChart2,
  FiCheck,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSearch,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import Nav from "@/components/Nav";
import CountValue from "@/components/CountValue";
import ToolsSection from "@/components/ToolsSection";
import ClientLogos from "@/components/ClientLogos";
import CertificationDetails from "@/components/CertificationDetails";
import {
  portfolio,
  services,
  skills,
} from "@/components/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
const useBrowserLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const stats = [
  ["08+", "Years experience"],
  ["150+", "Projects done"],
  ["40+", "Happy clients"],
  ["1000+", "Followers"],
];

const resultMetrics = [
  ["10M", "Increase impressions", "Reach at scale"],
  ["20%", "Increase engagement rate", "Stronger creative pull"],
  ["205K", "New followers gained", "Audience growth"],
  ["17%", "Increase organic reach", "Better discoverability"],
  ["37%", "Increase average watch rate", "Higher retention"],
  ["5K", "SKUs sold", "E-commerce performance"],
];

function SectionHeading({ number, eyebrow, title, dark = false }) {
  return (
    <div className={dark ? "text-cream" : "text-ink"}>
      <div className="section-kicker" data-reveal>
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 data-reveal className="section-title mt-5 max-w-5xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const root = useRef(null);

  useBrowserLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

      intro
        .from(".hero-topline", { y: 18, opacity: 0, duration: 0.65 })
        .from(
          ".hero-name-line",
          { yPercent: 105, opacity: 0, stagger: 0.1, duration: 1.05 },
          "-=.25",
        )
        .from(
          ".hero-role-line",
          { yPercent: 115, opacity: 0, stagger: 0.12, duration: 1.05 },
          "-=.58",
        )
        .from(".hero-copy", { y: 28, opacity: 0, duration: 0.8 }, "-=.55")
        .from(
          ".hero-photo-wrap",
          { clipPath: "inset(100% 0 0 0)", duration: 1.25 },
          "-=.95",
        )
        .from(
          ".hero-badge",
          { scale: 0.7, opacity: 0, stagger: 0.1, duration: 0.7 },
          "-=.65",
        );

      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 12, opacity: 0.7 },
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top bottom+=100", once: true, fastScrollEnd: true },
          },
        );
      });

      gsap.utils.toArray(".parallax-img").forEach((img) => {
        gsap.to(img, {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.to(".hero-photo", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-grid-orb", {
        yPercent: 45,
        rotate: 18,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const dot = document.querySelector(".cursor-dot");
      const ring = document.querySelector(".cursor-ring");
      const move = (e) => {
        if (!dot || !ring) return;
        gsap.to(dot, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.12,
          overwrite: true,
        });
        gsap.to(ring, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.28,
          overwrite: true,
        });
      };
      window.addEventListener("mousemove", move);

      return () => window.removeEventListener("mousemove", move);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      <Head>
        <title>Nibir Setu — Digital Marketer | Meta & Google Ads Expert</title>
        <meta
          name="description"
          content="Nibir Setu — Digital Marketer and Meta & Google Ads Expert focused on performance marketing, SEO, analytics, e-commerce and growth."
        />
      </Head>

      <div className="noise" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <Nav />

      {/* HERO */}
      <section
        id="home"
        className="hero-section relative overflow-hidden bg-cream text-ink"
      >
        <div className="hero-grid absolute inset-0 opacity-80" />
        <div className="hero-grid-orb pointer-events-none absolute -right-48 top-8 h-[34rem] w-[34rem] rounded-full bg-signal/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1600px] px-5 pb-7 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
            <div>
              <div className="hero-topline mb-8 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[.26em] text-black/55 sm:text-xs">
                <span className="h-px w-10 bg-signal" />
                HI THERE!
              </div>

              <div className="hero-name-line-wrap overflow-hidden">
                <div className="hero-name-line display dark-text hero-heading-line">
                  <span>I&apos;M</span>
                  <span className="hero-name-accent">NIBIR</span>
                </div>
              </div>

              <div className="hero-role-stack mt-7">
                <div className="hero-role-line role-display">
                  DIGITAL <span className="role-outline">MARKETER</span>
                </div>
                <div className="hero-role-line role-display">
                  META &amp; GOOGLE ADS{" "}
                  <span className="role-outline">EXPERT</span>
                </div>
              </div>

              <div className="hero-copy mt-10 max-w-2xl">
                <p className="max-w-xl text-base font-medium leading-8 text-black/62 sm:text-lg">
                  Results-driven digital marketing specialist with 8+ years of
                  experience in Meta &amp; Google Ads, SEO, PPC, content
                  strategy, analytics, automation and e-commerce marketing.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#work" className="magnetic solid-btn">
                    View campaign work <FiArrowDown />
                  </a>
                  <a href="#contact" className="ghost-btn">
                    Start a conversation <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="hero-photo-wrap relative w-full max-w-[570px]">
                <div className="hero-photo absolute -left-6 -top-6 h-full w-full border border-ink/10 bg-white/40" />
                <div className="hero-photo relative aspect-[.86] overflow-hidden bg-ink shadow-[0_28px_100px_rgba(15,15,15,.17)]">
                  <Image
                    src="/assets/profile/nibir-portrait.jpg"
                    alt="Nibir Setu"
                    fill
                    priority
                    sizes="(max-width: 1023px) 92vw, 42vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/45 to-transparent p-6 pt-32 sm:p-8 sm:pt-40">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[.18em] text-signal">
                          NIBIR SETU
                        </div>
                        <div className="mt-2 text-xs font-semibold text-white/60">
                          Senior Digital Marketer
                        </div>
                      </div>
                      <div className="hero-badge rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.12em] text-white backdrop-blur-xl">
                        08+ Years
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-badge absolute -left-20 top-10 hidden w-44 border border-ink/10 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.15em] text-black/45">
                    <FiTarget className="text-signal" /> Paid media
                  </div>
                  <div className="mt-3 text-2xl font-black tracking-[-.06em]">
                    META + GOOGLE
                  </div>
                  <div className="mt-2 text-[10px] font-semibold leading-4 text-black/48">
                    Campaign strategy, creative testing &amp; optimization.
                  </div>
                </div>

                <div className="hero-badge absolute -right-20 bottom-20 hidden w-48 border border-ink/10 bg-ink p-4 text-cream shadow-xl sm:block">
                  <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-[.15em] text-white/45">
                    <span>Performance</span>
                    <FiTrendingUp className="text-signal" />
                  </div>
                  <div className="mt-3 text-3xl font-black tracking-[-.06em] text-signal">
                    10M
                  </div>
                  <div className="mt-1 text-[10px] font-semibold text-white/50">
                    increase impressions
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-y border-ink/12 py-5 lg:mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="metric-stat border-r border-ink/10 px-4 py-4 first:pl-0 last:border-r-0 sm:px-6"
                >
                  <div className="text-3xl font-black tracking-[-.07em] sm:text-5xl">
                    <CountValue value={value} />
                  </div>
                  <div className="mt-2 text-[9px] font-black uppercase tracking-[.14em] text-black/42 sm:text-[10px]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-[9px] font-black uppercase tracking-[.18em] text-black/35">
            <span>Scroll to explore</span>
            <span>01 / 07</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-pad bg-white">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="01"
            eyebrow="About me"
            title="I turn marketing activity into measurable business signals."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div data-reveal className="about-card">
              <div className="about-number">
                <CountValue value="08+" />
              </div>
              <div className="mt-3 text-xs font-black uppercase tracking-[.15em] text-white/45">
                Years experience
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3">
                <div className="dark-mini">
                  <FiBarChart2 />
                  <span>Performance</span>
                </div>
                <div className="dark-mini">
                  <FiTarget />
                  <span>Paid Media</span>
                </div>
                <div className="dark-mini">
                  <FiSearch />
                  <span>SEO</span>
                </div>
                <div className="dark-mini">
                  <FiTrendingUp />
                  <span>Growth</span>
                </div>
              </div>
            </div>

            <div data-reveal className="max-w-3xl">
              <div className="text-2xl font-black leading-tight tracking-[-.04em] sm:text-4xl">
                I&apos;m Nibir, Digital Marketing Specialist.
              </div>
              <p className="mt-7 text-base leading-8 text-black/62 sm:text-lg">
                Results-driven Senior Digital Marketer with 8+ years of
                experience in developing and executing high-impact marketing
                campaigns. My work combines paid media, SEO, analytics, content
                strategy and data-driven decision making.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service} className="service-line group">
                    <span className="service-dot" />
                    <span>{service}</span>
                    <FiArrowUpRight className="ml-auto text-black/25 transition group-hover:text-signal" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="section-pad bg-ink text-cream">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            dark
            number="02"
            eyebrow="What I do"
            title="The work behind a stronger campaign."
          />
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service}
                data-reveal
                className="expertise-card bg-ink p-7 sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[.18em] text-signal">
                    0{index + 1}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-white/45">
                    <FiArrowUpRight />
                  </span>
                </div>
                <h3 className="mt-16 text-2xl font-black leading-tight tracking-[-.04em] sm:text-3xl">
                  {service}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/42">
                  Strategy, execution, measurement and continuous optimization
                  built around a clear business objective.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-pad bg-cream">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="03"
            eyebrow="Skills"
            title="A practical mix of paid media, analytics, content and optimization."
          />
          <div className="mt-14 grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="text-xs font-black uppercase tracking-[.18em] text-signal">
                Core capabilities
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-black/52">
                Capabilities spanning performance marketing, analytics, website
                optimization, AI and automation — built to work together as one
                growth system.
              </p>
            </div>
            <div className="border-t-2 border-ink">
              {skills.map((skill, index) => (
                <div key={skill} data-reveal className="skill-row-v2 group">
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-bold tracking-[-.02em] transition duration-300 group-hover:translate-x-1 sm:text-xl">
                    {skill}
                  </span>
                  <FiCheck className="text-black/22 transition group-hover:text-signal" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ToolsSection />

      {/* WORK */}
      <section id="work" className="section-pad bg-white">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="04"
            eyebrow="Portfolio"
            title="Selected campaign work, creative systems and performance snapshots."
          />
          <div className="mt-14 grid gap-7 lg:grid-cols-12">
            {portfolio.map((item, index) => (
              <article
                key={item.image}
                data-reveal
                className={`case-card ${index % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5"}`}
              >
                <div className="relative overflow-hidden bg-ink">
                  <img
                    src={item.image}
                    alt=""
                    className="parallax-img h-full w-full object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-signal px-3 py-2 text-[9px] font-black uppercase tracking-[.14em] text-ink">
                    {item.kicker}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-[9px] font-black uppercase tracking-[.14em] text-white backdrop-blur">
                    0{index + 1}
                  </div>
                </div>
                <div className="case-body">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[.16em] text-signal">
                      Campaign case
                    </div>
                    <h3 className="mt-3 text-2xl font-black tracking-[-.05em] sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.metrics.map((metric) => (
                      <span key={metric} className="case-tag">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-pad bg-ink text-cream">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            dark
            number="04A"
            eyebrow="Campaign results"
            title="Numbers that explain the impact."
          />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {resultMetrics.map(([value, label, note]) => (
              <div
                key={label}
                data-reveal
                className="result-card bg-ink p-6 sm:p-8"
              >
                <div className="text-5xl font-black tracking-[-.07em] text-signal sm:text-7xl">
                  <CountValue value={value} />
                </div>
                <div className="mt-4 text-sm font-black uppercase tracking-[.08em] text-white/80">
                  {label}
                </div>
                <div className="mt-2 text-xs leading-5 text-white/38">
                  {note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section-pad overflow-hidden bg-cream">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="05"
            eyebrow="Clients"
            title="Brands, institutions and teams I have worked with."
          />
          <ClientLogos />
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section-pad bg-white">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <SectionHeading
            number="06"
            eyebrow="Certification"
            title="A cross-disciplinary foundation behind the marketing work."
          />
          <CertificationDetails />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section bg-signal">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="section-kicker">
            <span>07</span>
            <span>Contact</span>
          </div>
          <div className="mt-8 grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <h2 className="contact-title">
                LET&apos;S GROW
                <br />
                SOMETHING
                <br />
                <span>SMART.</span>
              </h2>
              <p className="mt-9 max-w-xl text-base font-medium leading-8 text-ink/64 sm:text-lg">
                I&apos;m always excited to connect with businesses and
                individuals looking to grow through smart digital strategies.
                Feel free to reach out for collaborations, consultations or new
                project opportunities.
              </p>
            </div>

            <div className="border-t border-ink/20 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="text-[10px] font-black uppercase tracking-[.18em] text-ink/45">
                Direct contact
              </div>
              <div className="mt-7 space-y-5">
                <a className="contact-link" href="tel:+8801303180571">
                  <FiPhone /> +880 13031-80571
                </a>
                <a
                  className="contact-link"
                  href="mailto:nibirsetu001@gmail.com"
                >
                  <FiMail /> nibirsetu001@gmail.com
                </a>
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/nibirsetu01/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin /> linkedin.com/in/nibirsetu01
                </a>
                <a
                  className="contact-link"
                  href="https://www.instagram.com/nibir_setu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiInstagram /> @nibir_setu
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="mailto:nibirsetu001@gmail.com?subject=Project%20Inquiry"
                  className="solid-btn dark-btn"
                >
                  Send an email <FiArrowUpRight />
                </a>
                <a href="#home" className="ghost-btn dark-ghost">
                  Back to top <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-3 border-t border-ink/20 pt-5 text-[9px] font-black uppercase tracking-[.15em] text-ink/40 sm:flex-row">
            <span>Nibir Setu — Digital Marketer</span>
            <span>Meta / Google / SEO / Analytics / Growth</span>
          </div>
        </div>
      </section>
    </main>
  );
}
