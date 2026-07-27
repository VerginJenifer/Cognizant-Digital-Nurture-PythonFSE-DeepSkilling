from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("https://www.lambdatest.com/selenium-playground/")

driver.execute_script('window.open("https://www.google.com/");')

print("Window Handles: ",driver.window_handles)
driver.switch_to.window(driver.window_handles[1])
print("Page Title:", driver.title)
driver.back()
driver.quit()