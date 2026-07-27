from selenium.webdriver.common.by import By
from .base_page import BasePage
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

class SimpleFormPage(BasePage):

    MESSAGE_INPUT = (By.ID, "user-message")
    SUBMIT_BUTTON = (By.ID, "showInput")
    DISPLAY_MESSAGE = (By.ID, "message")

    def enter_message(self, text):
        message = self.wait_for_element(self.MESSAGE_INPUT)
        message.clear()
        message.send_keys(text)
    
    def click_submit(self):
        self.wait_for_element(self.SUBMIT_BUTTON).click()


    def get_displayed_message(self):
        WebDriverWait(self.driver, 10).until(EC.text_to_be_present_in_element(self.DISPLAY_MESSAGE, ""))
        return self.wait_for_element(self.DISPLAY_MESSAGE).text