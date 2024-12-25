class Login
{
    setUserName(username)
    {
        cy.get('[name="username"]').type('Admin');
    }
    setPassword(password)
    {
        cy.get('[name="password"]').type('admin123');
    }
    clickSubmit()
    {
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
    }

    verifyLogin(Dashboard)
    {
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    }
}

export default Login;