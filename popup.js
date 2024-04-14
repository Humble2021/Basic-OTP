function generateOTP(secretKey, timestamp) {
  const hash = secretKey.length + timestamp;
  const otp = ("000000" + (hash % 1000000)).slice(-6);
  return otp;
}

function updateOTP() {
  const secretKey = "mysecretkey";
  const timestamp = Math.floor(Date.now() / 1000);
  const otp = generateOTP(secretKey, timestamp);
  document.getElementById("otp").textContent = "Current OTP: " + otp;
}

updateOTP();

setInterval(updateOTP, 10000);
