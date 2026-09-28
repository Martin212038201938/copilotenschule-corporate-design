# StripeKick

Das Streifenmotiv des Logos als skalierbares SVG: drei Streifen steigen im 59°-Winkel an und laufen waagerecht aus, jeder tiefer liegende weiter nach rechts. Der Aufrufer liefert Größe (`height` oder CSS), `tone` und optional `extend` für längere Balken.

- Einsatz: rechts unten im Hero, auf Titel- und Kapitelfolien, als Anschnitt an Bildkanten. Das Motiv darf aus der Fläche herauslaufen (angeschnitten), nie mittig schweben.
- Reihenfolge fix: `stripe-1` (Blau auf Hell, Weiß auf Blau), `stripe-2` Türkis, `stripe-3` Rot. Nie umsortieren, nie weitere Farben.
- Maximal ein Kick pro Ansicht. Nie neben dem Logo, das denselben Kick schon trägt – dann `StripeRule` verwenden.
- Geometrie aus `stripe-angle`, `stripe-bar`, `stripe-gap`, `stripe-diagonal`. Für Druck und PPT die exakten Motiv-Dateien unter Logos nutzen.
