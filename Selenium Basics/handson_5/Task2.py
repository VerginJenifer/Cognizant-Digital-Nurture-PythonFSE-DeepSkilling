from selenium import webdriver
from selenium.webdriver.common.by import By

from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time

driver = webdriver.Chrome()
driver.maximize_window()

driver.get("https://www.lambdatest.com/selenium-playground")

wait = WebDriverWait(driver, 10)


# --------------------------------------------------
# Task 36
# --------------------------------------------------

wait.until(EC.element_to_be_clickable((By.LINK_TEXT, "Bootstrap Alerts"))).click()

wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Success Message')]"))).click()

success_alert = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success")))

print(success_alert.text)

print("Success alert assertion passed")

# --------------------------------------------------
# Task 37 - Using time.sleep()
# --------------------------------------------------

driver.refresh()

start = time.time()

wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Success Message')]"))).click()

time.sleep(3)

driver.find_element(By.CSS_SELECTOR, ".alert-success")

end = time.time()

print("time.sleep() :", round(end - start, 2), "seconds")

# --------------------------------------------------
# Task 37 - Using Explicit Wait
# --------------------------------------------------

driver.refresh()

start = time.time()

wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Success Message')]"))).click()

wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success")))

end = time.time()

print("Explicit Wait :", round(end - start, 2), "seconds")

# --------------------------------------------------
# Task 38
# --------------------------------------------------

driver.refresh()

# element_to_be_clickable waits until the element is
# visible, enabled, and ready to be clicked.

success_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Success Message')]")))

success_button.click()

# visibility_of_element_located waits until the alert
# is present in the DOM and visible on the page.
success_alert = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success")))

print(success_alert.text)

# --------------------------------------------------
# Task 39
# --------------------------------------------------


driver.get("https://www.lambdatest.com/selenium-playground/table-sort-search-demo")

fluent_wait = WebDriverWait(driver,timeout=10,poll_frequency=0.5,ignored_exceptions=[NoSuchElementException])

# Wait for a table row to be visible
table_row = fluent_wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "#example tbody tr")))

print("First Row:", table_row.text)

driver.quit()