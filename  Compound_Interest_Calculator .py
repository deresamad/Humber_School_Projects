# Compound Interest Calculator 

def convert_time_to_years(years, months, days):
    return years + (months / 12) + (days / 365)

def calculate_compound_interest(principal, rate, time_years, n):
    amount = principal * (1 + (rate / (100 * n))) ** (n * time_years)
    compound_interest = amount - principal
    return compound_interest, amount

# Greeting
name = input("Hi! What’s your name? ")

# User Input
principal = float(input("Enter the principal amount (e.g., 10000): "))
rate = float(input("Enter the annual rate of interest (in %, e.g., 10): "))
years = int(input("Enter the number of years: "))
months = int(input("Enter the number of months: "))
days = int(input("Enter the number of days: "))

print("\nChoose the compounding frequency:")
print("1 for Annually")
print("2 for Semi-Annually")
print("4 for Quarterly")
print("12 for Monthly")
print("365 for Daily")

n = int(input("Enter the compounding frequency number (e.g., 1, 4, 12): "))

# Convert time
time_in_years = convert_time_to_years(years, months, days)

# Calculate compound interest
compound_interest, total_amount = calculate_compound_interest(principal, rate, time_in_years, n)

# Display result
print(f"\nHi {name}, your compound interest details are as follows:\n")
print("--- Compound Interest Summary ---")
print(f"Principal Amount: ${principal:,.2f}")
print(f"Annual Interest Rate: {rate}%")
print(f"Time Duration: {years} years, {months} months, {days} days (≈ {time_in_years:.4f} years)")
print(f"Compounded: {n} times per year")
print(f"Total Amount after interest: ${total_amount:,.2f}")
print(f"Compound Interest Earned: ${compound_interest:,.2f}")
