import type { Metadata } from "next";
import {
  LegalLayout,
  LegalSection,
  BulletList,
  Lines,
  EmailText,
} from "@/components/Legal";
import { site, hasLinkedIn } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy | Augovia",
};

export default function PrivacyPage() {
  const c = site.company;
  const p = site.privacy;

  return (
    <LegalLayout title="Privacy Policy">
      <p>Last updated: {p.lastUpdated}</p>

      <LegalSection title="1. Data Controller">
        <p>The controller responsible for processing personal data on this website is:</p>
        <Lines lines={[c.name, c.street, c.postalCity, c.country]} />
        <p>
          Email: <EmailText email={c.email} />
          <br />
          Phone: {c.phone}
        </p>
      </LegalSection>

      <LegalSection title="2. General Information">
        <p>We take the protection of your personal data seriously.</p>
        <p>
          This Privacy Policy explains how we collect, process, and protect
          personal data when you visit our website, contact us, or interact
          with our services.
        </p>
        <p>
          We process personal data in accordance with the General Data
          Protection Regulation (GDPR) and applicable German data protection
          laws.
        </p>
      </LegalSection>

      <LegalSection title="3. Website Hosting and Server Logs">
        <p>
          Our website is hosted by Vercel Inc., a provider based in the United
          States. Content may be delivered from servers in different regions,
          including outside the European Economic Area.
        </p>
        <p>
          Our domain is managed with IONOS SE, Germany. When your browser looks
          up our domain, the request may be processed by name servers operated
          by IONOS.
        </p>
        <p>
          When you access our website, certain technical information may be
          automatically processed, including:
        </p>
        <BulletList
          items={[
            "IP address",
            "Date and time of access",
            "Browser type and operating system",
            "Pages accessed",
            "Referrer URL, where available",
          ]}
        />
        <p>
          This processing is necessary to ensure the security, availability,
          and proper functioning of our website.
        </p>
        <p>The legal basis is Article 6(1)(f) GDPR (legitimate interests).</p>
        <p>Server logs are retained for {p.serverLogRetention}.</p>
      </LegalSection>

      <LegalSection title="4. Contact and Business Inquiries">
        <p>
          If you contact us by email or through the contact form on this
          website, we process the information you provide, including your
          name, business email address, company name, the topic of your
          inquiry, and your message.
        </p>
        <p>
          When you use the contact form, your entries are transmitted to our
          server and forwarded to us as an email through the email delivery
          service Resend (Resend, Inc., United States). Form submissions are
          not stored in a database on the website.
        </p>
        <p>
          We use this information solely to respond to your inquiry and manage
          potential or existing business relationships. Our company mailbox is
          provided by {p.mailboxProvider}.
        </p>
        <p>
          The legal basis is Article 6(1)(f) GDPR for legitimate business
          communications. Article 6(1)(b) GDPR may apply where processing is
          necessary for a contract with the individual concerned or
          pre-contractual steps requested by that individual.
        </p>
        <p>
          Your information is retained for {p.inquiryRetention}, unless
          statutory retention obligations apply.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies and Similar Technologies">
        <p>
          Our website does not set cookies and does not use similar
          technologies to store or read information on your device for
          analytics, advertising, or personalisation. We therefore do not
          display a cookie banner.
        </p>
        <p>
          Technologies that are strictly necessary to provide a service
          expressly requested by the user may be used without consent under
          Section 25(2) TDDDG. If we introduce technologies that require
          consent, we will obtain it before activating them and update this
          Privacy Policy. Where personal data is then processed on the basis
          of consent, the legal basis is Article 6(1)(a) GDPR.
        </p>
      </LegalSection>

      <LegalSection title="6. Analytics and Third-Party Services">
        <p>
          We do not use web analytics, advertising or tracking services, social
          media plug-ins, or embedded third-party content on this website. The
          fonts used on the website are delivered from our own hosting and are
          not loaded from external font servers when you visit.
        </p>
        {hasLinkedIn && (
          <p>
            The website contains a link to our LinkedIn profile. No data is
            transferred to LinkedIn merely by visiting our website. If you
            click the link, you leave our website and the privacy policy of
            LinkedIn applies.
          </p>
        )}
      </LegalSection>

      <LegalSection title="7. Data Recipients">
        <p>
          Personal data may be processed by service providers that support our
          website and business operations, including hosting, IT
          infrastructure, and communication providers. These currently are:
        </p>
        <BulletList
          items={[
            "Vercel Inc. (website hosting)",
            "Resend, Inc. (delivery of contact form messages by email)",
            "IONOS SE (domain management)",
            `${p.mailboxProvider} (company mailbox)`,
          ]}
        />
        <p>
          Where required, we enter into data processing agreements pursuant to
          Article 28 GDPR.
        </p>
        <p>We may also disclose information where legally required.</p>
      </LegalSection>

      <LegalSection title="8. International Data Transfers">
        <p>
          Some of our service providers, in particular Vercel Inc. and Resend,
          Inc., are based in the United States. If personal data is
          transferred outside the European Economic Area (EEA), we ensure that
          the transfer complies with Chapter V GDPR.
        </p>
        <p>
          Transfers may rely on an adequacy decision by the European
          Commission, such as the EU-US Data Privacy Framework where the
          recipient is certified under it, or on appropriate safeguards,
          including Standard Contractual Clauses and any required
          supplementary measures.
        </p>
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <p>
          We retain personal data only for as long as necessary for the
          relevant processing purposes or as required by applicable law.
        </p>
        <p>
          Specific retention periods or the criteria used to determine them
          are provided in the relevant sections of this Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection title="10. Your Rights">
        <p>Under the GDPR, you may have the following rights:</p>
        <BulletList
          items={[
            "Right of access (Article 15 GDPR)",
            "Right to rectification (Article 16 GDPR)",
            "Right to erasure (Article 17 GDPR)",
            "Right to restriction of processing (Article 18 GDPR)",
            "Right to data portability (Article 20 GDPR)",
            "Right to object (Article 21 GDPR)",
            "Right to withdraw consent (Article 7(3) GDPR)",
          ]}
        />
        <p>
          You may also object at any time to the processing of your personal
          data for direct marketing purposes.
        </p>
        <p>
          To exercise your rights, contact us at <EmailText email={c.email} />.
        </p>
        <p>
          You also have the right to lodge a complaint with a competent data
          protection supervisory authority.
        </p>
        <p>Competent supervisory authority: {p.supervisoryAuthority}</p>
      </LegalSection>

      <LegalSection title="11. Data Security">
        <p>
          We implement appropriate technical and organisational measures to
          protect personal data against unauthorised access, loss, alteration,
          or disclosure.
        </p>
        <p>Our website uses HTTPS encryption to protect data during transmission.</p>
      </LegalSection>

      <LegalSection title="12. Automated Decision-Making">
        <p>
          We do not use personal data collected through this website for
          automated decision-making, including profiling, that produces legal
          or similarly significant effects within the meaning of Article 22
          GDPR.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy to reflect changes in our website,
          data processing activities, or applicable legal requirements.
        </p>
        <p>The latest version will always be available on this page.</p>
      </LegalSection>

      <LegalSection title="14. Contact">
        <p>For privacy-related inquiries, please contact:</p>
        <p>
          {c.name}
          <br />
          <EmailText email={c.email} />
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
