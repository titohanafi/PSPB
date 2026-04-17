# 📊 Landing Page Optimization Report

## 🔍 Issues Found in `/src/imports/UpdatedLandingPage.tsx`

### ❌ Critical Issues

#### 1. **Hardcoded Font Families** (26+ occurrences)
**Problem:**
```tsx
// ❌ WRONG
font-['Inter:Semi_Bold',sans-serif]
font-['Inter:Regular',sans-serif]
font-['Plus_Jakarta_Sans:Bold',sans-serif]
font-['Plus_Jakarta_Sans:Regular',sans-serif]
```

**Solution:**
```tsx
// ✅ CORRECT - Remove font-family classes, use CSS variables for weight
style={{ fontWeight: 'var(--font-weight-semibold)' }}
style={{ fontWeight: 'var(--font-weight-normal)' }}
style={{ fontWeight: 'var(--font-weight-bold)' }}
```

**Impact:** Plus Jakarta Sans is NOT defined in theme.css - only Inter is available

---

#### 2. **Hardcoded Colors** (48+ occurrences)
**Problem:**
```tsx
// ❌ WRONG
text-[#2f3031]  // Should use design system color
text-[#53575a]  // Not in design system
```

**Solution:**
```tsx
// ✅ CORRECT
text-foreground              // For #2f3031
text-muted-foreground        // For #53575a (closest match)
```

---

#### 3. **Hardcoded Font Sizes** (50+ occurrences)
**Problem:**
```tsx
// ❌ WRONG
text-[12px]
text-[14px]
text-[16px]
text-[20px]
text-[32px]
```

**Solution:**
```tsx
// ✅ CORRECT
style={{ fontSize: 'var(--helper-size)' }}        // 12px
style={{ fontSize: 'var(--body-small-size)' }}     // 14px
style={{ fontSize: 'var(--body-size)' }}           // 16px
style={{ fontSize: 'var(--body-lg-size)' }}        // 20px
style={{ fontSize: 'var(--display-large-size)' }}  // 32px
```

---

#### 4. **Hardcoded Line Heights** (50+ occurrences)
**Problem:**
```tsx
// ❌ WRONG
leading-[20px]
leading-[22px]
leading-[24px]
leading-[28px]
```

**Solution:**
```tsx
// ✅ CORRECT
style={{ lineHeight: 'var(--helper-height)' }}       // 16px
style={{ lineHeight: 'var(--body-small-height)' }}   // 20px
style={{ lineHeight: 'var(--body-height)' }}         // 24px
style={{ lineHeight: 'var(--body-lg-height)' }}      // 28px
```

---

## 📍 Specific Locations

### Navigation Links (Lines 163, 175)
```tsx
// ❌ BEFORE
<div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2f3031] text-[16px] whitespace-nowrap">
  <p className="leading-[24px]">Beranda</p>
</div>

// ✅ AFTER (Already fixed)
<div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-foreground whitespace-nowrap" style={{ fontSize: 'var(--body-size)', fontWeight: 'var(--font-weight-semibold)', lineHeight: 'var(--body-height)' }}>
  <p style={{ lineHeight: 'var(--body-height)' }}>Beranda</p>
</div>
```

### Hero Section (Line 215-216)
```tsx
// ✅ Already uses clamp for responsive sizing
<h1 style={{ fontSize: 'clamp(var(--body-lg-size), 5vw, var(--display-large-size))', ... }}>
```

### Package Cards (Lines 261, 263, 450, 452, 540, 542, 780, 782, 900, 902, 950, 952)
```tsx
// ❌ BEFORE
<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2f3031] text-[12px] w-[min-content] whitespace-pre-wrap">Digitalisasi Pembelajaran</p>
<p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#2f3031] text-[16px] w-[min-content] whitespace-pre-wrap">Description text...</p>

// ✅ SHOULD BE
<p className="min-w-full not-italic relative shrink-0 text-foreground w-[min-content] whitespace-pre-wrap" style={{ fontSize: 'var(--helper-size)', lineHeight: 'normal', fontWeight: 'var(--font-weight-semibold)' }}>Digitalisasi Pembelajaran</p>
<p className="min-w-full not-italic relative shrink-0 text-foreground w-[min-content] whitespace-pre-wrap" style={{ fontSize: 'var(--body-size)', lineHeight: 'var(--body-height)', fontWeight: 'var(--font-weight-normal)' }}>Description text...</p>
```

### Plus Jakarta Sans Usage (Lines 1517, 1977, 2028, 2242, 2251, 2270, 2277, etc.)
```tsx
// ❌ BEFORE - Uses font NOT in design system
<p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] md:leading-[24px] text-[#53575a] text-[14px] md:text-[16px] break-words">

// ✅ SHOULD BE - Use Inter with responsive sizing
<p className="text-muted-foreground break-words" style={{ 
  fontSize: 'clamp(var(--body-small-size), 3vw, var(--body-size))', 
  lineHeight: 'clamp(22px, 3vw, var(--body-height))',
  fontWeight: 'var(--font-weight-normal)'
}}>
```

### Color Mappings
```tsx
#2f3031 → text-foreground (exact match from theme.css: rgba(47, 48, 49, 1.00))
#53575a → text-muted-foreground (closest: rgba(101, 106, 108, 1.00))
#45474A → text-icon-secondary (exact: rgba(69, 71, 74, 1.00))
```

---

## 🎯 Recommended Actions

### Priority 1: Replace All Hardcoded Colors
**Impact:** High - Ensures design system consistency
**Effort:** Medium - Search & replace ~48 instances

### Priority 2: Remove Custom Font Declarations
**Impact:** High - Removes Plus Jakarta Sans (not in theme)
**Effort:** Medium - Search & replace ~26 instances

### Priority 3: Use CSS Variables for Typography
**Impact:** Medium - Makes typography globally updatable
**Effort:** High - Requires careful mapping of sizes

### Priority 4: Responsive Typography with Clamp
**Impact:** Low - Improves mobile experience
**Effort:** Medium - Add clamp() for responsive text

---

## 🛠️ Quick Fix Script (Regex Replacements)

### Replace hardcoded foreground color:
```
Find: text-\[#2f3031\]
Replace: text-foreground
```

### Replace hardcoded muted color:
```
Find: text-\[#53575a\]
Replace: text-muted-foreground
```

### Remove Inter font declarations:
```
Find: font-\['Inter:(Semi_Bold|Regular|Bold)',sans-serif\]\s*
Replace: (empty)
```

### Remove Plus Jakarta Sans (NOT in design system):
```
Find: font-\['Plus_Jakarta_Sans:(Bold|Regular)',sans-serif\]\s*
Replace: (empty)
```

---

## ✅ Already Fixed (2 items)
- ✅ Line 163: Navigation "Beranda" - now uses design system variables
- ✅ Line 175: Navigation "Kontribusi" - now uses design system variables
- ✅ Line 215-216: Hero section - now uses clamp for responsive sizing

---

## 📋 Files Affected
- `/src/imports/UpdatedLandingPage.tsx` (3000+ lines)

**Total Issues:**
- 26+ hardcoded font-family declarations
- 48+ hardcoded color values
- 50+ hardcoded font sizes
- 50+ hardcoded line heights
- Plus Jakarta Sans usage (NOT in design system)

**Estimated Time to Fix All:** 2-3 hours with careful testing
