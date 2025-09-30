# TODO List for Akina Website Updates

## Task 1: Make Header appear across all pages
- [x] Refactor App.tsx to include Header in a layout wrapper for all routes

## Task 2: Use Mission texts as slideshow texts on home page
- [x] Update BackgroundSlideshow.tsx to derive texts from Mission component data
- [x] Replace Hero with BackgroundSlideshow in MainSite (App.tsx)

## Task 3: Remove Rafiki Mtaani link
- [x] Remove Rafiki Mtaani button from Hero.tsx (or remove Hero entirely if replaced)

## Task 4: Merge News with Our Stories and add Newsletter
- [x] Remove News component from MainSite in App.tsx
- [x] Merge News content into OurStories.tsx
- [x] Create NewsletterSubscription component
- [x] Add NewsletterSubscription to OurStories.tsx
- [x] Update Header navigation to remove News link

## Task 5: Move FAQ to Donations page with collapsible Q&A
- [x] Remove FAQ component from MainSite in App.tsx
- [x] Add collapsible FAQ section to Donation.tsx
- [x] Update Header navigation to remove FAQ link

## Followup Steps
- [ ] Test navigation and UI after changes
- [ ] Verify newsletter subscription works with backend API
