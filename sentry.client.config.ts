import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fb23641bf49c97b59a9ff6966c2e6e78@o4507227909783552.ingest.us.sentry.io/4507227912470528",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});