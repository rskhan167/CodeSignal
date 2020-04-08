from math import floor
def centuryFromYear(year):
    x=year/100;
    y=floor(x);
    if (year%100==0):
        return x;
    else:
        return y+1;
