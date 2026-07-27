from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get("https://www.lambdatest.com/selenium-playground/")

driver.find_element(By.LINK_TEXT, "Simple from demo").click()

assert "simple-from-demo" in driver.current_url
print("URL Verified: ",driver.current_url)
print("Page Title:", driver.title)
driver.back()
driver.quit()