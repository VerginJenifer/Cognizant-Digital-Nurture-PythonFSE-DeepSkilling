from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from .base_page import BasePage
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class InputFormPage(BasePage):

    NAME = (By.ID, "name")
    EMAIL = (By.ID, "inputEmail4")
    PASSWORD = (By.ID, "inputPassword4")
    COMPANY = (By.ID, "company")
    WEBSITE = (By.ID, "websitename")
    COUNTRY = (By.NAME, "country")
    CITY = (By.ID, "inputCity")
    ADDRESS1 = (By.ID, "inputAddress1")
    ADDRESS2 = (By.ID, "inputAddress2")
    STATE = (By.ID, "inputState")
    ZIP = (By.ID, "inputZip")

    SUBMIT = (By.CSS_SELECTOR, "button[type='submit']")
    SUCCESS = (By.CSS_SELECTOR, "p.success-msg")

    def fill_form(self, name, email, password, company, website,
                  country, city, address1, address2, state, zip_code):

        self.wait_for_element(self.NAME).send_keys(name)
        self.wait_for_element(self.EMAIL).send_keys(email)
        self.wait_for_element(self.PASSWORD).send_keys(password)
        self.wait_for_element(self.COMPANY).send_keys(company)
        self.wait_for_element(self.WEBSITE).send_keys(website)

        Select(self.wait_for_element(self.COUNTRY)).select_by_visible_text(country)

        self.wait_for_element(self.CITY).send_keys(city)
        self.wait_for_element(self.ADDRESS1).send_keys(address1)
        self.wait_for_element(self.ADDRESS2).send_keys(address2)
        self.wait_for_element(self.STATE).send_keys(state)
        self.wait_for_element(self.ZIP).send_keys(zip_code)

    def submit_form(self):
        buttons = self.driver.find_elements(*self.SUBMIT)
        print("Buttons found:", len(buttons))
        if buttons:
            self.driver.execute_script("arguments[0].scrollIntoView({block:'center'});",buttons[0])
            buttons[0].click()

    def get_success_message(self):
        WebDriverWait(self.driver, 10).until(EC.text_to_be_present_in_element(self.SUCCESS,"Thanks for contacting us"))
        return self.driver.find_element(*self.SUCCESS).text