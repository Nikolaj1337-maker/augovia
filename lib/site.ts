/**
 * ONE PLACE TO EDIT YOUR DETAILS
 * -------------------------------------------------------------
 * The values below are used automatically on:
 *   - the main page (founder name, LinkedIn link)
 *   - /imprint  (Legal Notice)
 *   - /privacy  (Privacy Policy)
 *   - the contact form (where messages are sent, unless the
 *     CONTACT_EMAIL setting in Vercel says otherwise)
 *
 * Optional fields: set the value to "" (empty quotes) and that
 * line or block disappears from the page.
 */
export const site = {
  // ---- Main page -------------------------------------------------
  founderFirstName: "Nikolaj",
  founderFullName: "Nikolaj Gründer",
  linkedinUrl: "https://www.linkedin.com/in/nikolajgruender/",
  websiteUrl: "www.augovia.com",

  // ---- Company details (Imprint and Privacy) ---------------------
  company: {
    name: "Augovia GmbH",
    street: "Maria-Sibylla-Merian-Str. 48",
    postalCity: "55122 Mainz",
    country: "Germany",
    registeredOffice: "Mainz",
    managingDirector: "Nikolaj Gründer",
    email: "contact@augovia.com",
    registrationNumber: "HRB 51808",
    vatId: "DE348469162",

    // Optional: set to "" if not applicable
    phone: "",
    // The register court, e.g. "Amtsgericht Mainz (Mainz Local Court)".
    // If "", only the registration number is shown.
    registerCourt: "Amtsgericht Mainz (Mainz Local Court)",
    businessId: "",
    regulatory: "",
    editorialResponsible:
      "Nikolaj Gründer, Augovia GmbH, Maria-Sibylla-Merian-Str. 48, 55122 Mainz",
  },

  // ---- Privacy Policy details -------------------------------------
  privacy: {
    lastUpdated: "October 2026",
    // Company mailbox. Set service to "" to leave it off the Privacy page.
    mailbox: {
      service: "Microsoft 365",
      company: "Microsoft Ireland Operations Limited",
      country: "Ireland",
      // Who you bought it from, if different (set to "" otherwise)
      purchasedVia: "IONOS SE",
    },
    supervisoryAuthority:
      "The State Commissioner for Data Protection and Freedom of Information of Rhineland-Palatinate (Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz), Hintere Bleiche 34, 55116 Mainz",
  },
};

export const hasLinkedIn = site.linkedinUrl.startsWith("http");
