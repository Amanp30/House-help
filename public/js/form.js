function submitForm(e, title) {
  e.preventDefault();

  const formData = new FormData(e.target);
  formData.append("inquiry", title);

  axios
    .post("/api/accept-query-form", Object.fromEntries(formData))
    .then((response) => {
      notify(response.data.message);
    })
    .catch((error) => {
      const message =
        error.response?.data?.message || "Error while submitting form.";
      notify(message, false);
      alert(message);
    });
}

const notifyStyle = `
  width: max-width;
  max-width: 400px;
  position: absolute;
  top: 2em;
  margin: auto;
  padding: .6em;
  left: 0;
  right: 0;
  line-height: 1.2em;
`;

function notify(message, status = true) {
  const div = document.createElement("div");
  div.innerText = message;
  div.style.cssText = `${notifyStyle} background: ${
    status ? "green" : "red"
  }; color: white;`;
  document.body.appendChild(div);

  setTimeout(() => {
    window.location.reload();
  }, 5000);
}
