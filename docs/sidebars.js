/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    "Getting Started": ["getting-started"],
    Components: [
      {
        type: "category",
        label: "Borders",
        items: ["border-radius", "border-width"],
      },
      "box-shadow",
      "button",
      {
        type: "category",
        label: "Cards",
        items: ["cards", "faq-card", "presscard"],
      },
      "colors",
      "cursor",
      "grid",
      {
        type: "category",
        label: "Promise",
        items: ["promise-h", "promise-v"],
      },
      "reinforcement",
      "tabs",
      {
        type: "category",
        label: "Typography",
        items: [
          "font-size",
          "font-color",
          "font-weight",
          "line-height",
          "text-alignment",
        ],
      },
    ],
    "Responsive Design": ["responsive-design"],
  },
};
