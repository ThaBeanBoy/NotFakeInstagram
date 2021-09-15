const loginBtn = document.querySelector('#login-btn');

const username = document.querySelector('#username');
const password = document.querySelector('#password');

const links = document.querySelectorAll('.fake-link');

let hasSeenMainMessage = false;
//Events
loginBtn.addEventListener('click', () => {
  if (username.value.trim() !== '' && password.value.trim() !== '') {
    Swal.fire({
      text: "One of us looks like a fool, and it's not me",
      imageHeight: innerHeight * 0.5,
      imageUrl: './andDen.jpg',

      confirmButtonText: 'Sorry',

      showDenyButton: true,
      denyButtonText: 'This time is for real',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Good decision, go rest',
        });
      } else if (result.isDenied) {
        Swal.fire({
          imageUrl: './getSomeHelp.png',
          imageHeight: innerHeight * 0.5,
        });
      }
    });

    hasSeenMainMessage = true;
  }
});

links.forEach((n) => {
  n.addEventListener('click', () => {
    if (hasSeenMainMessage) {
      Swal.fire({
        imageUrl: './clickLinks.webp',
        text: 'My guy, this is not real, go rest',
        imageHeight: innerHeight * 0.5,
      });
    }
  });
});

//User info validation
loginBtn.classList.add('Dim');
username.addEventListener('input', () => {
  if (username.value.trim() !== '' && password.value.trim() !== '') {
    loginBtn.classList.remove('Dim');
  } else {
    loginBtn.classList.add('Dim');
  }
});
password.addEventListener('input', () => {
  if (username.value.trim() !== '' && password.value.trim() !== '') {
    loginBtn.classList.remove('Dim');
  } else {
    loginBtn.classList.add('Dim');
  }
});
