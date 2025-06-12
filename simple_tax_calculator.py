# ====================================
# Income Tax Calculator
# This program calculates income tax based on 2018 Federal tax brackets
# All monetary values are rounded to 2 decimal places
# ====================================

# ----- Input Section -----
# Display welcome message and get user inputs
print("Welcome to Income Tax Calculator!")
print("--------------------------------")
name = input("Please enter your name: ")
print("\nEnter your ANNUAL GROSS PAY")
print("(This is your total yearly salary before any deductions)")
salary = float(input("Annual Gross Pay: $"))

# ----- Tax Calculation Section -----
# Initialize tax variable
tax = 0

# Calculate tax based on 2018 Federal tax brackets
if salary <= 46605:
    tax = salary * 0.15
elif salary <= 93208:
    tax = (46605 * 0.15) + ((salary - 46605) * 0.205)
elif salary <= 144489:
    tax = (46605 * 0.15) + ((93208 - 46605) * 0.205) + ((salary - 93208) * 0.26)
elif salary <= 205842:
    tax = (46605 * 0.15) + ((93208 - 46605) * 0.205) + ((144489 - 93208) * 0.26) + ((salary - 144489) * 0.29)
else:
    tax = (46605 * 0.15) + ((93208 - 46605) * 0.205) + ((144489 - 93208) * 0.26) + ((205842 - 144489) * 0.29) + ((salary - 205842) * 0.33)

# ----- Calculations Section -----
# Round all monetary values to 2 decimal places
tax = round(tax, 2)  # Round annual tax
monthly_salary = round(salary / 12, 2)  # Calculate and round monthly salary
monthly_tax = round(tax / 12, 2)  # Calculate and round monthly tax
monthly_takehome = round(monthly_salary - monthly_tax, 2)  # Calculate and round monthly take-home pay

# ----- Output Section -----
# Display all results rounded to 2 decimal places
print("\n====== Tax Calculation Results ======")
print(f"Hello {name}, here is your tax calculation summary:")
print(f"Your annual gross pay is: ${salary:,.2f}")
print(f"Your total income tax for the year is: ${tax:,.2f}")
print(f"Your monthly gross pay is: ${monthly_salary:,.2f}")
print(f"Your monthly tax payment is: ${monthly_tax:,.2f}")
print(f"Your take home pay for each month is: ${monthly_takehome:,.2f}")
print("======================================") 