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

      <LegalSection title="Company">
        <Lines lines={[c.name, c.street, c.postalCity, c.country]} />
        <p>Registered office: {c.registeredOffice}</p>
      </LegalSection>

      <LegalSection title="Represented by">
        <p>{c.managingDirector}, Managing Director</p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Email: <EmailText email={c.email} />
          {c.phone && (
            <>
              <br />
              Phone: {c.phone}
            </>
          )}
        </p>
      </LegalSection>

      <LegalSection title="Commercial Register">
        <p>
          {c.registerCourt && (
            <>
              Register court: {c.registerCourt}
              <br />
            </>
          )}
          Registration number: {c.registrationNumber}
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
        <LegalSection title="Responsible for Content">
          <p>
            Responsible for content pursuant to Section 18(2) of the German
            Interstate Media Treaty (MStV):
          </p>
          <p>{c.editorialResponsible}</p>
        </LegalSection>
      )}

      <LegalSection title="Consumer Dispute Resolution">
        <p>
          We are neither willing nor obliged to participate in dispute
          resolution proceedings before a consumer arbitration board within
          the meaning of the German Consumer Dispute Resolution Act (VSBG).
        </p>
      </LegalSection>

      <LegalSection title="Copyright">
        <p>
          The content and works created by the site operator on these pages
          are subject to German copyright law. Reproduction, editing,
          distribution and any kind of use beyond the limits of copyright law
          require the written consent of the respective author or creator.
          Downloads and copies of this site are permitted only for private,
          non-commercial use.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
