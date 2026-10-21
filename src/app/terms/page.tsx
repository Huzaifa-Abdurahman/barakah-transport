import type { Metadata } from "next";
import LegalPage from "@/components/seo/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions for booking private transport with Barakah Transport Service.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      sections={[
        { heading: "Bookings", body: "TODO-CLIENT: describe how bookings are confirmed, including the WhatsApp and online booking flows." },
        { heading: "Fares and payment", body: "TODO-CLIENT: describe how fares are quoted, when they are paid, and accepted payment methods." },
        { heading: "Cancellations and changes", body: "TODO-CLIENT: describe the cancellation and change policy and any fees." },
        { heading: "Passenger responsibilities", body: "TODO-CLIENT: describe luggage limits, conduct and any other passenger obligations." },
        { heading: "Liability", body: "TODO-CLIENT: describe the limits of liability, reviewed by a qualified professional." },
      ]}
    />
  );
}
