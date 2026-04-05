# Design Rules — Derived from Competitor Analysis

> A set of actionable design rules distilled from analyzing Gopuff, Swiggy, 7-Eleven, and a nutrition tracker app. Apply these to every screen, component, and future design decision.

---

## Rule 1: Brand the Top, Clean the Body

> **The header owns identity. The body owns content. Never mix them.**

Use the top 100–180px for brand color, location/context, and personality. Everything below should sit on a clean white or near-white background. This separation gives the brand a signature feel while keeping content scannable and distraction-free.

---

## Rule 2: Cards Are the Atomic Unit

> **Every discrete piece of content lives in a card.**

Cards get `12–16px` corner radius, `16px` internal padding, and `8–12px` spacing between siblings. A card should contain one idea — a product, a meal, a reward, a deal. Consistent card structure trains the eye and makes any screen instantly parseable.

---

## Rule 3: Show Progress, Always

> **Give users a visible sense of forward motion.**

Whether it's a progress bar toward a reward, a circular ring tracking a daily goal, or a threshold counter ("Buy 2 more to unlock…"), every core flow should answer: *"How far along am I?"* Progress turns passive browsing into active engagement.

---

## Rule 4: One CTA Per Section, Make It Unmissable

> **Each content section gets exactly one primary call-to-action. Pill-shaped, bold, high-contrast.**

CTAs use full border radius (`24px+`), bold text, and a color that contrasts sharply against the section background. Secondary actions (overflow menus, links) stay visually quiet. If everything is loud, nothing is.

---

## Rule 5: Use Time to Create Urgency or Structure

> **Surface time signals that are relevant to the user's context.**

Delivery apps: show estimated arrival and operating hours. Health apps: organize by time of day. Loyalty apps: show membership tenure. Time gives content meaning and motivates action — use it deliberately, not decoratively.

---

## Rule 6: Personalize the First Thing They See

> **Open with context the user recognizes: their name, location, date, or current status.**

This answers "Is this app paying attention to me?" before the user even scrolls. It builds trust, reduces cognitive load, and makes the experience feel tailored rather than generic.

---

## Rule 7: Scroll Sideways to Save Vertical Space

> **Use horizontal scroll for related items. Show 2–3 cards plus a partial "peek" card on the edge.**

The partially visible card is the affordance — it tells users there's more without needing a "scroll →" label. Reserve vertical scrolling for navigating between distinct content sections.

---

## Rule 8: Color Is Meaning, Not Decoration

> **Assign semantic roles to your 2–3 accent colors and use them consistently.**

One color for the brand/actions. One for positive signals (deals, ratings, health). One for urgency or alerts. Once users learn your color language, they can scan a screen in seconds. Never use color arbitrarily.

---

## Rule 9: Breathe with the 8px Grid

> **All spacing follows multiples of 8px. All sizing follows multiples of 4px.**

Card padding: `16px`. Section gaps: `16–24px`. Icon sizes: `40–60px`. Nav bar height: `50–60px`. This invisible grid is what makes a design feel "right" even when users can't articulate why.

---

## Rule 10: Bottom Nav = 5 Tabs, Icon + Label

> **Five tabs maximum. Each tab has an icon above a short label. The active tab uses the brand color.**

This is the industry standard. Six tabs (like Swiggy) strains small screens. Four feels sparse. Five is the sweet spot — enough surface area to expose key features without crowding.

---

## Rule 11: Break the Grid with One Hero Banner

> **Each screen gets one full-width, visually rich promotional banner to break the rhythm of structured cards.**

Use lifestyle photography or bold illustration, a distinct background color, and a clear CTA. This banner is the screen's moment of visual energy — the rest can stay structured and calm.

---

## Quick Reference

| Rule | One-Liner |
|------|-----------|
| 1 | Brand the header, clean the body |
| 2 | Every content piece is a card |
| 3 | Always show progress |
| 4 | One bold CTA per section |
| 5 | Use time signals deliberately |
| 6 | Personalize the entry point |
| 7 | Horizontal scroll with peek cards |
| 8 | Color = meaning, not decoration |
| 9 | 8px spacing grid everywhere |
| 10 | 5-tab bottom nav, icon + label |
| 11 | One hero banner per screen |
