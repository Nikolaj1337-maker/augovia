# Augovia website

A one-page Next.js site for Augovia, a strategic advisory firm for Pharma and
Biotech leaders.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Resend (contact form email delivery)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form / email setup

The contact form posts to `app/api/contact/route.ts` and sends messages via
[Resend](https://resend.com). Settings (in Vercel: Project Settings >
Environment Variables; redeploy after changing them):

```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=contact@augovia.com      # optional, defaults to lib/site.ts
CONTACT_FROM=Augovia Website <website@augovia.com>   # optional, see below
```

Without `RESEND_API_KEY`, submissions are only logged on the server.

Resend's default sender (`onboarding@resend.dev`) only delivers to the email
address of your own Resend account. To deliver to contact@augovia.com
reliably, verify augovia.com under Domains in Resend (add the DNS records it
shows at IONOS), then set `CONTACT_FROM` to an address on that domain.

## Editing your details

All personal, company and legal details live in one file: `lib/site.ts`.
The Imprint and Privacy pages, the founder section and the footer update
automatically. The legal texts should be reviewed by qualified counsel.

## Deployment

The project is ready for Vercel: connect the repository, set the two
environment variables above in the Vercel project settings, and deploy.
