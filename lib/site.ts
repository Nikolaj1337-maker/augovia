/**
 * ONE PLACE TO EDIT YOUR DETAILS
 * -------------------------------------------------------------
 * Replace every [BRACKETED PLACEHOLDER] below with your real
 * information. The values are used automatically on:
 *   - the main page (founder name, LinkedIn link)
 *   - /imprint  (Legal Notice)
 *   - /privacy  (Privacy Policy)
 *
 * Optional fields (VAT ID, business ID, regulatory, editorial):
 * if they do not apply to you, set the value to "" (empty quotes)
 * and the whole block disappears from the Imprint page.
 *
 * LinkedIn: paste your full profile URL, e.g.
 * "https://www.linkedin.com/in/your-name". Until it starts with
 * "http", the LinkedIn links are hidden on the website.
 */
export const site = {
  // ---- Main page -------------------------------------------------
  founderFirstName: "Nikolaj",
  founderFullName: "Nikolaj [SURNAME]",
  linkedinUrl: "[LINKEDIN URL]",

  // ---- Company details (Imprint and Privacy) ---------------------
  company: {
    name: "[COMPANY NAME] GmbH",
    street: "[STREET AND HOUSE NUMBER]",
    postalCity: "[POSTAL CODE, CITY]",
    country: "Germany",
    managingDirector: "[MANAGING DIRECTOR'S FULL NAME]",
    email: "[EMAIL ADDRESS]",
    phone: "[PHONE NUMBER]",
    registerCourt: "[REGISTER COURT / AMTSGERICHT]",
    registrationNumber: "HRB [NUMBER]",
    // Optional: set to "" if not applicable
    vatId: "[VAT ID, IF APPLICABLE]",
    businessId: "[GERMAN BUSINESS IDENTIFICATION NUMBER, IF ASSIGNED]",
    regulatory:
      "[DETAILS OF THE COMPETENT SUPERVISORY AUTHORITY, IF YOUR BUSINESS REQUIRES REGULATORY AUTHORISATION]",
    editorialResponsible:
      "[NAME AND ADDRESS OF THE PERSON RESPONSIBLE, ONLY IF REQUIRED UNDER SECTION 18(2) OF THE GERMAN INTERSTATE MEDIA TREATY]",
  },

  // ---- Privacy Policy details -------------------------------------
  privacy: {
    lastUpdated: "[DATE]",
    serverLogRetention: "[RETENTION PERIOD]",
    inquiryRetention: "[RETENTION PERIOD OR CRITERIA]",
    mailboxProvider: "[EMAIL PROVIDER OF YOUR COMPANY MAILBOX]",
    supervisoryAuthority: "[AUTHORITY NAME AND WEBSITE]",
  },
};

export const hasLinkedIn = site.linkedinUrl.startsWith("http");
