import CertificateCard from "./CertificateCard";

interface Certificate {
  title: string;
  platform: string;
  icon: string;
  year: string;
}

interface CertificatesSectionProps {
  Certificates: Certificate[];
}

export default function CertificatesSection({ Certificates }: CertificatesSectionProps) {
  return (
    <section id="certifications" className="pb-16 px-4 bg-slate-50 dark:bg-slate-900 font-sans">
      <div className="container mx-auto">
        <h2 className="mb-12  text-center text-2xl 
        md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600
         bg-clip-text text-transparent tracking-tight">Certifications</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Certificates.map((Certificate, index) => (
            <CertificateCard key={index} Certificate={Certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}