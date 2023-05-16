
describe('This is a test  suite collection of Orangehrm', () => {
    it('This is the test case of Orangehrm with Login and Logout', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('input[name="username"][placeholder="Username"]').type("Admin");
        cy.get('input[placeholder="Password"]').type("admin123");
        cy.contains(' Login').click();
        cy.get("a.oxd-main-menu-item").contains("Admin").click();
        cy.get("input[placeholder='Type for hints...']").type("L",{timeout:5000});
    });
    it('This is to click Contact Us', () => {
        cy.visit("https://automationteststore.com/");
        
        const mklink= cy.get("a[href*='product/category&path=']").contains("Makeup");
        const sklnk=cy.get("a[href*='product/category&path=']").contains("Skincare");
        mklink.click();
        sklnk.click();
        })
    });

