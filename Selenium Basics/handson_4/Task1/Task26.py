from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
"""
Implicit wait applies to every element search in the script.
It is generally considered a bad practice because it waits globally,
which can slow down tests and make debugging harder.
Explicit waits are preferred because they wait only for specific
elements or conditions when needed.
"""
driver.implicitly_wait(10)
driver.get("https://www.lambdatest.com/selenium-playground/")
print("Page Title:", driver.title)
driver.quit()