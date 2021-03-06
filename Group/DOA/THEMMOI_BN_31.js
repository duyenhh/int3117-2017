describe('THEMMOI_BN_31', function(){
	context('Kiem tra dinh dang so dien thoai', function(){
		beforeEach(function(){
			cy
			.visit('signin')
			.get("input[name='email']").type(Cypress.env('USER_DOCTOR'))
			.get("input[name='password']").type(Cypress.env('LOGIN_PASSWORD'))
			.get("button[type='submit']").click()
		})

		it('Kiem tra SDT nhieu hon 11 so', function(){
			cy.get("a[href$='/main/patients']").click()
			cy.get("a[href$='/main/patients/new']").click()
			cy.get("input[autofocus='']").type("Nguyen Van XX")
			cy.get("input[name='birth_date']").type("20/10/1997")
			cy.get("div[name='gender']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(1).click();
			cy.get("input[name='mobile_phone']").type("098554627123")
			cy.get("input[name='admission_date']").type("20/3/2017")
			cy.get("[ng-submit='form.$valid && createPatient()'] [ng-model='patient.province_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [ng-model='patient.district_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()

			cy.get("[ng-submit='form.$valid && createPatient()'] [name='district_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()

			cy.get("[ng-submit='form.$valid && createPatient()'] [name='ward_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()

			cy.get("[ng-submit='form.$valid && createPatient()'] [name='resident_province_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()

			cy.get("[ng-submit='form.$valid && createPatient()'] [name='resident_district_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()

			cy.get("[ng-submit='form.$valid && createPatient()'] [name='resident_ward_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()

			cy.get("[ng-submit='form.$valid && createPatient()'] [name='identification_type']").click()

			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			var x =  Math.floor((Math.random() * 100000000) + 1);
			cy.get("[ng-submit='form.$valid && createPatient()'] [ng-model='patient.identification_number']").type(x)
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='identification_issued_date']").type("10/10/2010")
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='identification_issued_by']").type("Hải Đông")
			cy.get("[ng-submit='form.$valid && createPatient()'] [ng-model='contact.name']").type("ldajfldkjaf")
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='contact_type']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get('[ng-submit="form.$valid && createPatient()"] [type="submit"]').click();
			cy.contains("SĐT không đúng định dạng.")
			cy.focused().should('have.attr', 'name', 'mobile_phone')
		})

		it('Kiem tra SDT it hon 10 so', function(){
			cy.get("a[href$='/main/patients']").click()
			cy.get("a[href$='/main/patients/new']").click()
			cy.get("input[autofocus='']").type("Nguyen Van Z")
			cy.get("input[name='birth_date']").type("20/10/1985")
			cy.get("div[name='gender']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(1).click();
			cy.get("input[name='mobile_phone']").type("098344567")
			cy.get("input[name='admission_date']").type("20/3/2017")
			cy.get("[ng-submit='form.$valid && createPatient()'] [ng-model='patient.province_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [ng-model='patient.district_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='district_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='ward_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='resident_province_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='resident_district_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='resident_ward_id']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='identification_type']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get("[ng-submit='form.$valid && createPatient()'] [ng-model='patient.identification_number']").type("168529975")
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='identification_issued_date']").type("10/10/2010")
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='identification_issued_by']").type("Hải Đông")
			cy.get("[ng-submit='form.$valid && createPatient()'] [ng-model='contact.name']").type("ldajflda")
			cy.get("[ng-submit='form.$valid && createPatient()'] [name='contact_type']").click()
			cy.get('.select2-result-label.ui-select-choices-row-inner').eq(0).click()
			cy.get('[ng-submit="form.$valid && createPatient()"] [type="submit"]').click();
			cy.contains("SĐT không đúng định dạng.")
			cy.focused().should('have.attr', 'name', 'mobile_phone')
		})
	})
})