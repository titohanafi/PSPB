# 🔧 Landing Page Optimization Guide

## Summary of Fixes Applied

### ✅ Already Fixed (3 locations)
1. **Line 163** - Navigation "Beranda" text styling
2. **Line 175** - Navigation "Kontribusi" text styling  
3. **Line 215-216** - Hero section h1 and p with responsive sizing
4. **Line 261-263** - First package card typography

---

## 🎯 Remaining Issues to Fix

### Pattern 1: Package Card Labels (5 more locations)
**Lines:** 450, 540, 780, 900, 950

**Current (❌):**
```tsx
<p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic relative shrink-0 text-[#2f3031] text-[12px] w-[min-content] whitespace-pre-wrap">Label Text</p>
```

**Should be (✅):**
```tsx
<p className="min-w-full not-italic relative shrink-0 text-foreground w-[min-content] whitespace-pre-wrap" style={{ fontSize: 'var(--helper-size)', lineHeight: 'normal', fontWeight: 'var(--font-weight-semibold)' }}>Label Text</p>
```

---

### Pattern 2: Package Card Descriptions (5 more locations)
**Lines:** 452, 542, 782, 902, 952

**Current (❌):**
```tsx
<p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#2f3031] text-[16px] w-[min-content] whitespace-pre-wrap">Description...</p>
```

**Should be (✅):**
```tsx
<p className="min-w-full not-italic relative shrink-0 text-foreground w-[min-content] whitespace-pre-wrap" style={{ fontSize: 'var(--body-size)', lineHeight: 'var(--body-height)', fontWeight: 'var(--font-weight-normal)' }}>Description...</p>
```

---

### Pattern 3: Plus Jakarta Sans Descriptions (3 locations)
**Lines:** 1517, 1977, 2028

**Current (❌ - Font NOT in design system):**
```tsx
<p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] md:leading-[24px] relative shrink-0 text-[14px] md:text-[18px] w-full">Text</p>
```

**Should be (✅):**
```tsx
<p className="relative shrink-0 w-full" style={{ 
  fontSize: 'clamp(var(--body-small-size), 3vw, 18px)', 
  lineHeight: 'clamp(22px, 3vw, var(--body-height))',
  fontWeight: 'var(--font-weight-normal)'
}}>Text</p>
```

---

### Pattern 4: Process Steps Text (6 locations)  
**Lines:** 2242, 2277, 2296, 2315, 2334, 2353

**Current (❌ - Font NOT in design system):**
```tsx
<p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[22px] md:leading-[24px] text-[#53575a] text-[14px] md:text-[16px] break-words">Text</p>
```

**Should be (✅):**
```tsx
<p className="text-muted-foreground break-words" style={{ 
  fontSize: 'clamp(var(--body-small-size), 3vw, var(--body-size))', 
  lineHeight: 'clamp(22px, 3vw, var(--body-height))',
  fontWeight: 'var(--font-weight-normal)'
}}>Text</p>
```

---

### Pattern 5: Process Steps Numbers (6 locations)
**Lines:** 2251, 2270, 2289, 2308, 2327, 2346

**Current (❌ - Font NOT in design system):**
```tsx
<ol className="list-decimal font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#2f3031] text-[14px] md:text-[16px] w-full md:w-[240px] md:min-w-[180px] break-words" start="1">
```

**Should be (✅):**
```tsx
<ol className="list-decimal relative shrink-0 text-foreground w-full md:w-[240px] md:min-w-[180px] break-words" style={{
  fontSize: 'clamp(var(--body-small-size), 3vw, var(--body-size))',
  lineHeight: 'var(--body-height)',
  fontWeight: 'var(--font-weight-bold)'
}} start="1">
```

---

### Pattern 6: Testimonial Text (9 locations)
**Lines:** 2472, 2514, 2556, 2617, 2659, 2701, 2762, 2804, 2846

**Current (❌):**
```tsx
<p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#2f3031] text-[14px] w-[min-content] whitespace-pre-wrap">Quote text</p>
```

**Should be (✅):**
```tsx
<p className="min-w-full not-italic relative shrink-0 text-foreground w-[min-content] whitespace-pre-wrap" style={{ fontSize: 'var(--body-small-size)', lineHeight: 'var(--body-small-height)', fontWeight: 'var(--font-weight-normal)' }}>Quote text</p>
```

---

### Pattern 7: Partner Names (9 locations)
**Lines:** 2506, 2548, 2590, 2651, 2693, 2735, 2796, 2838, 2880

**Current (❌ - Font NOT in design system):**
```tsx
<p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] min-h-px min-w-px relative text-[#2f3031] text-[16px] whitespace-pre-wrap">PT Literasi Nusantara Indah</p>
```

**Should be (✅):**
```tsx
<p className="flex-[1_0_0] min-h-px min-w-px relative text-foreground whitespace-pre-wrap" style={{ fontSize: 'var(--body-size)', lineHeight: 'var(--body-height)', fontWeight: 'var(--font-weight-bold)' }}>PT Literasi Nusantara Indah</p>
```

---

### Pattern 8: Thank You Section (1 location)
**Lines:** 2918

**Current (partially ✅ but color hardcoded):**
```tsx
<h2 style={{ fontSize: 'var(--headline-xsmall-size)', lineHeight: 'var(--headline-xsmall-height)', fontWeight: 'var(--headline-xsmall-weight)' }} className="not-italic relative shrink-0 text-[#2f3031] text-center w-full max-w-[1000px] whitespace-pre-wrap px-4">
```

**Should be (✅):**
```tsx
<h2 style={{ fontSize: 'var(--headline-xsmall-size)', lineHeight: 'var(--headline-xsmall-height)', fontWeight: 'var(--headline-xsmall-weight)' }} className="not-italic relative shrink-0 text-foreground text-center w-full max-w-[1000px] whitespace-pre-wrap px-4">
```

---

### Pattern 9: Last CTA Section (1 location)
**Line:** 3224

**Current (❌):**
```tsx
<p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] md:leading-[28px] not-italic relative shrink-0 text-[16px] md:text-[20px] text-center text-white w-full max-w-[1100px] whitespace-pre-wrap">
```

**Should be (✅):**
```tsx
<p className="not-italic relative shrink-0 text-center text-white w-full max-w-[1100px] whitespace-pre-wrap" style={{ 
  fontSize: 'clamp(var(--body-size), 3vw, var(--body-lg-size))', 
  lineHeight: 'clamp(var(--body-height), 3vw, var(--body-lg-height))',
  fontWeight: 'var(--font-weight-normal)'
}}>
```

---

## 📊 Statistics

**Total Replacements Needed:**
- ✅ Already fixed: 4 patterns
- ❌ Remaining: 44 individual replacements across 9 patterns

**By Type:**
- 🔴 Plus Jakarta Sans (NOT in design system): 24 instances
- 🟡 Hardcoded Inter fonts: 20 instances  
- 🔴 Hardcoded colors: 44 instances
- 🔴 Hardcoded sizes: 44 instances

**Estimated Impact:**
- **File size reduction:** ~5-10% (removing redundant font declarations)
- **Maintainability:** ⬆️⬆️⬆️ High improvement
- **Design system compliance:** 0% → 100%

---

## ⚡ Quick Commands for Manual Fixes

If you want to manually fix all remaining issues, run these search/replaces in order:

### 1. Fix all foreground colors
```
Find: text-\[#2f3031\]
Replace: text-foreground
```

### 2. Fix all muted colors
```
Find: text-\[#53575a\]
Replace: text-muted-foreground
```

### 3. Remove Inter font family (keeping semibold marker for ref)
```
Find: font-\['Inter:Semi_Bold',sans-serif\]\s+font-semibold
Replace: 
```

### 4. Remove Inter font family (regular)
```
Find: font-\['Inter:Regular',sans-serif\]\s+font-normal
Replace: 
```

### 5. Remove Plus Jakarta Sans (bold)
```
Find: font-\['Plus_Jakarta_Sans:Bold',sans-serif\]\s+font-bold
Replace: 
```

### 6. Remove Plus Jakarta Sans (regular)
```
Find: font-\['Plus_Jakarta_Sans:Regular',sans-serif\]\s+font-normal
Replace: 
```

⚠️ **After bulk replacements, you MUST manually add style props with CSS variables!**

---

## 🎨 Design System Reference

### Colors (from theme.css)
```css
--foreground: rgba(47, 48, 49, 1.00)           /* #2f3031 */
--muted-foreground: rgba(101, 106, 108, 1.00)  /* Closest to #53575a */
--icon-secondary: rgba(69, 71, 74, 1.00)       /* #45474A */
```

### Typography Sizes
```css
--helper-size: 12px
--body-small-size: 14px
--body-size: 16px
--body-lg-size: 20px
--display-large-size: 32px
--headline-xsmall-size: 42px
```

### Font Weights
```css
--font-weight-normal: 400
--font-weight-semibold: 600
--font-weight-bold: 700
```

---

## ✅ Next Steps

1. **Review this guide** to understand all patterns
2. **Apply fixes systematically** using patterns above
3. **Test responsiveness** on mobile/tablet/desktop
4. **Verify colors** match design system
5. **Remove Plus Jakarta Sans** completely (not in theme.css)
6. **Use only Inter font family** as defined in design system

**Time estimate:** 1-2 hours for complete optimization with testing
