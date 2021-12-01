from forex_python.converter import CurrencyRates, CurrencyCodes

rate = CurrencyRates()
symb = CurrencyCodes()

def check_entries(origin, dest):
    origin = origin.upper()
    dest = dest.upper()
    try:
        rate.get_rates(origin)
        try:
            rate.get_rates(dest)
            return True
        except:
            return f'NOT A VALID CODE: {dest}'
    except:
        return f'NOT A VALID CODE: {origin}'


def right_data_handler(origin, dest, amount):
    result = rate.convert(origin, dest, amount)
    symbol = symb.get_symbol(dest)
    messg = f'The result is: {symbol}{round(result, 2)}'
    return messg


# print(c.get_rates('USD'))
