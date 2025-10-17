document.addEventListener("DOMContentLoaded", () => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      const loginUrl = `${location.origin}/projetoGamificaEduk/html/login/login.html`;
      console.warn("Acesso negado: sessão inexistente. Redirecionando para login...");
      window.location.href = loginUrl;
      return;
    }

    userService.findByUid(user.uid)
      .then(userData => {
        console.log("Sessão validada. Usuário autenticado:", userData.uid || user.uid);
      })
      .catch(error => {
        if (error.message === "01 - Não encontrado.") {
          const profileUpdateUrl = `${location.origin}/projetoGamificaEduk/html/profile/update-profile.html`;
          alert("Seu perfil precisa ser atualizado e ativado! Acesse o menu perfil.");
          window.location.href = profileUpdateUrl;
        } else {
          console.error("Erro ao buscar perfil:", error);
        }
      });
  });
});