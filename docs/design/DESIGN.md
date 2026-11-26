---
name: Pixel Luna XP
colors:
  surface: '#fef7ff'
  surface-dim: '#ded7e4'
  surface-bright: '#fef7ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f1fe'
  surface-container: '#f3ebf8'
  surface-container-high: '#ede5f2'
  surface-container-highest: '#e7e0ed'
  on-surface: '#1d1a23'
  on-surface-variant: '#424751'
  inverse-surface: '#322f38'
  inverse-on-surface: '#f5eefb'
  outline: '#737783'
  outline-variant: '#c2c6d3'
  surface-tint: '#255dad'
  primary: '#003e84'
  on-primary: '#ffffff'
  primary-container: '#1b56a6'
  on-primary-container: '#b7ceff'
  inverse-primary: '#abc7ff'
  secondary: '#106d20'
  on-secondary: '#ffffff'
  secondary-container: '#9df898'
  on-secondary-container: '#1a7425'
  tertiary: '#840906'
  on-tertiary: '#ffffff'
  tertiary-container: '#a6261b'
  on-tertiary-container: '#ffbeb4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#abc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#004590'
  secondary-fixed: '#9df898'
  secondary-fixed-dim: '#82db7e'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4a9'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#8e130c'
  background: '#fef7ff'
  on-background: '#1d1a23'
  surface-variant: '#e7e0ed'
  desktop-wallpaper: '#2B4C6F'
  desktop-deep: '#1D3557'
  taskbar-gradient-light: '#2B7CE5'
  titlebar-gradient-dark: '#0055EA'
  titlebar-gradient-light: '#3C93FD'
  window-surface: '#ECE9D8'
  window-surface-light: '#F0F4F8'
  pixel-cloud-cream: '#F7DCB4'
  pixel-bevel-highlight: '#FFFFFF'
  pixel-bevel-shadow: '#808080'
  pixel-bevel-dark: '#404040'
  pixel-outer-border: '#181818'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a tactile, playful, and strictly disciplined reimagining of the classic Windows XP Luna aesthetic filtered through high-craft 16-bit pixel art. Tailored for Karlos Eduardo's software engineering portfolio, it reconciles geek-culture nostalgia with modern frontend engineering rigor (React, TypeScript, stateful architecture).

The personality is nostalgic, technical, approachable, and unmistakably authentic. It evokes the joy of early-2000s computing while maintaining the friction-free ergonomics of top-tier developer platforms. Rather than gimmicky skeuomorphism that obstructs usability, the design system treats the OS metaphor as a disciplined aesthetic frame: content flows logically, accessibility remains uncompromised, and recruiter scannability is prioritized above all.

The visual style blends **Retro Pixel Art** with **Corporate OS Nostalgia**:
- Hard pixel edges, beveled borders, and stepped geometry replace modern blur effects and rounded blobs.
- Window chrome, taskbars, and dialog structures evoke desktop workspaces without imposing arbitrary window dragging or hidden files.
- The balance is split decisively: expressive pixel chrome for frames, labels, and badges; ultra-clean, legible modern typography for technical copy and case studies.

## Colors

The color palette directly channels the Luna blue architecture of Windows XP balanced by the warm terracotta, rich cream, and petroleum blue extracted from Karlos Eduardo's pixel avatar.

- **Primary (`#1B56A6`):** The signature Luna core blue, utilized for window header accents, active states, key interactive indicators, and taskbar grounding.
- **Secondary (`#388E3C`):** The vibrant start-engine green, reserved for primary CTA affirmations, online indicators, deployment status chips, and the custom Start action.
- **Tertiary (`#C0392B`):** The signature terracotta cloud red, extracted directly from the avatar chest crest. Used for window close buttons (`X`), critical notices, high-energy accents, and tags.
- **Neutral (`#221F28`):** Deep charcoal with a subtle warm pixel tint, providing high contrast against light window panels for maximum reading comfort without the harshness of pure black.

### Surface System
Surfaces emulate classic OS dialog architecture:
- `desktop-wallpaper` (`#2B4C6F`) and `desktop-deep` (`#1D3557`) form the outer viewport canvas.
- `window-surface` (`#ECE9D8`) provides the authentic warm gray interior of system windows, with `window-surface-light` (`#F0F4F8`) available for code blocks and inset reading modules.
- Chamfered bevels use strict pixel tokens: light incoming from top-left (`#FFFFFF`), cast shadows on bottom-right (`#808080` and `#404040`), all bound by `#181818`.

## Typography

The typography architecture strictly enforces a dual-purpose hierarchy:
1. **Space Grotesk** commands section headers and hero titles. Its geometric, slightly technical character pays homage to digital systems while maintaining crisp, high-density anti-aliased legibility.
2. **Inter** handles all long-form body copy, project documentation, work history, and educational summaries. Reading fatigue is eliminated by never forcing users to parse pixel/bitmap fonts for multi-sentence reading.
3. **JetBrains Mono** powers technical metadata, window title bars (`boas-vindas.exe`, `sobre.txt`), terminal outputs, date ranges, and code samples.

Decorative retro pixel typefaces (like *Press Start 2P* or *Silkscreen*) are strictly restricted to isolated ornamental badges or icon labels below 14px, and must never contain vital technical qualifications or body paragraphs.

## Layout & Spacing

The layout philosophy follows a **structured fluid-grid model** designed like a contemporary developer workspace framed within an OS shell.

- **Desktop (1024px+):** The desktop canvas (`#2B4C6F`) serves as the base layer. Main sections appear as prioritized Windows XP frames with a maximum container width of `1120px` to maintain optimal line lengths. Windows feature top utility title bars, pixel bevels, and nested content panels. The taskbar (`#1B56A6` to `#2B7CE5`) docks persistently at the bottom with a fixed height of `48px`.
- **Tablet (768px – 1023px):** Windows expand to full container width with a `2rem` margin. Multi-column cards collapse to 2 columns.
- **Mobile (< 768px):** The OS metaphor streamlines into a sequential stack of window cards. Window management controls remain visual badges, avoiding any draggable chaos. The taskbar transforms into a clean bottom fixed command bar with the `[☁ Iniciar]` menu opening as a bottom sheet.

The spacing rhythm adheres strictly to an **8px grid (0.5rem)** with **4px (0.25rem)** sub-steps to preserve crisp rasterization across both HiDPI screens and pixel-aligned UI borders.

## Elevation & Depth

Visual hierarchy does not rely on diffuse, atmospheric modern drop-shadows. Instead, elevation is communicated through **pseudo-3D pixel art bevels** and layered OS z-indexes:

- **Sunken Elements (Inputs, Well Panels, Code Blocks):** 
  - Top and left borders: 2px solid `#808080` (outer) with `#404040` (inner).
  - Bottom and right borders: 2px solid `#FFFFFF`.
  - Recesses the component into the window surface.
- **Raised Elements (Active Windows, Buttons, Taskbar):**
  - Top and left borders: 2px solid `#FFFFFF` (highlight).
  - Bottom and right borders: 2px solid `#808080` with an outermost 2px solid `#181818`.
- **Active / Pressed State:** Inverts highlights and shadows instantly to provide immediate mechanical feedback.
- **Title Bar Depth:** Title bars feature a vertical pixel-dithered or linear CSS gradient from `#0055EA` down to `#3C93FD` with high-contrast `#FFFFFF` typography.
- **Floating Modals:** Modals stack at `z-index: 100` above a 50% opacity neutral overlay (`#18181880`), framed by a full 3-tier pixel border and an intentional 4px hard black offset shadow (`box-shadow: 4px 4px 0px #181818`).

## Shapes

The design system employs **sharp geometry (`0`)** across all foundational frames, buttons, inputs, and card containers. 

To mirror the nostalgic Windows XP window aesthetics accurately without blurry sub-pixel antialiasing:
- Corners of top window title bars and primary buttons simulate the classic subtle curve via stepped 1px-to-2px pixel staircases (`clip-path` or stepped pseudo-elements) rather than smooth CSS `border-radius`.
- System icons, badges, and avatar frames follow a pure orthogonal pixel grid.
- No organic rounded pills or floating circular bubbles are permitted; every container is grounded in structural, planar box modeling.

## Components

### Window Frame (`WindowFrame.tsx`)
- **Structure:** Encasing border (2px `#181818`), inner bevel (1px `#FFFFFF` top/left, 1px `#808080` bottom/right), surface background `#ECE9D8`.
- **Title Bar:** 32px height, gradient `#0055EA` to `#3C93FD`. Left side contains custom pixel file/app icon and label (`Space Grotesk` or `JetBrains Mono` bold, `#FFFFFF`).
- **Window Controls:** Right-aligned trio of square buttons:
  - Minimize (`_`): 18x18px bevel button, `#ECE9D8` background.
  - Maximize (`□`): 18x18px bevel button, `#ECE9D8` background.
  - Close (`X`): 18x18px button, vibrant crimson `#C0392B` with white pixel `X` glyph.

### Buttons
- **Primary (Start Button / CTA):** Styled after the iconic XP "Iniciar" button. Rich emerald green `#388E3C` base with lighter top gradient `#4CAF50`, cream cloud icon (`☁`), bold white text, and a crisp 2px border. Active state shifts background darker (`#2E7D32`) with a sunken bevel.
- **Standard Button:** `#ECE9D8` surface, 2px raised bevel (`#FFFFFF` top/left, `#404040` bottom/right). Active state triggers inset shadow and 1px content offset to mimic physical depression.
- **Danger Button:** Crimson red `#C0392B` with white label.

### Taskbar (`Taskbar.tsx`)
- Sticky/fixed bottom bar, 48px height.
- Gradient fill from `#1B56A6` to `#2B7CE5`. Top pixel border is `#3C93FD` highlight.
- Houses the Start button on the left, active section/minimized window tabs in the center (sunken bevel if current section is focused), and a retro system tray on the right with a digital clock (`JetBrains Mono`), live availability status, and social/GitHub pixel links.

### Input Fields & Search Bars
- Background: `#FFFFFF` or `#F0F4F8`.
- 2px sunken border (`#808080` top/left, `#FFFFFF` bottom/right).
- Font: `JetBrains Mono` 14px. Focus state highlights outer edge with `#0055EA` without soft glow rings.

### Chips & Badges
- Tech stack tags (`React`, `TypeScript`, `Next.js`, `Node`):
  - Compact box styling with 1px border `#808080`.
  - Inset fill `#F7DCB4` with `#221F28` text or `#1D3557` with `#FFFFFF` text.
  - Prefix with small 8x8 pixel indicators.

### Cards & Project Showcases
- Placed inside the window content body as nested modules (`#FFFFFF` or `#F0F4F8`).
- Framed by a 1px border `#808080` or sunken recess.
- Clear structural division between preview art/thumbnail, headline (`headline-sm`), description (`body-md`), and repository/live link buttons.