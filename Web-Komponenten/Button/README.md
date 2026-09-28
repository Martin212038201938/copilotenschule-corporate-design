# Button

Der Button trägt den Streifenwinkel: Seine Fläche ist um −31° geschert (`stripe-skew`), die Schrift bleibt gerade. Der Aufrufer liefert `children` (kurzer Verb-Satz), optional `href` (dann `<a>`), `variant`, `size`, `arrow`.

- `primary` (rot, `accent`): die eine Hauptaktion pro Ansicht – „Training anfragen“, „Termin buchen“.
- `secondary` (blau): gleichwertige Zweitaktion auf hellem Grund.
- `outline`: Nebenaktionen, Karten-CTAs.
- `inverse`: Zweitaktion auf `surface-brand` (Hero, Titelfolie).
- Beschriftung in Versalien (Stil `button`), maximal drei Wörter. `arrow` nur bei weiterführenden Links.
- Nicht: zwei rote Buttons nebeneinander, Buttons mit Icon-only, Schrägstellung der Schrift.
- Fokus: 3px Ring in `focus`, auf Blau `focus-inverse`; folgt der Scherung.
