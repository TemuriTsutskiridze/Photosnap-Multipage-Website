# Frontend Mentor - Photosnap-Multipage-Website solution

This is a solution to the [Photosnap-Multipage-Website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Navigate to each page
- Navigate through each page with links in header and footer and with hamburger menu on mobile devices.
- Toggle month and year price.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML markup
- CSS custom properties
- HTML DOM Input Checkbox Object
- Javascript
- Flexbox
- CSS Grid
- Mobile-first workflow
- Responsive Web Design

### What I learned

we learned used CSS grid for the first time while building our project. Also we learned how to move elements with CSS animation.
we learned how to use DOM manipulations.
The most important skill that we got from this project, is that we learned to work in team with git. we learned how to see and use each other's works, and fix conflicts in the process of work. Also we learned to work on different branches, to push our work with our branches, and ask for review from lead. We learnt how to be patient and loyal with other team members and made the best possible collegial relationship between us.

```css
 {
  #menu-mob {
    position: fixed;
    z-index: 1;
    left: -120%;
    transition: left 1s ease-in-out;
  }
  #menu-mob.active {
    left: 0;
  }
}
```

```js
const updateElements = () => {
  const factor = input.checked ? 10 : 0.1;
  month.style.color = input.checked
    ? "rgba(0, 0, 0, 0.5)"
    : "var(--pure-black)";
  year.style.color = input.checked ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.5)";
  per_year.forEach(
    (element) =>
      (element.textContent = input.checked ? "per year" : "per month")
  );
  payment.forEach(
    (element) =>
      (element.textContent = `$${
        parseInt(element.textContent.slice(1)) * factor
      }.00`)
  );
};
```

### Continued development

It will be more challenging for us to take the project which needs more JS logic and DOM manipulations next time.

### Useful resources

- [Example resource 1](https://www.openai.com) - I really liked this and will use it going forward.
- [Example resource 2](https://www.developer.mozilla.org) - This is an amazing site which helped me. I'd recommend it to anyone.
- [Example resource 3](https://www.css-tricks.com) - I is a comlplete guide to CSS grid.

## Authors

- Github - [@mariamlag](https://github.com/mariamlag);
- Linkdin - [@Mariam Lagazauri](https://www.linkedin.com/in/mariam-lagazauri-494334208);

- Github - [@runsprint](https://github.com/Runsprint);
- Linkdin - [@Gvantsa Kapanadze](https://www.linkedin.com/in/gvantsa-kapanadze-9955241a6/);

- Github - [@MariamKvirchiladze](https://github.com/MariamKvirchiladze);
- Linkdin - [Mariami Kvirchiladze](https://www.linkedin.com/in/mariami-kvirchiladze-673738252/);

## Acknowledgments

Thanks for this challenge to Bitcamp, Which gave us this opportunity to work on collaboration project. And also thanks for our team lead and mentor Temuri Tsutskiridze [https://github.com/TemuriTsutskiridze] for organizing this worksheet for us, and for helping us during our struggling moments.
