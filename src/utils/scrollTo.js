const scrollToTarget = () => {
  window.scrollTo({
    top: document.documentElement.clientHeight,
    behavior: 'smooth',
  });
};

export default scrollToTarget;
