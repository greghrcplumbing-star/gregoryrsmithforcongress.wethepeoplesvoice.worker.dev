# Gregory R. Smith for Congress — Campaign Site Build Map

This file is the working master checklist so the campaign website stops being rebuilt one section at a time without a full structure.

## Build Rule

No page should be a random dump of buttons, templates, production notes, or unfinished ideas. Every page needs:

1. Clear voter-facing purpose
2. One primary action
3. Clean navigation back to the campaign
4. Public-safe wording
5. No private production instructions
6. No fake claims, fake analytics, or fake numbers
7. Mobile-first layout

## Current Core Pages Already Present

- `index.html` — Homepage / campaign front door
- `about.html` — Meet Gregory
- `speech.html` — Campaign speech
- `priorities.html` — Platform / people-first priorities
- `resources.html` — Public resource directory
- `second-chance.html` — Second Chance Workforce and reentry
- `mental-health.html` — Mental health resources
- `media.html` — Media / campaign videos / press
- `volunteer.html` — Volunteer / get involved
- `contribution.html` — Pledge / contribution
- `endorsement.html` — Endorsement
- `people-vote.html` — Vote priorities / community input
- `community-issues.html` — Community concerns
- `support-team.html` — Support team
- `contact.html` — Contact
- `tour/index.html` — Campaign tour / events
- `education/index.html` — Education center

## Homepage Standard

The homepage should do only five things:

1. Make a serious first impression
2. Show Gregory R. Smith clearly
3. Explain the movement in one sentence
4. Push the visitor to pledge, volunteer, read the speech, or view the platform
5. Route people to issue/resource areas without flooding them

## Top-Level Navigation Standard

Primary navigation should stay tight:

- Home
- Meet Gregory
- Platform
- Speech
- Events
- Media
- Resources
- Second Chance
- Contact
- Pledge Support

The visible resource strip can stay because it adds value, but it must be clean:

- Education
- Jobs & Trades
- Second Chance
- Housing
- Veterans
- Mental Health
- Benefits
- Small Business
- Healthcare

## Missing / Needed Main Sections

These need either full pages or cleaned page sections.

### 1. Activity / Analytics

Purpose: show momentum without faking numbers.

Needed:
- Public campaign activity badge
- Visitors today
- Pages viewed
- Countries reached
- Private analytics dashboard path
- Disclaimer: public interest tracker, not donation solicitation

Implementation options:
- Cloudflare Web Analytics for real tracking
- Worker KV or D1 for public counter
- No fake visitor numbers

### 2. State-by-State Resource Directory

Purpose: make resources useful by state.

Needed:
- State selector
- Workforce links
- Housing links
- food/benefits links
- veterans links
- healthcare links
- reentry links
- small business links

### 3. Second Chance Employer Directory

Purpose: connect people with records to employers willing to consider qualified applicants.

Rules:
- List employers/programs only, not private people with records
- Employer opt-in only
- Organized by state
- Include industry/trade, requirements, contact method
- Include verification status or “self-submitted” label

### 4. Trades / Apprenticeship Center

Purpose: make working-class jobs and trade paths easy to find.

Needed:
- Plumbing, electrical, HVAC, welding, CDL, carpentry, laborers, operators
- Union and nonunion paths
- Apprenticeship.gov link
- State workforce boards
- How to start with no experience
- How to start after incarceration or a record

### 5. Veterans Action Page

Purpose: stronger than a resource card.

Needed:
- VA benefits
- housing
- mental health
- jobs
- family support
- crisis resources
- campaign policy statement

### 6. Housing / Cost of Living Page

Purpose: central campaign pain point.

Needed:
- rent pressure
- first-time buyer help
- homelessness resources
- Maui/Chicago/national angle
- policy priorities
- official links

### 7. Healthcare / Mental Health / Benefits Cluster

Purpose: stop scattering healthcare, mental health, benefits, and housing across random tabs.

Needed structure:
- Personal care and family stability category
- Healthcare page
- Mental health page
- benefits page or resources section
- housing support page

### 8. Small Business / Vendor / Community Partner Page

Purpose: vendors, small businesses, sponsors, and community groups need a clean path.

Needed:
- vendor interest form
- small business resources
- local partnership invitation
- SBA resources
- event participation
- sponsorship rules / campaign compliance note

### 9. Media Page Cleanup

Purpose: make media page public-facing, not a production manual.

Rules:
- Remove press-release templates from public view unless clearly labeled as media kit material
- Remove producer directions from public view
- Keep press releases, approved photos, videos, contact info, interview request
- Put production notes in private repo files, not public pages

### 10. Speech / Founding America Section

Purpose: strengthen speech with 13 colonies / United States logic.

Needed:
- 13 colonies in ratification order
- Washington battlefield leadership
- founders risked lives / fortunes / names
- United States not divided states
- THE ECHO line
- Fact-check safe wording

### 11. Write-In Voting Instructions

Purpose: voters need exact action.

Needed:
- How to write in Gregory R. Smith
- State-specific rules warning
- Check local election office
- Voter registration links
- Deadlines
- Ballot instructions disclaimer

### 12. Campaign Compliance / Legal Footer

Purpose: protect the campaign.

Needed:
- Paid-for disclaimer
- Contribution eligibility language
- Foreign national warning on contribution pages
- Privacy policy
- Accessibility
- External resource disclaimer

## Execution Order

Do not keep adding random boxes to the homepage. Build in this order:

1. Stabilize homepage
2. Clean top navigation and shared footer/header consistency
3. Clean media page
4. Add activity analytics badge only after real source is chosen
5. Build Second Chance employer directory shell
6. Build state-by-state directory shell
7. Expand trades/apprenticeship center
8. Expand housing/cost-of-living page
9. Expand veterans page
10. Expand healthcare/mental-health/benefits cluster
11. Add write-in voting instructions
12. Final mobile QA

## Campaign Tone Standard

Use strong language, but keep it public-safe:

- People over parties
- Accountability over politics
- Do the job right even when nobody is watching
- Compassion for the person, accountability for the office
- A record should not become a lifetime employment sentence
- United States, not divided states

Avoid:

- Unverified claims about who is watching
- Mocking age, disability, illness, or personal decline
- Public production instructions
- Fake urgency metrics
- Overcrowded navigation
- Pages full of duplicate buttons

## Immediate Next Move

The next development pass should create page shells for:

1. `activity.html`
2. `states.html`
3. `trades.html`
4. `housing.html`
5. `veterans.html`
6. `healthcare.html`
7. `small-business.html`
8. `write-in.html`

Then connect them through Resources and Platform in a controlled way.
