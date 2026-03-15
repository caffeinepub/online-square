# Online Square

## Current State
- Landing page with Hero, Services grid (4 cards), Features, Reviews, About/Contact sections, and Footer
- Government Services page: detailed accordion with 8 services (PAN, Aadhaar, Voter ID, etc.)
- Academic Services card on landing page has a basic list with no dedicated detail page
- All phone/WhatsApp links still use placeholder number +919876543210

## Requested Changes (Diff)

### Add
- New `AcademicServicesPage.tsx` page with three tabbed/sectioned views:
  1. **Ongoing Applications** – forms currently accepting applications (with opening date, last date, apply link placeholder)
  2. **Upcoming Forms** – forms not yet open (with opening date, last date preview)
  3. **Announced Results** – recent exam results that have been declared (with result date, check result link)
- Academic services data covering BHU, UP Board, Allahabad University, UPTET, CTET, NDA, UPSC, SSC, and similar exams/university forms
- Each entry shows: Exam/Form name, conducting body, opening date, last date, status badge (Open/Upcoming/Result Declared), and a WhatsApp CTA
- "View All Details" button on the Academic Services card on the landing page (mirroring Government Services card)
- Navigation from landing page to AcademicServicesPage and back (same pattern as GovernmentServicesPage)

### Modify
- `App.tsx`: Add `academic-services` page type, import and render `AcademicServicesPage`, wire up `onAcademicServicesClick` handler, pass it to `ServicesSection`
- `ServicesSection` in `App.tsx`: Add "View All Details" button to Academic Services card (service id=1), similar to Government Services card
- Replace ALL occurrences of `9876543210` / `+919876543210` / `98765 43210` with `9389906180` / `+919389906180` / `93899 06180` across App.tsx and GovernmentServicesPage.tsx

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/pages/AcademicServicesPage.tsx` with:
   - Navbar with back button and Call/WhatsApp CTAs (number: 9389906180)
   - Hero section
   - Three tab sections: Ongoing Applications | Upcoming Forms | Announced Results
   - Rich data for 15-20 exam/university entries across all three tabs
   - WhatsApp CTA per entry linking to 9389906180
2. Update `App.tsx`:
   - Add `academic-services` to the Page type
   - Import AcademicServicesPage
   - Add navigate handler
   - Add "View All Details" button to Academic service card in ServicesSection
   - Replace all placeholder phone numbers with 9389906180
3. Update `GovernmentServicesPage.tsx`:
   - Replace all placeholder phone numbers with 9389906180
