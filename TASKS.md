# Reflex Living Solutions — delivery backlog

This is the working task list for Dwayne and Tomiwa. It is ordered by dependency rather than by date.

## Ownership

- **D — Dwayne:** shared design system, integration, client communication, forms, deployment.
- **T — Tomiwa:** content preparation, supporting pages, asset organisation, second-pass QA.
- **B — Both:** decisions and reviews that need two sets of eyes.
- **C — Client:** facts, assets, approvals, and final acceptance.

To reduce merge conflicts, Dwayne owns `styles.css` and the shared header/footer until the page template is stable. Tomiwa can prepare page copy and outlines in separate Markdown files during that work, then build pages from the agreed template.

## Definition of done

The site is ready to launch when:

- all agreed pages exist and work at mobile, tablet, and desktop widths;
- no Meadowview names, invented claims, placeholder contact details, or demo notices remain;
- the client has approved the positioning, visual direction, copy, imagery, and contact journey;
- forms deliver successfully and show useful success and error states;
- accessibility, performance, metadata, links, and major browsers have been checked;
- company and privacy information is accurate;
- the production domain, HTTPS, repository, credentials, and handover notes are complete.

## 1. Establish facts and scope

- [ ] **D:** Create a content-and-facts checklist for the client.
- [ ] **D/C:** Confirm the legal company name, company number, registered address, trading address, phone number, email addresses, and service area.
- [ ] **D/C:** Confirm whether Reflex is a registered housing provider and whether either arm is regulated. Record the exact approved wording and registration details.
- [ ] **D/C:** Confirm that Reflex provides properties/housing rather than personal care, and agree language that keeps those roles distinct.
- [ ] **D/C:** Identify the primary audiences and rank them: prospective tenants/families, referrers, local authorities, support providers, and organisations seeking staff.
- [ ] **D/C:** Agree the primary action for each audience, such as enquire about a home, make a referral, report a repair, or request staffing.
- [ ] **D/C:** Agree the launch sitemap and explicitly record pages deferred until a later phase.
- [ ] **D/C:** Confirm whether Partners, Work With Us, Living With Reflex resources, FAQs, news, logins, and role-based access are in the launch scope.
- [ ] **D/C:** Put the price, included pages, revision allowance, content responsibilities, hosting, maintenance, and acceptance criteria in writing.
- [ ] **D/C:** Confirm who owns the domain and all third-party accounts. They should be registered in the client's name.

## 2. Gather and prepare content

- [ ] **T:** Create a page-by-page content matrix with purpose, audience, main message, CTA, required facts, images, and status.
- [ ] **T/C:** Obtain the original Reflex logo in SVG, PDF, or the highest-quality available format.
- [ ] **T/C:** Obtain approved property, lifestyle, staff, and partner imagery with permission to publish it.
- [ ] **T:** Maintain an image register containing source, owner/licence, intended page, alt-text idea, and approval status.
- [ ] **T:** Draft concise homepage copy using the approved tagline and clearly separating Living Solutions from Workforce Solutions.
- [ ] **T:** Draft About Reflex content covering who they are, their organisation, the two business arms, values, and approach.
- [ ] **T:** Draft What We Do content explaining supported living homes, housing management, workforce solutions, and the limits of each service.
- [ ] **T/C:** Collect genuine property details for Our Homes: location level safe to publish, audience, accessibility features, availability language, and enquiry route.
- [ ] **T/C:** Collect approved partner names, descriptions, logos, links, and permission to display them.
- [ ] **T/C:** Collect Work With Us information: whether it means staffing enquiries, vacancies, candidate registration, partnerships, or more than one journey.
- [ ] **T/C:** Obtain or draft the tenant resources: repairs, adaptations/DFGs, pets, energy saving, food safety, smoke-free homes, complaints, and maintenance.
- [ ] **T:** Mark every unsupported statement as `NEEDS CLIENT APPROVAL`; do not invent statistics, testimonials, staff names, registrations, or outcomes.
- [ ] **T:** Proofread approved copy for plain English, consistent UK spelling, respectful language, short paragraphs, and descriptive link text.

## 3. Build the reviewable design foundation

- [ ] **D:** Convert the existing header to Reflex branding with the real logo, contact details, and agreed navigation.
- [ ] **D:** Build an accessible mobile navigation with a visible menu control, keyboard operation, focus handling, and a usable no-JavaScript fallback.
- [ ] **D:** Create the shared footer with useful navigation, contact details, company information, privacy links, and copyright.
- [ ] **D:** Finish the reusable colour, typography, spacing, button, card, form, grid, and section styles in `styles.css`.
- [ ] **D:** Build the proposed homepage structure: photographic hero, two audience paths, What We Do, Our Approach, Living With Reflex shortcuts, CTA, and footer.
- [ ] **D:** Replace the current care-home hero placeholder with an approved supported-living image when supplied.
- [ ] **D:** Make the homepage work at narrow mobile, large mobile, tablet, laptop, and wide desktop sizes without horizontal scrolling.
- [ ] **D:** Add hover, focus, active, disabled, success, and error states to reusable interactive components.
- [ ] **D:** Create a clean internal-page template that Tomiwa can copy without editing the global structure.
- [ ] **B:** Review the homepage and page template together for hierarchy, spacing, consistency, wording, and mobile behaviour.

## 4. Client direction check-in — approval gate

Do this after the homepage and one internal-page template work on desktop and mobile, but before building every page.

- [ ] **D:** Publish or screen-share a private review version.
- [ ] **D:** Send a short review agenda in advance so feedback is specific rather than simply “looks good.”
- [ ] **D/C:** Confirm the black, burnt-orange, and warm-neutral visual direction.
- [ ] **D/C:** Confirm the logo treatment, photography style, typography, header, navigation, and footer.
- [ ] **D/C:** Confirm the hero message, the two business arms, and the CTA for each audience.
- [ ] **D/C:** Confirm the launch sitemap and what is explicitly deferred.
- [ ] **D/C:** Confirm all facts still missing from sections 1 and 2.
- [ ] **D/C:** Confirm the contact/form journeys and which inbox receives each enquiry type.
- [ ] **D/C:** Agree one consolidated feedback list and identify who has final approval.
- [ ] **D:** Write the decisions down and update this backlog before further page production.

## 5. Produce the agreed pages

Start this section after the client check-in. Tomiwa builds from Dwayne's stable internal-page template.

- [ ] **T:** Replace `about.html` with the approved About Reflex page.
- [ ] **T:** Build `what-we-do.html` with clear sections for Supported Living Homes and Workforce Solutions.
- [ ] **T:** Build `our-homes.html` using genuine property information and a useful enquiry route.
- [ ] **T:** Build `our-partners.html` if confirmed for launch.
- [ ] **T:** Build `work-with-us.html` if confirmed for launch.
- [ ] **T:** Build a Living With Reflex landing page if confirmed for launch.
- [ ] **T:** Add each approved tenant resource as an accessible HTML page or downloadable document with file type and size shown.
- [ ] **T:** Add useful empty states when there are no current homes, vacancies, partners, or downloads rather than leaving blank sections.
- [ ] **D:** Rebuild `contact.html` around the agreed enquiry journeys and verified contact information.
- [ ] **D:** Add privacy and other required legal pages using client-approved wording.
- [ ] **D:** Integrate each page into the shared navigation and footer, including correct active-page states.
- [ ] **B:** Review each other's pages before merging: one checks presentation and behaviour while the other checks accuracy and clarity.

## 6. Make enquiries work

- [ ] **D/C:** Choose the form destination or service and confirm who receives submissions.
- [ ] **D:** Add the agreed enquiry types, potentially including homes/referrals, staffing, repairs, complaints, compliments, partnerships, and general enquiries.
- [ ] **D:** Ask only for information required to handle the enquiry; avoid collecting unnecessary sensitive personal information.
- [ ] **D:** Add clear required-field guidance, validation, accessible errors, a success message, and a failure/retry message.
- [ ] **D:** Add spam protection that does not create an avoidable accessibility barrier.
- [ ] **D:** Link the form to the privacy notice and explain how submitted information will be used.
- [ ] **D:** Test real delivery to every routed inbox on mobile and desktop, including reply-to details and spam-folder behaviour.
- [ ] **T:** Test the form as a first-time visitor and record anything confusing or missing.

## 7. Accessibility and inclusive content

- [ ] **T:** Check heading order, landmarks, page titles, link purpose, form labels, instructions, and image alt text on every page.
- [ ] **D:** Check full keyboard operation, visible focus, skip link, mobile menu behaviour, and focus movement.
- [ ] **D:** Verify normal text and interactive-state contrast against WCAG 2.2 AA.
- [ ] **D:** Test zoom at 200% and reflow at a 320 CSS-pixel width without loss of content or functionality.
- [ ] **D:** Respect reduced-motion preferences for any animation or smooth scrolling.
- [ ] **T:** Check that tenant-facing language is understandable and provide Easy Read material where the client requires it.
- [ ] **B:** Run an automated accessibility scan, then manually test the issues automation cannot judge.

## 8. Quality, performance, and search presentation

- [ ] **T:** Replace every remaining occurrence of Meadowview, dummy phone numbers, dummy addresses, invented staff, unsupported figures, and placeholder notes.
- [ ] **T:** Click every internal link, telephone link, email link, download, CTA, logo, and navigation item.
- [ ] **D:** Give every page a unique, accurate title, meta description, canonical URL, and one clear `h1`.
- [ ] **D:** Add a favicon and social-sharing image using approved Reflex assets.
- [ ] **D:** Add meaningful image dimensions, responsive image sizes, modern compressed formats where useful, and lazy loading below the fold.
- [ ] **D:** Keep the hero image prioritised and prevent layout shift as fonts and images load.
- [ ] **D:** Add `404.html`, `robots.txt`, and `sitemap.xml` for the production domain.
- [ ] **D:** Add structured organisation data only after the legal business details are verified.
- [ ] **B:** Test current Chrome, Safari, Firefox, and Edge, plus at least one real iPhone and one real Android device if available.
- [ ] **B:** Run Lighthouse on representative pages and resolve material accessibility, performance, SEO, and best-practice findings.
- [ ] **B:** Check spelling, grammar, dates, company details, visual consistency, and content overflow one final time.

## 9. Privacy, analytics, and compliance

- [ ] **D/C:** Decide whether analytics are needed. Prefer privacy-conscious measurement and document the decision.
- [ ] **D:** Add a cookie consent mechanism only if the final site sets non-essential cookies or uses services that require consent.
- [ ] **D/C:** Approve the privacy notice, retention/contact wording, complaints route, and any required regulatory statements.
- [ ] **T:** Verify that all published policies and downloads are current, named clearly, dated where appropriate, and accessible.
- [ ] **D:** Ensure embedded maps, videos, analytics, form providers, and fonts are reflected accurately in privacy/cookie information.

## 10. Launch and handover

- [ ] **D:** Configure GitHub Pages from the agreed production branch and verify clean builds.
- [ ] **D/C:** Connect the client-owned domain, configure DNS, enforce HTTPS, and choose the canonical `www` or non-`www` address.
- [ ] **D:** Test the production site again after DNS and HTTPS are active; do not rely only on the local version.
- [ ] **D:** Confirm forms, downloads, phone/email links, favicons, social previews, 404 handling, and analytics on production.
- [ ] **C:** Complete a final acceptance review against the written scope and provide approval in writing.
- [ ] **D:** Tag or branch the approved release and retain a recoverable copy of the launch version.
- [ ] **D:** Write a short maintenance guide covering text changes, image replacement, new pages, form destination, deployment, and rollback.
- [ ] **D/C:** Transfer or confirm access to the repository, domain, hosting, forms, analytics, and asset library without sharing passwords in documents.
- [ ] **D/C:** Agree post-launch support, response expectations, chargeable changes, and who maintains content after handover.

## Immediate parallel work

This is the safest starting split from the current repository state:

### Dwayne

- [ ] Finalise the shared header, navigation, footer, and internal-page template.
- [ ] Rebuild the homepage from the approved wireframe direction.
- [ ] Make the shared components responsive and keyboard accessible.
- [ ] Prepare the client facts/scope questions and own the check-in.

### Tomiwa

- [ ] Build the content matrix and list every piece of client content still needed.
- [ ] Draft the About, What We Do, and Our Homes copy without unsupported claims.
- [ ] Organise the logo, photos, partner assets, tenant resources, and permissions.
- [ ] Prepare page outlines in Markdown while the shared HTML template is being stabilised.

### Then together

- [ ] Review the homepage at mobile and desktop sizes.
- [ ] Hold the client check-in and turn the response into one agreed revision list.
- [ ] Freeze the shared template, then build separate pages in parallel.

## Reference notes

The IKE reference site separates the landlord/housing role from support provision, gives properties and partners their own pages, and provides a tenant resource area for repairs, adaptations, policies, complaints, and maintenance. Use those ideas as information-architecture references; do not copy its wording or design.
