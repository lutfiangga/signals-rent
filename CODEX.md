# Rentra Framework - Codex Guidelines

## Project Identity
**Rentra** (formerly Signals) is an API-first rental management framework (CRM/ERP) for equipment rental and event hire companies.
- **Compatibility**: API-identical to Current RMS (CRMS).
- **Architecture**: Domain-driven, Action-oriented, API-first.
- **Multi-tenancy**: Database-per-tenant isolation (via `signals/cloud`).

## Core Tech Stack
- **PHP 8.4** (Constructor promotion, explicit types, etc.)
- **Laravel 12** (Streamlined structure, no Kernel files)
- **Livewire 4** / **Volt 1** (Single-file components)
- **Tailwind CSS 4** (Vite-first, `@theme` in CSS)
- **PostgreSQL** (JSONB, Functional Indexes)
- **Pest 4** (Parallel testing, Browser testing)

## Coding Standards & Patterns

### 1. The "Action" Pattern
All business logic MUST reside in invocable Action classes (`app/Actions`).
- **Input**: Spatie Laravel Data DTOs.
- **Verification**: `Gate::authorize()` inside the action.
- **Return**: Response DTO or Model.
- *Never* put complex logic in Controllers or Livewire components.

### 2. Spatie Laravel Data (DTOs)
Use DTOs for EVERYTHING instead of Form Requests or API Resources.
- **Validation**: Use `#[Validate]` attributes in DTOs.
- **Serialization**: Use `fromModel()` for API responses.

### 3. Database
- **Money**: `INTEGER` (minor units), cast via `finller/laravel-money`.
- **Primary Keys**: Auto-incrementing integers (`id`).
- **Timestamps**: Always UTC.
- **Soft Deletes**: Members, Opportunities, Invoices only.

### 4. UI & Components
- **Library**: [Flux UI Free](https://fluxui.dev) (`<flux:*>` tags).
- **Custom CSS**: Use `s-*` utility classes for domain-specific components.
- **Reactivity**: Prefer Livewire Volt functional components.

## Quality Gate (Run before every commit)
1. **Tests**: `php artisan test --parallel --compact`
2. **Formatting**: `vendor/bin/pint --dirty`
3. **Static Analysis**: `vendor/bin/phpstan analyse`

## Documentation & API
- **Auto-generated**: Scramble (`/docs/api`) via PHPDoc and types.
- **Registry Pattern**: Use for all extensible feature registrations (Navigation, Widgets, etc.).
