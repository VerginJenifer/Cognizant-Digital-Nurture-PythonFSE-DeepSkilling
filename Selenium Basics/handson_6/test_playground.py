import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC


# --------------------------------------------------
# Task 45
# --------------------------------------------------

@pytest.mark.parametrize(
    "message",
    ["Hello", "Selenium Automation", "12345"]
)
def test_simple_form_submission(driver, base_url, message):

    driver.get(base_url)

    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.LINK_TEXT, "Simple Form Demo"))).click()

    input_box = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "user-message")))

    input_box.clear()
    input_box.send_keys(message)

    driver.find_element(By.ID, "showInput").click()

    output = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, "message")))

    assert output.text == "Wrong Message"


# --------------------------------------------------
# Task 43
# --------------------------------------------------

def test_checkbox_demo(driver, base_url):

    driver.get(base_url)

    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.LINK_TEXT, "Checkbox Demo"))).click()

    checkbox = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input[type='checkbox']")))

    checkbox.click()

    assert checkbox.is_selected()

    checkbox.click()

    assert not checkbox.is_selected()


# --------------------------------------------------
# Task 49
# --------------------------------------------------

def test_dropdown_selection(driver, base_url):

    driver.get(base_url)

    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.LINK_TEXT, "Select Dropdown List"))).click()

    dropdown = Select(WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "select-demo"))))

    dropdown.select_by_visible_text("Wednesday")

    assert dropdown.first_selected_option.text == "Wednesday"