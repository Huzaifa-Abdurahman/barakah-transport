import type { Metadata } from "next";
import LegalPage from "@/components/seo/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Barakah Transport Service collects, uses and protects personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { heading: "What we collect", body: "TODO-CLIENT: list the personal data collected through the booking form, WhatsApp and email." },
        { heading: "How we use it", body: "TODO-CLIENT: describe how booking data is used to arrange and confirm trips." },
        { heading: "Sharing", body: "TODO-CLIENT: state whether data is shared with drivers, partners or service providers." },
        { heading: "Retention and security", body: "TODO-CLIENT: describe how long data is kept and how it is protected." },
        { heading: "Your rights", body: "TODO-CLIENT: describe how a passenger can request access to or deletion of their data." },
      ]}
    />
  );
}
