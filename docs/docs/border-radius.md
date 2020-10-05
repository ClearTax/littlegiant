---
id: border-radius
title: Border Radius
sidebar_label: Border Radius
---

Utility classes to control the border radius

```html live
<>
  <div class="lil-flex">
    <div class="lil-rounded-sm lil-w-4/12 lil-m-2  lil-p-2 lil-bg-green-200">sm - 2px</div>
    <div class="lil-rounded-md lil-w-4/12 lil-m-2  lil-p-2 lil-bg-green-200">md - 4px</div>
    <div class="lil-rounded-lg lil-w-4/12 lil-m-2  lil-p-2 lil-bg-green-200">lg - 8px</div>
  </div>
  <div>
    Full - 50% <div class="lil-rounded-full lil-w-16 lil-h-16 lil-bg-green-200 lil-leading-loose"></div>
  </div>
</>
```

Border radius can also be applied to individual directions - left, right, left-top, right-bottom etc

Use `lil-rounded-{l|r|t|n}-{size}` to round one side of an element

```html live
<>
  <div class="lil-flex">
    <div class="lil-rounded-l-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-200">left rounded</div>
    <div class="lil-rounded-r-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-200">right rounded</div>
    <div class="lil-rounded-t-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-200">top rounded</div>
    <div class="lil-rounded-b-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-200">bottom rounded</div>
  </div>
</>
```

Or use `lil-rounded-{tl|tr|bl|br}-{size}` to round one corner of an element

```html live
<>
  <div class="lil-flex">
    <div class="lil-rounded-tl-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-200">top-left rounded</div>
    <div class="lil-rounded-tr-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-200">top-right rounded</div>
    <div class="lil-rounded-bl-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-200">bottom-left rounded</div>
    <div class="lil-rounded-br-lg lil-w-3/12 lil-m-2  lil-p-2 lil-bg-green-200">bottom-right rounded</div>
  </div>
</>
```
