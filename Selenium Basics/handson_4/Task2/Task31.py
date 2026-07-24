from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

print("Window size: ",driver.get_window_size())

driver.set_window_size(1280,800)

print("Window size: ",driver.get_window_size())
"""
Consistent window size ensures the webpage layout remains the same
during automation. Different window sizes can trigger responsive
layouts, causing elements to move or change position, which may
affect test results.
"""

driver.get("https://www.lambdatest.com/selenium-playground/")
driver.back()
driver.quit()