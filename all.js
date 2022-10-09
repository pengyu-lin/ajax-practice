const createAccount = document.querySelector(".createAccount");
const createPassword = document.querySelector(".createPassword");
const create = document.querySelector(".create");

const loginAccount = document.querySelector(".loginAccount");
const loginPassword = document.querySelector(".loginPassword");
const login = document.querySelector(".login");

create.addEventListener("click", function (e) {
  callSignUp();
});

login.addEventListener("click", function (e) {
  callLogin();
});

function callSignUp() {
  if (createAccount.value == "" || createPassword.value == "") {
    alert("請輸入正確資訊");
    return;
  }

  let obj = {};
  obj.email = createAccount.value.trim();
  obj.password = createPassword.value.trim();

  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signup", obj)
    .then(function (response) {
      alert(response.data.message);
      if (response.data.message == "帳號註冊成功") {
        createAccount.value = "";
        createPassword.value = "";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function callLogin() {
  if (loginAccount.value == "" || loginPassword.value == "") {
    alert("請輸入正確資訊");
    return;
  }

  let obj = {};
  obj.email = loginAccount.value.trim();
  obj.password = loginPassword.value.trim();

  axios
    .post("https://hexschool-tutorial.herokuapp.com/api/signin", obj)
    .then(function (response) {
      alert(response.data.message);
      if (response.data.message == "登入成功") {
        loginAccount.value = "";
        loginPassword.value = "";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
