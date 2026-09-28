Copilotenschule trainiert Unternehmen im Umgang mit Microsoft Copilot. Der Name ist das Bild: Im Rallyesport sitzt der Copilot rechts, liest den Aufschrieb und sagt die nächste Kurve an – gefahren wird vom Fahrer. Genau so arbeitet Microsoft Copilot, und genau so arbeiten unsere Trainings. Die Gestaltung kommt aus der Welt des klassischen Rallye- und Tourenwagensports der 70er und 80er: weißer Grund, tiefes Blau, drei Streifen in Blau, Türkis und Rot, fette Startnummern, Tempo. Sie ist davon inspiriert, aber eigenständig.

## Haltung

- Präzise wie ein Aufschrieb: kurze Ansagen, klare Reihenfolge, nichts Überflüssiges.
- Bold statt verspielt: große Flächen, harte Kanten, wenige starke Farben.
- Bewegung nach vorn: Schrägen im Streifenwinkel (59°), kursive Dachzeilen, Motive, die aus der Fläche herauslaufen.
- Seriös für Entscheider: Die Rennsport-Anleihe ist Haltung, kein Kostüm.

## Die Grenze zum Vorbild

Inspiration ja, Imitation nein. Nie den Namen oder das Logo eines Rennstalls, Sponsors oder Herstellers verwenden, keine Nachbauten bekannter Fahrzeuglackierungen, keine historischen Rennfotos ohne Lizenz. Unser Erkennungszeichen ist das eigene Logo mit dem Streifen-Kick, nicht die Zitatwand.

## Farbe

Farbrichtige Werte aus den CMYK-Angaben der Logodatei. Keine anderen Blau-, Rot- oder Türkistöne verwenden, auch nicht die leuchtenden Bildschirmwerte des Logoblatts.

| Token | HEX | CMYK | Rolle |
|---|---|---|---|
| `brand-blue` | #313E72 | 100/89/28/8 | Markenfarbe, Headlines, große Flächen |
| `brand-turquoise` | #67C7EF | 58/0/2/0 | Akzent, zweiter Streifen, nie Text auf Weiß |
| `brand-red` | #CF2E2E | 12/97/93/3 | Hauptaktion, dritter Streifen, Startnummer |
| `brand-white` | #FFFFFF | 0/0/0/0 | Grund, Schrift auf Blau |
| `navy` | #1B2246 | – | Ergänzt: Fließtext, dunkler Grund |

- Gewichtung pro Seite oder Folie: etwa 60 % Weiß, 30 % Blau, 10 % Türkis und Rot zusammen. Rot und Türkis sind Gewürz, keine Flächenfarben.
- Fließtext in `ink` (navy), Headlines in `ink-heading` (Markenblau), Sekundärtext in `ink-muted`.
- Rot = Handlung. `accent` nur für die eine Hauptaktion pro Ansicht, für Startnummern und den dritten Streifen – nie für Fließtext-Hervorhebungen.
- Nie Rot auf Blau oder Blau auf Rot als Text (2,0:1). Türkis auf Weiß nur als Fläche oder Linie mit Beschriftung daneben (1,9:1).
- Farbverläufe gibt es nicht. Flächen sind vollflächig wie Lack.
- Theme **Hell** ist Standard. **Nacht** (Grund `navy`, Karten `surface-alt`) für Event-Seiten, Webinare und Dunkelmodus.

## Typografie

Die Hausschrift ist Aptos – in Microsoft 365 auf jedem Rechner vorhanden, Präsentationen sehen deshalb beim Kunden genauso aus wie bei uns.

- **Aptos Display Bold** (`display`) für Headlines: `display-xl`, `h1`, `h2`, `h3`. Satz eng (Zeilenabstand 0,95–1,2), leicht negative Laufweite.
- **Aptos** (`sans`) für Text: `lead`, `body`, `small`, `caption`. Fließtext nie unter 15px im Web, 16 pt auf Folien.
- **Aptos Narrow Bold Italic** (`narrow`) ist die Rennsport-Stimme: `eyebrow` (Versalien, gesperrt), `race-number` (Startnummern, Kennzahlen), `label` und `button`.
- Maximal drei Schriftgrade pro Ansicht. Headlines linksbündig, nie zentriert über mehr als zwei Zeilen.
- Web: Aptos ist nicht auf jedem Rechner installiert (u. a. Mac ohne Office). Die Stacks fallen auf Segoe UI, Helvetica Neue und Arial zurück; das Layout muss damit funktionieren.

## Logo

Das Hauptlogo (`copilotenschule-logo-primary`) steht auf Weiß. Auf Blau steht das Negativlogo, auf Fotos und unruhigen Flächen die Plakette. Die Rundsignets sind für Profilbilder und kleine Formate. Details und Mindestgrößen: Asset-Gruppe Logos.

- Position: Web in der Navigation links; Folien auf der Titelfolie oben links, auf Inhaltsfolien klein unten rechts.
- Nie das Logo und einen großen Streifen-Kick in derselben Ansicht direkt nebeneinander – das Motiv doppelt sich.

## Grafische Elemente

Das Streifenmotiv ist das zweite Erkennungszeichen nach dem Logo.

- **Streifen-Kick** (StripeKick): drei Streifen, 59° ansteigend, waagerecht auslaufend. Läuft immer aus einer Fläche heraus (angeschnitten rechts oder unten), maximal einmal pro Ansicht. Diagonalen sind gut dreimal so kräftig wie die waagerechten Balken, der Abstand beträgt die halbe Balkenstärke.
- **Streifenband** (StripeRule): drei waagerechte Balken als Trenner und Akzent über Zitaten, Kennzahlen, Folientiteln.
- **Startnummer** (RaceNumber): Kreis mit zweistelliger Ziffer für Module, Kapitel, Schritte.
- **Schräge**: Buttons und Bildanschnitte folgen dem Streifenwinkel (`stripe-skew` −31°). Keine anderen Winkel.
- Reihenfolge der Streifen ist fest: (Blau bzw. Weiß) – Türkis – Rot, von oben nach unten.
- Nicht: Karomuster/Zielflaggen, Reifenspuren, Tachos, Rennwagen-Clipart, Flammen.

## Layout

- Web: 12-Spalten-Raster, `container-max` 1200px, Fließtext maximal `container-text` 720px. Sektionsabstand `space-9` (Desktop) bzw. `space-8` (mobil).
- Abstände nur aus der Skala `space-1` bis `space-10` (4er-Raster).
- Radien sparsam: `radius-sm` für Bedienelemente, `radius-md` für Karten, `radius-none` für große Flächen. Keine Pillen-Buttons.
- Schatten: Standard ist `shadow-none`. `shadow-offset` (harter Versatz) für genau ein hervorgehobenes Element – Plakat, nicht Glas.
- Seitenrhythmus: Wechsel zwischen weißen Sektionen und einem blauen Markenband (`surface-brand`) – höchstens ein blaues Band pro Bildschirmhöhe.

## Bildsprache

- Echte Trainingssituationen: Menschen an Laptops, am Whiteboard, im Gespräch – in Büros, die nach Arbeit aussehen. Natürliches Licht, keine inszenierten Handschläge.
- Screenshots aus Microsoft 365 und Copilot sind Beweisbilder: unverändert, mit Fiktivdaten, in einem schlichten Rahmen.
- Rennsport-Stimmung entsteht durch Grafik (Streifen, Startnummern), nicht durch Autofotos. Wenn Motorsport-Motive, dann nur lizenzierte, markenneutrale Aufnahmen.
- Nicht: Roboter, leuchtende Gehirne, Hologramme, blau-violette KI-Verläufe, generische Stockfotos.

## Ikonografie

Kein eigenes Icon-Set vorhanden. Empfehlung: Fluent UI System Icons (Microsoft, MIT-Lizenz, Stil „Regular“), passend zur Microsoft-365-Welt; in PowerPoint die eingebauten Office-Symbole. Icons einfarbig in `brand-blue` bzw. Weiß auf Blau, 24px, nie farbig gefüllt, nie Emojis.

## Bewegung

Knapp und gerichtet: 150–200 ms, Bewegung nach rechts oder oben (Pfeil rückt vor, Karte springt an). Keine Endlosanimationen, `prefers-reduced-motion` respektieren.

## Barrierefreiheit

- Alle Textpaare in den Tokens erreichen mindestens 4,5:1 in beiden Themes; die Werte stehen in den Usage-Notizen.
- Fokusring: 3px `focus` mit Abstand, auf blauen Flächen `focus-inverse`.
- Status nie nur über Farbe: Fehler und Erfolg immer mit Text und Icon.
