// =============================================================================
// HUBSPOT CONFIGURATION
// =============================================================================
// Edit these values to connect the contact form to your HubSpot account.
// No private/secret keys are needed — HubSpot public form submissions use only
// your Portal ID and Form ID, which are safe to commit.
//
// HOW TO GET THEM:
//   1. In HubSpot, open Marketing > Forms (or Marketing > Lead Capture > Forms).
//   2. Create or open a form, then click "Share" or "Embed".
//   3. The embed code contains:
//        portalId: "XXXXXXXX"      (the number in the URL / data-hubspot attribute)
//        formId:   "yyyy-yyyy-..." (the form GUID)
//   4. Paste both values below.
//
// Leave them empty ("") to disable HubSpot — the form will still save enquiries
// in the app database and work normally.
// =============================================================================

export const hubspotConfig = {
  // Your HubSpot Portal ID (a number, as a string). Found in the embed code.
  portalId: "",

  // Your HubSpot Form GUID. Found in the embed code.
  formId: "",

  // Optional: only set to "eu1" if your HubSpot account is in the EU region.
  // Leave "" for the default US region.
  region: "",
};

// Map our contact form fields to your HubSpot form's internal field names.
// Adjust the right-hand side to match the "name" of each field in your HubSpot form.
export const hubspotFieldMap = {
  full_name: "firstname",
  email: "email",
  phone: "phone",
  company: "company",
  service: "service_of_interest",
  budget: "budget",
  timeline: "timeline",
  message: "message",
};

export const isHubspotConfigured = () =>
  Boolean(hubspotConfig.portalId && hubspotConfig.formId);