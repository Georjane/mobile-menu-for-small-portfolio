myFunction = () => {
  const x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
};

myNextFunction = (x) => {
  x.classList.toggle('change');
};
