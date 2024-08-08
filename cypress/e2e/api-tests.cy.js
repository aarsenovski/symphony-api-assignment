describe("Sign Up API Test", () => {
  const testUser = {
    username: `andrej${Date.now()}`,
    password: `andrej123!${Date.now()}`,
    email: `andrej${Date.now()}@example.com`,
  };

  it("should sign up a new user", () => {
    cy.request({
      method: "POST",
      url: "https://randomlyapi.symphony.is/api/auth/signup/",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: testUser.username,
        password: testUser.password,
        firstName: "string",
        lastName: "string",
        email: testUser.email,
        dateOfBirth: "22/12/2000",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.success).to.eq("Thanks for signing up.");
    });
  });

  it("should login with valid credentials", () => {
    let authToken;
    cy.request({
      method: "POST",
      url: "https://randomlyapi.symphony.is/api/auth/login/",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: testUser.username,
        password: testUser.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.user.username).to.eq(testUser.username);
      expect(response.body).to.have.property("token");

      authToken = response.body.token;
      cy.log(`Token: ${authToken}`);
      Cypress.env("authToken", authToken);
    });
  });

  it("should create a post", () => {
    let postId;
    let randomText = "some random post created by Andrej";
    cy.request({
      method: "POST",
      url: "https://randomlyapi.symphony.is/api/posts/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${Cypress.env("authToken")}`,
      },
      body: {
        text: randomText,
      },
    }).then((response) => {
      postId = response.body.id;
      Cypress.env("postId", postId);
      expect(response.body.text).to.eq(randomText);
    });
  });

  it("should create a comment", () => {
    let randomComment = "some random comment created by Andrej";
    cy.request({
      method: "POST",
      url: "https://randomlyapi.symphony.is/api/post-comments/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${Cypress.env("authToken")}`,
      },
      body: {
        text: randomComment,
        post: Cypress.env("postId"),
      },
    }).then((response) => {
      expect(response.body.text).to.eq(randomComment);
    });
  });

  it("should retrieve comments made by a user", () => {
    cy.request({
      method: "GET",
      url: `https://randomlyapi.symphony.is/api/posts/${Cypress.env(
        "postId"
      )}/comments/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${Cypress.env("authToken")}`,
      },
    }).then((response) => {
      expect(response.body.results).to.not.be.empty;
      cy.log(response.body.results[0].text);
    });
  });
});
