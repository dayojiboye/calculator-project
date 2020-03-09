const input = document.getElementById('input-number');
const calcBtn = document.getElementById('container');

// calculator buttons

calcBtn.children[0].addEventListener('click', () => {
  if (input.value === '') {
    return;
  } else {
    input.value += '*';
  }
});

calcBtn.children[1].addEventListener('click', () => {
  if (input.value === '') {
    return;
  } else {
    input.value += '/';
  }
});

calcBtn.children[2].addEventListener('click', () => {
  if (input.value === '') {
    return;
  } else {
    input.value += '-';
  }
});

calcBtn.children[3].addEventListener('click', () => {
  if (input.value === '') {
    return;
  } else {
    input.value += '+';
  }
});

calcBtn.children[4].addEventListener('click', () => {
  if (input.value === '') {
    return;
  } else {
    input.value += '.';
  }
});

calcBtn.children[5].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 9;
  } else {
    input.value += 9;
  }
});

calcBtn.children[6].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 8;
  } else {
    input.value += 8;
  }
});

calcBtn.children[7].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 7;
  } else {
    input.value += 7;
  }
});

calcBtn.children[8].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 6;
  } else {
    input.value += 6;
  }
});

calcBtn.children[9].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 5;
  } else {
    input.value += 5;
  }
});

calcBtn.children[10].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 4;
  } else {
    input.value += 4;
  }
});

calcBtn.children[11].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 3;
  } else {
    input.value += 3;
  }
});

calcBtn.children[12].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 2;
  } else {
    input.value += 2;
  }
});

calcBtn.children[13].addEventListener('click', () => {
  if (input.value === '0') {
    input.value = 1;
  } else {
    input.value += 1;
  }
});

calcBtn.children[14].addEventListener('click', () => {
  if (input.value === '0') {
    return;
  } else {
    input.value += 0;
  }
});

calcBtn.children[15].addEventListener('click', () => {
  if (input.value === '') {
    return;
  } else {
    input.value = eval(input.value);
  }
});

calcBtn.children[16].addEventListener('click', () => {
  input.value = 0;
});