import { hubspotConfig, hubspotFieldMap, isHubspotConfigured } from "@/data/hubspot";

/**
 * Send a contact enquiry to HubSpot using the public Forms API (v3).
 *
 * This runs in the browser and uses only public values (portalId + formId),
 * so no private credentials are ever stored in the project.
 *
 * Returns:
 *   - true  if the submission was accepted by HubSpot
 *   - false if HubSpot rejected it
 *   - null  if HubSpot is not configured (skipped silently)
 */
export async function submitToHubSpot(data) {
  if (!isHubspotConfigured()) return null;

  const { portalId, formId, region } = hubspotConfig;
  const host = region ? `${region}.api.hsforms.com` : "api.hsforms.com";
  const url = `https://${host}/submissions/v3/integration/submit/${portalId}/${formId}`;

  const fields = Object.entries(hubspotFieldMap)
    .filter(([localKey]) => Boolean(data[localKey]))
    .map(([localKey, hubspotName]) => ({
      name: hubspotName,
      value: data[localKey],
    }));

  const payload = {
    fields,
    context: {
      pageUri: typeof window !== "undefined" ? window.location.href : "",
      pageName: typeof document !== "undefined" ? document.title : "Contact form",
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (err) {
    // Network/CORS errors are non-fatal — the enquiry is already saved locally.
    return false;
  }
}