# EXEANT — Digital & Beyond

Starter strony EXEANT przygotowany do pracy z GitHubem i wdrożenia na Cloudflare Workers, z zachowaniem możliwości późniejszego uruchomienia na standardowym hostingu obsługującym Node.js.

## Technologie
- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- Supabase SSR / PostgreSQL — biblioteki dodane, integracja do wykonania
- Resend — biblioteka dodana, wysyłka do wykonania
- Zod — walidacja do wykorzystania

## Wymagania
- Node.js 20.9 lub nowszy (zalecany Node.js 22)
- npm 10 lub nowszy

## Uruchomienie lokalne

```bash
npm install
cp .env.example .env.local
npm run dev
```

Otwórz http://localhost:3000. Strona główna przekierowuje do `/pl`; wersja angielska jest pod `/en`.

## GitHub

1. Utwórz prywatne repozytorium `exeant`.
2. Wgraj do repozytorium całą zawartość tego folderu — `package.json` musi być w katalogu głównym repozytorium.
3. Nie dodawaj do GitHuba pliku `.env.local`, kluczy API, haseł ani danych logowania.
4. Aktualizacje strony będą wdrażane przez push do gałęzi `main`.

## Cloudflare — pierwsze wdrożenie

Projekt celowo nie zawiera na sztywno konfiguracji konkretnego hostingu. Dzięki temu kod pozostaje możliwie przenośny.

1. Zaloguj się do Cloudflare.
2. Otwórz **Workers & Pages** i rozpocznij tworzenie aplikacji z repozytorium Git.
3. Połącz GitHub i wybierz repozytorium `exeant`.
4. Ustaw katalog główny na `/` i gałąź produkcyjną na `main`.
5. Pozwól Cloudflare rozpoznać Next.js i zaproponować aktualną konfigurację wdrożeniową. Jeśli utworzy Pull Request z plikami konfiguracyjnymi, przejrzyj go i połącz z `main`.
6. Po udanym wdrożeniu dodaj zmienne środowiskowe w ustawieniach projektu.

Nie instaluj ręcznie adaptera ani nie dopisuj konfiguracji Wrangler przed przejściem automatycznej konfiguracji Cloudflare. Cloudflare może zmieniać zalecaną metodę obsługi Next.js; konfigurację dobieramy w momencie wdrożenia.

## Późniejszy hosting (VPS / hosting Node.js)

Kod aplikacji pozostaje standardową aplikacją Next.js. Na hostingu z obsługą Node.js typowe uruchomienie produkcyjne wygląda tak:

```bash
npm ci
npm run build
npm run start
```

Serwer powinien używać wspieranej wersji Node.js i kierować ruch HTTP/HTTPS na proces aplikacji (zwykle przez reverse proxy dostawcy hostingu). Konkretne ustawienia zależą od dostawcy.

## Dostępne skrypty

```bash
npm run dev    # lokalny serwer developerski
npm run build  # kompilacja produkcyjna Next.js
npm run start  # standardowy serwer produkcyjny Next.js
npm run lint   # sprawdzenie ESLint
```

## Co jest już w starterze
- wersje językowe PL/EN
- responsywny interfejs w estetyce dark tech
- publiczne sekcje: Digital, Projects, Tech & Gear, Beyond, Contact
- wstępna strona `/admin/login` — wyłącznie placeholder

## Czego jeszcze nie ma
- podłączonej bazy Supabase i migracji SQL
- działającego logowania administratora
- CMS do dodawania i edycji projektów oraz wpisów
- zapisu formularza kontaktowego i wysyłki przez Resend
- polityk RLS i autoryzacji panelu
- finalnych zdjęć, treści prawnych i pełnego SEO produkcyjnego

**Ważne:** panel `/admin` i formularz kontaktowy nie są jeszcze gotowe do użycia produkcyjnego. Nie publikuj ich jako działających funkcji przed wdrożeniem backendu, autoryzacji i zabezpieczeń.
