describe('PayPay - performance test', () => {
    it('should run lighthouse performance audits using default thresholds', () => {
    const thresholds = {
        performance: 50,
        accessibility: 80,
        interactive: 2000,
        seo: 60,
        pwa: 50,
        };
        
    cy.visit('/');
    cy.lighthouse();
    });
    });