# Contemporary Psychology ADHD Services Landing Page

## Overview

This is a modern, single-page marketing website for Contemporary Psychology, a Melbourne-based psychology clinic specializing in ADHD assessment and coaching services. The application features a clean, professional design with a cyan-to-magenta gradient color scheme that reflects the clinic's brand identity. The site provides information about ADHD services, guides users through the assessment pathway, showcases team expertise, displays client testimonials, and includes a contact form for booking consultations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript running on Vite for fast development and optimized production builds.

**Routing**: Wouter for lightweight client-side routing. The application is primarily a single-page site with a home route and 404 fallback.

**UI Component System**: Radix UI primitives wrapped with custom shadcn/ui components, providing accessible, unstyled components that are styled with Tailwind CSS. The component library includes forms, dialogs, cards, buttons, and other common UI patterns.

**Styling**: Tailwind CSS with a custom design system defined in `client/src/index.css`. The color palette uses CSS custom properties for themeable colors including primary cyan (#16BAC5), accent magenta (#D946EF), and neutral grays. Typography uses Montserrat for headings and Open Sans for body text.

**State Management**: React Query (TanStack Query) for server state management, with local component state using React hooks.

**Design System**: Custom spacing scale (4, 6, 8, 12, 16, 20, 24), consistent border radius (.5rem), and a comprehensive color token system supporting both light and potential dark modes.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Build System**: Custom build script using esbuild for server bundling and Vite for client bundling. The server bundles allowlisted dependencies to reduce cold start times.

**Static File Serving**: Express serves the built client application from the `dist/public` directory in production. In development, Vite middleware provides HMR (Hot Module Replacement).

**API Structure**: RESTful API routes are registered through `server/routes.ts` with all application routes prefixed with `/api`. The current implementation uses a minimal storage interface for potential future CRUD operations.

**Storage Layer**: Abstracted storage interface (`IStorage`) with an in-memory implementation (`MemStorage`). This provides a clean contract for potential database integration while allowing the application to run without external dependencies initially.

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL (Neon Database serverless).

**Schema Design**: Minimal user schema defined in `shared/schema.ts` with UUID primary keys and Zod validation schemas. The schema currently includes a basic users table with username/password fields.

**Migration System**: Drizzle Kit for schema migrations, outputting to `./migrations` directory.

**Session Management**: Infrastructure supports connect-pg-simple for PostgreSQL session storage, though current implementation uses in-memory storage.

**Database Provider**: Configured for Neon Database serverless PostgreSQL (@neondatabase/serverless).

### External Dependencies

**UI Component Libraries**:
- Radix UI (comprehensive set of primitives: accordion, dialog, dropdown, popover, toast, etc.)
- shadcn/ui component system built on Radix primitives
- Embla Carousel for potential image carousels
- cmdk for command palette functionality
- Lucide React for icons
- React Icons (specifically SiLinkedin)

**Form Handling**:
- React Hook Form for form state management
- Hookform Resolvers for validation integration
- Zod for schema validation

**Styling**:
- Tailwind CSS for utility-first styling
- class-variance-authority for component variant management
- clsx and tailwind-merge for className composition

**API & Data Fetching**:
- TanStack React Query for server state management and caching
- Fetch API with custom wrapper functions

**Database & ORM**:
- Drizzle ORM for type-safe database queries
- Drizzle Zod for schema-to-validation integration
- Neon Database serverless PostgreSQL driver

**Date Handling**:
- date-fns for date formatting and manipulation

**Development Tools**:
- Replit-specific plugins for error overlay, cartographer, and dev banner
- TypeScript for type safety across client and server
- ESBuild for production server bundling
- Vite for client bundling and development server

**Font Loading**: Google Fonts integration for Montserrat, Open Sans, and supporting fonts (Architects Daughter, DM Sans, Fira Code, Geist Mono).

**Asset Management**: Static assets stored in `attached_assets` directory including brand logo, generated hero images, and branding JSON configurations.