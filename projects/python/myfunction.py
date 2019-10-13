def minutes_to_hours(minutes):
    hours = minutes / 60
    return hours


minutes = input('Enter minutes: ')
print(minutes_to_hours(float(minutes)))