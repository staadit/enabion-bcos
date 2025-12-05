# EnabionNexus ÔÇô Phase1_MVP-Spec_v0.4 (X-first)

**Status:** Draft (Phase 1 ÔÇô working master, X-first)  
**Owner:** CEO (business) + Mieszko2.0 (product/tech)  
**Last update:** 2025-12-05
**Source:** EnabionNexus ÔÇô Playbook v1.6 (master business doc)  
**Scope:** Ten dokument jest jedynym g+é+¦wnym dokumentem wykonawczym Phase 1 (MVP).  
Wszelkie inne notatki / backlogi / taski s-à jego rozwini-Öciem. W przypadku konfliktu ÔÇô ten dokument wygrywa.

> Phase 1 = X-first MVP. Bohaterem jest firma X (ma potrzeb-Ö, ale nie wie dok+éadnie co i z kim zrobi-ç).  
> Firmy Y s-à obs+éu++one w wersji Vendor-lite / Y-lite (Guest Portal / Response + prosty workspace), bez pe+énego OS po ich stronie.

---

## 0. Jak czyta-ç ten dokument

- Playbook v1.6 ÔÇô wizja 2030, CONNECT ÔåÆ POWER ÔåÆ GROW, 5-Step Lifecycle, Trust Graph itd.  
- Phase1_MVP-Spec_v0.4 (X-first) ÔÇô w-àski, dowo++alny zakres pierwszego produktu z perspektywy X.  

Dokument +é-àczy:

1. Cel biznesowy Phase 1 dla X.  
2. Zakres produktu (modu+éy MVP).  
3. Wymagania funkcjonalne i niefunkcjonalne (v0).  
4. Architektur-Ö i model danych v0 (X-first, Y-lite).  
5. Rynki i j-Özyki (PL / DE / EN).  
6. Metryki sukcesu Phase 1 i kamienie milowe.

### 0.1 Change Log (Phase 1 ÔÇô Spec versioning)

- 2025-12-04 ÔÇô v0.4 ÔåÆ v0.5 ÔÇô [CEO + Mieszko2.0]
  - Doprecyzowanie procesu wsp+¦+épracy (sekcja 0.2 / 12.1.4).
  - Dodanie Execution & Backlog rules.
  - M0 ÔåÆ doprecyzowane taski i definicja ÔÇ×M0 doneÔÇØ.
- 2025-12-03 ÔÇô v0.4 ÔÇô ...


---

## 1. Phase 1 ÔÇô cel, zakres, sukces (X-first)

### 1.1 Cel Phase 1 (z perspektywy X)

Dowie+¦-ç X-first MVP Business Collaboration OS, kt+¦ry dla firm X w PL/DE:

- zamienia chaotyczne pomys+éy, maile i prezentacje w ustrukturyzowany Intent,
- pomaga zbudowa-ç kryteria wyboru partner+¦w Y,
- umo++liwia por+¦wnanie i wyb+¦r partnera w jednym Decision Room,
- daje podstawow-à warstw-Ö NDA / L1/L2 i Trust Room do pierwszych rozm+¦w.

To pokrywa g+é+¦wnie kroki 1ÔÇô3 Enabion 5-Step Partnership Lifecycle: Clarify ÔåÆ Match & Align ÔåÆ Commit & Assure, z minimalnym Deliver (Trust Room).

### 1.2 Wysokopoziomowy zakres MVP

MVP robi wy+é-àcznie:

1. X Intent Studio / Intent Coach (Clarify).  
2. Decision Model Builder (kryteria wyboru partnera).  
3. Vendor Candidates & Vendor-lite Response (BYOV ÔÇô bring your own vendors).  
4. Evaluation Matrix & Decision Room (Match & Align ÔåÆ Commit & Assure).  
5. NDA & Confidentiality L1/L2 (Warstwa 0/1/2 lite).  
6. XÔåöY Trust Room (lite) dla wybranego partnera.  
7. X Intent Pipeline (statusy Draft ÔåÆ Clarify ÔåÆ Evaluate ÔåÆ Decision).  
8. J-Özyki: EN (domy+ølny) + PL i DE (native).  
9. Cz-Ö+ø-ç dla Y (ÔÇ×Y-lite workspaceÔÇØ) pozwalaj-àca na:
   - stworzenie prostego konta organizacji typu Y,
   - przegl-àd wszystkich otrzymanych Intent+¦w (zaprosze+ä od X),
   - odpowiadanie na Intenty przez Vendor-lite Response Portal,
   - korzystanie z Avatara wsp+¦+épracy po stronie Y (pomoc w odpowiedziach).

### 1.3 Out of scope (Phase 1)

- Otwarty marketplace XÔåöY (publiczne og+éoszenia, bidding, ranking).  
- Pe+ény OS dla Y (pipeline Y, dashboard Y, advanced TrustScore dla Y).  
- Warstwa finansowa (escrow, Financial TrustScore, dispute resolution).  
- EnableMark program, Hubs i pe+ény Trust Graph (tylko minimalny Trust v0).  
- Data Models 2/3 (Shielded/Sovereign) jako produkt (tylko w architekturze).

### 1.4 Definicja sukcesu Phase 1 (X-first)

- Minimum 3 pilot+¦w X (PL/DE), kt+¦rzy korzystaj-à z systemu do realnej decyzji o wyborze partnera Y.  
- Minimum 10 Intent+¦w przeprowadzonych przez pe+ény flow: Intent ÔåÆ Criteria ÔåÆ Vendor Responses ÔåÆ Decision.  
- Subiektywny wow X: 
  - "Bez Enabion ugrz-Ö+¦liby+ømy w mailach / slajdach", 
  - jasna, u++ywalna Decision Summary dla zarz-àdu/procurementu.  
- System stabilny, multi-tenant, Model 1 ÔÇô Standard (EU region) i gotowy fundament pod Phase 2 (pe+ény OS dla Y).

---

## 2. Rynki i j-Özyki ÔÇô PL / DE / EN

### 2.1 Rynki Phase 1

- Polska (PL) ÔÇô firmy X planuj-àce projekty tech/AI/digital oraz firmy Y pe+éni-àce rol-Ö vendor+¦w w tych projektach.  
- Niemcy (DE) ÔÇô firmy X (oraz Y jako vendorzy), podobny profil, plus cross-border XÔåöY PL/DE.

### 2.2 J-Özyki produktu

MVP jest natywne dla:

- EN ÔÇô domy+ølny j-Özyk systemu (UI, dokumentacja, product copy),  
- PL ÔÇô pe+éna lokalizacja UI + Avatary rozumiej-à i generuj-à PL,  
- DE ÔÇô pe+éna lokalizacja UI + Avatary rozumiej-à i generuj-à DE.

Konsekwencje:

- wszystkie teksty UI w i18n (klucze lokalizacyjne), ++adnych hard-coded tekst+¦w,  
- Organization ma `default_language` (EN/PL/DE),  
- User ma `preferred_language` (EN/PL/DE),  
- Avatary:
  - rozumiej-à input w EN/PL/DE,  
  - domy+ølnie odpowiadaj-à w j-Özyku u++ytkownika,  
  - potrafi-à przet+éumaczy-ç Intent/Decision Summary na EN/PL/DE ("Translate toÔÇª"),  
  - maj-à te++ mo++liwo+ø-ç wysy+éania wiadomo+øci niet+éumaczonych, je++eli np. u++ytkownik zna DE i PL.

---

## 3. ICP i persony (X-first)

### 3.1 ICP ÔÇô firmy X

ICP-X-1: Mid-size firmy X (PL/DE) 50ÔÇô500 os+¦b:

- planuj-à projekt technologiczny / AI / digital,  
- nie maj-à pe+énego, dojrza+éego procesu IT procurement,  
- boj-à si-Ö z+éego wyboru partnera,  
- ton-à w dokumentach, mailach, prezentacjach, wersjach RFP.

Przyk+éadowe bran++e: retail, manufacturing, finance, services.

### 3.2 Persony

1. Project Owner X  
   - w+éa+øciciel biznesowy inicjatywy, ma bud++et i KPI,  
   - potrzebuje jasnego uzasadnienia decyzji (vendor A vs B).

2. Transformation / IT Lead X  
   - t+éumaczy potrzeby biznesowe na wymagania tech,  
   - wsp+¦+édecyduje o kryteriach i vendorach.

3. Procurement / Legal Reviewer  
   - dba o zgodno+ø-ç z procedurami,  
   - potrzebuje Decision Summary w formie zrozumia+éej dla audytu.

4. Vendor Y ÔÇô Guest / VendorUser  
   - odpowiada na Intent X przez Vendor-lite Response Portal,  
   - nie ma pe+énego OS, tylko minimalny UI do odpowiedzi lub prosty Y-lite workspace.

5. Dla MVP i ma+éych firm mo++e si-Ö okaza-ç, ++e wszystkie role po stronie X/Y pe+éni jedna i ta sama osoba.

---

## 4. Kluczowe do+øwiadczenia (UX / WOW)

### 4.1 "Od chaosu do decyzji"

X zaczyna z rozmytym "musimy co+ø zrobi-ç":

- nie wie dok+éadnie co, lub wie, ale nie wie jak zacz-à-ç,  
- nie wie z kim,  
- nie ma kryteri+¦w ani jednego miejsca na por+¦wnanie opcji.

Enabion Phase 1:

> W ci-àgu jednego dnia X ma:  
> - doprecyzowany Intent,  
> - jasne kryteria wyboru partner+¦w,  
> - por+¦wnanie 2ÔÇô3 vendor+¦w,  
> - rekomendacj-Ö (AI + w+éasn-à),  
> - Decision Summary do zarz-àdu/procurementu,  
> - komunikacj-Ö i wysy+éanie e-maili do vendor+¦w w Enabion (z pomoc-à Avatara).

### 4.2 Vendor Y ÔÇô lepsze ni++ "wy+ølij nam prezentacj-Ö"

Y nie musi walczy-ç z 20 r+¦++nymi formatami RFP.  

Dostaje jeden, zrozumia+éy Intent i Response Form, w kt+¦rym Avatar pomaga napisa-ç sensown-à odpowied+¦ po EN/PL/DE.

---

## 5. Modu+éy MVP (X-first)

### 5.1 X Organizations & Users

Opis: podstawowy model organizacji X (i minimalnie Y) z u++ytkownikami i rolami.

In scope:

- Organization z polem `org_type: X | Y`.  
- Profil X: nazwa, kraj, bran++e, size band, rynki, j-Özyki, URL.  
- Role X: `OrgAdmin`, `ProjectOwner`, `Evaluator`, `Viewer`.  
- Organizacje Y jako vendor-lite (Y mo++e istnie-ç te++ tylko jako VendorCandidate bez pe+énego konta / Y-lite workspace).

Out of scope:

- granularne role, z+éo++one uprawnienia, wielopoziomowe struktury hierarchiczne.

---

### 5.2 X Intent Studio (Intent Coach)

Opis: serce MVP ÔÇô doprecyzowanie potrzeby X (Clarify).

In scope:

- Tworzenie Intentu:
  - z pustego formularza ("Start from scratch"),  
  - z wklejonego tekstu (mail, notatki, transkrypt).  
- Avatar Intent Coach:
  - zadaje pytania doprecyzowuj-àce,  
  - wype+énia pola Intentu: cel biznesowy, kontekst, zakres high-level, KPI, bud++et wide+éki, timeline, ryzyka, ograniczenia, preferowany model wsp+¦+épracy, j-Özyk.  
- Oznaczanie poziomu poufno+øci Intentu (L1 / L2).  
- Edycja Intentu przez X i wersjonowanie (v1, v2ÔÇª).

Out of scope:

- templateÔÇÖy ultra-specyficzne dla danej bran++y (Phase 2+),  
- integracje bezpo+ørednie z narz-Ödziami notek/whiteboard (Phase 2+).

---

### 5.3 Decision Model Builder (kryteria wyboru partner+¦w Y)

Opis: przek+éada Intent na kryteria i wagi oceny partner+¦w.

In scope:

- Avatar proponuje list-Ö kryteri+¦w (kompetencje, do+øwiadczenie, lokalizacja, j-Özyk, cena, ryzyka, kultura, governance).  
- U++ytkownik:
  - dodaje/usuwa kryteria,  
  - ustawia wagi (0ÔÇô5),  
  - oznacza must-have vs nice-to-have.  
- Tworzy si-Ö macierz oceny, kt+¦ra b-Ödzie u++yta w Evaluation Matrix.  
- Generowanie kr+¦tkiego tekstu "How we choose vendors" ÔÇô do Decision Summary.

Out of scope:

- zaawansowane scoringi machine-learningowe (na du++ej historii projekt+¦w),  
- automatyczne importowanie kryteri+¦w z polityk korporacyjnych (Phase 2+).

---

### 5.4 Vendor Candidates (BYOV) & Invitations

Opis: X dodaje potencjalnych partner+¦w Y do por+¦wnania.

In scope:

- Mo++liwo+ø-ç dodania VendorCandidate:
  - jako prosty rekord: nazwa firmy, kontakt, kraj, URL, notatka,  
  - opcjonalnie powi-àzanie z istniej-àc-à Organization typu Y (gdy powstanie pe+éniejszy OS dla Y).  
- Generowanie indywidualnych zaprosze+ä (link+¦w) do Vendor-lite Response Portal.  
- +Üledzenie statusu: invited / opened / responded / no response.  
- Opcjonalna pomoc Avatara: X mo++e poprosi-ç Avatara o zaproponowanie potencjalnych VendorCandidates na podstawie Intentu (publiczne +¦r+¦d+éa). X sam decyduje, kt+¦re propozycje doda-ç jako VendorCandidate.

Out of scope:

- publiczny katalog vendor+¦w,  
- reklamy, listing fees, tokenizacja "slot+¦w".

---

### 5.5 Vendor-lite Response Portal (Y Guest)

Opis: minimalny portal, w kt+¦rym Y widzi Intent X i odpowiada w ustrukturyzowany spos+¦b.

In scope:

- Strona z Intentem (read-only) + kr+¦tka sekcja "O X" i "Jak oceniamy vendor+¦w".  
- Formularz odpowiedzi:
  - sekcje dopasowane do kryteri+¦w (np. do+øwiadczenie, approach, timeline, koszt, zesp+¦+é, ryzyka),  
  - mo++liwo+ø-ç do+é-àczenia referencji (URL / tekst, nie pliki binarne na MVP).  
- Avatar, kt+¦ry pomaga Y napisa-ç odpowied+¦ (EN/PL/DE).  
- Po wys+éaniu dane s-à zapami-Ötywane jako VendorResponse i mapowane na Evaluation Matrix.

Out of scope:

- pe+éne konto Y z pipelineÔÇÖem, dashboardem, TrustScore,  
- zarz-àdzanie dokumentami kontraktowymi po stronie Y.

---

### 5.6 Evaluation Matrix & Decision Room

Opis: miejsce, gdzie X por+¦wnuje vendor+¦w i podejmuje decyzj-Ö.

In scope:

- Widok macierzy:
  - wiersze: vendorzy Y,  
  - kolumny: kryteria,  
  - kom+¦rki: score + komentarz.  
- Avatar:
  - proponuje initial score na podstawie odpowiedzi Y i wag kryteri+¦w,  
  - pod+øwietla ryzyka (np. brak do+øwiadczenia w bran++y),  
  - sugeruje pytania follow-up.  
- X mo++e r-Öcznie korygowa-ç score i dodawa-ç komentarze.  
- Decision Summary:
  - ranking vendor+¦w,  
  - rekomendacja Avatara (z zastrze++eniem, ++e to sugestia, nie decyzja),  
  - finalny wyb+¦r vendor+¦w i uzasadnienie (tekst dla zarz-àdu/procurementu).

Out of scope:

- automatyczne generowanie formalnego kontraktu (Phase 2+),  
- integracja z wewn-Ötrznymi systemami purchase order.

---

### 5.7 NDA & Confidentiality (L1 / L2, warstwy 0/1/2 lite)

Opis: prosty model NDA w Phase 1.

In scope:

- Oznaczanie spisu tre+øci / komunikacji jako L1 / L2.  
- Warstwa 0: No-NDA Zone (L1) ÔÇô Clarify i wysoki poziom Match & Align mog-à dzia+éa-ç bez NDA.  
- Warstwa 1: Enabion Mutual NDA ÔÇô click-wrap dla pre-sales (mo++e by-ç w+é-àczony w MVP jako opt-in).  
- Warstwa 2: Custom NDA FastTrack ÔÇô X mo++e zarejestrowa-ç sw+¦j wz+¦r NDA i zaznaczy-ç status NDA per vendor (placeholder, nie pe+éna integracja e-podpisu).  
- System ostrzega u++ytkownika, gdy pr+¦buje oznaczy-ç tre+øci jako L2 bez aktywnej NDA.

Out of scope:

- integracje z DocuSign / Adobe Sign (poza prostym przechowywaniem statusu),  
- pe+éne zarz-àdzanie cyklem ++ycia NDA.

---

### 5.8 Trust Room (Secure Collaboration Room lite)

Opis: dialog XÔåöwybrany vendor Y w jednym pokoju.

In scope:

- Jeden Trust Room per Intent + Vendor (lub Intent + lista vendor+¦w w fazie pyta+ä).  
- Wiadomo+øci z flag-à L1/L2.  
- Avatar w pokoju:
  - generuje podsumowania,  
  - przypomina o ryzykach / zadaniach,  
  - ostrzega przy pr+¦bie wprowadzenia L2 bez NDA.

Out of scope:

- zaawansowany file-sharing (Phase 2 ÔÇô na linkach / integracjach),  
- integracje push/pull z Teams/Slack poza prostymi powiadomieniami.

---

### 5.9 X Intent Pipeline

Opis: kr+¦tki pipeline Intent+¦w po stronie X.

In scope:

- Statusy Intentu:
  - Draft, Clarify, Evaluate Vendors, Decision, On Hold, Archived.  
- Widok tabeli / kanbana:
  - kolumny: status, owner, bud++et wide+éki, rynek (PL/DE/Other), j-Özyk, liczba vendor+¦w.  
- Proste filtry (status, owner, kraj, j-Özyk).

Out of scope:

- pe+ény CRM, forecasty, revenue pipeline Y.

---

### 5.10 Y-lite Workspace (Vendor-side view)

Opis:  
Minimalny widok ÔÇ×konta dostawcyÔÇØ dla firm Y, kt+¦re odpowiadaj-à na wi-Öcej ni++ jeden Intent.  
Y-lite workspace NIE jest pe+énym OS dla Y ÔÇô s+éu++y tylko do obs+éugi zaprosze+ä od X.

In scope (Phase 1):

- Organizacja mo++e mie-ç `org_type: Y` (vendor).  
- U++ytkownik Y (rola `VendorUser`) po zalogowaniu:
  - widzi list-Ö wszystkich VendorCandidates powi-àzanych z jego organizacj-à lub mailem (czyli Intenty, do kt+¦rych zosta+é zaproszony),  
  - mo++e otworzy-ç ka++dy Intent w widoku read-only,  
  - mo++e przej+ø-ç do formularza odpowiedzi (Vendor-lite Response Portal) i wys+éa-ç/edytowa-ç swoj-à odpowied+¦,  
  - widzi statusy: zaproszony / odpowiedzia+é / w trakcie rozm+¦w.  
- Y ma dost-Öp do Avatara wsp+¦+épracy:
  - pomoc w pisaniu odpowiedzi (EN/PL/DE),  
  - pomoc w formu+éowaniu pyta+ä do X,  
  - kr+¦tkie podsumowania rozmowy w Trust Room.

Out of scope (Phase 1):

- pe+ény pipeline sprzeda++owy / forecast po stronie Y,  
- zaawansowane dashboardy TrustScore dla Y,  
- zarz-àdzanie wieloma zespo+éami/rolami wewn-àtrz Y (na MVP wystarczy jedna rola `VendorUser`).

---

## 6. User Journeys (X-first)

### 6.1 Journey #0 ÔÇô X doprecyzowuje potrzeb-Ö (bez vendor+¦w)

1. OrgAdmin X zak+éada organizacj-Ö, wybiera domy+ølny j-Özyk (PL/DE/EN).  
2. ProjectOwner X tworzy Intent w Intent Studio (blank lub paste).  
3. Avatar Intent Coach zadaje pytania i generuje strukturalny Intent.  
4. X edytuje i akceptuje Intent v1, status = Draft ÔåÆ Clarify.

### 6.2 Journey #1 ÔÇô X definiuje kryteria i zaprasza vendor+¦w

1. X otwiera Intent, przechodzi do Decision Model Builder.  
2. Avatar proponuje kryteria; X ustawia wagi i must-have.  
3. X dodaje 2ÔÇô3 VendorCandidates (istniej-àcy partnerzy, nowe firmy).  
3a. (Opcjonalnie) X prosi Avatara o sugestie vendor+¦w. Avatar pokazuje list-Ö potencjalnych firm na podstawie Intenta. X wybiera 1ÔÇô2 z nich i dodaje jako VendorCandidates (`source = ENABION_SUGGESTED`).  
4. System wysy+éa im zaproszenia do Vendor-lite Response Portal.  
5. Status Intentu = Evaluate Vendors.

### 6.3 Journey #2 ÔÇô Vendor Y odpowiada, X por+¦wnuje i decyduje

1. Vendor Y otwiera link, widzi Intent X i formularz odpowiedzi.  
2. Y wype+énia odpowied+¦ (z pomoc-à Avatara) i wysy+éa.  
3. X widzi odpowiedzi w Evaluation Matrix, z initial scoring AI.  
4. X modyfikuje score, dodaje komentarze, pyta follow-up (komentarze / Trust Room).  
5. W Decision Room X wybiera vendor+¦w, zapisuje decyzj-Ö i uzasadnienie.  
6. Status Intentu = Decision ÔåÆ Archived lub On Hold.

### 6.4 Journey #3 ÔÇô Trust Room po wyborze partnera

1. Po wyborze vendor+¦w X mo++e aktywowa-ç NDA na poziomie Intent-Vendor.  
2. Tworzony jest Trust Room dla Intentu i wybranego vendora.  
3. X i Y wymieniaj-à pierwsze informacje L2 (po NDA) i ustalaj-à next steps.

### 6.5 Journey #4 ÔÇô Vendor Y u++ywa Y-lite Workspace

1. Firma Y otrzymuje zaproszenie do Intentu (link z Enabion).  
2. Przed wys+éaniem odpowiedzi przedstawiciel Y wybiera opcj-Ö ÔÇ×Chc-Ö mie-ç konto i widzie-ç wszystkie moje IntentyÔÇØ ÔåÆ tworzy si-Ö konto organizacji typu Y i u++ytkownik `VendorUser`.  
3. `VendorUser` loguje si-Ö do Y-lite Workspace i widzi list-Ö wszystkich Intent+¦w, do kt+¦rych zosta+é zaproszony.  
4. Otwiera wybrany Intent, korzysta z Avatara, aby napisa-ç odpowied+¦, i wysy+éa j-à do X.  
5. W kolejnych zaproszeniach Y nie musi zak+éada-ç konta ÔÇô nowe VendorCandidates s-à automatycznie widoczne na li+øcie w Y-lite Workspace.

---

## 7. Functional Requirements (FR) ÔÇô v0

### 7.1 Organizations & Users

- FR-ORG-001 ÔÇô System allows creating organizations with `org_type: X|Y`.  
- FR-ORG-002 ÔÇô Org X profile stores: name, country, industries, size_band, markets, languages, website.  
- FR-ORG-003 ÔÇô Roles for X: OrgAdmin, ProjectOwner, Evaluator, Viewer. Lub wszystkie role mo++e pe+éni-ç jedna osoba dla ma+éych firm.  
- FR-ORG-004 ÔÇô Guest vendor Y can respond to an Intent via tokenized link without full account. All interactions are logged.

### 7.2 Language & Localization

- FR-LANG-001 ÔÇô Organization has `default_language` (EN/PL/DE).  
- FR-LANG-002 ÔÇô User has `preferred_language` (EN/PL/DE).  
- FR-LANG-003 ÔÇô All static UI strings are loaded from localization files for EN/PL/DE.  
- FR-LANG-004 ÔÇô Avatars accept input and generate output in EN/PL/DE.

### 7.3 X Intent Studio

- FR-INT-001 ÔÇô User can create Intent from scratch or by pasting free-form text.  
- FR-INT-002 ÔÇô Avatar generates structured Intent fields from free text.  
- FR-INT-003 ÔÇô User can edit generated Intent and save a version.  
- FR-INT-004 ÔÇô Intent has `confidentiality_level` field (L1/L2).

### 7.4 Decision Model

- FR-DEC-001 ÔÇô System allows adding evaluation criteria (name, description, weight, must_have).  
- FR-DEC-002 ÔÇô Avatar can propose an initial set of criteria based on Intent.  
- FR-DEC-003 ÔÇô Criteria are linked to an Intent and used in Vendor Responses and Evaluation Matrix.

### 7.5 Vendor Candidates & Responses

- FR-VEN-001 ÔÇô User can create VendorCandidate with name and contact email.  
- FR-VEN-002 ÔÇô System generates unique invitation URL per VendorCandidate.  
- FR-VEN-003 ÔÇô Vendor can submit a structured response mapped to Intent criteria.  
- FR-VEN-004 ÔÇô Vendor responses are stored as VendorResponse entities linked to VendorCandidate and Intent.  
- FR-VEN-005 ÔÇô User (X) can ask Avatar to search public internet sources for potential VendorCandidates based on the Intent. Avatar pokazuje list-Ö propozycji (nazwa firmy, URL, kr+¦tki opis ÔÇ×dlaczego pasujeÔÇØ), bez automatycznego kontaktu z tymi firmami.  
- FR-VEN-006 ÔÇô X mo++e wybra-ç, kt+¦re z proponowanych firm doda-ç jako VendorCandidate. Przy dodaniu system zapisuje `source = 'ENABION_SUGGESTED'` dla tego VendorCandidate.

### 7.6 Evaluation Matrix & Decision

- FR-EVAL-001 ÔÇô System displays an evaluation matrix for each Intent with vendors vs criteria.  
- FR-EVAL-002 ÔÇô Users can assign and edit scores per vendor-criterion.  
- FR-EVAL-003 ÔÇô Avatar can propose initial scores based on VendorResponses.  
- FR-EVAL-004 ÔÇô System stores a Decision entity with selected vendors and rationale text.

### 7.7 NDA & Confidentiality

- FR-NDA-001 ÔÇô System allows tracking NDA status per Intent-Vendor (none / mutual / custom).  
- FR-NDA-002 ÔÇô System prevents marking messages as L2 without NDA (or shows strong warning).  
- FR-NDA-003 ÔÇô NDA acceptance events are logged (user, timestamp, type).

### 7.8 Trust Room

- FR-ROOM-001 ÔÇô System can create a Trust Room linked to an Intent and vendor.  
- FR-ROOM-002 ÔÇô Users can post messages with text content and L1/L2 flag.  
- FR-ROOM-003 ÔÇô Avatar can produce a summary of the conversation on demand.

### 7.9 X Intent Pipeline

- FR-PIPE-001 ÔÇô Intent has a `status` from a fixed enum: Draft, Clarify, EvaluateVendors, Decision, OnHold, Archived.  
- FR-PIPE-002 ÔÇô System provides a list/board view of all Intents for an organization with filters by status, owner, market, language.

### 7.10 Y-lite Workspace (Vendor-side view)

- FR-Y-001 ÔÇô Organization with `org_type: Y` mo++e mie-ç co najmniej jednego u++ytkownika z rol-à `VendorUser`.  
- FR-Y-002 ÔÇô Po zalogowaniu `VendorUser` widzi list-Ö wszystkich VendorCandidates powi-àzanych z jego organizacj-à lub adresem e-mail (Intenty, do kt+¦rych zosta+é zaproszony).  
- FR-Y-003 ÔÇô `VendorUser` mo++e otworzy-ç zaproszony Intent, przej+ø-ç do formularza odpowiedzi (Vendor-lite Response Portal) oraz zapisa-ç/edytowa-ç swoj-à odpowied+¦.  
- FR-Y-004 ÔÇô `VendorUser` ma dost-Öp do Avatara wsp+¦+épracy, kt+¦ry pomaga pisa-ç odpowiedzi oraz pytania do X (EN/PL/DE).

---

## 8. Non-Functional Requirements (NFR) ÔÇô v0

### 8.1 Og+¦lne

- NFR-GEN-001 ÔÇô Phase 1 dzia+éa w Data Model 1 ÔÇô Standard (multi-tenant, EU region).  
- NFR-GEN-002 ÔÇô Aplikacja webowa (desktop-first, mobile-friendly).

### 8.2 Wydajno+ø-ç

- NFR-PERF-001 ÔÇô P95 czasu odpowiedzi AI (Intent generation, scoring) < 15 s dla 2 000 s+é+¦w inputu.  
- NFR-PERF-002 ÔÇô P95 czasu odpowiedzi UI (bez AI) < 500 ms.

### 8.3 Bezpiecze+ästwo

- NFR-SEC-001 ÔÇô Wszystkie rekordy s-à powi-àzane z `organization_id`, izolacja tenant+¦w na poziomie aplikacji i bazy.  
- NFR-SEC-002 ÔÇô Codzienny backup DB, RPO Ôëñ 24 h.  
- NFR-SEC-003 ÔÇô Dane przechowywane w regionie EU.

### 8.4 i18n / l10n

- NFR-LANG-001 ÔÇô Nowe teksty UI musz-à by-ç dodawane wy+é-àcznie przez pliki lokalizacyjne.  
- NFR-LANG-002 ÔÇô Dodanie nowego j-Özyka nie wymaga zmian w logice biznesowej.

### 8.5 UX / Avatars

- NFR-UX-001 ÔÇô Avatary nie gubi-à kontekstu w obr-Öbie Intentu: kontekst = organization + intent + ostatnie wiadomo+øci / responses.  
- NFR-UX-002 ÔÇô X w jednym widoku widzi ile Intent+¦w jest w Draft/Clarify/Evaluate/Decision.

---

## 9. Architektura (high level, X-first)

- Frontend Web (SPA) ÔÇô ekrany dla X (Intent Studio, Decision Room, Pipeline) + Vendor-lite Portal / Y-lite workspace dla Y.  
- BCOS Core (Backend API) ÔÇô multi-tenant API dla: Organizations, Users, Intents, Criteria, VendorCandidates, VendorResponses, Evaluations, NDA, TrustRooms.  
- AI Gateway v0 ÔÇô warstwa do obs+éugi wszystkich zada+ä AI (Intent Coach, Criteria Builder, Evaluation Assist, Summaries).  
- Data Layer ÔÇô relacyjna baza (Postgres), opcjonalnie vector store (RAG na Intentach / odpowiedziach).

Phase 1 korzysta z chmurowych modeli AI przez AI Gateway, vendor-neutral.

---

## 10. Data Model v0 (conceptual)

G+é+¦wne encje:

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

Szczeg+¦+éowe typy i relacje zostan-à doprecyzowane w implementacji, ale ten model jest +¦r+¦d+éem prawdy dla Phase 1.

---

## 11. Metryki Phase 1 (X-first)

- North Star: skr+¦cenie czasu od "mamy pomys+é/pro+øb-Ö zarz-àdu" do "wybrali+ømy partnera Y" o ÔëÑ 50%.  
- Produkt:
  - liczba Intent+¦w / org X / miesi-àc,  
  - % Intent+¦w z uzupe+énionym Decision Model,  
  - liczba vendor+¦w ocenionych per Intent,  
  - % Intent+¦w zako+äczonych jawn-à decyzj-à (selected vendor / no-go).  
- UX/AI:
  - ocena "Na ile Enabion pom+¦g+é uzasadni-ç decyzj-Ö?" (ankieta u pilot+¦w),  
  - +ørednia liczba korekt scoringu AI przez u++ytkownik+¦w.

---

## 12. Kamienie milowe Phase 1 (propozycja)

- **M0 ÔÇô +Ürodowisko pracy, narz-Ödzia, hosting, nazwa robocza (setup ÔÇ×Ja + Mieszko2.0 + EwaÔÇØ) ÔÇô szczeg+¦+éy w 12.1.**  
- **M1 ÔÇô X Intent Studio E2E:** org X + user + Intent creation + AI + zapis.  
- **M2 ÔÇô Decision Model + VendorCandidates + zaproszenia.**  
- **M3 ÔÇô Vendor-lite Portal + Evaluation Matrix (AI scoring).**  
- **M4 ÔÇô Decision Room + NDA + Trust Room.**  
- **M5 ÔÇô Frontend typu WoW, UX/CX maksymalne.**  
- **M6 ÔÇô 3ÔÇô5 pilot+¦w X, kt+¦rzy przeszli przez pe+ény flow i podali feedback.**

### 12.1 M0 ÔÇô Setup ÔÇ×Ja + Mieszko2.0 + EwaÔÇØ ÔÇô pe+ény opis

#### 12.1.1 Cel M0

Celem M0 jest przej+øcie z etapu ÔÇ×mamy tylko Playbook + ten dokument + laptop CEOÔÇØ do sytuacji, w kt+¦rej:

- istnieje **dzia+éaj-àce repozytorium kodu** z pierwszym dzia+éaj-àcym szkieletem aplikacji (Hello BCOS-Enabion),  
- istnieje **+ørodowisko dev w chmurze (EU)**, na kt+¦rym Ewa mo++e deployowa-ç ka++d-à zmian-Ö,  
- ustalone s-à **nawyki pracy core teamu** (CEO + Mieszko2.0 + Ewa),  
- podj-Öte s-à **kluczowe decyzje, kt+¦re trudno zmieni-ç p+¦+¦niej**:
  - region danych (EU),  
  - podej+øcie multi-tenant (org_id w ka++dej tabeli),  
  - bazowy stack technologiczny,  
  - robocza nazwa produktu i plan na mark-Ö / domen-Ö.

M0 jest zako+äczone wtedy, gdy:

1. CEO widzi dzia+éaj-àc-à stron-Ö startow-à aplikacji w `dev` pod subdomen-à `*.enabion...`.  
2. Ewa mo++e:
   - sklonowa-ç repo,  
   - uruchomi-ç projekt lokalnie,  
   - wypchn-à-ç zmian-Ö na `dev` jednym flow (git push ÔåÆ auto deploy).  
3. W tym dokumencie dopisane s-à:
   - `Stack v0` (sekcja 9.x),  
   - wype+éniona checklista M0 (12.1.9).  

---

#### 12.1.2 Decyzje strategiczne w M0 (trudne do zmiany p+¦+¦niej)

W M0 podejmujemy decyzje, kt+¦re b-Öd-à promieniowa+éy na kolejne lata:

- **Multi-tenancy** ÔÇô od pocz-àtku zak+éadamy, ++e wszystko jest multi-tenant (pole `organization_id` w ka++dej kluczowej tabeli). To jest sp+¦jne z wizj-à BCOS.  
- **Region danych** ÔÇô EU (Postgres + storage + AI endpointy skonfigurowane pod EU tam, gdzie si-Ö da). U+éatwia to rozmowy z klientami PL/DE.  
- **Stack webowy** ÔÇô nowoczesny, TypeScript-first, z du++ym ekosystemem (React / Next.js + Node / API + Postgres).  
- **AI Gateway** ÔÇô jeden punkt integracji z modelami AI (na MVP mo++e korzysta-ç z jednego providera, ale architektura jest neutralna).  
- **Marka** ÔÇô ÔÇ×EnabionÔÇØ jako g+é+¦wna marka parasolowa, produkt w tym dokumencie nazywamy roboczo **BCOS-Enabion / Enabion BCOS**.  
- **Single repo** ÔÇô jeden monorepo typu `enabion-bcos` (frontend + backend + infra) zamiast mikrous+éug na starcie.

Te decyzje powinny by-ç zmieniane tylko, je+øli oka++e si-Ö to absolutnie konieczne ÔÇô wszystko inne (szczeg+¦+éy UI, biblioteki, struktura folder+¦w) mo++na modyfikowa-ç w Phase 1ÔÇô2.

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


#### 12.1.6 M0.4 ÔÇô Zasady wsp+¦+épracy core team (CEO + Mieszko2.0 + Ewa)

**Role:**

- **CEO** ÔÇô decyzje biznesowe, priorytety, akceptacja milestoneÔÇÖ+¦w, opisuje potrzeby w tym dokumencie (jako komentarze/sekcje).  
- **Mieszko2.0** ÔÇô t+éumaczy potrzeby CEO na wymagania (sekcje FR, modu+éy, user journeys), proponuje architektur-Ö, pilnuje sp+¦jno+øci z Playbookiem.  
- **Ewa** ÔÇô implementuje w repo i w chmurze, proponuje techniczne usprawnienia, zg+éasza ryzyka.

**Workflow:**

1. CEO dopisuje / zmienia wymagania w tym dokumencie (w odpowiedniej sekcji) lub tworzy kr+¦tk-à notatk-Ö typu ÔÇ×changelogÔÇØ.  
2. Mieszko2.0 aktualizuje sekcje (np. 5.x, 7.x, 9, 10) tak, aby by+éy jednoznaczne.  
3. Ewa tworzy issues na task boardzie na podstawie tego dokumentu.  
4. Ewa pracuje na branchach `feature/*`, robi PR do `dev`.  
5. Po deployu na `dev` CEO ogl-àda demo, zg+éasza uwagi.  
6. Po akceptacji ÔÇô merge do `main` i deploy na `pilot`.

**Task board (M0)**

- Narz-Ödzie: GitHub Projects 
- Kolumny: `Backlog`, `In progress (Ewa)`, `Ready for demo`, `Done (on pilot)`.
- zarzadzane przez Ewe

---

#### 12.1.7 M0.5 ÔÇô Standard minimalny dla kodu i bezpiecze+ästwa

- **Branching & PR**  
  - Zakaz direct push do `main`.  
  - Ka++da zmiana na `dev` przez PR (mo++e by-ç self-review Ewy + checklist).  

- **Sekrety i dane wra++liwe**  
  - ++adne klucze API, has+éa, tokeny nie mog-à by-ç commitowane do repo.  
  - U++ywamy mechanizm+¦w secret+¦w providera (np. Vercel Secrets + zmienne +ørodowiskowe).  

- **Konta i dost-Öp**  
  - CEO i Ewa maj-à konta na hostingu i w repo z w+é-àczonym 2FA.  
  - Roles: Ewa = pe+éen dost-Öp techniczny, CEO = Owner/Administrator (mo++e akceptowa-ç billing, zaprasza-ç osoby).  

- **Logowanie i audyt**  
  - Logi deploy+¦w: kto, kiedy, z jakiej ga+é-Özi.  
  - W przysz+éo+øci (Phase 2+) ÔÇô logi aplikacyjne powi-àzane z organizacjami.

---

#### 12.1.8 M0.6 ÔÇô Nazwa, domena, IP (BCOS-Enabion)

**Cel:** Nie zablokowa-ç si-Ö na nazwie, ale ustali-ç sensown-à strategi-Ö na dzi+ø i na 2030.

- **Marka parasolowa:**  
  - ÔÇ×EnabionÔÇØ ÔÇô jako g+é+¦wna marka firmy i ekosystemu (masz ju++ domen-Ö `enabion...`).  
  - W Playbooku ÔÇ×EnabionNexusÔÇØ jest nazw-à robocz-à projektu, a ÔÇ×Business Collaboration OS (BCOS)ÔÇØ nazw-à kategorii.  

- **Robocza nazwa produktu Phase 1:**  
  - w tym dokumencie: **ÔÇ×Enabion BCOSÔÇØ / ÔÇ×BCOS-EnabionÔÇØ** jako robocza nazwa produktu (ÔÇ×Business Collaboration OS by EnabionÔÇØ).  
  - docelowo mo++na zdecydowa-ç, czy na zewn-àtrz wyst-Öpuje jako ÔÇ×Enabion BCOSÔÇØ, czy po prostu ÔÇ×EnabionÔÇØ.

- **Repo / techniczne nazwy:**  
  - repo: `enabion-bcos`,  
  - przysz+éy g+é+¦wny serwis: `bcos-core` (nazwy wewn-Ötrzne nie musz-à by-ç identyczne ze znakiem towarowym).

- **Domeny (M0):**  
  - root: `enabion.[tld]` ÔÇô ju++ posiadana,  
  - app: `app.enabion.[tld]` lub `bcos.enabion.[tld]` jako roboczy adres produktu,  
  - w Phase 1 wystarczy jedna domena robocza; p+¦+¦niej mo++na doda-ç np. `enabionbcos.com` je+øli b-Ödzie potrzebne.

- **Znak towarowy (M0 = pre-check, nie pe+éna rejestracja):**  
  - M0 NIE oznacza jeszcze rejestracji znaku w EUIPO, ale:  
    - sprawdzamy dost-Öpno+ø-ç `ENABION` i kombinacji typu `ENABION BCOS` w bazach:  
      - EUIPO eSearch + TMview (trade marks w UE),  
      - WIPO Global Brand Database (globalne znaki).  
    - je+øli nie ma oczywistych konflikt+¦w, planujemy:
      - rejestracj-Ö s+éownego znaku ÔÇ×ENABIONÔÇØ jako priorytet,  
      - opcjonalnie rozszerzenie o ÔÇ×ENABION BCOSÔÇØ / ÔÇ×BCOS ENABIONÔÇØ w p+¦+¦niejszym etapie.  
  - Ten dokument u++ywa ÔÇ×Enabion BCOS / BCOS-EnabionÔÇØ jako **nazwy roboczej**, dop+¦ki nie b-Ödzie formalnej decyzji po konsultacji z rzecznikiem patentowym.

---

#### 12.1.9 M0.7 ÔÇô Daty, kamienie i checklista ÔÇ×M0 doneÔÇØ

**Docelowy wynik M0:** wszystko gotowe, aby wej+ø-ç w M1 (budowa X Intent Studio).

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


## 13. Za+éo++enia, ryzyka, otwarte pytania

Za+éo++enia:

- X ma przynajmniej 1ÔÇô2 potencjalnych vendor+¦w do por+¦wnania (BYOV).  
- X jest gotowe wprowadzi-ç Intent Studio i Decision Model jako standard wewn-Ötrzny.  
- PL/DE jako rynki pilota++owe s-à wystarczaj-àce do walidacji.

Ryzyka:

- GTM do X jest wolniejszy ni++ do Y (d+éu++szy cykl decyzyjny).  
- Scope creep w stron-Ö pe+énego narz-Ödzia RFP/procurement.  
- Vendorzy Y mog-à niech-Ötnie wype+énia-ç kolejny formularz (+éagodzimy to Avatarem i sensown-à struktur-à).

Otwarte pytania:

- Czy w Phase 1 wspieramy eksport RFP (Intent + kryteria + context) do PDF/Word? ÔÇô [CEO] Domy+ølnie export jest przez Enabion, ale wspieramy te++ PDF/Word, kt+¦re mo++e by-ç u++yte wewn-Ötrznie przez u++ytkownika.  
- Czy dodajemy placeholder "Enabion suggested vendors" (manualnie kuratorowane na pocz-àtku)? ÔÇô [CEO] Tak, odpalamy to w MVP (w formie Avatara proponuj-àcego vendor+¦w z publicznych +¦r+¦de+é + r-Öczny wyb+¦r X).  
- Po ilu pilotach X przechodzimy do Phase 2 ÔÇô pe+énego OS dla Y? ÔÇô [CEO] TBD.
