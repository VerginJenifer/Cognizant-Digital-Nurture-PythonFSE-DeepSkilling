from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Locator Strategy Ranking (Most Preferred → Least Preferred)

# 1. By.ID
# Best choice because IDs are usually unique, fast, and easy to read.

# 2. By.CSS_SELECTOR
# Fast and flexible. Can locate elements using ID, class, attributes, and relationships.

# 3. By.NAME
# Good if the name attribute is unique, but multiple elements can share the same name.

# 4. By.CLASS_NAME
# Useful when the class is unique, but many elements often have the same class.

# 5. By.XPATH (Relative)
# Flexible and powerful for complex locating, but slower and less readable than CSS.

# 6. By.TAG_NAME
# Very generic. Often returns multiple elements, so it is rarely used alone.

# 7. By.XPATH (Absolute)
# Least preferred because it depends on the entire HTML structure.
# Even a small page layout change can break it.

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.maximize_window()

driver.get("https://www.lambdatest.com/selenium-playground")

driver.find_element(By.LINK_TEXT, "Simple Form Demo").click()

# ID
message = driver.find_element(By.ID, "user-message")
print("ID Locator works")

# NAME
message = driver.find_element(By.NAME, "message")
print("NAME Locator works")

# CLASS_NAME
message = driver.find_element(By.CLASS_NAME, "form-control")
print("CLASS_NAME Locator works")

# TAG_NAME
message = driver.find_element(By.TAG_NAME, "input")
print("TAG_NAME Locator works")

# Absolute XPath
message = driver.find_element(By.XPATH,"/html/body/div[1]/div/main/div/section[2]/div/div/div/div[1]/div[2]/div/div[1]/input")
print("Absolute XPath Locator works")

# Relative XPath
message = driver.find_element(By.XPATH,"//*[@id='user-message']")
print("Relative XPath Locator works")

message = driver.find_element(By.CSS_SELECTOR, "#user-message")
print("CSS Selector by ID works")

message = driver.find_element(By.CSS_SELECTOR, "input[placeholder='Please enter your Message']")
print("CSS Selector by Attribute works")

message = driver.find_element(By.CSS_SELECTOR, "div > input")
print("CSS Selector by Parent-Child works")

driver.back()

driver.find_element(By.LINK_TEXT, "Checkbox Demo").click()

label = driver.find_element(By.XPATH, "//label[text()='Option 1']")
print(label.text)

labels = driver.find_elements(By.XPATH, "//label[contains(text(),'Option')]")

for label in labels:
    print(label.text)

