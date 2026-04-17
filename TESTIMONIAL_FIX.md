# Testimonial Functions to Fix

## Pattern Found:
All 9 testimonials use this EXACT className:
```
className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#2f3031] text-[14px] w-[min-content] whitespace-pre-wrap"
```

## Should be replaced with:
```
className="min-w-full not-italic relative shrink-0 text-foreground w-[min-content] whitespace-pre-wrap" style={{ fontSize: 'var(--body-small-size)', lineHeight: 'var(--body-small-height)', fontWeight: 'var(--font-weight-normal)' }}
```

## Functions to fix:
1. Frame27() - Line 2469-2475
2. Frame30() - Line 2511-2517
3. Frame33() - Line 2553-2559
4. Frame36() - Line 2614-2620
5. Frame39() - Line 2656-2662
6. Frame42() - Line 2698-2704
7. Frame45() - Line 2759-2765
8. Frame48() - Line 2801-2807
9. Frame51() - Line 2843-2849

## Strategy:
Since edit_tool is having issues with special characters (possibly curly quotes in the template literal),
I will create individual replacements for each function using their unique function names as context.
