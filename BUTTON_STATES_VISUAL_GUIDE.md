# 🎨 Button States Visual Guide

**Design System Reference:** `/src/styles/theme.css`

---

## 1️⃣ Primary Button (Default Variant)

### **Color Specifications:**

| State | Background | Text | CSS Variable |
|-------|------------|------|--------------|
| **Default** | `#0B5FEF` (Bright Blue) | `#FFFFFF` (White) | `bg-primary text-primary-foreground` |
| **Hover** | `#054BCC` (Darker Blue) | `#FFFFFF` (White) | `hover:bg-primary-hover` |
| **Disabled** | `#0B5FEF` (50% opacity) | `#FFFFFF` (50% opacity) | `disabled:opacity-50` |

### **Visual Preview:**

```
┌──────────────────┐
│   Kirim Formasi  │  ← Default State (#0B5FEF)
└──────────────────┘

┌──────────────────┐
│   Kirim Formasi  │  ← Hover State (#054BCC - slightly darker)
└──────────────────┘
      (darker)

┌──────────────────┐
│   Kirim Formasi  │  ← Disabled State (50% opacity)
└──────────────────┘
     (faded)
```

### **Code Example:**

```tsx
// ✅ CORRECT
<button className="bg-primary text-primary-foreground hover:bg-primary-hover">
  Kirim Formasi
</button>

// ❌ WRONG
<button className="bg-blue-600 text-white hover:bg-blue-700">
  Submit
</button>

// ❌ WRONG
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Kirim
</button>

// ❌ WRONG
<button className="bg-primary text-primary-foreground hover:opacity-90">
  Kirim
</button>
```

---

## 2️⃣ Secondary Button

### **Color Specifications:**

| State | Background | Text | CSS Variable |
|-------|------------|------|--------------|
| **Default** | `#F5F5F5` (Light Gray) | `#2F3031` (Dark Gray) | `bg-secondary text-secondary-foreground` |
| **Hover** | `#C4C4C4` (Medium Gray) | `#2F3031` (Dark Gray) | `hover:bg-secondary/80` |
| **Disabled** | `#F5F5F5` (50% opacity) | `#2F3031` (50% opacity) | `disabled:opacity-50` |

### **Visual Preview:**

```
┌──────────────────┐
│      Batal       │  ← Default State (#F5F5F5 - light gray)
└──────────────────┘

┌──────────────────┐
│      Batal       │  ← Hover State (#C4C4C4 - medium gray)
└──────────────────┘
      (darker)

┌──────────────────┐
│      Batal       │  ← Disabled State (50% opacity)
└──────────────────┘
     (faded)
```

### **Code Example:**

```tsx
// ✅ CORRECT
<button className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
  Batal
</button>

// ❌ WRONG
<button className="bg-gray-100 text-gray-900 hover:bg-gray-200">
  Cancel
</button>
```

---

## 3️⃣ Destructive Button

### **Color Specifications:**

| State | Background | Text | CSS Variable |
|-------|------------|------|--------------|
| **Default** | `#E02D38` (Red) | `#FFFFFF` (White) | `bg-destructive text-destructive-foreground` |
| **Hover** | `#CA2831` (Darker Red) | `#FFFFFF` (White) | `hover:bg-destructive/90` |
| **Disabled** | `#E02D38` (50% opacity) | `#FFFFFF` (50% opacity) | `disabled:opacity-50` |

### **Visual Preview:**

```
┌──────────────────┐
│      Hapus       │  ← Default State (#E02D38 - red)
└──────────────────┘

┌──────────────────┐
│      Hapus       │  ← Hover State (#CA2831 - darker red)
└──────────────────┘
      (darker)

┌──────────────────┐
│      Hapus       │  ← Disabled State (50% opacity)
└──────────────────┘
     (faded)
```

### **Code Example:**

```tsx
// ✅ CORRECT
<button className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
  Hapus
</button>

// ❌ WRONG
<button className="bg-red-600 text-white hover:bg-red-700">
  Delete
</button>
```

---

## 4️⃣ Outline Button

### **Color Specifications:**

| State | Background | Text | Border | CSS Variable |
|-------|------------|------|--------|--------------|
| **Default** | `#F5F5F5` | `#2F3031` | `#808489` | `bg-background text-foreground border border-border` |
| **Hover** | `#103178` | `#FFFFFF` | `#808489` | `hover:bg-accent hover:text-accent-foreground` |
| **Disabled** | `#F5F5F5` (50% opacity) | `#2F3031` (50% opacity) | `#808489` (50% opacity) | `disabled:opacity-50` |

### **Visual Preview:**

```
┌──────────────────┐
│   Selengkapnya   │  ← Default State (light bg, dark text, border)
└──────────────────┘

┌──────────────────┐
│   Selengkapnya   │  ← Hover State (accent bg, white text)
└──────────────────┘
   (filled accent)

┌──────────────────┐
│   Selengkapnya   │  ← Disabled State (50% opacity)
└──────────────────┘
     (faded)
```

### **Code Example:**

```tsx
// ✅ CORRECT
<button className="border bg-background text-foreground hover:bg-accent hover:text-accent-foreground">
  Selengkapnya
</button>

// ❌ WRONG
<button className="border border-gray-300 bg-white text-gray-900 hover:bg-gray-100">
  See More
</button>
```

---

## 5️⃣ Ghost Button

### **Color Specifications:**

| State | Background | Text | CSS Variable |
|-------|------------|------|--------------|
| **Default** | `transparent` | `#2F3031` | `bg-transparent text-foreground` |
| **Hover** | `#103178` | `#FFFFFF` | `hover:bg-accent hover:text-accent-foreground` |
| **Disabled** | `transparent` | `#2F3031` (50% opacity) | `disabled:opacity-50` |

### **Visual Preview:**

```
  Lihat Detail      ← Default State (transparent bg, dark text)

┌──────────────────┐
│   Lihat Detail   │  ← Hover State (accent bg, white text)
└──────────────────┘

  Lihat Detail      ← Disabled State (faded text)
    (faded)
```

### **Code Example:**

```tsx
// ✅ CORRECT
<button className="hover:bg-accent hover:text-accent-foreground">
  Lihat Detail
</button>

// ❌ WRONG
<button className="hover:bg-gray-100 text-gray-700">
  View Details
</button>
```

---

## 6️⃣ Link Button

### **Color Specifications:**

| State | Background | Text | Decoration | CSS Variable |
|-------|------------|------|------------|--------------|
| **Default** | `transparent` | `#0B5FEF` | `none` | `text-primary` |
| **Hover** | `transparent` | `#0B5FEF` | `underline` | `hover:underline` |
| **Disabled** | `transparent` | `#0B5FEF` (50% opacity) | `none` | `disabled:opacity-50` |

### **Visual Preview:**

```
  Pelajari Lebih Lanjut      ← Default State (primary color, no underline)

  Pelajari Lebih Lanjut      ← Hover State (primary color, underlined)
  ─────────────────────

  Pelajari Lebih Lanjut      ← Disabled State (faded)
       (faded)
```

### **Code Example:**

```tsx
// ✅ CORRECT
<button className="text-primary underline-offset-4 hover:underline">
  Pelajari Lebih Lanjut
</button>

// ❌ WRONG
<button className="text-blue-600 hover:text-blue-800 hover:underline">
  Learn More
</button>
```

---

## 7️⃣ Icon Button (Close Button)

### **Color Specifications:**

| State | Background | Icon Color | CSS Variable |
|-------|------------|------------|--------------|
| **Default** | `#FFFFFF` (White) | `#2F3031` (Dark Gray) | `bg-card text-foreground` |
| **Hover** | `#F5F5F5` (Light Gray) | `#2F3031` (Dark Gray) | `hover:bg-secondary` |
| **Disabled** | `#FFFFFF` (50% opacity) | `#2F3031` (50% opacity) | `disabled:opacity-50` |

### **Visual Preview:**

```
┌───┐
│ × │  ← Default State (white bg, dark icon)
└───┘

┌───┐
│ × │  ← Hover State (light gray bg, dark icon)
└───┘
(gray)

┌───┐
│ × │  ← Disabled State (faded)
└───┘
(faded)
```

### **Code Example:**

```tsx
// ✅ CORRECT
<button className="bg-card hover:bg-secondary rounded-full p-2">
  <X className="w-6 h-6 text-foreground" />
</button>

// ❌ WRONG
<button className="bg-white hover:bg-gray-100 rounded-full p-2">
  <X className="w-6 h-6 text-gray-700" />
</button>
```

---

## 🎨 Color Palette Quick Reference

```css
/* Primary Colors */
--primary: #0B5FEF           /* Bright blue - main CTA */
--primary-hover: #054BCC     /* Darker blue - hover state */
--primary-foreground: #FFFFFF /* White text on primary */

/* Secondary Colors */
--secondary: #F5F5F5         /* Light gray - secondary actions */
--secondary-foreground: #2F3031 /* Dark gray text on secondary */

/* Destructive Colors */
--destructive: #E02D38       /* Red - dangerous actions */
--destructive-foreground: #FFFFFF /* White text on destructive */

/* Accent Colors */
--accent: #103178            /* Dark blue - hover highlights */
--accent-foreground: #FFFFFF /* White text on accent */

/* Base Colors */
--background: #F5F5F5        /* Page background */
--foreground: #2F3031        /* Default text color */
--card: #FFFFFF              /* Card/container background */
--border: #808489            /* Border color */
```

---

## 📊 Hover State Comparison

### **Primary Button:**

| Method | Default | Hover | Correctness |
|--------|---------|-------|-------------|
| **Design System** | `bg-primary` (#0B5FEF) | `hover:bg-primary-hover` (#054BCC) | ✅ **CORRECT** |
| Opacity method | `bg-primary` (#0B5FEF) | `hover:opacity-90` (#0B5FEF @ 90%) | ❌ Wrong - not design system |
| Tailwind alpha | `bg-primary` (#0B5FEF) | `hover:bg-primary/90` (#0B5FEF @ 90%) | ❌ Wrong - not design system |
| Hardcoded | `bg-blue-600` | `hover:bg-blue-700` | ❌ Wrong - hardcoded |

### **Visual Difference:**

```
Design System (✅):    #0B5FEF → #054BCC (darker, richer blue)
Opacity (❌):          #0B5FEF → #0B5FEF@90% (slightly faded, less vibrant)
Alpha (❌):            #0B5FEF → #0B5FEF@90% (same as opacity)
```

**Why Design System is Better:**
- ✅ Richer, more vibrant hover state
- ✅ Better contrast and accessibility
- ✅ Consistent with Figma design
- ✅ Easy to update globally via theme.css

---

## ✅ Best Practices

### **DO ✅:**
1. Always use CSS variables from `/src/styles/theme.css`
2. Use `hover:bg-primary-hover` for primary button hover
3. Use `bg-card` instead of `bg-white` for buttons
4. Use `text-foreground` instead of `text-gray-*`
5. Use `border-border` instead of `border-gray-*`

### **DON'T ❌:**
1. Never use `hover:opacity-90` or `hover:bg-primary/90`
2. Never hardcode colors like `bg-blue-600`, `bg-gray-100`
3. Never use arbitrary values outside design system
4. Never use Tailwind color scales (gray-*, blue-*, etc.)

---

## 🔗 Related Documentation

- **Design System Migration:** `/DESIGN_SYSTEM_MIGRATION.md`
- **Compliance Checklist:** `/DESIGN_SYSTEM_COMPLIANCE.md`
- **Button Audit Report:** `/BUTTON_COLOR_AUDIT_REPORT.md`
- **Design Tokens:** `/src/styles/theme.css`
- **Guidelines:** `/guidelines/Guidelines.md`

---

**Last Updated:** March 6, 2026  
**Status:** ✅ All buttons compliant with design system
