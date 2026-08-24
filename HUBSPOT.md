# HubSpot Integration Guide

The contact form sends every enquiry to the app database (always) **and** to HubSpot (when configured). HubSpot's public Forms API needs only two public values — a **Portal ID** and a **Form ID** — so no private credentials or API secrets are ever stored in this project.

---

## Step 1 — Create a form in HubSpot

1. Log in to HubSpot.
2. Go to **Marketing → Lead Capture → Forms** (or **Marketing → Forms**).
3. Click **Create form → Standalone form** (or use an existing one).
4. Add the fields you want to capture. The default fields are:
   - First name (`firstname`)
   - Email (`email`)
   - Phone (`phone`)
   - Company (`company`)
   - A single-line text field for **Service of interest** (internal name e.g. `service_of_interest`)
   - Single-line fields for **Budget** (`budget`) and **Timeline** (`timeline`)
   - A multi-line text field for **Message** (`message`)

> The internal field name is shown in HubSpot under each field's settings ("Field name" / "internal name"). You'll match these in Step 3.

---

## Step 2 — Get your Portal ID and Form ID

1. Open your form and click **Share** (or **Embed**).
2. The embed code looks like:
   ```html
   <script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/embed/v2.js"></script>
   <script>
     hbspt.forms.create({
       region: "na1",
       portalId: "12345678",
       formId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
     });
   </script>
   ```
3. Copy the **`portalId`** and **`formId`** values.

---

## Step 3 — Add them to the project

Open **`src/data/hubspot.js`** and fill in:

```js
export const hubspotConfig = {
  portalId: "12345678",          // your Portal ID
  formId:   "a1b2c3d4-e5f6-7890-abcd-ef1234567890",  // your Form GUID
  region:   "",                  // "eu1" for EU accounts, "" for default
};
```

Then check the **`hubspotFieldMap`** in the same file maps our form fields to your HubSpot field internal names. Adjust the right-hand side to match your HubSpot field names:

```js
export const hubspotFieldMap = {
  full_name: "firstname",
  email:     "email",
  phone:     "phone",
  company:   "company",
  service:   "service_of_interest",
  budget:    "budget",
  timeline:  "timeline",
  message:   "message",
};
```

Save the file. That's it — the contact form will now push every submission to HubSpot. No rebuild of the form UI is needed.

---

## How it works

- `src/lib/hubspot.js` posts the form data to HubSpot's public Forms API v3
  (`https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formId}`).
- The call is **non-blocking**: the enquiry is saved locally first, then sent to HubSpot in the background. If HubSpot is unreachable, the user still sees the thank-you page and the enquiry is stored.
- If `portalId` or `formId` are empty, HubSpot is skipped silently and the form works normally (database only).

## Disabling HubSpot

Empty out `portalId` and `formId` in `src/data/hubspot.js` and the HubSpot call is skipped automatically.

## Notes

- HubSpot's public form endpoint is designed for browser submission and does not require secret keys.
- If your HubSpot account is in the EU, set `region: "eu1"`.
- For GDPR/consent fields, add a checkbox to the form and include it in `hubspotFieldMap`.