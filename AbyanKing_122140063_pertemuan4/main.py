# Cara 1: Import seluruh modul
import math_operations as mo

# Cara 2: Import spesifik fungsi
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

# Geometri
print("=== Perhitungan Geometri ===")
print(f"Luas Persegi (sisi 5): {mo.luas_persegi(5)}")
print(f"Keliling Persegi (sisi 5): {mo.keliling_persegi(5)}")

print(f"Luas Persegi Panjang (5x10): {mo.luas_persegi_panjang(5, 10)}")
print(f"Keliling Persegi Panjang (5x10): {mo.keliling_persegi_panjang(5, 10)}")

print(f"Luas Lingkaran (radius 7): {mo.luas_lingkaran(7):.2f}")
print(f"Keliling Lingkaran (radius 7): {mo.keliling_lingkaran(7):.2f}")

# Konversi Suhu
print("\n=== Konversi Suhu ===")
print(f"30°C ke Fahrenheit: {celsius_ke_fahrenheit(30):.2f} °F")
print(f"30°C ke Kelvin: {celsius_ke_kelvin(30):.2f} K")
