import type * as React from 'react';

/** Button – Fläche im Streifenwinkel (59°) geschert. Eine `primary` (rot) pro Ansicht. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'inverse';
  size?: 'md' | 'sm';
  /** Rendert ein <a> statt <button>. */
  href?: string;
  /** Pfeil → nach dem Text (Weiterführen, Navigation). */
  arrow?: boolean;
}
export declare function Button(props: ButtonProps): React.ReactElement;

/** Streifen-Kick: das Logo-Motiv (drei Streifen, diagonal ansteigend, dann waagerecht) als skalierbares SVG. Dekorativ. */
export interface StripeKickProps {
  /** auto = folgt dem Theme; light = 1. Streifen blau; dark = 1. Streifen weiß (auf Blau). */
  tone?: 'auto' | 'light' | 'dark';
  /** Verlängert die waagerechten Balken (Logo-Einheiten, Höhe = 449). */
  extend?: number;
  align?: 'left' | 'right';
  width?: number | string; height?: number | string;
  className?: string; style?: React.CSSProperties;
}
export declare function StripeKick(props: StripeKickProps): React.ReactElement;

/** Waagerechtes Dreier-Streifenband als Trenner. */
export interface StripeRuleProps { tone?: 'auto' | 'light' | 'dark'; short?: boolean; className?: string }
export declare function StripeRule(props: StripeRuleProps): React.ReactElement;

/** Dachzeile in Aptos Narrow Bold Italic, Versalien, mit Mini-Streifen. */
export interface EyebrowProps { children: React.ReactNode; tone?: 'default' | 'inverse'; className?: string }
export declare function Eyebrow(props: EyebrowProps): React.ReactElement;

/** Startnummer-Roundel für Modul- und Kapitelnummern. */
export interface RaceNumberProps { children: React.ReactNode; tone?: 'plate' | 'blue' | 'red'; size?: number; label?: string; className?: string }
export declare function RaceNumber(props: RaceNumberProps): React.ReactElement;

/** Kurzes Merkmal: Format, Dauer, Zielgruppe. */
export interface TagProps { children: React.ReactNode; tone?: 'default' | 'brand' | 'turquoise' | 'accent'; className?: string }
export declare function Tag(props: TagProps): React.ReactElement;

export interface NavLink { label: string; href?: string; active?: boolean }
/** Kopfnavigation mit Logo, Links und einer roten Hauptaktion. */
export interface NavBarProps {
  /** URL des Logos: Primärlogo auf tone="light", Negativlogo auf tone="brand". */
  logoSrc?: string; logoHeight?: number; homeHref?: string;
  links?: NavLink[]; cta?: { label: string; href?: string };
  tone?: 'light' | 'brand'; className?: string;
}
export declare function NavBar(props: NavBarProps): React.ReactElement;

/** Einstiegsbühne mit Streifen-Kick rechts unten. */
export interface HeroProps { eyebrow?: React.ReactNode; title: React.ReactNode; lead?: React.ReactNode; actions?: React.ReactNode; tone?: 'brand' | 'light'; className?: string }
export declare function Hero(props: HeroProps): React.ReactElement;

/** Kurs- bzw. Modulkarte. Inhalte (Dauer, Preis, Format) liefert der Aufrufer – nie erfinden. */
export interface CourseCardProps {
  number?: string | number; eyebrow?: React.ReactNode; title: React.ReactNode; text?: React.ReactNode;
  meta?: { label: string; value: React.ReactNode }[]; tags?: string[];
  href?: string; cta?: { label: string; href?: string }; featured?: boolean; className?: string;
}
export declare function CourseCard(props: CourseCardProps): React.ReactElement;

/** Kennzahl im Startnummern-Stil. Nur belegte Zahlen. */
export interface StatTileProps { value: React.ReactNode; label: React.ReactNode; note?: React.ReactNode; tone?: 'default' | 'brand'; className?: string }
export declare function StatTile(props: StatTileProps): React.ReactElement;

/** Kundenstimme. Nur echte, freigegebene Zitate. */
export interface TestimonialProps { quote: React.ReactNode; name: string; role?: string; company?: string; className?: string }
export declare function Testimonial(props: TestimonialProps): React.ReactElement;

/** FAQ auf Basis von <details>/<summary>. */
export interface AccordionProps { items: { question: React.ReactNode; answer: React.ReactNode; open?: boolean }[]; className?: string }
export declare function Accordion(props: AccordionProps): React.ReactElement;

/** Formularfeld mit Label, Hinweis und Fehlermeldung. */
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label: string; hint?: string; error?: string; multiline?: boolean }
export declare function TextField(props: TextFieldProps): React.ReactElement;

declare global { interface Window { Copilotenschule: {
  Button: typeof Button; StripeKick: typeof StripeKick; StripeRule: typeof StripeRule; Eyebrow: typeof Eyebrow; RaceNumber: typeof RaceNumber; Tag: typeof Tag;
  NavBar: typeof NavBar; Hero: typeof Hero; CourseCard: typeof CourseCard; StatTile: typeof StatTile; Testimonial: typeof Testimonial; Accordion: typeof Accordion; TextField: typeof TextField;
} } }
