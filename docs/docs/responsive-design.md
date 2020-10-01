---
id: responsive-design
title: Responsive Design
sidebar_label: Responsive Design
---

Every utility class from littlegiant can be applied conditionally at different breakpoints.

There are four breakpoints in littlegiant

```css
/* Small (sm) */
@media (max-width: 768px) {
  /* ... */
}

/* Medium (md) */
@media (min-width: 768px) {
  /* ... */
}

/* Large (lg) */
@media (min-width: 1024px) {
  /* ... */
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  /* ... */
}
```

To add a utility but only have it take effect at a certain breakpoint, all you need to do is prefix the utility with the breakpoint name, followed by the : character

```html live
<>
  <div class="lil-w-1/2 lg:lil-w-4/5 md:lil-w-1/3 sm:lil-w-full lil-bg-green-200">I am responsive</div>
</>
```
