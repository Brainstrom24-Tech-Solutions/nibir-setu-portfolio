import { clients } from "@/components/data";

const labels = [
  "Anondo Universal Services Limited", "Bikers Corner", "Children’s Television Foundation of Bangladesh (CTFB)",
  "Frame Fusion", "ADUST", "Chaarcha", "Vestige", "Pranto", "Stella", "Rupayan", "ICT Bangla", "Doel OTT",
  "Mithai", "Cattle Camp", "Marks", "Sonargaon University", "Ikigai", "Urbana", "HR Global", "Enigma TV",
  "Bridge", "Anondo", "Ala Coffee", "ZPTP",
];

export default function ClientLogos() {
  return (
    <ul className="client-grid mt-12" aria-label="Clients">
      {clients.map((file, index) => (
        <li key={file} className="client-card">
          <div className="client-logo-stage">
            <img
              src={`/assets/clients/${file}`}
              alt={`${labels[index]} logo`}
              loading="lazy"
              decoding="async"
              width="180"
              height="120"
              className={file === "frame-fusion.png" ? "client-image client-image-padded" : "client-image"}
            />
          </div>
          <span className="client-name">{labels[index]}</span>
        </li>
      ))}
    </ul>
  );
}
