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
const cacheName = 'install-cache';
setDefaultHandler(new NetworkOnly());
offlineFallback();


// Precache the indicator/goal pages.
self.addEventListener('install', (event) => {
  const populateCache = async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(["/vnso-nsdp-platform/ECO1/","/vnso-nsdp-platform/ECO2/","/vnso-nsdp-platform/ECO3/","/vnso-nsdp-platform/ECO4/","/vnso-nsdp-platform/ENV1/","/vnso-nsdp-platform/ENV2/","/vnso-nsdp-platform/ENV3/","/vnso-nsdp-platform/ENV4/","/vnso-nsdp-platform/ENV5/","/vnso-nsdp-platform/SOC1/","/vnso-nsdp-platform/SOC2/","/vnso-nsdp-platform/SOC3/","/vnso-nsdp-platform/SOC4/","/vnso-nsdp-platform/SOC5/","/vnso-nsdp-platform/SOC6/"]);
    await cache.addAll(["/vnso-nsdp-platform/ECO1-8-2/","/vnso-nsdp-platform/ECO2-1-2/","/vnso-nsdp-platform/SOC4-3-1/","/vnso-nsdp-platform/ENV4-4-1/","/vnso-nsdp-platform/SOC3-2-2/","/vnso-nsdp-platform/ENV3-1-1/","/vnso-nsdp-platform/SOC6-8-2/","/vnso-nsdp-platform/ECO1-6-1/","/vnso-nsdp-platform/ENV4-4-2/","/vnso-nsdp-platform/SOC4-2-1/","/vnso-nsdp-platform/ENV3-3-1/","/vnso-nsdp-platform/SOC6-5-2/","/vnso-nsdp-platform/ENV1-5-3/","/vnso-nsdp-platform/ECO4-6-1/","/vnso-nsdp-platform/SOC5-3-2/","/vnso-nsdp-platform/SOC4-3-2/","/vnso-nsdp-platform/SOC2-4-1/","/vnso-nsdp-platform/census/","/vnso-nsdp-platform/ECO1-7-1/","/vnso-nsdp-platform/ENV3-3-3/","/vnso-nsdp-platform/SOC3-1-2/","/vnso-nsdp-platform/SOC1-1-2/","/vnso-nsdp-platform/ENV2-1-1/","/vnso-nsdp-platform/government-financial-statistics/","/vnso-nsdp-platform/ECO3-3-3/","/vnso-nsdp-platform/ECO3-2-1/","/vnso-nsdp-platform/SOC6-3-2/","/vnso-nsdp-platform/ECO1-6-2/","/vnso-nsdp-platform/ENV2-5-2/","/vnso-nsdp-platform/ENV2-3-2/","/vnso-nsdp-platform/ECO2-2-1/","/vnso-nsdp-platform/ENV3-5-2/","/vnso-nsdp-platform/SOC5-1-3/","/vnso-nsdp-platform/ENV2-5-1/","/vnso-nsdp-platform/ENV4-5-1/","/vnso-nsdp-platform/ENV4-1-2/","/vnso-nsdp-platform/ENV3-2-3/","/vnso-nsdp-platform/ECO1-3-1/","/vnso-nsdp-platform/SOC1-1-1/","/vnso-nsdp-platform/SOC6-7-1/","/vnso-nsdp-platform/ECO3-2-2/","/vnso-nsdp-platform/SOC4-6-1/","/vnso-nsdp-platform/ECO4-4-1/","/vnso-nsdp-platform/SOC1-2-2/","/vnso-nsdp-platform/SOC3-4-2/","/vnso-nsdp-platform/SOC4-6-2/","/vnso-nsdp-platform/ECO1-4-1/","/vnso-nsdp-platform/SOC3-3-3/","/vnso-nsdp-platform/SOC3-2-1/","/vnso-nsdp-platform/ECO2-9-1/","/vnso-nsdp-platform/SOC3-4-1/","/vnso-nsdp-platform/ENV3-5-3/","/vnso-nsdp-platform/SOC6-1-1/","/vnso-nsdp-platform/ECO1-5-3/","/vnso-nsdp-platform/ECO2-7-0/","/vnso-nsdp-platform/school-attendance/","/vnso-nsdp-platform/ENV4-6-1/","/vnso-nsdp-platform/SOC4-1-2/","/vnso-nsdp-platform/ENV1-4-2/","/vnso-nsdp-platform/ENV3-3-2/","/vnso-nsdp-platform/ECO2-5-1/","/vnso-nsdp-platform/ECO4-8-1/","/vnso-nsdp-platform/SOC5-3-3/","/vnso-nsdp-platform/ECO4-7-1/","/vnso-nsdp-platform/ENV1-3-1/","/vnso-nsdp-platform/SOC4-3-3/","/vnso-nsdp-platform/SOC1-2-1/","/vnso-nsdp-platform/ENV5-5-1/","/vnso-nsdp-platform/gdp-constant-price/","/vnso-nsdp-platform/SOC5-4-1/","/vnso-nsdp-platform/SOC1-6-1/","/vnso-nsdp-platform/ENV4-2-2/","/vnso-nsdp-platform/SOC2-3-1/","/vnso-nsdp-platform/ENV2-4-2/","/vnso-nsdp-platform/SOC6-9-1/","/vnso-nsdp-platform/ENV5-1-1/","/vnso-nsdp-platform/SOC6-5-1/","/vnso-nsdp-platform/ECO1-8-1/","/vnso-nsdp-platform/ECO2-3-1/","/vnso-nsdp-platform/ENV2-6-1/","/vnso-nsdp-platform/SOC3-3-2/","/vnso-nsdp-platform/ECO4-9-1/","/vnso-nsdp-platform/ECO4-2-1/","/vnso-nsdp-platform/SOC6-7-2/","/vnso-nsdp-platform/SOC4-4-3/","/vnso-nsdp-platform/SOC6-3-3/","/vnso-nsdp-platform/ECO1-7-2/","/vnso-nsdp-platform/ENV5-3-1/","/vnso-nsdp-platform/SOC1-5-1/","/vnso-nsdp-platform/ECO1-3-2/","/vnso-nsdp-platform/ENV5-2-1/","/vnso-nsdp-platform/SOC6-1-3/","/vnso-nsdp-platform/SOC4-1-3/","/vnso-nsdp-platform/ENV2-6-2/","/vnso-nsdp-platform/SOC1-6-2/","/vnso-nsdp-platform/ENV2-4-1/","/vnso-nsdp-platform/ECO2-8-1/","/vnso-nsdp-platform/SOC2-2-1/","/vnso-nsdp-platform/ECO1-1-1/","/vnso-nsdp-platform/SOC6-3-1/","/vnso-nsdp-platform/ECO2-1-1/","/vnso-nsdp-platform/ECO1-5-2/","/vnso-nsdp-platform/ENV4-1-1/","/vnso-nsdp-platform/ECO2-4-1/","/vnso-nsdp-platform/ENV5-6-1/","/vnso-nsdp-platform/SOC3-1-3/","/vnso-nsdp-platform/SOC3-4-3/","/vnso-nsdp-platform/operations-budget/","/vnso-nsdp-platform/ECO2-2-2/","/vnso-nsdp-platform/SOC3-1-1/","/vnso-nsdp-platform/ENV4-5-3/","/vnso-nsdp-platform/ENV3-2-2/","/vnso-nsdp-platform/ECO3-3-2/","/vnso-nsdp-platform/ENV4-3-1/","/vnso-nsdp-platform/SOC5-1-2/","/vnso-nsdp-platform/ENV1-2-1/","/vnso-nsdp-platform/ENV3-5-1/","/vnso-nsdp-platform/SOC5-2-1/","/vnso-nsdp-platform/operations/","/vnso-nsdp-platform/ENV2-3-3/","/vnso-nsdp-platform/ENV1-5-1/","/vnso-nsdp-platform/SOC5-1-1/","/vnso-nsdp-platform/ENV1-4-3/","/vnso-nsdp-platform/ENV3-1-2/","/vnso-nsdp-platform/SOC6-6-1/","/vnso-nsdp-platform/SOC4-7-2/","/vnso-nsdp-platform/SOC1-4-1/","/vnso-nsdp-platform/SOC6-1-2/","/vnso-nsdp-platform/ENV1-3-2/","/vnso-nsdp-platform/ECO4-3-1/","/vnso-nsdp-platform/ENV4-5-2/","/vnso-nsdp-platform/ENV1-4-1/","/vnso-nsdp-platform/ECO1-1-2/","/vnso-nsdp-platform/ECO4-7-3/","/vnso-nsdp-platform/SOC3-2-3/","/vnso-nsdp-platform/ENV2-2-1/","/vnso-nsdp-platform/SOC4-4-2/","/vnso-nsdp-platform/ECO3-3-1/","/vnso-nsdp-platform/ECO4-1-1/","/vnso-nsdp-platform/ENV5-1-2/","/vnso-nsdp-platform/ENV2-3-1/","/vnso-nsdp-platform/SOC1-7-1/","/vnso-nsdp-platform/ENV1-1-1/","/vnso-nsdp-platform/ECO1-5-1/","/vnso-nsdp-platform/ENV1-1-3/","/vnso-nsdp-platform/SOC1-3-1/","/vnso-nsdp-platform/ECO4-6-2/","/vnso-nsdp-platform/gdp-growth-rate/","/vnso-nsdp-platform/SOC4-1-1/","/vnso-nsdp-platform/ECO3-2-3/","/vnso-nsdp-platform/SOC6-2-1/","/vnso-nsdp-platform/ENV1-3-3/","/vnso-nsdp-platform/ENV4-6-2/","/vnso-nsdp-platform/SOC6-9-2/","/vnso-nsdp-platform/SOC6-4-1/","/vnso-nsdp-platform/ECO1-8-3/","/vnso-nsdp-platform/ECO4-3-2/","/vnso-nsdp-platform/SOC2-1-1/","/vnso-nsdp-platform/SOC5-5-2/","/vnso-nsdp-platform/ECO3-4-2/","/vnso-nsdp-platform/SOC5-4-3/","/vnso-nsdp-platform/SOC5-3-1/","/vnso-nsdp-platform/ECO4-7-2/","/vnso-nsdp-platform/SOC5-4-2/","/vnso-nsdp-platform/ENV3-4-2/","/vnso-nsdp-platform/ECO4-5-1/","/vnso-nsdp-platform/ECO1-9-1/","/vnso-nsdp-platform/ENV1-1-2/","/vnso-nsdp-platform/ENV5-2-2/","/vnso-nsdp-platform/ECO2-6-1/","/vnso-nsdp-platform/SOC4-2-2/","/vnso-nsdp-platform/SOC5-5-3/","/vnso-nsdp-platform/ENV4-7-1/","/vnso-nsdp-platform/ENV5-4-1/","/vnso-nsdp-platform/ECO1-2-1/","/vnso-nsdp-platform/ECO3-5-1/","/vnso-nsdp-platform/ENV3-1-3/","/vnso-nsdp-platform/demographics/","/vnso-nsdp-platform/ECO3-1-1/","/vnso-nsdp-platform/ENV3-4-1/","/vnso-nsdp-platform/SOC1-7-2/","/vnso-nsdp-platform/SOC3-3-1/","/vnso-nsdp-platform/SOC1-1-3/","/vnso-nsdp-platform/SOC6-8-1/","/vnso-nsdp-platform/SOC4-7-1/","/vnso-nsdp-platform/SOC4-2-3/","/vnso-nsdp-platform/ECO3-1-2/","/vnso-nsdp-platform/ENV3-2-1/","/vnso-nsdp-platform/ECO1-4-2/","/vnso-nsdp-platform/SOC4-5-1/","/vnso-nsdp-platform/ENV4-2-1/","/vnso-nsdp-platform/ECO2-9-2/","/vnso-nsdp-platform/ENV2-2-2/","/vnso-nsdp-platform/SOC6-8-3/","/vnso-nsdp-platform/SOC4-4-1/","/vnso-nsdp-platform/ECO3-6-1/","/vnso-nsdp-platform/ECO2-3-2/","/vnso-nsdp-platform/SOC5-5-1/","/vnso-nsdp-platform/ECO3-4-1/","/vnso-nsdp-platform/ENV1-5-2/","/vnso-nsdp-platform/SOC1-2-3/","/vnso-nsdp-platform/ENV5-3-2/","/vnso-nsdp-platform/ECO3-6-2/","/vnso-nsdp-platform/donor/","/vnso-nsdp-platform/business/","/vnso-nsdp-platform/disaster-statistics/","/vnso-nsdp-platform/government/"]);
    await cache.addAll(["/vnso-nsdp-platform/en/comb/ECO1-8-2.json","/vnso-nsdp-platform/en/comb/ECO2-1-2.json","/vnso-nsdp-platform/en/comb/SOC4-3-1.json","/vnso-nsdp-platform/en/comb/ENV4-4-1.json","/vnso-nsdp-platform/en/comb/SOC3-2-2.json","/vnso-nsdp-platform/en/comb/ENV3-1-1.json","/vnso-nsdp-platform/en/comb/SOC6-8-2.json","/vnso-nsdp-platform/en/comb/ECO1-6-1.json","/vnso-nsdp-platform/en/comb/ENV4-4-2.json","/vnso-nsdp-platform/en/comb/SOC4-2-1.json","/vnso-nsdp-platform/en/comb/ENV3-3-1.json","/vnso-nsdp-platform/en/comb/SOC6-5-2.json","/vnso-nsdp-platform/en/comb/ENV1-5-3.json","/vnso-nsdp-platform/en/comb/ECO4-6-1.json","/vnso-nsdp-platform/en/comb/SOC5-3-2.json","/vnso-nsdp-platform/en/comb/SOC4-3-2.json","/vnso-nsdp-platform/en/comb/SOC2-4-1.json","/vnso-nsdp-platform/en/comb/census.json","/vnso-nsdp-platform/en/comb/ECO1-7-1.json","/vnso-nsdp-platform/en/comb/ENV3-3-3.json","/vnso-nsdp-platform/en/comb/SOC3-1-2.json","/vnso-nsdp-platform/en/comb/SOC1-1-2.json","/vnso-nsdp-platform/en/comb/ENV2-1-1.json","/vnso-nsdp-platform/en/comb/government-financial-statistics.json","/vnso-nsdp-platform/en/comb/ECO3-3-3.json","/vnso-nsdp-platform/en/comb/ECO3-2-1.json","/vnso-nsdp-platform/en/comb/SOC6-3-2.json","/vnso-nsdp-platform/en/comb/ECO1-6-2.json","/vnso-nsdp-platform/en/comb/ENV2-5-2.json","/vnso-nsdp-platform/en/comb/ENV2-3-2.json","/vnso-nsdp-platform/en/comb/ECO2-2-1.json","/vnso-nsdp-platform/en/comb/ENV3-5-2.json","/vnso-nsdp-platform/en/comb/SOC5-1-3.json","/vnso-nsdp-platform/en/comb/ENV2-5-1.json","/vnso-nsdp-platform/en/comb/ENV4-5-1.json","/vnso-nsdp-platform/en/comb/ENV4-1-2.json","/vnso-nsdp-platform/en/comb/ENV3-2-3.json","/vnso-nsdp-platform/en/comb/ECO1-3-1.json","/vnso-nsdp-platform/en/comb/SOC1-1-1.json","/vnso-nsdp-platform/en/comb/SOC6-7-1.json","/vnso-nsdp-platform/en/comb/ECO3-2-2.json","/vnso-nsdp-platform/en/comb/SOC4-6-1.json","/vnso-nsdp-platform/en/comb/ECO4-4-1.json","/vnso-nsdp-platform/en/comb/SOC1-2-2.json","/vnso-nsdp-platform/en/comb/SOC3-4-2.json","/vnso-nsdp-platform/en/comb/SOC4-6-2.json","/vnso-nsdp-platform/en/comb/ECO1-4-1.json","/vnso-nsdp-platform/en/comb/SOC3-3-3.json","/vnso-nsdp-platform/en/comb/SOC3-2-1.json","/vnso-nsdp-platform/en/comb/ECO2-9-1.json","/vnso-nsdp-platform/en/comb/SOC3-4-1.json","/vnso-nsdp-platform/en/comb/ENV3-5-3.json","/vnso-nsdp-platform/en/comb/SOC6-1-1.json","/vnso-nsdp-platform/en/comb/ECO1-5-3.json","/vnso-nsdp-platform/en/comb/ECO2-7-0.json","/vnso-nsdp-platform/en/comb/school-attendance.json","/vnso-nsdp-platform/en/comb/ENV4-6-1.json","/vnso-nsdp-platform/en/comb/SOC4-1-2.json","/vnso-nsdp-platform/en/comb/ENV1-4-2.json","/vnso-nsdp-platform/en/comb/ENV3-3-2.json","/vnso-nsdp-platform/en/comb/ECO2-5-1.json","/vnso-nsdp-platform/en/comb/ECO4-8-1.json","/vnso-nsdp-platform/en/comb/SOC5-3-3.json","/vnso-nsdp-platform/en/comb/ECO4-7-1.json","/vnso-nsdp-platform/en/comb/ENV1-3-1.json","/vnso-nsdp-platform/en/comb/SOC4-3-3.json","/vnso-nsdp-platform/en/comb/SOC1-2-1.json","/vnso-nsdp-platform/en/comb/ENV5-5-1.json","/vnso-nsdp-platform/en/comb/gdp-constant-price.json","/vnso-nsdp-platform/en/comb/SOC5-4-1.json","/vnso-nsdp-platform/en/comb/SOC1-6-1.json","/vnso-nsdp-platform/en/comb/ENV4-2-2.json","/vnso-nsdp-platform/en/comb/SOC2-3-1.json","/vnso-nsdp-platform/en/comb/ENV2-4-2.json","/vnso-nsdp-platform/en/comb/SOC6-9-1.json","/vnso-nsdp-platform/en/comb/ENV5-1-1.json","/vnso-nsdp-platform/en/comb/SOC6-5-1.json","/vnso-nsdp-platform/en/comb/ECO1-8-1.json","/vnso-nsdp-platform/en/comb/ECO2-3-1.json","/vnso-nsdp-platform/en/comb/ENV2-6-1.json","/vnso-nsdp-platform/en/comb/SOC3-3-2.json","/vnso-nsdp-platform/en/comb/ECO4-9-1.json","/vnso-nsdp-platform/en/comb/ECO4-2-1.json","/vnso-nsdp-platform/en/comb/SOC6-7-2.json","/vnso-nsdp-platform/en/comb/SOC4-4-3.json","/vnso-nsdp-platform/en/comb/SOC6-3-3.json","/vnso-nsdp-platform/en/comb/ECO1-7-2.json","/vnso-nsdp-platform/en/comb/ENV5-3-1.json","/vnso-nsdp-platform/en/comb/SOC1-5-1.json","/vnso-nsdp-platform/en/comb/ECO1-3-2.json","/vnso-nsdp-platform/en/comb/ENV5-2-1.json","/vnso-nsdp-platform/en/comb/SOC6-1-3.json","/vnso-nsdp-platform/en/comb/SOC4-1-3.json","/vnso-nsdp-platform/en/comb/ENV2-6-2.json","/vnso-nsdp-platform/en/comb/SOC1-6-2.json","/vnso-nsdp-platform/en/comb/ENV2-4-1.json","/vnso-nsdp-platform/en/comb/ECO2-8-1.json","/vnso-nsdp-platform/en/comb/SOC2-2-1.json","/vnso-nsdp-platform/en/comb/ECO1-1-1.json","/vnso-nsdp-platform/en/comb/SOC6-3-1.json","/vnso-nsdp-platform/en/comb/ECO2-1-1.json","/vnso-nsdp-platform/en/comb/ECO1-5-2.json","/vnso-nsdp-platform/en/comb/ENV4-1-1.json","/vnso-nsdp-platform/en/comb/ECO2-4-1.json","/vnso-nsdp-platform/en/comb/ENV5-6-1.json","/vnso-nsdp-platform/en/comb/SOC3-1-3.json","/vnso-nsdp-platform/en/comb/SOC3-4-3.json","/vnso-nsdp-platform/en/comb/operations-budget.json","/vnso-nsdp-platform/en/comb/ECO2-2-2.json","/vnso-nsdp-platform/en/comb/SOC3-1-1.json","/vnso-nsdp-platform/en/comb/ENV4-5-3.json","/vnso-nsdp-platform/en/comb/ENV3-2-2.json","/vnso-nsdp-platform/en/comb/ECO3-3-2.json","/vnso-nsdp-platform/en/comb/ENV4-3-1.json","/vnso-nsdp-platform/en/comb/SOC5-1-2.json","/vnso-nsdp-platform/en/comb/ENV1-2-1.json","/vnso-nsdp-platform/en/comb/ENV3-5-1.json","/vnso-nsdp-platform/en/comb/SOC5-2-1.json","/vnso-nsdp-platform/en/comb/operations.json","/vnso-nsdp-platform/en/comb/ENV2-3-3.json","/vnso-nsdp-platform/en/comb/ENV1-5-1.json","/vnso-nsdp-platform/en/comb/SOC5-1-1.json","/vnso-nsdp-platform/en/comb/ENV1-4-3.json","/vnso-nsdp-platform/en/comb/ENV3-1-2.json","/vnso-nsdp-platform/en/comb/SOC6-6-1.json","/vnso-nsdp-platform/en/comb/SOC4-7-2.json","/vnso-nsdp-platform/en/comb/SOC1-4-1.json","/vnso-nsdp-platform/en/comb/SOC6-1-2.json","/vnso-nsdp-platform/en/comb/ENV1-3-2.json","/vnso-nsdp-platform/en/comb/ECO4-3-1.json","/vnso-nsdp-platform/en/comb/ENV4-5-2.json","/vnso-nsdp-platform/en/comb/ENV1-4-1.json","/vnso-nsdp-platform/en/comb/ECO1-1-2.json","/vnso-nsdp-platform/en/comb/ECO4-7-3.json","/vnso-nsdp-platform/en/comb/SOC3-2-3.json","/vnso-nsdp-platform/en/comb/ENV2-2-1.json","/vnso-nsdp-platform/en/comb/SOC4-4-2.json","/vnso-nsdp-platform/en/comb/ECO3-3-1.json","/vnso-nsdp-platform/en/comb/ECO4-1-1.json","/vnso-nsdp-platform/en/comb/ENV5-1-2.json","/vnso-nsdp-platform/en/comb/ENV2-3-1.json","/vnso-nsdp-platform/en/comb/SOC1-7-1.json","/vnso-nsdp-platform/en/comb/ENV1-1-1.json","/vnso-nsdp-platform/en/comb/ECO1-5-1.json","/vnso-nsdp-platform/en/comb/ENV1-1-3.json","/vnso-nsdp-platform/en/comb/SOC1-3-1.json","/vnso-nsdp-platform/en/comb/ECO4-6-2.json","/vnso-nsdp-platform/en/comb/gdp-growth-rate.json","/vnso-nsdp-platform/en/comb/SOC4-1-1.json","/vnso-nsdp-platform/en/comb/ECO3-2-3.json","/vnso-nsdp-platform/en/comb/SOC6-2-1.json","/vnso-nsdp-platform/en/comb/ENV1-3-3.json","/vnso-nsdp-platform/en/comb/ENV4-6-2.json","/vnso-nsdp-platform/en/comb/SOC6-9-2.json","/vnso-nsdp-platform/en/comb/SOC6-4-1.json","/vnso-nsdp-platform/en/comb/ECO1-8-3.json","/vnso-nsdp-platform/en/comb/ECO4-3-2.json","/vnso-nsdp-platform/en/comb/SOC2-1-1.json","/vnso-nsdp-platform/en/comb/SOC5-5-2.json","/vnso-nsdp-platform/en/comb/ECO3-4-2.json","/vnso-nsdp-platform/en/comb/SOC5-4-3.json","/vnso-nsdp-platform/en/comb/SOC5-3-1.json","/vnso-nsdp-platform/en/comb/ECO4-7-2.json","/vnso-nsdp-platform/en/comb/SOC5-4-2.json","/vnso-nsdp-platform/en/comb/ENV3-4-2.json","/vnso-nsdp-platform/en/comb/ECO4-5-1.json","/vnso-nsdp-platform/en/comb/ECO1-9-1.json","/vnso-nsdp-platform/en/comb/ENV1-1-2.json","/vnso-nsdp-platform/en/comb/ENV5-2-2.json","/vnso-nsdp-platform/en/comb/ECO2-6-1.json","/vnso-nsdp-platform/en/comb/SOC4-2-2.json","/vnso-nsdp-platform/en/comb/SOC5-5-3.json","/vnso-nsdp-platform/en/comb/ENV4-7-1.json","/vnso-nsdp-platform/en/comb/ENV5-4-1.json","/vnso-nsdp-platform/en/comb/ECO1-2-1.json","/vnso-nsdp-platform/en/comb/ECO3-5-1.json","/vnso-nsdp-platform/en/comb/ENV3-1-3.json","/vnso-nsdp-platform/en/comb/demographics.json","/vnso-nsdp-platform/en/comb/ECO3-1-1.json","/vnso-nsdp-platform/en/comb/ENV3-4-1.json","/vnso-nsdp-platform/en/comb/SOC1-7-2.json","/vnso-nsdp-platform/en/comb/SOC3-3-1.json","/vnso-nsdp-platform/en/comb/SOC1-1-3.json","/vnso-nsdp-platform/en/comb/SOC6-8-1.json","/vnso-nsdp-platform/en/comb/SOC4-7-1.json","/vnso-nsdp-platform/en/comb/SOC4-2-3.json","/vnso-nsdp-platform/en/comb/ECO3-1-2.json","/vnso-nsdp-platform/en/comb/ENV3-2-1.json","/vnso-nsdp-platform/en/comb/ECO1-4-2.json","/vnso-nsdp-platform/en/comb/SOC4-5-1.json","/vnso-nsdp-platform/en/comb/ENV4-2-1.json","/vnso-nsdp-platform/en/comb/ECO2-9-2.json","/vnso-nsdp-platform/en/comb/ENV2-2-2.json","/vnso-nsdp-platform/en/comb/SOC6-8-3.json","/vnso-nsdp-platform/en/comb/SOC4-4-1.json","/vnso-nsdp-platform/en/comb/ECO3-6-1.json","/vnso-nsdp-platform/en/comb/ECO2-3-2.json","/vnso-nsdp-platform/en/comb/SOC5-5-1.json","/vnso-nsdp-platform/en/comb/ECO3-4-1.json","/vnso-nsdp-platform/en/comb/ENV1-5-2.json","/vnso-nsdp-platform/en/comb/SOC1-2-3.json","/vnso-nsdp-platform/en/comb/ENV5-3-2.json","/vnso-nsdp-platform/en/comb/ECO3-6-2.json","/vnso-nsdp-platform/en/comb/donor.json","/vnso-nsdp-platform/en/comb/business.json","/vnso-nsdp-platform/en/comb/disaster-statistics.json","/vnso-nsdp-platform/en/comb/government.json"]);
  };

  event.waitUntil(populateCache());
});


// Cache page navigations (html) with a Network First strategy
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    cacheName: cacheName,
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
    cacheName: cacheName,
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
    cacheName: cacheName,
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
    cacheName: cacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ]
  }),
);
