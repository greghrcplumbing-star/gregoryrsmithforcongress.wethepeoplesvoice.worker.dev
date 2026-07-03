# Cloudflare Deployment Handoff

## Repository

- Repository: `greghrcplumbing-star/wethepeoples-voice`
- Branch: `main`
- Root directory: repository root
- Build command: leave blank
- Deploy command: `npx wrangler deploy`

## Cloudflare settings to confirm

1. Open the existing Worker project.
2. Open **Settings**.
3. Open **Builds**.
4. Confirm the connected GitHub repository is `greghrcplumbing-star/wethepeoples-voice`.
5. Confirm the production branch is `main`.
6. Confirm the deploy command is `npx wrangler deploy`.
7. Save the configuration.
8. Trigger a deployment from the newest `main` commit.

## Live verification

After deployment, verify these paths:

- `/`
- `/about.html`
- `/priorities.html`
- `/speech.html`
- `/media.html`
- `/resources.html`
- `/education/index.html`
- `/tour/index.html`
- `/volunteer.html`
- `/echo-wall.html`
- `/contact.html`

## Expected newest speech commit

`95ad34ff154e2e803888a03dc8e1305f79d6fb84`

## Do not use

- `cloudflare-docs`
- old `.pp.ua` domains
- old preview sites
- a different Worker project
