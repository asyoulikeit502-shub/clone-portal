const logoKeyframes = [{
    opacity: 1,
    offset: 0
  },
  {
    opacity: 1,
    offset: 0.1
  },
  {
    opacity: 0,
    offset: 0.11
  },
  {
    opacity: 0,
    offset: 1
  }
];
const logoAnimationOptions = {
  duration: 10000,
  easing: 'ease',
  iterations: Infinity
};
for (let i = 1; i <= 10; i++) {
  const head = document.getElementById(`head-${i}`);
  if (head) {
    head.animate(logoKeyframes, {
      ...logoAnimationOptions,
      delay: (i - 1) * 1000
    });
  }
}