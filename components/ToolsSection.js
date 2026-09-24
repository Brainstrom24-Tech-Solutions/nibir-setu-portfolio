import { FiArrowUpRight, FiBarChart2, FiCpu, FiLayout, FiPenTool, FiSearch, FiYoutube } from "react-icons/fi";
import { SiGoogleads, SiGoogleanalytics, SiGoogletagmanager, SiGooglegemini, SiGoogle, SiWordpress, SiElementor, SiMeta, SiInstagram } from "react-icons/si";
import { tools } from "@/components/data";

const toolMap = {
  "google-keyword-planner":
    "https://ads.google.com/home/tools/keyword-planner/",
  "google-ai-studio": "https://aistudio.google.com/",
  gemini: "https://gemini.google.com/",
  astra: "https://wpastra.com/",
  "google-tag-manager": "https://tagmanager.google.com/",
  "power-bi": "https://powerbi.microsoft.com/",
  "instagram-ads": "https://www.instagram.com/",
  "google-ads": "https://ads.google.com/",
  canva: "https://www.canva.com/",
  google: "https://www.google.com/",
  wordpress: "https://wordpress.org/",
  "ads-manager": "https://www.facebook.com/business/tools/ads-manager",
  elementor: "https://elementor.com/",
  vidiq: "https://vidiq.com/",
  ahrefs: "https://ahrefs.com/",
  "google-analytics-4": "https://analytics.google.com/",
};

const names = Object.fromEntries(tools.map(([name, key]) => [key, name]));
const groups = [
  { title: "Paid media", note: "Plan, launch & optimize", items: [
    ["google-ads", SiGoogleads, "#4285f4"],
    ["ads-manager", SiMeta, "#0866ff"],
    ["instagram-ads", SiInstagram, "#c13584"],
    ["google-keyword-planner", FiSearch, "#188038"],
  ] },
  { title: "Analytics & SEO", note: "Track, measure & improve", items: [
    ["google-analytics-4", SiGoogleanalytics, "#e37400"],
    ["google-tag-manager", SiGoogletagmanager, "#4285f4"],
    ["power-bi", FiBarChart2, "#a87800"],
    ["ahrefs", FiSearch, "#f16824"],
  ] },
  { title: "Creative & AI", note: "Research, create & explore", items: [
    ["canva", FiPenTool, "#009eae"],
    ["google-ai-studio", FiCpu, "#6e56cf"],
    ["gemini", SiGooglegemini, "#7b61c4"],
    ["vidiq", FiYoutube, "#087fc4"],
  ] },
  { title: "Web & search", note: "Build, publish & discover", items: [
    ["wordpress", SiWordpress, "#21759b"],
    ["elementor", SiElementor, "#92003b"],
    ["astra", FiLayout, "#6743cf"],
    ["google", SiGoogle, "#4285f4"],
  ] },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="tools-section border-y border-ink/10 bg-white">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="tools-heading" data-reveal>
          <div>
            <div className="section-kicker"><span>03A</span><span>My toolkit</span></div>
            <h2 className="section-title mt-5">Tools &amp; platforms</h2>
          </div>
          <p>The platforms I use to bring strategy, creative and performance together.</p>
        </div>
        <div className="tool-groups">
          {groups.map((group, index) => (
            <div key={group.title} className="tool-group" data-reveal>
              <div className="tool-group-heading">
                <span className="tool-group-number">0{index + 1}</span>
                <div><h3>{group.title}</h3><p>{group.note}</p></div>
              </div>
              <div className="tool-list">
                {group.items.map(([key, Icon, color]) => (
                  <a key={key} href={toolMap[key]} target="_blank" rel="noreferrer" className="tool-link">
                    <span className="tool-icon" style={{ color }}><Icon aria-hidden="true" /></span>
                    <span>{names[key]}</span>
                    <FiArrowUpRight className="tool-arrow" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
