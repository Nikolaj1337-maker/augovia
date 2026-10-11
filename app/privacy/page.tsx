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

  const recipients = [
    "Vercel Inc., USA (website hosting)",
    "Resend, Inc., USA (delivery of contact form messages)",
    "IONOS SE, Germany (domain management)",
    ...(p.mailboxProvider ? [`${p.mailboxProvider} (company mailbox)`] : []),
  ];

  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This Privacy Policy applies to visitors of our website{" "}
        {site.websiteUrl}.
      </p>

      <LegalSection title="1. Controller">
        <Lines lines={[c.name, c.street, c.postalCity, c.country]} />
        <p>Represented by the Managing Director: {c.managingDirector}</p>
        <p>
          Email: <EmailText email={c.email} />
        </p>
      </LegalSection>

      <LegalSection title="2. Visiting Our Website">
        <p>
          Our website is hosted by Vercel Inc. (USA). When you visit it, Vercel
          processes technically necessary connection data: your IP address,
          the date and time of access, the page requested, and your browser
          and device type. This processing serves to deliver the website and
          to operate it securely.
        </p>
        <p>
          Our domain is managed by IONOS SE (Germany). When your browser looks
          up our domain, the request may be processed by name servers operated
          by IONOS.
        </p>
        <p>
          The legal basis is Article 6(1)(f) GDPR, our legitimate interest in
          providing a secure and functioning website. For the transfer of data
          to the USA, we rely on the EU-US Data Privacy Framework and, in
          addition, on Standard Contractual Clauses.
        </p>
      </LegalSection>

      <LegalSection title="3. Contact Form and Email">
        <p>
          If you write to us by email or through the contact form on this
          website, we process the information you provide (for example your
          name, company, email address, the topic of your inquiry and your
          message) in order to respond to your inquiry.
        </p>
        <p>
          Messages sent through the contact form are forwarded to our mailbox
          by the email delivery service Resend, Inc. (USA). They are not stored
          in a database on the website.
          {p.mailboxProvider && ` Our company mailbox is provided by ${p.mailboxProvider}.`}
        </p>
        <p>
          The legal basis is Article 6(1)(b) GDPR where your inquiry concerns
          a potential collaboration, and Article 6(1)(f) GDPR otherwise. For
          transfers to the USA, we rely on the EU-US Data Privacy Framework
          where the provider is certified under it, and otherwise on Standard
          Contractual Clauses.
        </p>
        <p>
          We delete messages as soon as they are no longer needed and no
          statutory retention obligations apply.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies, Analytics and Fonts">
        <p>The public pages of our website do not set cookies.</p>
        <p>
          We do not use web analytics, advertising or tracking services, social
          media plug-ins, or embedded third-party content.
        </p>
        <p>
          The fonts are hosted on our own server. No connection to servers of
          Google or other font providers is established when you visit our
          website.
        </p>
        {hasLinkedIn && (
          <p>
            The website contains a link to a LinkedIn profile. No data is
            transferred to LinkedIn merely by visiting our website. If you
            click the link, you leave our website and the privacy policy of
            LinkedIn applies.
          </p>
        )}
      </LegalSection>

      <LegalSection title="5. Recipients">
        <p>
          We use the following service providers, which process personal data
          on our behalf:
        </p>
        <BulletList items={recipients} />
        <p>
          Where required, we enter into data processing agreements pursuant to
          Article 28 GDPR. We may also disclose information where we are
          legally required to do so.
        </p>
      </LegalSection>

      <LegalSection title="6. Your Rights">
        <p>
          You have the right of access (Article 15 GDPR), rectification
          (Article 16 GDPR), erasure (Article 17 GDPR), restriction of
          processing (Article 18 GDPR), data portability (Article 20 GDPR),
          and the right to object to processing based on legitimate interests
          (Article 21 GDPR). To exercise these rights, write to us at{" "}
          <EmailText email={c.email} />.
        </p>
        <p>
          You also have the right to lodge a complaint with a data protection
          supervisory authority (Article 77 GDPR). The authority responsible
          for us is:
        </p>
        <p>{p.supervisoryAuthority}</p>
      </LegalSection>

      <LegalSection title="7. Data Security">
        <p>
          We implement appropriate technical and organisational measures to
          protect personal data against unauthorised access, loss, alteration
          or disclosure. Our website uses HTTPS encryption to protect data
          during transmission.
        </p>
      </LegalSection>

      <LegalSection title="8. Automated Decision-Making">
        <p>
          We do not use personal data collected through this website for
          automated decision-making, including profiling, within the meaning
          of Article 22 GDPR.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy to reflect changes to our website,
          our data processing or legal requirements. The latest version is
          always available on this page.
        </p>
      </LegalSection>

      <p className="text-[14px] text-ink/50">Last updated: {p.lastUpdated}</p>
    </LegalLayout>
  );
}
