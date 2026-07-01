# StudyForge — Project Rules

## Structure
Monorepo: apps/web (React+Vite+TS), apps/api (Express+TS), packages/shared-types (Zod schemas shared by both), prisma/ at root.

## Discipline
- Only build the current phase's scope. If something looks out of scope, flag it in the plan instead of building it.
- Always include the matching Prisma migration and Jest tests in the same task as a feature — never as a follow-up.
- Follow the existing controller/service/repository pattern once it exists (check apps/api/src/modules/auth as the template after Phase 1).

## Conventions
- Conventional Commits (feat:, fix:, chore:, test:)
- Zod validation on every API input
- Ownership checks in the service layer, not the controller
- Tailwind + dark mode default, rounded-2xl cards, soft shadows
