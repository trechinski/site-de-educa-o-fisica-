function logout() {
  firebase.auth().signOut()
    .then(() => {
      const loginUrl = `${location.origin}/projetoGamificaEduk/html/login/login.html`;
      console.log("Logout realizado com sucesso.");
      window.location.href = loginUrl;
    })
    .catch(error => {
      console.error("Erro ao fazer logout:", error);
      alert("Erro ao fazer logout! Tente novamente.");
    });
}