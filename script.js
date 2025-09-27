// Google Apps Script Web App URL (sau khi bạn setup Google Sheet)
const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

// Hàm gửi form
function handleForm(formId, msgId) {
  const form = document.getElementById(formId);
  const msg = document.getElementById(msgId);

  form.addEventListener("submit", e => {
    e.preventDefault();
    msg.textContent = "Đang gửi...";
    fetch(SCRIPT_URL, { method: "POST", body: new FormData(form) })
      .then(res => {
        msg.textContent = "Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.";
        form.reset();
      })
      .catch(err => {
        msg.textContent = "Có lỗi xảy ra. Vui lòng thử lại!";
      });
  });
}

handleForm("form-top", "msg-top");
handleForm("form-bottom", "msg-bottom");
