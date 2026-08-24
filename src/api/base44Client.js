/**
 * Base44 SDK client for The Solutionist Design.
 * Initialises the @base44/sdk and re-exports the singleton so all
 * modules can import { base44 } from '@/api/base44Client'.
 */
import { createClient } from '@base44/sdk';

export const base44 = createClient({
  appId: import.meta.env.VITE_BASE44_APP_ID,
});

export default base44;
