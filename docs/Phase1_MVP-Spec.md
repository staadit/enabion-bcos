# EnabionNexus ��� Phase1_MVP-Spec_v0.4 (X-first)

**Status:** Draft (Phase 1 ��� working master, X-first)  
**Owner:** CEO (business) + Mieszko2.0 (product/tech)  
**Last update:** 2025-12-05
**Source:** EnabionNexus ��� Playbook v1.6 (master business doc)  
**Scope:** Ten dokument jest jedynym g+�+�wnym dokumentem wykonawczym Phase 1 (MVP).  
Wszelkie inne notatki / backlogi / taski s-� jego rozwini-�ciem. W przypadku konfliktu ��� ten dokument wygrywa.

> Phase 1 = X-first MVP. Bohaterem jest firma X (ma potrzeb-�, ale nie wie dok+�adnie co i z kim zrobi-�).  
> Firmy Y s-� obs+�u++one w wersji Vendor-lite / Y-lite (Guest Portal / Response + prosty workspace), bez pe+�nego OS po ich stronie.

---

## 0. Jak czyta-� ten dokument

- Playbook v1.6 ��� wizja 2030, CONNECT ��� POWER ��� GROW, 5-Step Lifecycle, Trust Graph itd.  
- Phase1_MVP-Spec_v0.4 (X-first) ��� w-�ski, dowo++alny zakres pierwszego produktu z perspektywy X.  

Dokument +�-�czy:

1. Cel biznesowy Phase 1 dla X.  
2. Zakres produktu (modu+�y MVP).  
3. Wymagania funkcjonalne i niefunkcjonalne (v0).  
4. Architektur-� i model danych v0 (X-first, Y-lite).  
5. Rynki i j-�zyki (PL / DE / EN).  
6. Metryki sukcesu Phase 1 i kamienie milowe.

### 0.1 Change Log (Phase 1 ��� Spec versioning)

- 2025-12-04 ��� v0.4 ��� v0.5 ��� [CEO + Mieszko2.0]
  - Doprecyzowanie procesu wsp+�+�pracy (sekcja 0.2 / 12.1.4).
  - Dodanie Execution & Backlog rules.
  - M0 ��� doprecyzowane taski i definicja ���M0 done���.
- 2025-12-03 ��� v0.4 ��� ...


---

## 1. Phase 1 ��� cel, zakres, sukces (X-first)

### 1.1 Cel Phase 1 (z perspektywy X)

Dowie+�-� X-first MVP Business Collaboration OS, kt+�ry dla firm X w PL/DE:

- zamienia chaotyczne pomys+�y, maile i prezentacje w ustrukturyzowany Intent,
- pomaga zbudowa-� kryteria wyboru partner+�w Y,
- umo++liwia por+�wnanie i wyb+�r partnera w jednym Decision Room,
- daje podstawow-� warstw-� NDA / L1/L2 i Trust Room do pierwszych rozm+�w.

To pokrywa g+�+�wnie kroki 1���3 Enabion 5-Step Partnership Lifecycle: Clarify ��� Match & Align ��� Commit & Assure, z minimalnym Deliver (Trust Room).

### 1.2 Wysokopoziomowy zakres MVP

MVP robi wy+�-�cznie:

1. X Intent Studio / Intent Coach (Clarify).  
2. Decision Model Builder (kryteria wyboru partnera).  
3. Vendor Candidates & Vendor-lite Response (BYOV ��� bring your own vendors).  
4. Evaluation Matrix & Decision Room (Match & Align ��� Commit & Assure).  
5. NDA & Confidentiality L1/L2 (Warstwa 0/1/2 lite).  
6. X���Y Trust Room (lite) dla wybranego partnera.  
7. X Intent Pipeline (statusy Draft ��� Clarify ��� Evaluate ��� Decision).  
8. J-�zyki: EN (domy+�lny) + PL i DE (native).  
9. Cz-�+�-� dla Y (���Y-lite workspace���) pozwalaj-�ca na:
   - stworzenie prostego konta organizacji typu Y,
   - przegl-�d wszystkich otrzymanych Intent+�w (zaprosze+� od X),
   - odpowiadanie na Intenty przez Vendor-lite Response Portal,
   - korzystanie z Avatara wsp+�+�pracy po stronie Y (pomoc w odpowiedziach).

### 1.3 Out of scope (Phase 1)

- Otwarty marketplace X���Y (publiczne og+�oszenia, bidding, ranking).  
- Pe+�ny OS dla Y (pipeline Y, dashboard Y, advanced TrustScore dla Y).  
- Warstwa finansowa (escrow, Financial TrustScore, dispute resolution).  
- EnableMark program, Hubs i pe+�ny Trust Graph (tylko minimalny Trust v0).  
- Data Models 2/3 (Shielded/Sovereign) jako produkt (tylko w architekturze).

### 1.4 Definicja sukcesu Phase 1 (X-first)

- Minimum 3 pilot+�w X (PL/DE), kt+�rzy korzystaj-� z systemu do realnej decyzji o wyborze partnera Y.  
- Minimum 10 Intent+�w przeprowadzonych przez pe+�ny flow: Intent ��� Criteria ��� Vendor Responses ��� Decision.  
- Subiektywny wow X: 
  - "Bez Enabion ugrz-�+�liby+�my w mailach / slajdach", 
  - jasna, u++ywalna Decision Summary dla zarz-�du/procurementu.  
- System stabilny, multi-tenant, Model 1 ��� Standard (EU region) i gotowy fundament pod Phase 2 (pe+�ny OS dla Y).

---

## 2. Rynki i j-�zyki ��� PL / DE / EN

### 2.1 Rynki Phase 1

- Polska (PL) ��� firmy X planuj-�ce projekty tech/AI/digital oraz firmy Y pe+�ni-�ce rol-� vendor+�w w tych projektach.  
- Niemcy (DE) ��� firmy X (oraz Y jako vendorzy), podobny profil, plus cross-border X���Y PL/DE.

### 2.2 J-�zyki produktu

MVP jest natywne dla:

- EN ��� domy+�lny j-�zyk systemu (UI, dokumentacja, product copy),  
- PL ��� pe+�na lokalizacja UI + Avatary rozumiej-� i generuj-� PL,  
- DE ��� pe+�na lokalizacja UI + Avatary rozumiej-� i generuj-� DE.

Konsekwencje:

- wszystkie teksty UI w i18n (klucze lokalizacyjne), ++adnych hard-coded tekst+�w,  
- Organization ma `default_language` (EN/PL/DE),  
- User ma `preferred_language` (EN/PL/DE),  
- Avatary:
  - rozumiej-� input w EN/PL/DE,  
  - domy+�lnie odpowiadaj-� w j-�zyku u++ytkownika,  
  - potrafi-� przet+�umaczy-� Intent/Decision Summary na EN/PL/DE ("Translate to�Ǫ"),  
  - maj-� te++ mo++liwo+�-� wysy+�ania wiadomo+�ci niet+�umaczonych, je++eli np. u++ytkownik zna DE i PL.

---

## 3. ICP i persony (X-first)

### 3.1 ICP ��� firmy X

ICP-X-1: Mid-size firmy X (PL/DE) 50���500 os+�b:

- planuj-� projekt technologiczny / AI / digital,  
- nie maj-� pe+�nego, dojrza+�ego procesu IT procurement,  
- boj-� si-� z+�ego wyboru partnera,  
- ton-� w dokumentach, mailach, prezentacjach, wersjach RFP.

Przyk+�adowe bran++e: retail, manufacturing, finance, services.

### 3.2 Persony

1. Project Owner X  
   - w+�a+�ciciel biznesowy inicjatywy, ma bud++et i KPI,  
   - potrzebuje jasnego uzasadnienia decyzji (vendor A vs B).

2. Transformation / IT Lead X  
   - t+�umaczy potrzeby biznesowe na wymagania tech,  
   - wsp+�+�decyduje o kryteriach i vendorach.

3. Procurement / Legal Reviewer  
   - dba o zgodno+�-� z procedurami,  
   - potrzebuje Decision Summary w formie zrozumia+�ej dla audytu.

4. Vendor Y ��� Guest / VendorUser  
   - odpowiada na Intent X przez Vendor-lite Response Portal,  
   - nie ma pe+�nego OS, tylko minimalny UI do odpowiedzi lub prosty Y-lite workspace.

5. Dla MVP i ma+�ych firm mo++e si-� okaza-�, ++e wszystkie role po stronie X/Y pe+�ni jedna i ta sama osoba.

---

## 4. Kluczowe do+�wiadczenia (UX / WOW)

### 4.1 "Od chaosu do decyzji"

X zaczyna z rozmytym "musimy co+� zrobi-�":

- nie wie dok+�adnie co, lub wie, ale nie wie jak zacz-�-�,  
- nie wie z kim,  
- nie ma kryteri+�w ani jednego miejsca na por+�wnanie opcji.

Enabion Phase 1:

> W ci-�gu jednego dnia X ma:  
> - doprecyzowany Intent,  
> - jasne kryteria wyboru partner+�w,  
> - por+�wnanie 2���3 vendor+�w,  
> - rekomendacj-� (AI + w+�asn-�),  
> - Decision Summary do zarz-�du/procurementu,  
> - komunikacj-� i wysy+�anie e-maili do vendor+�w w Enabion (z pomoc-� Avatara).

### 4.2 Vendor Y ��� lepsze ni++ "wy+�lij nam prezentacj-�"

Y nie musi walczy-� z 20 r+�++nymi formatami RFP.  

Dostaje jeden, zrozumia+�y Intent i Response Form, w kt+�rym Avatar pomaga napisa-� sensown-� odpowied+� po EN/PL/DE.

---

## 5. Modu+�y MVP (X-first)

### 5.1 X Organizations & Users

Opis: podstawowy model organizacji X (i minimalnie Y) z u++ytkownikami i rolami.

In scope:

- Organization z polem `org_type: X | Y`.  
- Profil X: nazwa, kraj, bran++e, size band, rynki, j-�zyki, URL.  
- Role X: `OrgAdmin`, `ProjectOwner`, `Evaluator`, `Viewer`.  
- Organizacje Y jako vendor-lite (Y mo++e istnie-� te++ tylko jako VendorCandidate bez pe+�nego konta / Y-lite workspace).

Out of scope:

- granularne role, z+�o++one uprawnienia, wielopoziomowe struktury hierarchiczne.

---

### 5.2 X Intent Studio (Intent Coach)

Opis: serce MVP ��� doprecyzowanie potrzeby X (Clarify).

In scope:

- Tworzenie Intentu:
  - z pustego formularza ("Start from scratch"),  
  - z wklejonego tekstu (mail, notatki, transkrypt).  
- Avatar Intent Coach:
  - zadaje pytania doprecyzowuj-�ce,  
  - wype+�nia pola Intentu: cel biznesowy, kontekst, zakres high-level, KPI, bud++et wide+�ki, timeline, ryzyka, ograniczenia, preferowany model wsp+�+�pracy, j-�zyk.  
- Oznaczanie poziomu poufno+�ci Intentu (L1 / L2).  
- Edycja Intentu przez X i wersjonowanie (v1, v2�Ǫ).

Out of scope:

- template���y ultra-specyficzne dla danej bran++y (Phase 2+),  
- integracje bezpo+�rednie z narz-�dziami notek/whiteboard (Phase 2+).

---

### 5.3 Decision Model Builder (kryteria wyboru partner+�w Y)

Opis: przek+�ada Intent na kryteria i wagi oceny partner+�w.

In scope:

- Avatar proponuje list-� kryteri+�w (kompetencje, do+�wiadczenie, lokalizacja, j-�zyk, cena, ryzyka, kultura, governance).  
- U++ytkownik:
  - dodaje/usuwa kryteria,  
  - ustawia wagi (0���5),  
  - oznacza must-have vs nice-to-have.  
- Tworzy si-� macierz oceny, kt+�ra b-�dzie u++yta w Evaluation Matrix.  
- Generowanie kr+�tkiego tekstu "How we choose vendors" ��� do Decision Summary.

Out of scope:

- zaawansowane scoringi machine-learningowe (na du++ej historii projekt+�w),  
- automatyczne importowanie kryteri+�w z polityk korporacyjnych (Phase 2+).

---

### 5.4 Vendor Candidates (BYOV) & Invitations

Opis: X dodaje potencjalnych partner+�w Y do por+�wnania.

In scope:

- Mo++liwo+�-� dodania VendorCandidate:
  - jako prosty rekord: nazwa firmy, kontakt, kraj, URL, notatka,  
  - opcjonalnie powi-�zanie z istniej-�c-� Organization typu Y (gdy powstanie pe+�niejszy OS dla Y).  
- Generowanie indywidualnych zaprosze+� (link+�w) do Vendor-lite Response Portal.  
- +�ledzenie statusu: invited / opened / responded / no response.  
- Opcjonalna pomoc Avatara: X mo++e poprosi-� Avatara o zaproponowanie potencjalnych VendorCandidates na podstawie Intentu (publiczne +�r+�d+�a). X sam decyduje, kt+�re propozycje doda-� jako VendorCandidate.

Out of scope:

- publiczny katalog vendor+�w,  
- reklamy, listing fees, tokenizacja "slot+�w".

---

### 5.5 Vendor-lite Response Portal (Y Guest)

Opis: minimalny portal, w kt+�rym Y widzi Intent X i odpowiada w ustrukturyzowany spos+�b.

In scope:

- Strona z Intentem (read-only) + kr+�tka sekcja "O X" i "Jak oceniamy vendor+�w".  
- Formularz odpowiedzi:
  - sekcje dopasowane do kryteri+�w (np. do+�wiadczenie, approach, timeline, koszt, zesp+�+�, ryzyka),  
  - mo++liwo+�-� do+�-�czenia referencji (URL / tekst, nie pliki binarne na MVP).  
- Avatar, kt+�ry pomaga Y napisa-� odpowied+� (EN/PL/DE).  
- Po wys+�aniu dane s-� zapami-�tywane jako VendorResponse i mapowane na Evaluation Matrix.

Out of scope:

- pe+�ne konto Y z pipeline���em, dashboardem, TrustScore,  
- zarz-�dzanie dokumentami kontraktowymi po stronie Y.

---

### 5.6 Evaluation Matrix & Decision Room

Opis: miejsce, gdzie X por+�wnuje vendor+�w i podejmuje decyzj-�.

In scope:

- Widok macierzy:
  - wiersze: vendorzy Y,  
  - kolumny: kryteria,  
  - kom+�rki: score + komentarz.  
- Avatar:
  - proponuje initial score na podstawie odpowiedzi Y i wag kryteri+�w,  
  - pod+�wietla ryzyka (np. brak do+�wiadczenia w bran++y),  
  - sugeruje pytania follow-up.  
- X mo++e r-�cznie korygowa-� score i dodawa-� komentarze.  
- Decision Summary:
  - ranking vendor+�w,  
  - rekomendacja Avatara (z zastrze++eniem, ++e to sugestia, nie decyzja),  
  - finalny wyb+�r vendor+�w i uzasadnienie (tekst dla zarz-�du/procurementu).

Out of scope:

- automatyczne generowanie formalnego kontraktu (Phase 2+),  
- integracja z wewn-�trznymi systemami purchase order.

---

### 5.7 NDA & Confidentiality (L1 / L2, warstwy 0/1/2 lite)

Opis: prosty model NDA w Phase 1.

In scope:

- Oznaczanie spisu tre+�ci / komunikacji jako L1 / L2.  
- Warstwa 0: No-NDA Zone (L1) ��� Clarify i wysoki poziom Match & Align mog-� dzia+�a-� bez NDA.  
- Warstwa 1: Enabion Mutual NDA ��� click-wrap dla pre-sales (mo++e by-� w+�-�czony w MVP jako opt-in).  
- Warstwa 2: Custom NDA FastTrack ��� X mo++e zarejestrowa-� sw+�j wz+�r NDA i zaznaczy-� status NDA per vendor (placeholder, nie pe+�na integracja e-podpisu).  
- System ostrzega u++ytkownika, gdy pr+�buje oznaczy-� tre+�ci jako L2 bez aktywnej NDA.

Out of scope:

- integracje z DocuSign / Adobe Sign (poza prostym przechowywaniem statusu),  
- pe+�ne zarz-�dzanie cyklem ++ycia NDA.

---

### 5.8 Trust Room (Secure Collaboration Room lite)

Opis: dialog X���wybrany vendor Y w jednym pokoju.

In scope:

- Jeden Trust Room per Intent + Vendor (lub Intent + lista vendor+�w w fazie pyta+�).  
- Wiadomo+�ci z flag-� L1/L2.  
- Avatar w pokoju:
  - generuje podsumowania,  
  - przypomina o ryzykach / zadaniach,  
  - ostrzega przy pr+�bie wprowadzenia L2 bez NDA.

Out of scope:

- zaawansowany file-sharing (Phase 2 ��� na linkach / integracjach),  
- integracje push/pull z Teams/Slack poza prostymi powiadomieniami.

---

### 5.9 X Intent Pipeline

Opis: kr+�tki pipeline Intent+�w po stronie X.

In scope:

- Statusy Intentu:
  - Draft, Clarify, Evaluate Vendors, Decision, On Hold, Archived.  
- Widok tabeli / kanbana:
  - kolumny: status, owner, bud++et wide+�ki, rynek (PL/DE/Other), j-�zyk, liczba vendor+�w.  
- Proste filtry (status, owner, kraj, j-�zyk).

Out of scope:

- pe+�ny CRM, forecasty, revenue pipeline Y.

---

### 5.10 Y-lite Workspace (Vendor-side view)

Opis:  
Minimalny widok ���konta dostawcy��� dla firm Y, kt+�re odpowiadaj-� na wi-�cej ni++ jeden Intent.  
Y-lite workspace NIE jest pe+�nym OS dla Y ��� s+�u++y tylko do obs+�ugi zaprosze+� od X.

In scope (Phase 1):

- Organizacja mo++e mie-� `org_type: Y` (vendor).  
- U++ytkownik Y (rola `VendorUser`) po zalogowaniu:
  - widzi list-� wszystkich VendorCandidates powi-�zanych z jego organizacj-� lub mailem (czyli Intenty, do kt+�rych zosta+� zaproszony),  
  - mo++e otworzy-� ka++dy Intent w widoku read-only,  
  - mo++e przej+�-� do formularza odpowiedzi (Vendor-lite Response Portal) i wys+�a-�/edytowa-� swoj-� odpowied+�,  
  - widzi statusy: zaproszony / odpowiedzia+� / w trakcie rozm+�w.  
- Y ma dost-�p do Avatara wsp+�+�pracy:
  - pomoc w pisaniu odpowiedzi (EN/PL/DE),  
  - pomoc w formu+�owaniu pyta+� do X,  
  - kr+�tkie podsumowania rozmowy w Trust Room.

Out of scope (Phase 1):

- pe+�ny pipeline sprzeda++owy / forecast po stronie Y,  
- zaawansowane dashboardy TrustScore dla Y,  
- zarz-�dzanie wieloma zespo+�ami/rolami wewn-�trz Y (na MVP wystarczy jedna rola `VendorUser`).

---

## 6. User Journeys (X-first)

### 6.1 Journey #0 ��� X doprecyzowuje potrzeb-� (bez vendor+�w)

1. OrgAdmin X zak+�ada organizacj-�, wybiera domy+�lny j-�zyk (PL/DE/EN).  
2. ProjectOwner X tworzy Intent w Intent Studio (blank lub paste).  
3. Avatar Intent Coach zadaje pytania i generuje strukturalny Intent.  
4. X edytuje i akceptuje Intent v1, status = Draft ��� Clarify.

### 6.2 Journey #1 ��� X definiuje kryteria i zaprasza vendor+�w

1. X otwiera Intent, przechodzi do Decision Model Builder.  
2. Avatar proponuje kryteria; X ustawia wagi i must-have.  
3. X dodaje 2���3 VendorCandidates (istniej-�cy partnerzy, nowe firmy).  
3a. (Opcjonalnie) X prosi Avatara o sugestie vendor+�w. Avatar pokazuje list-� potencjalnych firm na podstawie Intenta. X wybiera 1���2 z nich i dodaje jako VendorCandidates (`source = ENABION_SUGGESTED`).  
4. System wysy+�a im zaproszenia do Vendor-lite Response Portal.  
5. Status Intentu = Evaluate Vendors.

### 6.3 Journey #2 ��� Vendor Y odpowiada, X por+�wnuje i decyduje

1. Vendor Y otwiera link, widzi Intent X i formularz odpowiedzi.  
2. Y wype+�nia odpowied+� (z pomoc-� Avatara) i wysy+�a.  
3. X widzi odpowiedzi w Evaluation Matrix, z initial scoring AI.  
4. X modyfikuje score, dodaje komentarze, pyta follow-up (komentarze / Trust Room).  
5. W Decision Room X wybiera vendor+�w, zapisuje decyzj-� i uzasadnienie.  
6. Status Intentu = Decision ��� Archived lub On Hold.

### 6.4 Journey #3 ��� Trust Room po wyborze partnera

1. Po wyborze vendor+�w X mo++e aktywowa-� NDA na poziomie Intent-Vendor.  
2. Tworzony jest Trust Room dla Intentu i wybranego vendora.  
3. X i Y wymieniaj-� pierwsze informacje L2 (po NDA) i ustalaj-� next steps.

### 6.5 Journey #4 ��� Vendor Y u++ywa Y-lite Workspace

1. Firma Y otrzymuje zaproszenie do Intentu (link z Enabion).  
2. Przed wys+�aniem odpowiedzi przedstawiciel Y wybiera opcj-� ���Chc-� mie-� konto i widzie-� wszystkie moje Intenty��� ��� tworzy si-� konto organizacji typu Y i u++ytkownik `VendorUser`.  
3. `VendorUser` loguje si-� do Y-lite Workspace i widzi list-� wszystkich Intent+�w, do kt+�rych zosta+� zaproszony.  
4. Otwiera wybrany Intent, korzysta z Avatara, aby napisa-� odpowied+�, i wysy+�a j-� do X.  
5. W kolejnych zaproszeniach Y nie musi zak+�ada-� konta ��� nowe VendorCandidates s-� automatycznie widoczne na li+�cie w Y-lite Workspace.

---

## 7. Functional Requirements (FR) ��� v0

### 7.1 Organizations & Users

- FR-ORG-001 ��� System allows creating organizations with `org_type: X|Y`.  
- FR-ORG-002 ��� Org X profile stores: name, country, industries, size_band, markets, languages, website.  
- FR-ORG-003 ��� Roles for X: OrgAdmin, ProjectOwner, Evaluator, Viewer. Lub wszystkie role mo++e pe+�ni-� jedna osoba dla ma+�ych firm.  
- FR-ORG-004 ��� Guest vendor Y can respond to an Intent via tokenized link without full account. All interactions are logged.

### 7.2 Language & Localization

- FR-LANG-001 ��� Organization has `default_language` (EN/PL/DE).  
- FR-LANG-002 ��� User has `preferred_language` (EN/PL/DE).  
- FR-LANG-003 ��� All static UI strings are loaded from localization files for EN/PL/DE.  
- FR-LANG-004 ��� Avatars accept input and generate output in EN/PL/DE.

### 7.3 X Intent Studio

- FR-INT-001 ��� User can create Intent from scratch or by pasting free-form text.  
- FR-INT-002 ��� Avatar generates structured Intent fields from free text.  
- FR-INT-003 ��� User can edit generated Intent and save a version.  
- FR-INT-004 ��� Intent has `confidentiality_level` field (L1/L2).

### 7.4 Decision Model

- FR-DEC-001 ��� System allows adding evaluation criteria (name, description, weight, must_have).  
- FR-DEC-002 ��� Avatar can propose an initial set of criteria based on Intent.  
- FR-DEC-003 ��� Criteria are linked to an Intent and used in Vendor Responses and Evaluation Matrix.

### 7.5 Vendor Candidates & Responses

- FR-VEN-001 ��� User can create VendorCandidate with name and contact email.  
- FR-VEN-002 ��� System generates unique invitation URL per VendorCandidate.  
- FR-VEN-003 ��� Vendor can submit a structured response mapped to Intent criteria.  
- FR-VEN-004 ��� Vendor responses are stored as VendorResponse entities linked to VendorCandidate and Intent.  
- FR-VEN-005 ��� User (X) can ask Avatar to search public internet sources for potential VendorCandidates based on the Intent. Avatar pokazuje list-� propozycji (nazwa firmy, URL, kr+�tki opis ���dlaczego pasuje���), bez automatycznego kontaktu z tymi firmami.  
- FR-VEN-006 ��� X mo++e wybra-�, kt+�re z proponowanych firm doda-� jako VendorCandidate. Przy dodaniu system zapisuje `source = 'ENABION_SUGGESTED'` dla tego VendorCandidate.

### 7.6 Evaluation Matrix & Decision

- FR-EVAL-001 ��� System displays an evaluation matrix for each Intent with vendors vs criteria.  
- FR-EVAL-002 ��� Users can assign and edit scores per vendor-criterion.  
- FR-EVAL-003 ��� Avatar can propose initial scores based on VendorResponses.  
- FR-EVAL-004 ��� System stores a Decision entity with selected vendors and rationale text.

### 7.7 NDA & Confidentiality

- FR-NDA-001 ��� System allows tracking NDA status per Intent-Vendor (none / mutual / custom).  
- FR-NDA-002 ��� System prevents marking messages as L2 without NDA (or shows strong warning).  
- FR-NDA-003 ��� NDA acceptance events are logged (user, timestamp, type).

### 7.8 Trust Room

- FR-ROOM-001 ��� System can create a Trust Room linked to an Intent and vendor.  
- FR-ROOM-002 ��� Users can post messages with text content and L1/L2 flag.  
- FR-ROOM-003 ��� Avatar can produce a summary of the conversation on demand.

### 7.9 X Intent Pipeline

- FR-PIPE-001 ��� Intent has a `status` from a fixed enum: Draft, Clarify, EvaluateVendors, Decision, OnHold, Archived.  
- FR-PIPE-002 ��� System provides a list/board view of all Intents for an organization with filters by status, owner, market, language.

### 7.10 Y-lite Workspace (Vendor-side view)

- FR-Y-001 ��� Organization with `org_type: Y` mo++e mie-� co najmniej jednego u++ytkownika z rol-� `VendorUser`.  
- FR-Y-002 ��� Po zalogowaniu `VendorUser` widzi list-� wszystkich VendorCandidates powi-�zanych z jego organizacj-� lub adresem e-mail (Intenty, do kt+�rych zosta+� zaproszony).  
- FR-Y-003 ��� `VendorUser` mo++e otworzy-� zaproszony Intent, przej+�-� do formularza odpowiedzi (Vendor-lite Response Portal) oraz zapisa-�/edytowa-� swoj-� odpowied+�.  
- FR-Y-004 ��� `VendorUser` ma dost-�p do Avatara wsp+�+�pracy, kt+�ry pomaga pisa-� odpowiedzi oraz pytania do X (EN/PL/DE).

---

## 8. Non-Functional Requirements (NFR) ��� v0

### 8.1 Og+�lne

- NFR-GEN-001 ��� Phase 1 dzia+�a w Data Model 1 ��� Standard (multi-tenant, EU region).  
- NFR-GEN-002 ��� Aplikacja webowa (desktop-first, mobile-friendly).

### 8.2 Wydajno+�-�

- NFR-PERF-001 ��� P95 czasu odpowiedzi AI (Intent generation, scoring) < 15 s dla 2 000 s+�+�w inputu.  
- NFR-PERF-002 ��� P95 czasu odpowiedzi UI (bez AI) < 500 ms.

### 8.3 Bezpiecze+�stwo

- NFR-SEC-001 ��� Wszystkie rekordy s-� powi-�zane z `organization_id`, izolacja tenant+�w na poziomie aplikacji i bazy.  
- NFR-SEC-002 ��� Codzienny backup DB, RPO ��� 24 h.  
- NFR-SEC-003 ��� Dane przechowywane w regionie EU.

### 8.4 i18n / l10n

- NFR-LANG-001 ��� Nowe teksty UI musz-� by-� dodawane wy+�-�cznie przez pliki lokalizacyjne.  
- NFR-LANG-002 ��� Dodanie nowego j-�zyka nie wymaga zmian w logice biznesowej.

### 8.5 UX / Avatars

- NFR-UX-001 ��� Avatary nie gubi-� kontekstu w obr-�bie Intentu: kontekst = organization + intent + ostatnie wiadomo+�ci / responses.  
- NFR-UX-002 ��� X w jednym widoku widzi ile Intent+�w jest w Draft/Clarify/Evaluate/Decision.

---

## 9. Architektura (high level, X-first)

- Frontend Web (SPA) ��� ekrany dla X (Intent Studio, Decision Room, Pipeline) + Vendor-lite Portal / Y-lite workspace dla Y.  
- BCOS Core (Backend API) ��� multi-tenant API dla: Organizations, Users, Intents, Criteria, VendorCandidates, VendorResponses, Evaluations, NDA, TrustRooms.  
- AI Gateway v0 ��� warstwa do obs+�ugi wszystkich zada+� AI (Intent Coach, Criteria Builder, Evaluation Assist, Summaries).  
- Data Layer ��� relacyjna baza (Postgres), opcjonalnie vector store (RAG na Intentach / odpowiedziach).

Phase 1 korzysta z chmurowych modeli AI przez AI Gateway, vendor-neutral.

---

## 10. Data Model v0 (conceptual)

G+�+�wne encje:

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

Szczeg+�+�owe typy i relacje zostan-� doprecyzowane w implementacji, ale ten model jest +�r+�d+�em prawdy dla Phase 1.

---

## 11. Metryki Phase 1 (X-first)

- North Star: skr+�cenie czasu od "mamy pomys+�/pro+�b-� zarz-�du" do "wybrali+�my partnera Y" o ��� 50%.  
- Produkt:
  - liczba Intent+�w / org X / miesi-�c,  
  - % Intent+�w z uzupe+�nionym Decision Model,  
  - liczba vendor+�w ocenionych per Intent,  
  - % Intent+�w zako+�czonych jawn-� decyzj-� (selected vendor / no-go).  
- UX/AI:
  - ocena "Na ile Enabion pom+�g+� uzasadni-� decyzj-�?" (ankieta u pilot+�w),  
  - +�rednia liczba korekt scoringu AI przez u++ytkownik+�w.

---

## 12. Kamienie milowe Phase 1 (propozycja)

- **M0 ��� +�rodowisko pracy, narz-�dzia, hosting, nazwa robocza (setup ���Ja + Mieszko2.0 + Ewa���) ��� szczeg+�+�y w 12.1.**  
- **M1 ��� X Intent Studio E2E:** org X + user + Intent creation + AI + zapis.  
- **M2 ��� Decision Model + VendorCandidates + zaproszenia.**  
- **M3 ��� Vendor-lite Portal + Evaluation Matrix (AI scoring).**  
- **M4 ��� Decision Room + NDA + Trust Room.**  
- **M5 ��� Frontend typu WoW, UX/CX maksymalne.**  
- **M6 ��� 3���5 pilot+�w X, kt+�rzy przeszli przez pe+�ny flow i podali feedback.**

### 12.1 M0 ��� Setup ���Ja + Mieszko2.0 + Ewa��� ��� pe+�ny opis

#### 12.1.1 Cel M0

Celem M0 jest przej+�cie z etapu ���mamy tylko Playbook + ten dokument + laptop CEO��� do sytuacji, w kt+�rej:

- istnieje **dzia+�aj-�ce repozytorium kodu** z pierwszym dzia+�aj-�cym szkieletem aplikacji (Hello BCOS-Enabion),  
- istnieje **+�rodowisko dev w chmurze (EU)**, na kt+�rym Ewa mo++e deployowa-� ka++d-� zmian-�,  
- ustalone s-� **nawyki pracy core teamu** (CEO + Mieszko2.0 + Ewa),  
- podj-�te s-� **kluczowe decyzje, kt+�re trudno zmieni-� p+�+�niej**:
  - region danych (EU),  
  - podej+�cie multi-tenant (org_id w ka++dej tabeli),  
  - bazowy stack technologiczny,  
  - robocza nazwa produktu i plan na mark-� / domen-�.

M0 jest zako+�czone wtedy, gdy:

1. CEO widzi dzia+�aj-�c-� stron-� startow-� aplikacji w `dev` pod subdomen-� `*.enabion...`.  
2. Ewa mo++e:
   - sklonowa-� repo,  
   - uruchomi-� projekt lokalnie,  
   - wypchn-�-� zmian-� na `dev` jednym flow (git push ��� auto deploy).  
3. W tym dokumencie dopisane s-�:
   - `Stack v0` (sekcja 9.x),  
   - wype+�niona checklista M0 (12.1.9).  

---

#### 12.1.2 Decyzje strategiczne w M0 (trudne do zmiany p+�+�niej)

W M0 podejmujemy decyzje, kt+�re b-�d-� promieniowa+�y na kolejne lata:

- **Multi-tenancy** ��� od pocz-�tku zak+�adamy, ++e wszystko jest multi-tenant (pole `organization_id` w ka++dej kluczowej tabeli). To jest sp+�jne z wizj-� BCOS.  
- **Region danych** ��� EU (Postgres + storage + AI endpointy skonfigurowane pod EU tam, gdzie si-� da). U+�atwia to rozmowy z klientami PL/DE.  
- **Stack webowy** ��� nowoczesny, TypeScript-first, z du++ym ekosystemem (React / Next.js + Node / API + Postgres).  
- **AI Gateway** ��� jeden punkt integracji z modelami AI (na MVP mo++e korzysta-� z jednego providera, ale architektura jest neutralna).  
- **Marka** ��� ���Enabion��� jako g+�+�wna marka parasolowa, produkt w tym dokumencie nazywamy roboczo **BCOS-Enabion / Enabion BCOS**.  
- **Single repo** ��� jeden monorepo typu `enabion-bcos` (frontend + backend + infra) zamiast mikrous+�ug na starcie.

Te decyzje powinny by-� zmieniane tylko, je+�li oka++e si-� to absolutnie konieczne ��� wszystko inne (szczeg+�+�y UI, biblioteki, struktura folder+�w) mo++na modyfikowa-� w Phase 1���2.

---

#### 12.1.3 M0.1 - Repozytorium i narzedzia

**Cel:** Jedyne zrodlo prawdy dla kodu i implementacji Phase 1; struktura w tym punkcie = faktyczny stan repo.

- **Git hosting**  
  - Platforma: GitHub (domyslnie).  
  - Glowne repo: `enabion-bcos`.  
  - Widocznosc: `private`.

- **Struktura galezi**  
  - `main` - zawsze stabilna, synchro z `pilot`/`prod`.  
  - `dev` - glowna galaz deweloperska, auto-deploy na srodowisko `dev`.  
  - `feature/*` - tymczasowe galezie Ewy, mergowane do `dev` przez PR.

- **Minimalna struktura katalogow** (dopasowana do repo na M0):

  ```text
  /apps
    /web        # Next.js frontend (X + Y-lite)
    /api        # Backend API / BCOS Core (placeholder; API routes zyja w /apps/web)
  /packages
    /ui         # wspolne komponenty UI (placeholder)
    /core       # logika domenowa, modele, helpery
  /infra        # IaC / konfiguracja srodowisk (opcjonalnie na M0)
  /docs         # README, architektura, notatki techniczne (link do tego speca)
  ```

- **Konfiguracja repo**  
  - Wlaczone PR do `dev` i `main` (zakaz direct push do `main`).  
  - Wymagane 2FA na kontach z dostepem do repo.  
  - Proste etykiety issue: `M0`, `M1`, `bug`, `tech-debt`, `UX`, `AI`.

- **Narzedzia deweloperskie**  
  - Node.js LTS 20.x, pnpm jako package manager (packageManager w root).  
  - TypeScript, ESLint, Prettier.  
  - Husky / pre-commit (opcjonalnie w M0, bardziej M1).


#### 12.1.4 M0.2 - Stack i architektura wykonawcza ("Stack v0")

**Cel:** Wybrac stack, ktory:

- jest wystarczajaco prosty dla malego zespolu,  
- dobrze wspolgra z AI-first development,  
- nie blokuje skalowania do BCOS / Data Models 1-3.

**Propozycja Stack v0:**

- **Frontend / Web App**  
  - Next.js (App Router), React, TypeScript.  
  - UI: prosty design system budowany wlasnorecznie (na start) + standardowe komponenty (np. Radix UI / Headless UI - opcjonalnie).  
  - i18n: EN/PL/DE; biblioteka `next-intl` (planowana na M1); stringi w plikach lokalizacyjnych.

- **Backend / API (BCOS Core v0)**  
  - Podejscie 1 (preferowane na start):  
    - API w ramach Next.js (Route Handlers / API routes) + `apps/api` jako miejsce na logike (placeholder na M0).  
    - Logika biznesowa wydzielona do `/packages/core` - latwe do wyniesienia do osobnego serwisu w Phase 2.  
  - Podejscie 2 (opcjonalne pozniej):  
    - osobny serwis (np. Node + Fastify/NestJS) jako `bcos-core`, komunikujacy sie przez HTTP/JSON.

- **Baza danych**  
  - Postgres (np. Supabase / Neon / Railway) w regionie EU.  
  - ORM: Prisma lub inny TypeScript-friendly ORM.  
  - Od poczatku wymagane pole `organization_id` we wszystkich kluczowych tabelach.

- **AI Gateway**  
  - Mikroserwis (lub modul) `ai-gateway` zarzadzajacy wszystkimi wywolaniami AI:  
    - Intent Coach,  
    - Criteria Builder,  
    - Evaluation Assistant,  
    - Summaries (Intent, Trust Room, Decision Summary).  
  - Na MVP moze korzystac z jednego providera (np. OpenAI API), ale interfejs wewnetrzny powinien byc neutralny (`provider = "openai"` jako parametr).

- **Inne elementy techniczne**  
  - Autoryzacja uzytkownika: na start prosty auth (e-mail + magic link / haslo), pozniej SSO.  
  - Logowanie zdarzen: centralny logger (np. do stdout + integracja z loggingiem providera hostingu).


#### 12.1.5 M0.3 - Hosting i srodowiska (EU)

**Cel:** Ewa ma klarowne srodowiska, CEO wie "gdzie co zyje".

**Propozycja na M0:**

- **Frontend + API** - Vercel (EU region) jako glowny hosting w Phase 1 (Next.js app + API routes).  
- **Baza danych** - Postgres (EU) u dostawcy klasy Neon / Supabase (neutralny wybor providera).  
- **Srodowiska:**  
  - `local` - laptop CEO (do ogladania demo lokalnego) i Ewy (dev).  
  - `dev` - automatyczny deploy z galezi `dev`.  
  - `pilot` - reczny deploy po akceptacji CEO, z galezi `main` (tag `pilot-x.y`).  
  - `prod` - moze byc na poczatku rownoznaczne z `pilot` lub wydzielone pozniej.

W M0 korzystamy z Vercel (EU) + Postgres (EU) u dostawcy klasy Neon/Supabase. Provider moze byc zmieniony, o ile zostajemy w regionie EU i bez zmiany logiki biznesowej.

**Standard konfiguracji srodowisk:**

- Konfiguracja przez zmienne srodowiskowe (ENV), np.:  

  - `DATABASE_URL` - URL do Postgresa w EU.  
  - `AI_GATEWAY_URL` - endpoint AI.  
  - `NEXTAUTH_URL` / inne dla auth.  
  - `APP_ENV` in {local, dev, pilot, prod}.  

- **Backup i monitoring (M0)**  
  - Wlaczone automatyczne backupy DB (min. raz dziennie).  
  - Proste alerty:  
    - "deploy failed" (mail do Ewy i CEO),  
    - opcjonalnie monitoring uptime (np. darmowy status page).


#### 12.1.6 M0.4 ��� Zasady wsp+�+�pracy core team (CEO + Mieszko2.0 + Ewa)

**Role:**

- **CEO** ��� decyzje biznesowe, priorytety, akceptacja milestone���+�w, opisuje potrzeby w tym dokumencie (jako komentarze/sekcje).  
- **Mieszko2.0** ��� t+�umaczy potrzeby CEO na wymagania (sekcje FR, modu+�y, user journeys), proponuje architektur-�, pilnuje sp+�jno+�ci z Playbookiem.  
- **Ewa** ��� implementuje w repo i w chmurze, proponuje techniczne usprawnienia, zg+�asza ryzyka.

**Workflow:**

1. CEO dopisuje / zmienia wymagania w tym dokumencie (w odpowiedniej sekcji) lub tworzy kr+�tk-� notatk-� typu ���changelog���.  
2. Mieszko2.0 aktualizuje sekcje (np. 5.x, 7.x, 9, 10) tak, aby by+�y jednoznaczne.  
3. Ewa tworzy issues na task boardzie na podstawie tego dokumentu.  
4. Ewa pracuje na branchach `feature/*`, robi PR do `dev`.  
5. Po deployu na `dev` CEO ogl-�da demo, zg+�asza uwagi.  
6. Po akceptacji ��� merge do `main` i deploy na `pilot`.

**Task board (M0)**

- Narz-�dzie: GitHub Projects 
- Kolumny: `Backlog`, `In progress (Ewa)`, `Ready for demo`, `Done (on pilot)`.
- zarzadzane przez Ewe

---

#### 12.1.7 M0.5 ��� Standard minimalny dla kodu i bezpiecze+�stwa

- **Branching & PR**  
  - Zakaz direct push do `main`.  
  - Ka++da zmiana na `dev` przez PR (mo++e by-� self-review Ewy + checklist).  

- **Sekrety i dane wra++liwe**  
  - ++adne klucze API, has+�a, tokeny nie mog-� by-� commitowane do repo.  
  - U++ywamy mechanizm+�w secret+�w providera (np. Vercel Secrets + zmienne +�rodowiskowe).  

- **Konta i dost-�p**  
  - CEO i Ewa maj-� konta na hostingu i w repo z w+�-�czonym 2FA.  
  - Roles: Ewa = pe+�en dost-�p techniczny, CEO = Owner/Administrator (mo++e akceptowa-� billing, zaprasza-� osoby).  

- **Logowanie i audyt**  
  - Logi deploy+�w: kto, kiedy, z jakiej ga+�-�zi.  
  - W przysz+�o+�ci (Phase 2+) ��� logi aplikacyjne powi-�zane z organizacjami.

---

#### 12.1.8 M0.6 ��� Nazwa, domena, IP (BCOS-Enabion)

**Cel:** Nie zablokowa-� si-� na nazwie, ale ustali-� sensown-� strategi-� na dzi+� i na 2030.

- **Marka parasolowa:**  
  - ���Enabion��� ��� jako g+�+�wna marka firmy i ekosystemu (masz ju++ domen-� `enabion...`).  
  - W Playbooku ���EnabionNexus��� jest nazw-� robocz-� projektu, a ���Business Collaboration OS (BCOS)��� nazw-� kategorii.  

- **Robocza nazwa produktu Phase 1:**  
  - w tym dokumencie: **���Enabion BCOS��� / ���BCOS-Enabion���** jako robocza nazwa produktu (���Business Collaboration OS by Enabion���).  
  - docelowo mo++na zdecydowa-�, czy na zewn-�trz wyst-�puje jako ���Enabion BCOS���, czy po prostu ���Enabion���.

- **Repo / techniczne nazwy:**  
  - repo: `enabion-bcos`,  
  - przysz+�y g+�+�wny serwis: `bcos-core` (nazwy wewn-�trzne nie musz-� by-� identyczne ze znakiem towarowym).

- **Domeny (M0):**  
  - root: `enabion.[tld]` ��� ju++ posiadana,  
  - app: `app.enabion.[tld]` lub `bcos.enabion.[tld]` jako roboczy adres produktu,  
  - w Phase 1 wystarczy jedna domena robocza; p+�+�niej mo++na doda-� np. `enabionbcos.com` je+�li b-�dzie potrzebne.

- **Znak towarowy (M0 = pre-check, nie pe+�na rejestracja):**  
  - M0 NIE oznacza jeszcze rejestracji znaku w EUIPO, ale:  
    - sprawdzamy dost-�pno+�-� `ENABION` i kombinacji typu `ENABION BCOS` w bazach:  
      - EUIPO eSearch + TMview (trade marks w UE),  
      - WIPO Global Brand Database (globalne znaki).  
    - je+�li nie ma oczywistych konflikt+�w, planujemy:
      - rejestracj-� s+�ownego znaku ���ENABION��� jako priorytet,  
      - opcjonalnie rozszerzenie o ���ENABION BCOS��� / ���BCOS ENABION��� w p+�+�niejszym etapie.  
  - Ten dokument u++ywa ���Enabion BCOS / BCOS-Enabion��� jako **nazwy roboczej**, dop+�ki nie b-�dzie formalnej decyzji po konsultacji z rzecznikiem patentowym.

---


##### 12.1.8.3 Instrukcja podpiecia domeny `enabion.com`

- Dodaj domene w Vercel: Project `enabion-bcos` -> Settings -> Domains -> Add `enabion.com` (apex/root).
- DNS u providera:
  - Apex (`@`): A -> `76.76.21.21` (Vercel edge) lub ALIAS/ANAME/CNAME -> `cname.vercel-dns.com` (jesli provider wspiera flattening).
  - (Opcjonalnie) `www`: CNAME -> `cname.vercel-dns.com` (przekierowanie na root).
- Po propagacji: Domains w Vercel powinno byc `Valid/Configured`; zrob redeploy z `dev`.
- Test: https://enabion.com laduje landing BCOS + `/api/health` dziala.
- Utrzymuj `APP_ENV=dev` i `DATABASE_URL` w env Vercel; brak custom outputDirectory.

##### 12.1.8.4 Trademark check (ENABION / ENABION BCOS)

Status: NOT RUN (wymaga recznego sprawdzenia z dostepem do EUIPO/WIPO).

Zakres:
- Termy: "ENABION", "ENABION BCOS".
- Rejestry: EUIPO (TMview / eSearch) i WIPO Global Brand Database.

Do zrobienia (manualnie):
1) Wyszukaj w EUIPO TMview oba termy (dokladny i podobny) i zapisz: numery, klasy, wlascicieli, status (active/opposed/expired), terytoria.
2) Wyszukaj w WIPO Global Brand Database te same termy.
3) Zapisz ewentualne konflikty lub identyczne znaki.

Template notatki po wyszukaniu:
- EUIPO: <wnioski / brak konfliktu / potencjalny konflikt + klasa + wlasciciel>.
- WIPO: <wnioski / brak konfliktu / potencjalny konflikt + klasa + wlasciciel>.
- Rekomendacja: np. brak konfliktu -> green light; jesli konflikt -> konsultacja z rzecznikiem.

#### 12.1.9 M0.7 ��� Daty, kamienie i checklista ���M0 done���

**Docelowy wynik M0:** wszystko gotowe, aby wej+�-� w M1 (budowa X Intent Studio).

**Checklista M0 (musi byc odhaczona w tym dokumencie):**

1. **Repozytorium**
   - [x] Repo `enabion-bcos` utworzone, prywatne.  
   - [x] Struktura `/apps`, `/packages`, `/infra`, `/docs` istnieje (z placeholderami tam, gdzie trzeba).  
   - [x] README z opisem stacka i krokow uruchomienia lokalnie.

2. **Stack v0**
   - [x] Zainstalowany Next.js + TypeScript, landing `Enabion BCOS - Phase 1 (X-first MVP)`.  
   - [ ] Skonfigurowany ORM (Prisma) i podpiety Postgres (chocby jedna prosta tabela).  
   - [x] Modul `ai-gateway` (placeholder/healthcheck) istnieje.

3. **Hosting**
   - [x] Konto na hostingu (Vercel) + konto DB (EU) zalozone.  
   - [x] Srodowisko `dev` podpite do galezi `dev`.  
   - [ ] URL `dev` dziala i CEO widzi strone startowa (czeka na potwierdzenie).  
   - [ ] Backup DB wlaczony.

4. **Zasady wspolpracy**
   - [x] Ustalony i uzywany task board (`Backlog -> In progress -> Ready for demo -> Done`).  
   - [x] 2FA wlaczone na kontach Git/hostingu.  
   - [x] PR flow przetestowany (min. 1 zmiana przeszla `feature/*` -> `dev` -> deploy).

5. **Nazwa / domena / IP**
   - [x] Wybrane robocze nazewnictwo: "Enabion BCOS / BCOS-Enabion" + `enabion-bcos` jako repo.  
   - [x] Podjeta decyzja: Phase 1 docelowo pod `enabion.com` (subdomeny TBD po decyzji CEO).  
   - [ ] Zrobiony wstepny search znaku "ENABION" / "ENABION BCOS" w EUIPO/WIPO (notatka z wynikiem).

Kiedy wszystkie pola checklisty sa odhaczone, mozna formalnie uznac, ze **M0 jest zrobione** i przejsc do realizacji M1.

#### 12.1.10 Board Sync Status

- Spec version: v0.5
- Last sync to GitHub Project "Enabion-BCOS":
  - Date: 2025-12-05
  - By: Ewa
  - Scope: M0 issues #2-#7
  - Status: #2-#6 In progress (Ewa), #7 Backlog (CEO)
- Dev URL (Vercel): https://enabion-bcos-git-dev-staadits-projects.vercel.app
- Drift: [ ] YES  [x] NO

---


## 13. Za+�o++enia, ryzyka, otwarte pytania

Za+�o++enia:

- X ma przynajmniej 1���2 potencjalnych vendor+�w do por+�wnania (BYOV).  
- X jest gotowe wprowadzi-� Intent Studio i Decision Model jako standard wewn-�trzny.  
- PL/DE jako rynki pilota++owe s-� wystarczaj-�ce do walidacji.

Ryzyka:

- GTM do X jest wolniejszy ni++ do Y (d+�u++szy cykl decyzyjny).  
- Scope creep w stron-� pe+�nego narz-�dzia RFP/procurement.  
- Vendorzy Y mog-� niech-�tnie wype+�nia-� kolejny formularz (+�agodzimy to Avatarem i sensown-� struktur-�).

Otwarte pytania:

- Czy w Phase 1 wspieramy eksport RFP (Intent + kryteria + context) do PDF/Word? ��� [CEO] Domy+�lnie export jest przez Enabion, ale wspieramy te++ PDF/Word, kt+�re mo++e by-� u++yte wewn-�trznie przez u++ytkownika.  
- Czy dodajemy placeholder "Enabion suggested vendors" (manualnie kuratorowane na pocz-�tku)? ��� [CEO] Tak, odpalamy to w MVP (w formie Avatara proponuj-�cego vendor+�w z publicznych +�r+�de+� + r-�czny wyb+�r X).  
- Po ilu pilotach X przechodzimy do Phase 2 ��� pe+�nego OS dla Y? ��� [CEO] TBD.
