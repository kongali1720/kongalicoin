firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("User logged:", user.email);
  } else {
    console.log("No user logged in");
  }
});
