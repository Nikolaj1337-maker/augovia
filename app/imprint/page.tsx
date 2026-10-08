import type { Metadata } from "next";
import { LegalLayout, LegalSection, Lines, EmailText } from "@/components/Legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Imprint | Augovia",
};

export default function ImprintPage() {
  const c = site.company;

  return (
    <LegalLayout title="Legal Notice">
      <p>Information pursuant to Section 5 of the German Digital Services Act (DDG).</p>

      <LegalSection title="Company Information">
        <Lines lines={[c.name, c.street, c.postalCity, c.country]} />
        <p>Represented by: {c.managingDirector}</p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Email: <EmailText email={c.email} />
          <br />
          Phone: {c.phone}
        </p>
      </LegalSection>

      <LegalSection title="Commercial Register">
        <p>
          Registered with the Commercial Register of {c.registerCourt}
          <br />
          Registration Number: {c.registrationNumber}
        </p>
      </LegalSection>

      {c.vatId && (
        <LegalSection title="VAT Identification Number">
          <p>
            VAT ID pursuant to Section 27a of the German Value Added Tax Act
            (UStG): {c.vatId}
          </p>
        </LegalSection>
      )}

      {c.businessId && (
        <LegalSection title="Business Identification Number">
          <p>{c.businessId}</p>
        </LegalSection>
      )}

      {c.regulatory && (
        <LegalSection title="Regulatory Information">
          <p>{c.regulatory}</p>
        </LegalSection>
      )}

      {c.editorialResponsible && (
        <LegalSection title="Responsibility for Editorial Content">
          <p>{c.editorialResponsible}</p>
        </LegalSection>
      )}
    </LegalLayout>
  );
}
