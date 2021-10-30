function scrollToTarget() {
  window.scrollTo({
    top: document.documentElement.clientWidth,
    behavior: 'smooth',
  });
}

export default scrollToTarget;
