# Common Patterns Across Competitors

Cross-analysis of Gopuff, Swiggy, 7-Eleven, and the Nutrition Tracker app.

---

## 1. Card-Based Content Architecture

Every app uses **cards as the primary content container**. Cards provide visual grouping, scanability, and consistent structure across different content types.

- **Gopuff**: Product cards, promo banner cards
- **Swiggy**: Restaurant cards, deal chip cards, promo banner cards
- **7-Eleven**: Rewards card, perks grid cards, promo banner card
- **Nutrition Tracker**: Food item cards with internal macro grids

**Consistent card traits**: `~12-16px` corner radius, internal padding of `~16px`, subtle elevation or border separation from the background.

---

## 2. Dark/Branded Header → Light Content Body

Three out of four apps use a **high-contrast header** (dark or heavily branded) that transitions into a clean white/light content area below:

- **Gopuff**: Deep navy header → white product area
- **Swiggy**: Indigo gradient header → white feed
- **Nutrition Tracker**: Soft pink macro summary → light gray cards
- **7-Eleven**: White throughout (the exception — uses color-segmented sections instead)

**Principle**: The header establishes brand identity and key context (location, time, status), while the body stays clean for content consumption.

---

## 3. Horizontal Scrolling for Content Density

All four apps use **horizontal scroll rows** to show more content without increasing vertical page length:

- **Gopuff**: Category icons, product cards (peek pattern showing ~2.5 cards)
- **Swiggy**: Service icons, deal chips, restaurant cards
- **7-Eleven**: Perk cards in a grid (scrollable)
- **Nutrition Tracker**: Meal category tabs (Breakfast, Lunch, Dinner, Snacks)

**The "peek" pattern** (showing a partial card on the edge) is universal — it signals scrollability without explicit UI affordances.

---

## 4. Progress & Gamification Indicators

Every app incorporates some form of **progress visualization or gamified engagement**:

- **Gopuff**: Deal stacking ("Buy 4 Wines, Save 10%") — implicit progress toward a threshold
- **Swiggy**: Branded game-mode deals ("FEAST MODE", "FLASH DEALS", "Bolt⚡") — gamified language
- **7-Eleven**: Explicit progress bar with milestones (0 → 500 → 5000+ points) — textbook gamification
- **Nutrition Tracker**: Circular progress ring for daily calorie goal — visual progress toward a health target

**Principle**: Whether explicit (progress bars) or implicit (deal thresholds, gamified naming), every app creates a sense of forward motion and achievement.

---

## 5. Urgency & Time Signals

Time-based cues appear across all apps to drive immediate action:

- **Gopuff**: "25-41mins" delivery badge with ⚡, "Open late 'til 1:30 AM"
- **Swiggy**: "9 mins" on Instamart, "10 MINS DELIVERY" tab, "20-25 mins" on cards
- **7-Eleven**: "MEMBER SINCE 2025" (tenure-based time signal)
- **Nutrition Tracker**: Time-ranged meal tabs ("Breakfast 00:00-12:00", "Lunch 12:00-17:00")

**Principle**: Time creates context, urgency, or structure depending on the app's goal (speed for delivery, structure for health tracking).

---

## 6. Strong CTA Hierarchy

Each app has a clear **primary CTA** that stands out from surrounding content:

- **Gopuff**: "Claim now!" (dark button on promo banner), red "Buy 4 Wines" pills
- **Swiggy**: "ORDER NOW" (orange pill on promo banner)
- **7-Eleven**: "View Deals" (dark bordered pill), "Claim Now" (on green promo)
- **Nutrition Tracker**: Three-dot overflow menu per card (utility CTA rather than promotional)

**Common CTA styles**: Pill-shaped buttons with bold text, high contrast against their container background, `~24-32px` full border radius.

---

## 7. Personalization on Entry

All apps surface **personalized or contextual information** at the top of the screen:

- **Gopuff**: User's delivery address ("633 Rose Ave") + delivery time estimate
- **Swiggy**: User's location ("J P Nagar Metro Station") + detailed address
- **7-Eleven**: Greeting by name ("Hi [name]!") + membership tenure + points balance
- **Nutrition Tracker**: Date context ("Monday, 31 August") + user avatar

**Principle**: The first thing users see confirms their context — "we know who you are and where you are." This builds trust and reduces friction.

---

## 8. 5-Tab Bottom Navigation (Standard)

Bottom navigation is universal, with minor variations:

| App | Tabs | Notes |
|-----|------|-------|
| Gopuff | 5 | Home, Browse, Deals, My Cart, Account |
| Swiggy | 6 | Food, Offer Zone, Bolt, Eatlist, Card, Reorder |
| 7-Eleven | 5 | Home, Order, Deals & Rewards, Fuel, Scan Pay Go |
| Nutrition Tracker | 5 | Home, Search, List, Favorites, Cart |

**Common traits**: Icon + label format, active state highlighted with brand color, ~50-60px height, evenly distributed.

---

## 9. Promotional Banners with Lifestyle Imagery

Full-width promotional banners with **real photography or rich illustrations** appear in every app:

- **Gopuff**: Warehouse photo ("BIG VALUE. DELIVERED FAST.")
- **Swiggy**: Food photography flanking the "Foodie Weekend" promo
- **7-Eleven**: Product arrangement photo ("$10 OFF $10+")
- **Nutrition Tracker**: Food emoji illustrations per meal item (lighter version of this pattern)

**Principle**: Banners break the monotony of structured cards and inject visual energy. They typically use a distinct background color to stand out.

---

## 10. Color-Coded Information Categories

All apps use **color as a semantic categorization tool**, not just for decoration:

- **Gopuff**: Green = urgency/deals, Red = CTAs/promotions, Blue = brand/trust
- **Swiggy**: Orange = brand/CTAs, Green = ratings/quality, Red = discounts
- **7-Eleven**: Green = brand, Yellow = premium/perks, Dark = CTAs
- **Nutrition Tracker**: Green = protein, Yellow = fat, Pink = carbs, Dark green = actions

**Principle**: Color carries meaning. Users learn the color system quickly and can scan content faster once the associations are established.

---

## 11. Consistent Spacing System

All apps follow a **4px/8px base grid** with common spacing intervals:

- **Internal card padding**: ~16px (universal)
- **Gap between cards**: ~8-12px
- **Section spacing**: ~16-24px
- **Corner radii**: ~12-16px for cards, ~24px+ for pills/buttons
- **Icon sizes**: ~40-60px for category/navigation icons

---

## Summary of Universal Design Principles

| Principle | How It Manifests |
|-----------|-----------------|
| **Visual hierarchy** | Dark/branded headers → clean content body → strong CTAs |
| **Scanability** | Card-based layouts, consistent internal structure, color coding |
| **Engagement** | Progress indicators, gamified language, urgency signals |
| **Personalization** | Location, name, date, or status shown immediately |
| **Content density** | Horizontal scroll manages volume without clutter |
| **Clear CTAs** | Pill-shaped, high-contrast, one primary CTA per section |
| **Consistent spacing** | 8px grid system, 12-16px radii, 16px card padding |
| **Brand through color** | 2-3 brand colors used semantically throughout |
