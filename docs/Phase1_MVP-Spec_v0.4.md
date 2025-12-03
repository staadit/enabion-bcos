# EnabionNexus – Phase1_MVP-Spec_v0.4 (X-first)

**Status:** Draft (Phase 1 – working master, X-first)  
**Owner:** CEO (business) + Mieszko2.0 (product/tech)  
**Last update:** 2025-12-03  
**Source:** EnabionNexus – Playbook v1.6 (master business doc)  
**Scope:** Ten dokument jest jedynym głównym dokumentem wykonawczym Phase 1 (MVP).  
Wszelkie inne notatki / backlogi / taski są jego rozwinięciem. W przypadku konfliktu – ten dokument wygrywa.

> Phase 1 = X-first MVP. Bohaterem jest firma X (ma potrzebę, ale nie wie dokładnie co i z kim zrobić).  
> Firmy Y są obsłużone w wersji Vendor-lite / Y-lite (Guest Portal / Response + prosty workspace), bez pełnego OS po ich stronie.

---

## 0. Jak czytać ten dokument

- Playbook v1.6 – wizja 2030, CONNECT → POWER → GROW, 5-Step Lifecycle, Trust Graph itd.  
- Phase1_MVP-Spec_v0.4 (X-first) – wąski, dowożalny zakres pierwszego produktu z perspektywy X.  

Dokument łączy:

1. Cel biznesowy Phase 1 dla X.  
2. Zakres produktu (moduły MVP).  
3. Wymagania funkcjonalne i niefunkcjonalne (v0).  
4. Architekturę i model danych v0 (X-first, Y-lite).  
5. Rynki i języki (PL / DE / EN).  
6. Metryki sukcesu Phase 1 i kamienie milowe.

---

## 1. Phase 1 – cel, zakres, sukces (X-first)

### 1.1 Cel Phase 1 (z perspektywy X)

Dowieźć X-first MVP Business Collaboration OS, który dla firm X w PL/DE:

- zamienia chaotyczne pomysły, maile i prezentacje w ustrukturyzowany Intent,
- pomaga zbudować kryteria wyboru partnerów Y,
- umożliwia porównanie i wybór partnera w jednym Decision Room,
- daje podstawową warstwę NDA / L1/L2 i Trust Room do pierwszych rozmów.

To pokrywa głównie kroki 1–3 Enabion 5-Step Partnership Lifecycle: Clarify → Match & Align → Commit & Assure, z minimalnym Deliver (Trust Room).

### 1.2 Wysokopoziomowy zakres MVP

MVP robi wyłącznie:

1. X Intent Studio / Intent Coach (Clarify).  
2. Decision Model Builder (kryteria wyboru partnera).  
3. Vendor Candidates & Vendor-lite Response (BYOV – bring your own vendors).  
4. Evaluation Matrix & Decision Room (Match & Align → Commit & Assure).  
5. NDA & Confidentiality L1/L2 (Warstwa 0/1/2 lite).  
6. X↔Y Trust Room (lite) dla wybranego partnera.  
7. X Intent Pipeline (statusy Draft → Clarify → Evaluate → Decision).  
8. Języki: EN (domyślny) + PL i DE (native).  
9. Część dla Y („Y-lite workspace”) pozwalająca na:
   - stworzenie prostego konta organizacji typu Y,
   - przegląd wszystkich otrzymanych Intentów (zaproszeń od X),
   - odpowiadanie na Intenty przez Vendor-lite Response Portal,
   - korzystanie z Avatara współpracy po stronie Y (pomoc w odpowiedziach).

### 1.3 Out of scope (Phase 1)

- Otwarty marketplace X↔Y (publiczne ogłoszenia, bidding, ranking).  
- Pełny OS dla Y (pipeline Y, dashboard Y, advanced TrustScore dla Y).  
- Warstwa finansowa (escrow, Financial TrustScore, dispute resolution).  
- EnableMark program, Hubs i pełny Trust Graph (tylko minimalny Trust v0).  
- Data Models 2/3 (Shielded/Sovereign) jako produkt (tylko w architekturze).

### 1.4 Definicja sukcesu Phase 1 (X-first)

- Minimum 3 pilotów X (PL/DE), którzy korzystają z systemu do realnej decyzji o wyborze partnera Y.  
- Minimum 10 Intentów przeprowadzonych przez pełny flow: Intent → Criteria → Vendor Responses → Decision.  
- Subiektywny wow X: 
  - "Bez Enabion ugrzęźlibyśmy w mailach / slajdach", 
  - jasna, używalna Decision Summary dla zarządu/procurementu.  
- System stabilny, multi-tenant, Model 1 – Standard (EU region) i gotowy fundament pod Phase 2 (pełny OS dla Y).

---

## 2. Rynki i języki – PL / DE / EN

### 2.1 Rynki Phase 1

- Polska (PL) – firmy X planujące projekty tech/AI/digital oraz firmy Y pełniące rolę vendorów w tych projektach.  
- Niemcy (DE) – firmy X (oraz Y jako vendorzy), podobny profil, plus cross-border X↔Y PL/DE.

### 2.2 Języki produktu

MVP jest natywne dla:

- EN – domyślny język systemu (UI, dokumentacja, product copy),  
- PL – pełna lokalizacja UI + Avatary rozumieją i generują PL,  
- DE – pełna lokalizacja UI + Avatary rozumieją i generują DE.

Konsekwencje:

- wszystkie teksty UI w i18n (klucze lokalizacyjne), żadnych hard-coded tekstów,  
- Organization ma `default_language` (EN/PL/DE),  
- User ma `preferred_language` (EN/PL/DE),  
- Avatary:
  - rozumieją input w EN/PL/DE,  
  - domyślnie odpowiadają w języku użytkownika,  
  - potrafią przetłumaczyć Intent/Decision Summary na EN/PL/DE ("Translate to…"),  
  - mają też możliwość wysyłania wiadomości nietłumaczonych, jeżeli np. użytkownik zna DE i PL.

---

## 3. ICP i persony (X-first)

### 3.1 ICP – firmy X

ICP-X-1: Mid-size firmy X (PL/DE) 50–500 osób:

- planują projekt technologiczny / AI / digital,  
- nie mają pełnego, dojrzałego procesu IT procurement,  
- boją się złego wyboru partnera,  
- toną w dokumentach, mailach, prezentacjach, wersjach RFP.

Przykładowe branże: retail, manufacturing, finance, services.

### 3.2 Persony

1. Project Owner X  
   - właściciel biznesowy inicjatywy, ma budżet i KPI,  
   - potrzebuje jasnego uzasadnienia decyzji (vendor A vs B).

2. Transformation / IT Lead X  
   - tłumaczy potrzeby biznesowe na wymagania tech,  
   - współdecyduje o kryteriach i vendorach.

3. Procurement / Legal Reviewer  
   - dba o zgodność z procedurami,  
   - potrzebuje Decision Summary w formie zrozumiałej dla audytu.

4. Vendor Y – Guest / VendorUser  
   - odpowiada na Intent X przez Vendor-lite Response Portal,  
   - nie ma pełnego OS, tylko minimalny UI do odpowiedzi lub prosty Y-lite workspace.

5. Dla MVP i małych firm może się okazać, że wszystkie role po stronie X/Y pełni jedna i ta sama osoba.

---

## 4. Kluczowe doświadczenia (UX / WOW)

### 4.1 "Od chaosu do decyzji"

X zaczyna z rozmytym "musimy coś zrobić":

- nie wie dokładnie co, lub wie, ale nie wie jak zacząć,  
- nie wie z kim,  
- nie ma kryteriów ani jednego miejsca na porównanie opcji.

Enabion Phase 1:

> W ciągu jednego dnia X ma:  
> - doprecyzowany Intent,  
> - jasne kryteria wyboru partnerów,  
> - porównanie 2–3 vendorów,  
> - rekomendację (AI + własną),  
> - Decision Summary do zarządu/procurementu,  
> - komunikację i wysyłanie e-maili do vendorów w Enabion (z pomocą Avatara).

### 4.2 Vendor Y – lepsze niż "wyślij nam prezentację"

Y nie musi walczyć z 20 różnymi formatami RFP.  

Dostaje jeden, zrozumiały Intent i Response Form, w którym Avatar pomaga napisać sensowną odpowiedź po EN/PL/DE.

---

## 5. Moduły MVP (X-first)

### 5.1 X Organizations & Users

Opis: podstawowy model organizacji X (i minimalnie Y) z użytkownikami i rolami.

In scope:

- Organization z polem `org_type: X | Y`.  
- Profil X: nazwa, kraj, branże, size band, rynki, języki, URL.  
- Role X: `OrgAdmin`, `ProjectOwner`, `Evaluator`, `Viewer`.  
- Organizacje Y jako vendor-lite (Y może istnieć też tylko jako VendorCandidate bez pełnego konta / Y-lite workspace).

Out of scope:

- granularne role, złożone uprawnienia, wielopoziomowe struktury hierarchiczne.

---

### 5.2 X Intent Studio (Intent Coach)

Opis: serce MVP – doprecyzowanie potrzeby X (Clarify).

In scope:

- Tworzenie Intentu:
  - z pustego formularza ("Start from scratch"),  
  - z wklejonego tekstu (mail, notatki, transkrypt).  
- Avatar Intent Coach:
  - zadaje pytania doprecyzowujące,  
  - wypełnia pola Intentu: cel biznesowy, kontekst, zakres high-level, KPI, budżet widełki, timeline, ryzyka, ograniczenia, preferowany model współpracy, język.  
- Oznaczanie poziomu poufności Intentu (L1 / L2).  
- Edycja Intentu przez X i wersjonowanie (v1, v2…).

Out of scope:

- template’y ultra-specyficzne dla danej branży (Phase 2+),  
- integracje bezpośrednie z narzędziami notek/whiteboard (Phase 2+).

---

### 5.3 Decision Model Builder (kryteria wyboru partnerów Y)

Opis: przekłada Intent na kryteria i wagi oceny partnerów.

In scope:

- Avatar proponuje listę kryteriów (kompetencje, doświadczenie, lokalizacja, język, cena, ryzyka, kultura, governance).  
- Użytkownik:
  - dodaje/usuwa kryteria,  
  - ustawia wagi (0–5),  
  - oznacza must-have vs nice-to-have.  
- Tworzy się macierz oceny, która będzie użyta w Evaluation Matrix.  
- Generowanie krótkiego tekstu "How we choose vendors" – do Decision Summary.

Out of scope:

- zaawansowane scoringi machine-learningowe (na dużej historii projektów),  
- automatyczne importowanie kryteriów z polityk korporacyjnych (Phase 2+).

---

### 5.4 Vendor Candidates (BYOV) & Invitations

Opis: X dodaje potencjalnych partnerów Y do porównania.

In scope:

- Możliwość dodania VendorCandidate:
  - jako prosty rekord: nazwa firmy, kontakt, kraj, URL, notatka,  
  - opcjonalnie powiązanie z istniejącą Organization typu Y (gdy powstanie pełniejszy OS dla Y).  
- Generowanie indywidualnych zaproszeń (linków) do Vendor-lite Response Portal.  
- Śledzenie statusu: invited / opened / responded / no response.  
- Opcjonalna pomoc Avatara: X może poprosić Avatara o zaproponowanie potencjalnych VendorCandidates na podstawie Intentu (publiczne źródła). X sam decyduje, które propozycje dodać jako VendorCandidate.

Out of scope:

- publiczny katalog vendorów,  
- reklamy, listing fees, tokenizacja "slotów".

---

### 5.5 Vendor-lite Response Portal (Y Guest)

Opis: minimalny portal, w którym Y widzi Intent X i odpowiada w ustrukturyzowany sposób.

In scope:

- Strona z Intentem (read-only) + krótka sekcja "O X" i "Jak oceniamy vendorów".  
- Formularz odpowiedzi:
  - sekcje dopasowane do kryteriów (np. doświadczenie, approach, timeline, koszt, zespół, ryzyka),  
  - możliwość dołączenia referencji (URL / tekst, nie pliki binarne na MVP).  
- Avatar, który pomaga Y napisać odpowiedź (EN/PL/DE).  
- Po wysłaniu dane są zapamiętywane jako VendorResponse i mapowane na Evaluation Matrix.

Out of scope:

- pełne konto Y z pipeline’em, dashboardem, TrustScore,  
- zarządzanie dokumentami kontraktowymi po stronie Y.

---

### 5.6 Evaluation Matrix & Decision Room

Opis: miejsce, gdzie X porównuje vendorów i podejmuje decyzję.

In scope:

- Widok macierzy:
  - wiersze: vendorzy Y,  
  - kolumny: kryteria,  
  - komórki: score + komentarz.  
- Avatar:
  - proponuje initial score na podstawie odpowiedzi Y i wag kryteriów,  
  - podświetla ryzyka (np. brak doświadczenia w branży),  
  - sugeruje pytania follow-up.  
- X może ręcznie korygować score i dodawać komentarze.  
- Decision Summary:
  - ranking vendorów,  
  - rekomendacja Avatara (z zastrzeżeniem, że to sugestia, nie decyzja),  
  - finalny wybór vendorów i uzasadnienie (tekst dla zarządu/procurementu).

Out of scope:

- automatyczne generowanie formalnego kontraktu (Phase 2+),  
- integracja z wewnętrznymi systemami purchase order.

---

### 5.7 NDA & Confidentiality (L1 / L2, warstwy 0/1/2 lite)

Opis: prosty model NDA w Phase 1.

In scope:

- Oznaczanie spisu treści / komunikacji jako L1 / L2.  
- Warstwa 0: No-NDA Zone (L1) – Clarify i wysoki poziom Match & Align mogą działać bez NDA.  
- Warstwa 1: Enabion Mutual NDA – click-wrap dla pre-sales (może być włączony w MVP jako opt-in).  
- Warstwa 2: Custom NDA FastTrack – X może zarejestrować swój wzór NDA i zaznaczyć status NDA per vendor (placeholder, nie pełna integracja e-podpisu).  
- System ostrzega użytkownika, gdy próbuje oznaczyć treści jako L2 bez aktywnej NDA.

Out of scope:

- integracje z DocuSign / Adobe Sign (poza prostym przechowywaniem statusu),  
- pełne zarządzanie cyklem życia NDA.

---

### 5.8 Trust Room (Secure Collaboration Room lite)

Opis: dialog X↔wybrany vendor Y w jednym pokoju.

In scope:

- Jeden Trust Room per Intent + Vendor (lub Intent + lista vendorów w fazie pytań).  
- Wiadomości z flagą L1/L2.  
- Avatar w pokoju:
  - generuje podsumowania,  
  - przypomina o ryzykach / zadaniach,  
  - ostrzega przy próbie wprowadzenia L2 bez NDA.

Out of scope:

- zaawansowany file-sharing (Phase 2 – na linkach / integracjach),  
- integracje push/pull z Teams/Slack poza prostymi powiadomieniami.

---

### 5.9 X Intent Pipeline

Opis: krótki pipeline Intentów po stronie X.

In scope:

- Statusy Intentu:
  - Draft, Clarify, Evaluate Vendors, Decision, On Hold, Archived.  
- Widok tabeli / kanbana:
  - kolumny: status, owner, budżet widełki, rynek (PL/DE/Other), język, liczba vendorów.  
- Proste filtry (status, owner, kraj, język).

Out of scope:

- pełny CRM, forecasty, revenue pipeline Y.

---

### 5.10 Y-lite Workspace (Vendor-side view)

Opis:  
Minimalny widok „konta dostawcy” dla firm Y, które odpowiadają na więcej niż jeden Intent.  
Y-lite workspace NIE jest pełnym OS dla Y – służy tylko do obsługi zaproszeń od X.

In scope (Phase 1):

- Organizacja może mieć `org_type: Y` (vendor).  
- Użytkownik Y (rola `VendorUser`) po zalogowaniu:
  - widzi listę wszystkich VendorCandidates powiązanych z jego organizacją lub mailem (czyli Intenty, do których został zaproszony),  
  - może otworzyć każdy Intent w widoku read-only,  
  - może przejść do formularza odpowiedzi (Vendor-lite Response Portal) i wysłać/edytować swoją odpowiedź,  
  - widzi statusy: zaproszony / odpowiedział / w trakcie rozmów.  
- Y ma dostęp do Avatara współpracy:
  - pomoc w pisaniu odpowiedzi (EN/PL/DE),  
  - pomoc w formułowaniu pytań do X,  
  - krótkie podsumowania rozmowy w Trust Room.

Out of scope (Phase 1):

- pełny pipeline sprzedażowy / forecast po stronie Y,  
- zaawansowane dashboardy TrustScore dla Y,  
- zarządzanie wieloma zespołami/rolami wewnątrz Y (na MVP wystarczy jedna rola `VendorUser`).

---

## 6. User Journeys (X-first)

### 6.1 Journey #0 – X doprecyzowuje potrzebę (bez vendorów)

1. OrgAdmin X zakłada organizację, wybiera domyślny język (PL/DE/EN).  
2. ProjectOwner X tworzy Intent w Intent Studio (blank lub paste).  
3. Avatar Intent Coach zadaje pytania i generuje strukturalny Intent.  
4. X edytuje i akceptuje Intent v1, status = Draft → Clarify.

### 6.2 Journey #1 – X definiuje kryteria i zaprasza vendorów

1. X otwiera Intent, przechodzi do Decision Model Builder.  
2. Avatar proponuje kryteria; X ustawia wagi i must-have.  
3. X dodaje 2–3 VendorCandidates (istniejący partnerzy, nowe firmy).  
3a. (Opcjonalnie) X prosi Avatara o sugestie vendorów. Avatar pokazuje listę potencjalnych firm na podstawie Intenta. X wybiera 1–2 z nich i dodaje jako VendorCandidates (`source = ENABION_SUGGESTED`).  
4. System wysyła im zaproszenia do Vendor-lite Response Portal.  
5. Status Intentu = Evaluate Vendors.

### 6.3 Journey #2 – Vendor Y odpowiada, X porównuje i decyduje

1. Vendor Y otwiera link, widzi Intent X i formularz odpowiedzi.  
2. Y wypełnia odpowiedź (z pomocą Avatara) i wysyła.  
3. X widzi odpowiedzi w Evaluation Matrix, z initial scoring AI.  
4. X modyfikuje score, dodaje komentarze, pyta follow-up (komentarze / Trust Room).  
5. W Decision Room X wybiera vendorów, zapisuje decyzję i uzasadnienie.  
6. Status Intentu = Decision → Archived lub On Hold.

### 6.4 Journey #3 – Trust Room po wyborze partnera

1. Po wyborze vendorów X może aktywować NDA na poziomie Intent-Vendor.  
2. Tworzony jest Trust Room dla Intentu i wybranego vendora.  
3. X i Y wymieniają pierwsze informacje L2 (po NDA) i ustalają next steps.

### 6.5 Journey #4 – Vendor Y używa Y-lite Workspace

1. Firma Y otrzymuje zaproszenie do Intentu (link z Enabion).  
2. Przed wysłaniem odpowiedzi przedstawiciel Y wybiera opcję „Chcę mieć konto i widzieć wszystkie moje Intenty” → tworzy się konto organizacji typu Y i użytkownik `VendorUser`.  
3. `VendorUser` loguje się do Y-lite Workspace i widzi listę wszystkich Intentów, do których został zaproszony.  
4. Otwiera wybrany Intent, korzysta z Avatara, aby napisać odpowiedź, i wysyła ją do X.  
5. W kolejnych zaproszeniach Y nie musi zakładać konta – nowe VendorCandidates są automatycznie widoczne na liście w Y-lite Workspace.

---

## 7. Functional Requirements (FR) – v0

### 7.1 Organizations & Users

- FR-ORG-001 – System allows creating organizations with `org_type: X|Y`.  
- FR-ORG-002 – Org X profile stores: name, country, industries, size_band, markets, languages, website.  
- FR-ORG-003 – Roles for X: OrgAdmin, ProjectOwner, Evaluator, Viewer. Lub wszystkie role może pełnić jedna osoba dla małych firm.  
- FR-ORG-004 – Guest vendor Y can respond to an Intent via tokenized link without full account. All interactions are logged.

### 7.2 Language & Localization

- FR-LANG-001 – Organization has `default_language` (EN/PL/DE).  
- FR-LANG-002 – User has `preferred_language` (EN/PL/DE).  
- FR-LANG-003 – All static UI strings are loaded from localization files for EN/PL/DE.  
- FR-LANG-004 – Avatars accept input and generate output in EN/PL/DE.

### 7.3 X Intent Studio

- FR-INT-001 – User can create Intent from scratch or by pasting free-form text.  
- FR-INT-002 – Avatar generates structured Intent fields from free text.  
- FR-INT-003 – User can edit generated Intent and save a version.  
- FR-INT-004 – Intent has `confidentiality_level` field (L1/L2).

### 7.4 Decision Model

- FR-DEC-001 – System allows adding evaluation criteria (name, description, weight, must_have).  
- FR-DEC-002 – Avatar can propose an initial set of criteria based on Intent.  
- FR-DEC-003 – Criteria are linked to an Intent and used in Vendor Responses and Evaluation Matrix.

### 7.5 Vendor Candidates & Responses

- FR-VEN-001 – User can create VendorCandidate with name and contact email.  
- FR-VEN-002 – System generates unique invitation URL per VendorCandidate.  
- FR-VEN-003 – Vendor can submit a structured response mapped to Intent criteria.  
- FR-VEN-004 – Vendor responses are stored as VendorResponse entities linked to VendorCandidate and Intent.  
- FR-VEN-005 – User (X) can ask Avatar to search public internet sources for potential VendorCandidates based on the Intent. Avatar pokazuje listę propozycji (nazwa firmy, URL, krótki opis „dlaczego pasuje”), bez automatycznego kontaktu z tymi firmami.  
- FR-VEN-006 – X może wybrać, które z proponowanych firm dodać jako VendorCandidate. Przy dodaniu system zapisuje `source = 'ENABION_SUGGESTED'` dla tego VendorCandidate.

### 7.6 Evaluation Matrix & Decision

- FR-EVAL-001 – System displays an evaluation matrix for each Intent with vendors vs criteria.  
- FR-EVAL-002 – Users can assign and edit scores per vendor-criterion.  
- FR-EVAL-003 – Avatar can propose initial scores based on VendorResponses.  
- FR-EVAL-004 – System stores a Decision entity with selected vendors and rationale text.

### 7.7 NDA & Confidentiality

- FR-NDA-001 – System allows tracking NDA status per Intent-Vendor (none / mutual / custom).  
- FR-NDA-002 – System prevents marking messages as L2 without NDA (or shows strong warning).  
- FR-NDA-003 – NDA acceptance events are logged (user, timestamp, type).

### 7.8 Trust Room

- FR-ROOM-001 – System can create a Trust Room linked to an Intent and vendor.  
- FR-ROOM-002 – Users can post messages with text content and L1/L2 flag.  
- FR-ROOM-003 – Avatar can produce a summary of the conversation on demand.

### 7.9 X Intent Pipeline

- FR-PIPE-001 – Intent has a `status` from a fixed enum: Draft, Clarify, EvaluateVendors, Decision, OnHold, Archived.  
- FR-PIPE-002 – System provides a list/board view of all Intents for an organization with filters by status, owner, market, language.

### 7.10 Y-lite Workspace (Vendor-side view)

- FR-Y-001 – Organization with `org_type: Y` może mieć co najmniej jednego użytkownika z rolą `VendorUser`.  
- FR-Y-002 – Po zalogowaniu `VendorUser` widzi listę wszystkich VendorCandidates powiązanych z jego organizacją lub adresem e-mail (Intenty, do których został zaproszony).  
- FR-Y-003 – `VendorUser` może otworzyć zaproszony Intent, przejść do formularza odpowiedzi (Vendor-lite Response Portal) oraz zapisać/edytować swoją odpowiedź.  
- FR-Y-004 – `VendorUser` ma dostęp do Avatara współpracy, który pomaga pisać odpowiedzi oraz pytania do X (EN/PL/DE).

---

## 8. Non-Functional Requirements (NFR) – v0

### 8.1 Ogólne

- NFR-GEN-001 – Phase 1 działa w Data Model 1 – Standard (multi-tenant, EU region).  
- NFR-GEN-002 – Aplikacja webowa (desktop-first, mobile-friendly).

### 8.2 Wydajność

- NFR-PERF-001 – P95 czasu odpowiedzi AI (Intent generation, scoring) < 15 s dla 2 000 słów inputu.  
- NFR-PERF-002 – P95 czasu odpowiedzi UI (bez AI) < 500 ms.

### 8.3 Bezpieczeństwo

- NFR-SEC-001 – Wszystkie rekordy są powiązane z `organization_id`, izolacja tenantów na poziomie aplikacji i bazy.  
- NFR-SEC-002 – Codzienny backup DB, RPO ≤ 24 h.  
- NFR-SEC-003 – Dane przechowywane w regionie EU.

### 8.4 i18n / l10n

- NFR-LANG-001 – Nowe teksty UI muszą być dodawane wyłącznie przez pliki lokalizacyjne.  
- NFR-LANG-002 – Dodanie nowego języka nie wymaga zmian w logice biznesowej.

### 8.5 UX / Avatars

- NFR-UX-001 – Avatary nie gubią kontekstu w obrębie Intentu: kontekst = organization + intent + ostatnie wiadomości / responses.  
- NFR-UX-002 – X w jednym widoku widzi ile Intentów jest w Draft/Clarify/Evaluate/Decision.

---

## 9. Architektura (high level, X-first)

- Frontend Web (SPA) – ekrany dla X (Intent Studio, Decision Room, Pipeline) + Vendor-lite Portal / Y-lite workspace dla Y.  
- BCOS Core (Backend API) – multi-tenant API dla: Organizations, Users, Intents, Criteria, VendorCandidates, VendorResponses, Evaluations, NDA, TrustRooms.  
- AI Gateway v0 – warstwa do obsługi wszystkich zadań AI (Intent Coach, Criteria Builder, Evaluation Assist, Summaries).  
- Data Layer – relacyjna baza (Postgres), opcjonalnie vector store (RAG na Intentach / odpowiedziach).

Phase 1 korzysta z chmurowych modeli AI przez AI Gateway, vendor-neutral.

---

## 10. Data Model v0 (conceptual)

Główne encje:

- Organization { id, org_type, name, country, industries[], size_band, markets[], languages[], default_language, website, created_at, updated_at }  
- User { id, organization_id, role, email, preferred_language, created_at, updated_at }  
- Intent { id, organization_id (X), owner_user_id, title, description, goal, scope, assumptions, risks, kpis, budget_min, budget_max, timeline, preferred_language, confidentiality_level, status, created_at, updated_at }  
- EvaluationCriterion { id, intent_id, name, description, weight, must_have }  
- VendorCandidate { id, intent_id, name, contact_email, market, country, url, source (BYOV|ENABION_SUGGESTED), invite_status }  
- VendorResponse { id, vendor_candidate_id, raw_text, structured_fields (JSON), created_at }  
- EvaluationScore { id, vendor_candidate_id, criterion_id, score, comment, source (user|ai) }  
- Decision { id, intent_id, selected_vendor_ids (array), rationale_text, created_at }  
- NDAAgreement { id, intent_id, vendor_candidate_id, type (mutual|custom), status, created_at, updated_at }  
- ConversationMessage { id, intent_id, vendor_candidate_id, author_user_id, content, level (L1|L2), created_at }  
- AvatarContext { id, organization_id, intent_id, vendor_candidate_id, payload (JSON), updated_at }

Szczegółowe typy i relacje zostaną doprecyzowane w implementacji, ale ten model jest źródłem prawdy dla Phase 1.

---

## 11. Metryki Phase 1 (X-first)

- North Star: skrócenie czasu od "mamy pomysł/prośbę zarządu" do "wybraliśmy partnera Y" o ≥ 50%.  
- Produkt:
  - liczba Intentów / org X / miesiąc,  
  - % Intentów z uzupełnionym Decision Model,  
  - liczba vendorów ocenionych per Intent,  
  - % Intentów zakończonych jawną decyzją (selected vendor / no-go).  
- UX/AI:
  - ocena "Na ile Enabion pomógł uzasadnić decyzję?" (ankieta u pilotów),  
  - średnia liczba korekt scoringu AI przez użytkowników.

---

## 12. Kamienie milowe Phase 1 (propozycja)

- **M0 – Środowisko pracy, narzędzia, hosting, nazwa robocza (setup „Ja + Mieszko2.0 + Ewa”) – szczegóły w 12.1.**  
- **M1 – X Intent Studio E2E:** org X + user + Intent creation + AI + zapis.  
- **M2 – Decision Model + VendorCandidates + zaproszenia.**  
- **M3 – Vendor-lite Portal + Evaluation Matrix (AI scoring).**  
- **M4 – Decision Room + NDA + Trust Room.**  
- **M5 – Frontend typu WoW, UX/CX maksymalne.**  
- **M6 – 3–5 pilotów X, którzy przeszli przez pełny flow i podali feedback.**

### 12.1 M0 – Setup „Ja + Mieszko2.0 + Ewa” – pełny opis

#### 12.1.1 Cel M0

Celem M0 jest przejście z etapu „mamy tylko Playbook + ten dokument + laptop CEO” do sytuacji, w której:

- istnieje **działające repozytorium kodu** z pierwszym działającym szkieletem aplikacji (Hello BCOS-Enabion),  
- istnieje **środowisko dev w chmurze (EU)**, na którym Ewa może deployować każdą zmianę,  
- ustalone są **nawyki pracy core teamu** (CEO + Mieszko2.0 + Ewa),  
- podjęte są **kluczowe decyzje, które trudno zmienić później**:
  - region danych (EU),  
  - podejście multi-tenant (org_id w każdej tabeli),  
  - bazowy stack technologiczny,  
  - robocza nazwa produktu i plan na markę / domenę.

M0 jest zakończone wtedy, gdy:

1. CEO widzi działającą stronę startową aplikacji w `dev` pod subdomeną `*.enabion...`.  
2. Ewa może:
   - sklonować repo,  
   - uruchomić projekt lokalnie,  
   - wypchnąć zmianę na `dev` jednym flow (git push → auto deploy).  
3. W tym dokumencie dopisane są:
   - `Stack v0` (sekcja 9.x),  
   - wypełniona checklista M0 (12.1.9).  

---

#### 12.1.2 Decyzje strategiczne w M0 (trudne do zmiany później)

W M0 podejmujemy decyzje, które będą promieniowały na kolejne lata:

- **Multi-tenancy** – od początku zakładamy, że wszystko jest multi-tenant (pole `organization_id` w każdej kluczowej tabeli). To jest spójne z wizją BCOS.  
- **Region danych** – EU (Postgres + storage + AI endpointy skonfigurowane pod EU tam, gdzie się da). Ułatwia to rozmowy z klientami PL/DE.  
- **Stack webowy** – nowoczesny, TypeScript-first, z dużym ekosystemem (React / Next.js + Node / API + Postgres).  
- **AI Gateway** – jeden punkt integracji z modelami AI (na MVP może korzystać z jednego providera, ale architektura jest neutralna).  
- **Marka** – „Enabion” jako główna marka parasolowa, produkt w tym dokumencie nazywamy roboczo **BCOS-Enabion / Enabion BCOS**.  
- **Single repo** – jeden monorepo typu `enabion-bcos` (frontend + backend + infra) zamiast mikrousług na starcie.

Te decyzje powinny być zmieniane tylko, jeśli okaże się to absolutnie konieczne – wszystko inne (szczegóły UI, biblioteki, struktura folderów) można modyfikować w Phase 1–2.

---

#### 12.1.3 M0.1 – Repozytorium i narzędzia

**Cel:** Jedyne źródło prawdy dla kodu i implementacji Phase 1.

- **Git hosting**  
  - Platforma: GitHub (względnie GitLab – ale przyjmujemy GitHub jako domyślny).  
  - Główne repo: `enabion-bcos`.  
  - Widoczność: na start `private`.

- **Struktura gałęzi**  
  - `main` – zawsze stabilna, synchro z `pilot`/`prod`.  
  - `dev` – główna gałąź deweloperska, auto-deploy na środowisko `dev`.  
  - `feature/*` – tymczasowe gałęzie Ewy, mergowane do `dev` przez PR.

- **Minimalna struktura katalogów** (na start):

  ```text
  /apps
    /web        # Next.js frontend (X + Y-lite)
    /api        # Backend API / BCOS Core (jeśli nie w Next API routes)
  /packages
    /ui         # wspólne komponenty UI (opcjonalnie)
    /core       # logika domenowa, modele, helpery
  /infra        # IaC / konfiguracja środowisk (opcjonalnie na M0)
  /docs         # README, architektura, notatki techniczne (link do tego speca)
  ```

- **Konfiguracja repo**  
  - Włączone PR do `dev` i `main` (zakaz direct push do `main`).  
  - Wymagane 2FA na koncie Ewy (i każdym innym z dostępem do repo).  
  - Proste etykiety issue: `M0`, `M1`, `bug`, `tech-debt`, `UX`, `AI`.

- **Narzędzia deweloperskie**  
  - Node.js LTS, pnpm/yarn/npm (wybrane w README).  
  - TypeScript, ESLint, Prettier.  
  - Husky / pre-commit (opcjonalnie w M0, bardziej M1).  

---

#### 12.1.4 M0.2 – Stack i architektura wykonawcza („Stack v0”)

**Cel:** Wybrać stack, który:

- jest wystarczająco prosty dla małego zespołu,  
- dobrze współgra z AI-first development,  
- nie blokuje skalowania do BCOS / Data Models 1–3.

**Propozycja Stack v0:**

- **Frontend / Web App**
  - Next.js (App Router), React, TypeScript.  
  - UI: prosty design system budowany własnoręcznie (na start) + standardowe komponenty (np. Radix UI / Headless UI – opcjonalnie).  
  - i18n: biblioteka typu next-intl / inny sprawdzony mechanizm, wszystkie stringi w plikach lokalizacyjnych (EN/PL/DE).

- **Backend / API (BCOS Core v0)**
  - Podejście 1 (preferowane na start):  
    - API w ramach Next.js (Route Handlers / API routes) + `apps/api` jako miejsce na logikę.  
    - Logika biznesowa wydzielona do `/packages/core` – łatwe do wyniesienia do osobnego serwisu w Phase 2.  
  - Podejście 2 (opcjonalne później):  
    - osobny serwis (np. Node + Fastify/NestJS) jako `bcos-core`, komunikujący się przez HTTP/JSON.

- **Baza danych**
  - Postgres (np. Supabase / Neon / Railway) w regionie EU.  
  - ORM: Prisma lub inny TypeScript-friendly ORM.  
  - Od początku wymóg pola `organization_id` we wszystkich kluczowych tabelach.

- **AI Gateway**
  - Mikroserwis (lub moduł) `ai-gateway` zarządzający wszystkimi wywołaniami AI:  
    - Intent Coach,  
    - Criteria Builder,  
    - Evaluation Assistant,  
    - Summaries (Intent, Trust Room, Decision Summary).  
  - Na MVP może korzystać z jednego providera (np. OpenAI API), ale interfejs wewnętrzny powinien być neutralny (`provider = "openai"` jako parametr).

- **Inne elementy techniczne**
  - Autoryzacja użytkownika: na start prosty auth (e-mail + magic link / hasło), później SSO.  
  - Logowanie zdarzeń: centralny logger (np. do stdout + integracja z loggingiem providera hostingu).

---

#### 12.1.5 M0.3 – Hosting i środowiska (EU)

**Cel:** Ewa ma klarowne środowiska, CEO wie „gdzie co żyje”.

**Propozycja na M0:**

- **Frontend + API** – hosting PaaS, np. Vercel / inny podobny provider z regionem EU.  
- **Baza danych** – Postgres jako zarządzana usługa w EU (np. Supabase/Neon).  
- **Środowiska:**
  - `local` – laptop CEO (do oglądania demo lokalnego) i Ewy (dev).  
  - `dev` – automatyczny deploy z gałęzi `dev`.  
  - `pilot` – ręczny deploy po akceptacji CEO, z gałęzi `main` (tag `pilot-x.y`).  
  - `prod` – może być na początku równoznaczne z `pilot` lub wydzielone później.

**Standard konfiguracji środowisk:**

- Konfiguracja przez zmienne środowiskowe (ENV), np.:  

  - `DATABASE_URL` – URL do Postgresa w EU.  
  - `AI_GATEWAY_URL` – endpoint AI.  
  - `NEXTAUTH_URL` / inne dla auth.  
  - `APP_ENV` ∈ {local, dev, pilot, prod}.  

- **Backup i monitoring (M0)**  
  - Włączone automatyczne backupy DB (min. raz dziennie).  
  - Proste alerty:  
    - „deploy failed” (mail do Ewy i CEO),  
    - opcjonalnie monitoring uptime (np. darmowy status page).

---

#### 12.1.6 M0.4 – Zasady współpracy core team (CEO + Mieszko2.0 + Ewa)

**Role:**

- **CEO** – decyzje biznesowe, priorytety, akceptacja milestone’ów, opisuje potrzeby w tym dokumencie (jako komentarze/sekcje).  
- **Mieszko2.0** – tłumaczy potrzeby CEO na wymagania (sekcje FR, moduły, user journeys), proponuje architekturę, pilnuje spójności z Playbookiem.  
- **Ewa** – implementuje w repo i w chmurze, proponuje techniczne usprawnienia, zgłasza ryzyka.

**Workflow:**

1. CEO dopisuje / zmienia wymagania w tym dokumencie (w odpowiedniej sekcji) lub tworzy krótką notatkę typu „changelog”.  
2. Mieszko2.0 aktualizuje sekcje (np. 5.x, 7.x, 9, 10) tak, aby były jednoznaczne.  
3. Ewa tworzy issues na task boardzie na podstawie tego dokumentu.  
4. Ewa pracuje na branchach `feature/*`, robi PR do `dev`.  
5. Po deployu na `dev` CEO ogląda demo, zgłasza uwagi.  
6. Po akceptacji – merge do `main` i deploy na `pilot`.

**Task board (M0)**

- Narzędzie: Trello / GitHub Projects / Notion – decyzja w M0.  
- Kolumny: `Backlog`, `In progress (Ewa)`, `Ready for demo`, `Done (on pilot)`.

---

#### 12.1.7 M0.5 – Standard minimalny dla kodu i bezpieczeństwa

- **Branching & PR**  
  - Zakaz direct push do `main`.  
  - Każda zmiana na `dev` przez PR (może być self-review Ewy + checklist).  

- **Sekrety i dane wrażliwe**  
  - Żadne klucze API, hasła, tokeny nie mogą być commitowane do repo.  
  - Używamy mechanizmów secretów providera (np. Vercel Secrets + zmienne środowiskowe).  

- **Konta i dostęp**  
  - CEO i Ewa mają konta na hostingu i w repo z włączonym 2FA.  
  - Roles: Ewa = pełen dostęp techniczny, CEO = Owner/Administrator (może akceptować billing, zapraszać osoby).  

- **Logowanie i audyt**  
  - Logi deployów: kto, kiedy, z jakiej gałęzi.  
  - W przyszłości (Phase 2+) – logi aplikacyjne powiązane z organizacjami.

---

#### 12.1.8 M0.6 – Nazwa, domena, IP (BCOS-Enabion)

**Cel:** Nie zablokować się na nazwie, ale ustalić sensowną strategię na dziś i na 2030.

- **Marka parasolowa:**  
  - „Enabion” – jako główna marka firmy i ekosystemu (masz już domenę `enabion...`).  
  - W Playbooku „EnabionNexus” jest nazwą roboczą projektu, a „Business Collaboration OS (BCOS)” nazwą kategorii.  

- **Robocza nazwa produktu Phase 1:**  
  - w tym dokumencie: **„Enabion BCOS” / „BCOS-Enabion”** jako robocza nazwa produktu („Business Collaboration OS by Enabion”).  
  - docelowo można zdecydować, czy na zewnątrz występuje jako „Enabion BCOS”, czy po prostu „Enabion”.

- **Repo / techniczne nazwy:**  
  - repo: `enabion-bcos`,  
  - przyszły główny serwis: `bcos-core` (nazwy wewnętrzne nie muszą być identyczne ze znakiem towarowym).

- **Domeny (M0):**  
  - root: `enabion.[tld]` – już posiadana,  
  - app: `app.enabion.[tld]` lub `bcos.enabion.[tld]` jako roboczy adres produktu,  
  - w Phase 1 wystarczy jedna domena robocza; później można dodać np. `enabionbcos.com` jeśli będzie potrzebne.

- **Znak towarowy (M0 = pre-check, nie pełna rejestracja):**  
  - M0 NIE oznacza jeszcze rejestracji znaku w EUIPO, ale:  
    - sprawdzamy dostępność `ENABION` i kombinacji typu `ENABION BCOS` w bazach:  
      - EUIPO eSearch + TMview (trade marks w UE),  
      - WIPO Global Brand Database (globalne znaki).  
    - jeśli nie ma oczywistych konfliktów, planujemy:
      - rejestrację słownego znaku „ENABION” jako priorytet,  
      - opcjonalnie rozszerzenie o „ENABION BCOS” / „BCOS ENABION” w późniejszym etapie.  
  - Ten dokument używa „Enabion BCOS / BCOS-Enabion” jako **nazwy roboczej**, dopóki nie będzie formalnej decyzji po konsultacji z rzecznikiem patentowym.

---

#### 12.1.9 M0.7 – Daty, kamienie i checklista „M0 done”

**Docelowy wynik M0:** wszystko gotowe, aby wejść w M1 (budowa X Intent Studio).

**Checklista M0 (musi być odhaczona w tym dokumencie):**

1. **Repozytorium**
   - [ ] Repo `enabion-bcos` utworzone, prywatne.  
   - [ ] Struktura `/apps`, `/packages`, `/infra`, `/docs` istnieje.  
   - [ ] README z opisem stacka i kroków uruchomienia lokalnie.

2. **Stack v0**
   - [ ] Zainstalowany Next.js + TypeScript, pierwsza strona „Hello Enabion BCOS”.  
   - [ ] Skonfigurowany ORM (np. Prisma) i podpięty Postgres (choćby jedna prosta tabela).  
   - [ ] Moduł `ai-gateway` (lub plik konfiguracyjny) z jednym prostym wywołaniem AI (np. health check).

3. **Hosting**
   - [ ] Konto na hostingu (np. Vercel) + konto DB (np. Supabase) w regionie EU.  
   - [ ] Środowisko `dev` podpięte do gałęzi `dev`.  
   - [ ] URL `dev` działa i CEO widzi stronę startową.  
   - [ ] Backup DB włączony.

4. **Zasady współpracy**
   - [ ] Ustalony i używany task board (`Backlog → In progress → Ready for demo → Done`).  
   - [ ] 2FA włączone na kontach Git/hostingu.  
   - [ ] PR flow przetestowany (min. 1 zmiana przeszła `feature/*` → `dev` → deploy).

5. **Nazwa / domena / IP**
   - [ ] Wybrane robocze nazewnictwo: „Enabion BCOS / BCOS-Enabion” + `enabion-bcos` jako repo.  
   - [ ] Podjęta decyzja, która subdomena będzie używana w Phase 1 (`app.enabion...` lub `bcos.enabion...`).  
   - [ ] Zrobiony wstępny search znaku „ENABION” i kombinacji z „BCOS” w EUIPO / WIPO (notatka z wynikiem, nawet prostym: „brak oczywistego konfliktu / do dalszej analizy z prawnikiem”).

Kiedy wszystkie pola checklisty są odhaczone, można formalnie uznać, że **M0 jest zrobione** i przejść do realizacji M1.

---

## 13. Założenia, ryzyka, otwarte pytania

Założenia:

- X ma przynajmniej 1–2 potencjalnych vendorów do porównania (BYOV).  
- X jest gotowe wprowadzić Intent Studio i Decision Model jako standard wewnętrzny.  
- PL/DE jako rynki pilotażowe są wystarczające do walidacji.

Ryzyka:

- GTM do X jest wolniejszy niż do Y (dłuższy cykl decyzyjny).  
- Scope creep w stronę pełnego narzędzia RFP/procurement.  
- Vendorzy Y mogą niechętnie wypełniać kolejny formularz (łagodzimy to Avatarem i sensowną strukturą).

Otwarte pytania:

- Czy w Phase 1 wspieramy eksport RFP (Intent + kryteria + context) do PDF/Word? – [CEO] Domyślnie export jest przez Enabion, ale wspieramy też PDF/Word, które może być użyte wewnętrznie przez użytkownika.  
- Czy dodajemy placeholder "Enabion suggested vendors" (manualnie kuratorowane na początku)? – [CEO] Tak, odpalamy to w MVP (w formie Avatara proponującego vendorów z publicznych źródeł + ręczny wybór X).  
- Po ilu pilotach X przechodzimy do Phase 2 – pełnego OS dla Y? – [CEO] TBD.
