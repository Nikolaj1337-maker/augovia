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

The contact form posts to `app/api/contact/route.ts`. To have submissions
emailed to you, sign up for [Resend](https://resend.com), get an API key,
and set these environment variables (locally in `.env.local`, and in your
Vercel project settings for production):

```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=hello@augovia.com
```

Until `RESEND_API_KEY` is set, submissions are logged to the server console
instead of emailed, and the form still confirms receipt to the visitor;
nothing is lost, but you should configure this before launch.

The `from` address in `app/api/contact/route.ts` uses Resend's default
`onboarding@resend.dev` sender, which works without any additional setup.
Once you verify your own domain in Resend, update the `from` address to
something like `Augovia <hello@augovia.com>`.

## Before launch: content to finalize

All personal and company details live in one file: `lib/site.ts`.
Replace every [BRACKETED PLACEHOLDER] there (founder surname, LinkedIn URL,
company name, address, managing director, email, phone, register details,
VAT ID, retention periods, supervisory authority). The Imprint and Privacy
pages and the founder/footer sections update automatically.

The legal texts should be reviewed by qualified counsel before publication.

## Deployment

The project is ready for Vercel: connect the repository, set the two
environment variables above in the Vercel project settings, and deploy.
