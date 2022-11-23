importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const {registerRoute, setDefaultHandler} = workbox.routing;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {ExpirationPlugin} = workbox.expiration;
const {precacheAndRoute} = workbox.precaching;
const {offlineFallback} = workbox.recipes;

const {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst,
    NetworkOnly,
} = workbox.strategies;

setDefaultHandler(new NetworkOnly());
offlineFallback();


// Precache the indicator/goal pages.
precacheAndRoute([{url: '/vnso-nsdp-platform/SOC3-3-3/', revision: null},{url: '/vnso-nsdp-platform/ECO4-3-2/', revision: null},{url: '/vnso-nsdp-platform/SOC6-3-3/', revision: null},{url: '/vnso-nsdp-platform/ENV4-7-1/', revision: null},{url: '/vnso-nsdp-platform/SOC3-4-2/', revision: null},{url: '/vnso-nsdp-platform/SOC3-1-1/', revision: null},{url: '/vnso-nsdp-platform/ENV5-6-1/', revision: null},{url: '/vnso-nsdp-platform/ECO1-1-1/', revision: null},{url: '/vnso-nsdp-platform/ENV1-2-1/', revision: null},{url: '/vnso-nsdp-platform/ENV5-1-2/', revision: null},{url: '/vnso-nsdp-platform/ECO1-9-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-8-3/', revision: null},{url: '/vnso-nsdp-platform/SOC4-1-1/', revision: null},{url: '/vnso-nsdp-platform/ENV3-5-3/', revision: null},{url: '/vnso-nsdp-platform/ENV4-3-1/', revision: null},{url: '/vnso-nsdp-platform/ENV1-5-1/', revision: null},{url: '/vnso-nsdp-platform/ECO1-5-3/', revision: null},{url: '/vnso-nsdp-platform/ENV4-4-2/', revision: null},{url: '/vnso-nsdp-platform/SOC1-7-2/', revision: null},{url: '/vnso-nsdp-platform/SOC4-1-2/', revision: null},{url: '/vnso-nsdp-platform/ECO4-7-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-3-3/', revision: null},{url: '/vnso-nsdp-platform/SOC4-6-1/', revision: null},{url: '/vnso-nsdp-platform/SOC1-4-1/', revision: null},{url: '/vnso-nsdp-platform/ECO3-6-2/', revision: null},{url: '/vnso-nsdp-platform/SOC3-3-1/', revision: null},{url: '/vnso-nsdp-platform/SOC1-1-2/', revision: null},{url: '/vnso-nsdp-platform/SOC6-1-2/', revision: null},{url: '/vnso-nsdp-platform/SOC1-1-1/', revision: null},{url: '/vnso-nsdp-platform/ECO2-2-1/', revision: null},{url: '/vnso-nsdp-platform/ECO3-4-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-5-2/', revision: null},{url: '/vnso-nsdp-platform/SOC4-3-1/', revision: null},{url: '/vnso-nsdp-platform/SOC4-7-1/', revision: null},{url: '/vnso-nsdp-platform/ENV2-3-1/', revision: null},{url: '/vnso-nsdp-platform/SOC3-2-3/', revision: null},{url: '/vnso-nsdp-platform/ECO4-6-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-1-3/', revision: null},{url: '/vnso-nsdp-platform/ECO4-3-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-7-1/', revision: null},{url: '/vnso-nsdp-platform/ENV5-3-1/', revision: null},{url: '/vnso-nsdp-platform/SOC1-2-1/', revision: null},{url: '/vnso-nsdp-platform/ENV3-2-1/', revision: null},{url: '/vnso-nsdp-platform/SOC4-5-1/', revision: null},{url: '/vnso-nsdp-platform/operations/', revision: null},{url: '/vnso-nsdp-platform/ECO1-6-1/', revision: null},{url: '/vnso-nsdp-platform/ENV4-2-1/', revision: null},{url: '/vnso-nsdp-platform/SOC1-5-1/', revision: null},{url: '/vnso-nsdp-platform/ENV4-1-2/', revision: null},{url: '/vnso-nsdp-platform/ENV4-5-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-1-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-1-2/', revision: null},{url: '/vnso-nsdp-platform/ECO4-1-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-3-2/', revision: null},{url: '/vnso-nsdp-platform/ENV1-3-2/', revision: null},{url: '/vnso-nsdp-platform/ECO2-1-2/', revision: null},{url: '/vnso-nsdp-platform/SOC6-9-2/', revision: null},{url: '/vnso-nsdp-platform/SOC5-4-3/', revision: null},{url: '/vnso-nsdp-platform/ECO2-7-0/', revision: null},{url: '/vnso-nsdp-platform/ECO3-3-3/', revision: null},{url: '/vnso-nsdp-platform/ENV3-2-2/', revision: null},{url: '/vnso-nsdp-platform/demographics/', revision: null},{url: '/vnso-nsdp-platform/ENV2-6-1/', revision: null},{url: '/vnso-nsdp-platform/ENV2-2-2/', revision: null},{url: '/vnso-nsdp-platform/SOC3-1-2/', revision: null},{url: '/vnso-nsdp-platform/ECO1-4-1/', revision: null},{url: '/vnso-nsdp-platform/SOC3-4-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-5-1/', revision: null},{url: '/vnso-nsdp-platform/ENV3-2-3/', revision: null},{url: '/vnso-nsdp-platform/ECO1-7-1/', revision: null},{url: '/vnso-nsdp-platform/ECO2-9-2/', revision: null},{url: '/vnso-nsdp-platform/SOC1-2-3/', revision: null},{url: '/vnso-nsdp-platform/SOC5-4-1/', revision: null},{url: '/vnso-nsdp-platform/ECO1-3-1/', revision: null},{url: '/vnso-nsdp-platform/ENV2-2-1/', revision: null},{url: '/vnso-nsdp-platform/ENV5-4-1/', revision: null},{url: '/vnso-nsdp-platform/SOC1-7-1/', revision: null},{url: '/vnso-nsdp-platform/ECO2-9-1/', revision: null},{url: '/vnso-nsdp-platform/ENV4-4-1/', revision: null},{url: '/vnso-nsdp-platform/ENV5-2-1/', revision: null},{url: '/vnso-nsdp-platform/ENV2-4-2/', revision: null},{url: '/vnso-nsdp-platform/ECO1-6-2/', revision: null},{url: '/vnso-nsdp-platform/ENV2-5-1/', revision: null},{url: '/vnso-nsdp-platform/SOC4-2-3/', revision: null},{url: '/vnso-nsdp-platform/SOC4-3-3/', revision: null},{url: '/vnso-nsdp-platform/ECO1-4-2/', revision: null},{url: '/vnso-nsdp-platform/ECO4-9-1/', revision: null},{url: '/vnso-nsdp-platform/ECO2-2-2/', revision: null},{url: '/vnso-nsdp-platform/SOC5-5-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-7-2/', revision: null},{url: '/vnso-nsdp-platform/ENV4-1-1/', revision: null},{url: '/vnso-nsdp-platform/SOC4-3-2/', revision: null},{url: '/vnso-nsdp-platform/SOC4-2-1/', revision: null},{url: '/vnso-nsdp-platform/ECO4-8-1/', revision: null},{url: '/vnso-nsdp-platform/ENV1-4-1/', revision: null},{url: '/vnso-nsdp-platform/ECO2-3-2/', revision: null},{url: '/vnso-nsdp-platform/ECO3-2-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-4-1/', revision: null},{url: '/vnso-nsdp-platform/SOC4-4-2/', revision: null},{url: '/vnso-nsdp-platform/ENV1-3-3/', revision: null},{url: '/vnso-nsdp-platform/ENV2-4-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-6-1/', revision: null},{url: '/vnso-nsdp-platform/SOC3-2-1/', revision: null},{url: '/vnso-nsdp-platform/ENV4-6-2/', revision: null},{url: '/vnso-nsdp-platform/ECO3-3-1/', revision: null},{url: '/vnso-nsdp-platform/ENV2-5-2/', revision: null},{url: '/vnso-nsdp-platform/ECO4-4-1/', revision: null},{url: '/vnso-nsdp-platform/SOC1-2-2/', revision: null},{url: '/vnso-nsdp-platform/SOC3-1-3/', revision: null},{url: '/vnso-nsdp-platform/SOC3-3-2/', revision: null},{url: '/vnso-nsdp-platform/operations-budget/', revision: null},{url: '/vnso-nsdp-platform/ENV5-5-1/', revision: null},{url: '/vnso-nsdp-platform/ENV5-2-2/', revision: null},{url: '/vnso-nsdp-platform/ECO1-2-1/', revision: null},{url: '/vnso-nsdp-platform/SOC4-2-2/', revision: null},{url: '/vnso-nsdp-platform/ENV2-3-3/', revision: null},{url: '/vnso-nsdp-platform/SOC2-1-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-4-2/', revision: null},{url: '/vnso-nsdp-platform/SOC1-3-1/', revision: null},{url: '/vnso-nsdp-platform/ENV3-5-2/', revision: null},{url: '/vnso-nsdp-platform/ENV3-4-1/', revision: null},{url: '/vnso-nsdp-platform/census/', revision: null},{url: '/vnso-nsdp-platform/ENV3-5-1/', revision: null},{url: '/vnso-nsdp-platform/ECO1-5-2/', revision: null},{url: '/vnso-nsdp-platform/SOC5-5-2/', revision: null},{url: '/vnso-nsdp-platform/SOC2-2-1/', revision: null},{url: '/vnso-nsdp-platform/ENV1-5-2/', revision: null},{url: '/vnso-nsdp-platform/ENV1-1-2/', revision: null},{url: '/vnso-nsdp-platform/SOC6-1-1/', revision: null},{url: '/vnso-nsdp-platform/ECO1-8-2/', revision: null},{url: '/vnso-nsdp-platform/ENV3-1-3/', revision: null},{url: '/vnso-nsdp-platform/ENV1-5-3/', revision: null},{url: '/vnso-nsdp-platform/ECO2-3-1/', revision: null},{url: '/vnso-nsdp-platform/SOC6-2-1/', revision: null},{url: '/vnso-nsdp-platform/ENV2-6-2/', revision: null},{url: '/vnso-nsdp-platform/ENV5-3-2/', revision: null},{url: '/vnso-nsdp-platform/ECO1-8-1/', revision: null},{url: '/vnso-nsdp-platform/ECO2-4-1/', revision: null},{url: '/vnso-nsdp-platform/gdp-growth-rate/', revision: null},{url: '/vnso-nsdp-platform/gdp-constant-price/', revision: null},{url: '/vnso-nsdp-platform/ECO2-5-1/', revision: null},{url: '/vnso-nsdp-platform/SOC4-4-1/', revision: null},{url: '/vnso-nsdp-platform/school-attendance/', revision: null},{url: '/vnso-nsdp-platform/ENV4-5-2/', revision: null},{url: '/vnso-nsdp-platform/ECO1-8-3/', revision: null},{url: '/vnso-nsdp-platform/ECO4-7-2/', revision: null},{url: '/vnso-nsdp-platform/ENV3-4-2/', revision: null},{url: '/vnso-nsdp-platform/SOC6-3-1/', revision: null},{url: '/vnso-nsdp-platform/ENV5-1-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-5-3/', revision: null},{url: '/vnso-nsdp-platform/ENV1-3-1/', revision: null},{url: '/vnso-nsdp-platform/ECO4-6-2/', revision: null},{url: '/vnso-nsdp-platform/ECO1-5-1/', revision: null},{url: '/vnso-nsdp-platform/SOC4-7-2/', revision: null},{url: '/vnso-nsdp-platform/ENV3-3-3/', revision: null},{url: '/vnso-nsdp-platform/ENV2-1-1/', revision: null},{url: '/vnso-nsdp-platform/ECO1-1-2/', revision: null},{url: '/vnso-nsdp-platform/government-financial-statistics/', revision: null},{url: '/vnso-nsdp-platform/SOC4-1-3/', revision: null},{url: '/vnso-nsdp-platform/ENV3-1-1/', revision: null},{url: '/vnso-nsdp-platform/ECO2-1-1/', revision: null},{url: '/vnso-nsdp-platform/ENV1-1-3/', revision: null},{url: '/vnso-nsdp-platform/SOC2-4-1/', revision: null},{url: '/vnso-nsdp-platform/ENV1-4-2/', revision: null},{url: '/vnso-nsdp-platform/ENV3-3-1/', revision: null},{url: '/vnso-nsdp-platform/ENV4-2-2/', revision: null},{url: '/vnso-nsdp-platform/ENV4-6-1/', revision: null},{url: '/vnso-nsdp-platform/ECO3-3-2/', revision: null},{url: '/vnso-nsdp-platform/ECO3-4-2/', revision: null},{url: '/vnso-nsdp-platform/ENV3-1-2/', revision: null},{url: '/vnso-nsdp-platform/ECO3-1-1/', revision: null},{url: '/vnso-nsdp-platform/ENV1-4-3/', revision: null},{url: '/vnso-nsdp-platform/SOC1-6-2/', revision: null},{url: '/vnso-nsdp-platform/SOC6-8-1/', revision: null},{url: '/vnso-nsdp-platform/ECO1-7-2/', revision: null},{url: '/vnso-nsdp-platform/ECO2-6-1/', revision: null},{url: '/vnso-nsdp-platform/SOC1-1-3/', revision: null},{url: '/vnso-nsdp-platform/ECO3-2-2/', revision: null},{url: '/vnso-nsdp-platform/SOC6-9-1/', revision: null},{url: '/vnso-nsdp-platform/SOC3-2-2/', revision: null},{url: '/vnso-nsdp-platform/ENV2-3-2/', revision: null},{url: '/vnso-nsdp-platform/ENV3-3-2/', revision: null},{url: '/vnso-nsdp-platform/ECO2-8-1/', revision: null},{url: '/vnso-nsdp-platform/ECO3-2-3/', revision: null},{url: '/vnso-nsdp-platform/ECO3-6-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-2-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-3-1/', revision: null},{url: '/vnso-nsdp-platform/ECO4-5-1/', revision: null},{url: '/vnso-nsdp-platform/SOC2-3-1/', revision: null},{url: '/vnso-nsdp-platform/SOC1-6-1/', revision: null},{url: '/vnso-nsdp-platform/SOC5-3-2/', revision: null},{url: '/vnso-nsdp-platform/ENV1-1-1/', revision: null},{url: '/vnso-nsdp-platform/SOC3-4-3/', revision: null},{url: '/vnso-nsdp-platform/ECO1-3-2/', revision: null},{url: '/vnso-nsdp-platform/ENV4-5-3/', revision: null},{url: '/vnso-nsdp-platform/SOC6-8-2/', revision: null},{url: '/vnso-nsdp-platform/ECO3-1-2/', revision: null},{url: '/vnso-nsdp-platform/SOC6-1-3/', revision: null},{url: '/vnso-nsdp-platform/SOC4-6-2/', revision: null},{url: '/vnso-nsdp-platform/SOC4-4-3/', revision: null},{url: '/vnso-nsdp-platform/ECO3-5-1/', revision: null},{url: '/vnso-nsdp-platform/ECO4-7-3/', revision: null},{url: '/vnso-nsdp-platform/ECO4-2-1/', revision: null},{url: '/vnso-nsdp-platform/disaster-statistics/', revision: null},{url: '/vnso-nsdp-platform/ECO1/', revision: null},{url: '/vnso-nsdp-platform/ECO2/', revision: null},{url: '/vnso-nsdp-platform/ECO3/', revision: null},{url: '/vnso-nsdp-platform/ECO4/', revision: null},{url: '/vnso-nsdp-platform/ENV1/', revision: null},{url: '/vnso-nsdp-platform/ENV2/', revision: null},{url: '/vnso-nsdp-platform/ENV3/', revision: null},{url: '/vnso-nsdp-platform/ENV4/', revision: null},{url: '/vnso-nsdp-platform/ENV5/', revision: null},{url: '/vnso-nsdp-platform/SOC1/', revision: null},{url: '/vnso-nsdp-platform/SOC2/', revision: null},{url: '/vnso-nsdp-platform/SOC3/', revision: null},{url: '/vnso-nsdp-platform/SOC4/', revision: null},{url: '/vnso-nsdp-platform/SOC5/', revision: null},{url: '/vnso-nsdp-platform/SOC6/', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-3-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-3-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-7-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-9-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-8-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-5-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-5-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-7-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-7-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-3-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-6-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-5-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-7-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-2-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-1-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-7-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/operations.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-9-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-4-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-7-0.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-3-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/demographics.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-2-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-7-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-9-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-2-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-7-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-9-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-6-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-2-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-3-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-9-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-7-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-8-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-3-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-6-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-5-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-1-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/operations-budget.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-3-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC2-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-5-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/census.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-5-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-5-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC2-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-5-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-8-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-1-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-5-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-6-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-8-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/gdp-growth-rate.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/gdp-constant-price.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/school-attendance.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-5-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-8-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-7-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV5-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-5-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-6-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-7-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-3-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/government-financial-statistics.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-1-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-1-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC2-4-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-4-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-4-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-6-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-8-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-7-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-1-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-9-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-2-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV2-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV3-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO2-8-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-2-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC2-3-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC1-6-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC5-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV1-1-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC3-4-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO1-3-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ENV4-5-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-8-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-1-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC6-1-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-6-2.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/SOC4-4-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO3-5-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-7-3.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/ECO4-2-1.json', revision: null},{url: '/vnso-nsdp-platform/en/comb/disaster-statistics.json', revision: null},]);


// Cache page navigations (html) with a Network First strategy
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: 'pages',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    // Put all cached files in a cache named 'assets'
    cacheName: 'assets',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images/fonts with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => ['image', 'font'].includes(request.destination),
  // Use a Cache First caching strategy
  new CacheFirst({
    // Put all cached files in a cache named 'images'
    cacheName: 'images-and-fonts',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

// Cache json with a Network First strategy.
registerRoute(
  /.*\.(json|geojson|zip|csv)$/,
  new NetworkFirst({
    cacheName: 'data-files',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ]
  }),
);
