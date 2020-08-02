function onQrCodeLoginTabClick() {
  let qrCodeLoginContent = document.getElementById("qr-code-login-content");
  qrCodeLoginContent.style.display = "flex";
  let accountPasswordLoginContent = document.getElementById("account-password-login-content");
  accountPasswordLoginContent.style.display = "none";

  if (!document.getElementById("qr-code-login-tab-item").classList.contains('active')) {
    document.getElementById("qr-code-login-tab-item").classList.add('active');
  }

  if (document.getElementById("account-password-login_tab_item").classList.contains('active')) {
    document.getElementById("account-password-login_tab_item").classList.remove('active');
  }

  console.log('onQrCodeTabClick')
}

function onAccountPasswordLoginTabClick() {
  let qrCodeLoginContent = document.getElementById("qr-code-login-content");
  qrCodeLoginContent.style.display = "none";
  let accountPasswordLoginContent = document.getElementById("account-password-login-content");
  accountPasswordLoginContent.style.display = "flex";

  if (!document.getElementById("account-password-login_tab_item").classList.contains('active')) {
    document.getElementById("account-password-login_tab_item").classList.add('active');
  }

  if (document.getElementById("qr-code-login-tab-item").classList.contains('active')) {
    document.getElementById("qr-code-login-tab-item").classList.remove('active');
  }

  console.log('onAccountPasswordLoginTabClick')
}