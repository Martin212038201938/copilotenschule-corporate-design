# CourseCard

Karte für ein Training, einen Workshop oder ein Modul. Der Aufrufer liefert `title`, `text` (max. 2 Sätze), `number` (Startnummer), `eyebrow`, `meta` (Dauer, Format, Teilnehmende, Preis – nur hinterlegte Werte, nie geschätzt), `tags` und `cta`.

- Im Grid zu dritt (Desktop), `space-6` Abstand. Gleich hohe Karten, CTA unten bündig.
- `featured`: blaue 2px-Kontur und rote Startnummer – maximal eine Karte pro Reihe.
- Hover: harter Versatz-Schatten (`shadow-offset`), die Karte „springt“ leicht an.
- Preise nur, wenn sie aus der Preisliste kommen; sonst „Auf Anfrage“.
